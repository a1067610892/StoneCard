<template>
  <div class="Home-list">
    <div class="Home-item" v-for="(item, index) in list" :key="item.cardId" @click="Jump(item, index)">
      <img :onerror="Solve404" class="item-img" :src="item.img">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    mun: Number
  },
  name: 'Home',
  data () {
    return {
      /* 图片加载404，使用默认图片 */
      Solve404: 'this.src="' + require('../../assets/img/404.png') + '"'
    }
  },
  methods: {
    Jump (item, index) {
      this.$router.push({
        name: 'Details',
        path: '/Details',
        query: {
          itemList: JSON.stringify(item),
          itemIndex: index
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
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2.4rem auto 0 auto;
  background: #f5f5f5;;
}
.Home-item {
  flex: 1;
}
.item-img {
  width: 3rem;
  height: 6.2rem;
}
</style>
