<template>
  <div class="header">
    <img @click="Return" src="../../assets/img/Arrow.png">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data () {
    return { }
  },
  methods: {
    // 点击返回首页
    Return () {
      this.$router.push({
        name: 'Home',
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
.header {
  width: 10rem;
  margin: 0 auto;
  height: .933333rem;
  background: #FFF;
}
.header img {
  width: .533333rem;
  height: .533333rem;
  margin: .2rem;
  float: left;
}
.header span {
  width: 8rem;
  height: 100%;
  display: block;
  float: left;
  text-align: center;
  line-height: .933333rem;
  font-size: .346667rem;
}
</style>
