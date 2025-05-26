import logging
from superset.security import SupersetSecurityManager
from flask_appbuilder.security.views import AuthLDAPView
from flask_appbuilder.security.views import expose
from flask import g, redirect, flash
from flask_appbuilder.security.forms import LoginForm_db
from flask_login import login_user
from flask_appbuilder._compat import as_unicode

# Logging ayarları
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class AuthLocalAndLDAPView(AuthLDAPView):
    @expose("/login/", methods=["GET", "POST"])
    def login(self):
        if g.user is not None and g.user.is_authenticated:
            return redirect(self.appbuilder.get_url_for_index)
        form = LoginForm_db()
        if form.validate_on_submit():
            # İlk olarak LDAP kimlik doğrulaması deneyelim
            user = self.appbuilder.sm.auth_user_ldap(
                form.username.data, form.password.data
            )
            if not user:
                # Eğer LDAP başarısız olursa, yerel veritabanı kimlik doğrulamasını deneyelim
                user = self.appbuilder.sm.auth_user_db(
                    form.username.data, form.password.data
                )
            if user:
                # Kullanıcı giriş yaptıysa, giriş yapanın adını ve yetkilerini logla
                logger.info(f"Giriş yapan kullanıcı: {user.username}, Yetkiler: {user.roles}")
                
                # Kullanıcıyı giriş yaptır
                login_user(user, remember=False)
                return redirect(self.appbuilder.get_url_for_index)
            else:
                flash(as_unicode(self.invalid_login_message), "warning")
                return redirect(self.appbuilder.get_url_for_login)
        return self.render_template(
            self.login_template, title=self.title, form=form, appbuilder=self.appbuilder
        )


class CustomSecurityManager(SupersetSecurityManager):
    authldapview = AuthLocalAndLDAPView
    def __init__(self, appbuilder):
        super(CustomSecurityManager, self).__init__(appbuilder)
