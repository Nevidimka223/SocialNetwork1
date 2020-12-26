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
}
  
module.exports = ConfigService.getInstance();
