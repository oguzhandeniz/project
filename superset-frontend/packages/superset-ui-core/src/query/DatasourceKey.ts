/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { DatasourceType } from './types/Datasource';

export default class DatasourceKey {
  readonly id: number;

  readonly type: DatasourceType;

  constructor(key: string) {
    // Optional chaining kullanımı
    if (!key?.includes('__')) {
      throw new Error(`Invalid datasource key format: ${key}`);
    }
    const [idStr, typeStr] = key.split('__');
    this.id = parseInt(idStr, 10) || 0;
    this.type = DatasourceType.Table;
    // Sadece "query" yazıyorsa type'ı Query yapalım
    this.type = typeStr === 'query' ? DatasourceType.Query : this.type;
  }

  public toString() {
    return `${this.id}__${this.type}`;
  }

  public toObject() {
    return {
      id: this.id,
      type: this.type,
    };
  }
}
