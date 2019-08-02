module.exports = {
  findData() {
    // 模拟从DB或者其他服务获取数据
    return new Promise(resolve => {
      const data = [{
        id: 1,
        name: '我是由后端server提供的一条数据'
      }, {
        id: 2,
        name: '我经过中间层转发而来' 
      }];
      resolve(data);
    })
  }
};