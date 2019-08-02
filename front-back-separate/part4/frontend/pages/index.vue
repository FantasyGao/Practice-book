<template>
  <div>
    <h1>Hello {{title}}!</h1>
    <ul>
      <li :key="item.id" v-for="item in list">{{item.name}}</li>
    </ul>
    <h1>those data from biz system!</h1>
    <ul>
      <li :key="item.id" v-for="item in bizData">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  data () {
    return { title: '全栈者', bizData: [] }
  },
  async asyncData (context) {
    const result = await axios.get('http://localhost:3000/api');
    return { list: result.data }
  },
  async mounted () {
    const result = await axios.get('http://localhost:3000/api/biz/data');
    this.bizData = result.data;
  }
}
</script>
