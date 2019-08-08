<template>
  <div class="Home-Header">
    <span class="border" :class="{'active': activeIndex === index}" @click="cost(index)" v-for="(item, index) in numArr" :key="index">{{item}}</span>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  props: {
    numArr: Array
  },
  name: 'Header',
  data () {
    return {
      activeIndex: -1
    }
  },
  mounted () { },
  methods: {
    /* 点击选择费用，然后传值 */
    cost (number) {
      this.activeIndex = number
      this.$emit('switchArr', this.activeIndex, true)
    }
  }
}
</script>

<style scoped>
.Home-Header {
  width: 10rem;
  text-align: center;
  height: 1.333333rem;
  position: fixed;
  top: 1.066667rem;
  z-index: 99;
  background: #FFF;
}
.Home-Header span {
  width: .666667rem;
  display: block;
  float: left;
  height: .666667rem;
  line-height: .666667rem;
  font-size: .35rem;
  margin: .333333rem .16rem 0 .16rem;
}
.border::before {
  border-radius: 50%;
  border-color: black;
}
.active {
  background: black;
  color: #FFF;
  border-radius: 50%;
}
.clear {
  clear: both;
}
</style>
