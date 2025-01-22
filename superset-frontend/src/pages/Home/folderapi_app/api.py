# main.py (FastAPI sürümü)
import os
import json
import requests
from typing import Optional, Any

from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from sqlalchemy import create_engine, text

from dotenv import load_dotenv  # .env dosyası okumak için

from fastapi.middleware.cors import CORSMiddleware

# .env dosyasını yükle (path'i kendi sunucunuzdaki yer ile uyarlayın)
load_dotenv("/report/superset/docker/pythonpath_dev/.env")

# .env içindeki değişkenleri al
SUPERSET_USERNAME = os.getenv("SUPERSET_USERNAME", "admin")
SUPERSET_PASSWORD = os.getenv("SUPERSET_PASSWORD", "Of25121698*")
SUPERSET_PROVIDER = os.getenv("SUPERSET_PROVIDER", "db")
SUPERSET_REFRESH = os.getenv("SUPERSET_REFRESH", "true")

# Örnek DB Connection URI (Postgres)
SQLALCHEMY_DATABASE_URI = (
    "postgresql+psycopg2://Onur.Simsek:NVJzH6JSp371Nea@10.34.211.50:5432/superset"
)
engine = create_engine(SQLALCHEMY_DATABASE_URI)

# FastAPI örneği
app = FastAPI(
    title="My FastAPI for Superset",
    description="Flask kodlarının FastAPI uyarlaması",
    version="1.0.0"
)



# ------------------ CORS MIDDLEWARE EKLİYORUZ -----------------------
# İstek yapılabilecek origin'leri burada belirtebilir veya allow_origins=["*"] ile tüm sitelere izin verebilirsiniz.
# Güvenlik açısından üretim ortamında spesifik domain(ler) yazmanız tavsiye edilir.
origins = [
    "http://10.34.211.143",       # Örneğin frontend'in çalıştığı domain
    "http://10.34.211.143:3000",  # Veya React dev server portu vs.
    "http://localhost:3000",      # Lokal geliştirirken
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # veya ["*"] (güvenlik açısından dikkatli kullanın)
    allow_credentials=True,
    allow_methods=["*"],              # GET, POST, PUT, DELETE, OPTIONS
    allow_headers=["*"],              # Authorization, Content-Type vs.
)

# ------------------------------------------------------------------------------
# 1) Superset'e Login Olarak Token Elde Etme Fonksiyonu
# ------------------------------------------------------------------------------
def get_superset_token() -> Optional[str]:
    """
    Superset login endpoint'ine giderek access_token döndürür.
    Hata durumunda None döndürür.
    """
    login_url = "http://10.34.211.143/api/v1/security/login"
    payload = {
        "username": SUPERSET_USERNAME,
        "password": SUPERSET_PASSWORD,
        "provider": SUPERSET_PROVIDER,
        # refresh -> 'true' string ise True, aksi halde False
        "refresh": True if SUPERSET_REFRESH.lower() == "true" else False
    }
    headers = {
        "Content-Type": "application/json"
    }
    try:
        response = requests.post(login_url, json=payload, headers=headers)
        if response.status_code == 200:
            data = response.json()
            return data.get("access_token")  # access_token
        else:
            print(f"Token alma hatası: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"Token isteğinde istisna oluştu: {e}")
        return None

# ------------------------------------------------------------------------------
# 2) Test Endpoint
# ------------------------------------------------------------------------------
@app.get("/test")
def test_api():
    """
    Basit test endpoint'i
    """
    return {"message": "Test API is up and running!"}

# ------------------------------------------------------------------------------
# 3) Menu Items Endpoint
# ------------------------------------------------------------------------------
@app.get("/menu_items")
def get_menu_items():
    """
    menu_items, menu_item_roles ve ab_role tablolarını JOIN edip döndüren endpoint
    """
    try:
        with engine.connect() as conn:
            query = text("""
                SELECT
                    mi.id AS menu_item_id,
                    mi.name AS menu_item_name,
                    mi.parent_id,
                    mi.dashboard_id,
                    mir.role_id,
                    ar.name AS role_name
                FROM menu_items mi
                LEFT JOIN menu_item_roles mir ON mi.id = mir.menu_item_id
                LEFT JOIN ab_role ar ON mir.role_id = ar.id
            """)
            rows = conn.execute(query).fetchall()

            result_map = {}
            for row in rows:
                row_dict = dict(row)
                menu_item_id = row_dict['menu_item_id']
                if menu_item_id not in result_map:
                    result_map[menu_item_id] = {
                        'id': menu_item_id,
                        'name': row_dict['menu_item_name'],
                        'parent_id': row_dict['parent_id'],
                        'dashboard_id': row_dict['dashboard_id'],
                        'roles': []
                    }
                if row_dict['role_id'] is not None:
                    result_map[menu_item_id]['roles'].append({
                        'role_id': row_dict['role_id'],
                        'role_name': row_dict['role_name']
                    })

            result_list = list(result_map.values())

        return result_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ------------------------------------------------------------------------------
# 4) Dashboards Endpoint (Superset'ten Dashboard Listesi)
# ------------------------------------------------------------------------------
@app.get("/dashboards")
def get_dashboards(page: int = 0, page_size: int = 1000):
    """
    Superset'teki dashboard endpoint'ine GET isteği atar
    """
    try:
        # 1) Superset Token'i al
        token = get_superset_token()
        if not token:
            raise HTTPException(status_code=500, detail="Superset token alınamadı.")

        # 2) Superset Dashboard endpoint URL'i
        url = (
            f"http://10.34.211.143/api/v1/dashboard/"
            f"?q={{\"page\":{page},\"page_size\":{page_size}}}"
        )

        headers = {
            "Authorization": f"Bearer {token}",
            "Accept": "application/json"
        }

        # 3) Superset API'ye GET isteği
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            raise HTTPException(status_code=response.status_code, detail={
                "error": f"Superset API Hatası: {response.status_code}",
                "detail": response.text
            })

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ------------------------------------------------------------------------------
# 5) Combined Endpoint (Dashboards + MenuItems Birleştirme)
# ------------------------------------------------------------------------------
@app.get("/combined_data")
def get_combined_data():
    """
    Dashboards API ve Menu Items API çıktısını 
    dashboard_id == id eşleştirmesiyle birleştiren endpoint
    """
    try:
        # 1) Superset Token'i al
        token = get_superset_token()
        if not token:
            raise HTTPException(status_code=500, detail="Superset token alınamadı.")

        # 2) Dashboards verisini çek - (Mevcut API'nizi local'den çağırıyoruz)
        dashboards_url = "http://localhost:8000/dashboards?page=0&page_size=1000"
        #  Yukarıdaki port (7001) vs. projenize göre değişebilir.
        headers = {
            "Authorization": f"Bearer {token}",
            "Accept": "application/json"
        }
        dashboards_resp = requests.get(dashboards_url, headers=headers)
        if dashboards_resp.status_code != 200:
            raise HTTPException(
                status_code=dashboards_resp.status_code,
                detail={
                    "error": "Dashboards verisi alınırken hata oluştu",
                    "detail": dashboards_resp.text
                }
            )

        dashboards_data = dashboards_resp.json()
        dashboards_list = dashboards_data.get('result', [])

        # Dashboard verilerini ID bazında sözlüğe koyalım
        dashboards_map = {}
        for dash in dashboards_list:
            dash_id = dash.get('id')
            dashboards_map[dash_id] = dash

        # 3) Menu Items verisini çek (kendi API'mız)
        menu_items_url = "http://localhost:8000/menu_items"
        menu_resp = requests.get(menu_items_url)
        if menu_resp.status_code != 200:
            raise HTTPException(
                status_code=menu_resp.status_code,
                detail={
                    "error": "MenuItems verisi alınırken hata oluştu",
                    "detail": menu_resp.text
                }
            )

        menu_items_list = menu_resp.json()  # Liste döndürüyor

        # 4) dashboard_id == id eşleştirmesi
        combined_result = []
        for item in menu_items_list:
            d_id = item.get('dashboard_id')
            combined_item = dict(item)
            combined_item['dashboard_info'] = dashboards_map.get(d_id)
            combined_result.append(combined_item)

        return combined_result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ------------------------------------------------------------------------------
# 6) Uygulama Çalıştırma (Geliştirme İçin)
# ------------------------------------------------------------------------------
# Eğer bu dosyayı doğrudan `python main.py` şeklinde çalıştıracaksanız:
#   uvicorn main:app --reload --port 7001  şeklinde de çalıştırabilirsiniz.
# Aşağıdaki if bloğunu FastAPI'de genelde çok kullanmayız,
# fakat yine de isterseniz ekleyebilirsiniz:
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
