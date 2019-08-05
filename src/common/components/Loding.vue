<template>
  <div class="Loding" v-show="LodingShow">
    <Row>
      <Col class="demo-spin-col" span="8">
        <Spin fix>
            <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
        </Spin>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Loding',
  props: {
    LodingShow: Boolean
  }
}
</script>

<style>
.Loding {
  width: 10rem;
  height: 6.666667rem;
  margin: 0 auto;
}
.ivu-col-span-8 {
  width: 100% !important;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100%;
    width: 10rem;
    height: 6.666667rem;
    position: relative;
    text-align: center;
    border: 1px solid #eee;
}
.demo-spin-icon-load {
    font-size: .8rem !important;
}
.ivu-spin-text>div {
    font-size: .32rem;
}
</style>
