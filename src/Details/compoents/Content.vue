<template>
    <div class="Details-span">
      <span class="left">{{type}}：</span>
      <span class="right">{{item}}</span>
      <div class="clear"></div>
    </div>
</template>

<script>
export default {
  props: {
    type: String,
    item: String
  },
  name: 'Content',
  data () {
    return { }
  }
}
</script>

<style scoped>
.Details-span {
  width: 10rem;
  font-size: .32rem;
}
.Details-span .left {
  width: 2.933333rem;
  display: block;
  float: left;
  line-height: .6rem;
  margin-left: .4rem;
  text-align: right;
}
.Details-span .right {
  width: 6rem;
  display: block;
  float: left;
  line-height: .6rem;
  text-align: left;
}
.clear {
  clear: both;
}
</style>
