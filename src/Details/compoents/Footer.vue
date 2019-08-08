<template>
    <footer class="footer">
      <button>上一张</button>
      <button>下一站</button>
    </footer>
</template>

<script>
export default {
  props: {
  },
  name: 'Footer',
  data () {
    return { }
  }
}
</script>

<style scoped>
.footer {
  width: 10rem;
  height: 1.333333rem;
  position: fixed;
  bottom: 0;
  background: #FFF;
}
.footer button {
  width: 2.666667rem;
  height: 1.066667rem;
  margin-top: .133333rem;
  background: #30c1da;
  color: #FFF;
  font-size: .32rem;
}
.footer button:nth-of-type(2) {
  margin-left: 4rem;
}
</style>
