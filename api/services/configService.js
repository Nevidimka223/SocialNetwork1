require('dotenv').config()

class ConfigService {
  static _instance = null;
  _envData = null;
  
  constructor() {
    this._envData = process.env;
    ConfigService._instance = this;
  }
  
  static getInstance() {
    if (ConfigService._instance === null) {
      ConfigService._instance = new ConfigService()
    }
    return ConfigService._instance
  }
  
  getPort() {
    return this._envData.PORT;
  }

  getPGCredentials() {
    return {
      client: this._envData.DB_CLIENT,
      connection: {
        host: this._envData.DB_HOST,
        user: this._envData.DB_USER,
        password: this._envData.DB_PWD,
        database: this._envData.DB_NAME,
      },
    };
  }
}
  
module.exports = ConfigService.getInstance();
