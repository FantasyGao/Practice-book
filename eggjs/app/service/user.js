'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async searchAll() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const users = await this.app.mysql.select('Tab_User_Info');
    return { users };
  }

  async find(id) {
    const user = await this.app.mysql.get('Tab_User_Info', { id });
    return { user };
  }
}

module.exports = UserService;