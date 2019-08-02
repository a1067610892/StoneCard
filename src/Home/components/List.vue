<template>
  <div class="Home-list">
    <div class="Home-item" v-for="(item, index) in list" :key="index" @click="Jump(item)">
      <img :onerror="Solve404" class="item-img" :src="item.img">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'Home',
  data () {
    return {
      Solve404: 'this.src="' + require('../../assets/img/404.jpg') + '"'
    }
  },
  methods: {
    Jump (item) {
      this.$router.push({
        name: 'Details',
        path: '/Details',
        query: {
          itemList: JSON.stringify(item)
        }
      })
    }
  }
}
</script>

<style scoped>
.Home-list {
  width: 10rem;
  display: flex;
  margin-top: 1.066667rem;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
}
.Home-item {
  flex: 1;
}
.item-img {
  width: 3rem;
  height: 6.2rem;
}
</style>
