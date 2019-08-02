const axios = require('axios');

module.exports = {
  findData() {
    // 模拟查询DB返回
    return new Promise(resolve => {
      const data = [{
        id: 1,
        name: 'FantasyGao'
      }, {
        id: 2,
        name: '公众号：全栈者' 
      }];
      resolve(data);
    })
  },
  async findDataFromBiz() {
    const { data } = await axios.get('http://localhost:8000/biz/api');
    console.log('bizLog:', data);
    return data;
  }
};