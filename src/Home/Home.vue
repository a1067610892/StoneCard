<template>
  <div class="Home">
    <header class="Home-header">炉石传说卡牌</header>
    <Row class="Home-row" type="flex" justify="center">
      <i-col order="1" span="8" v-for="(item, index) in list" :key="index">
        <img class="item-img" :src="item.img">
        <p>{{item.name}}</p>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?locale=zhCN&collectible=1', {
        headers: {
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '0685dd1ce0mshd4f59a680e297f8p17ded4jsn38715681a32f'
        }
      }).then((res) => {
        for (let i in res.data) {
          if (res.data[i] === res.data['Basic']) {
            res.data[i].forEach((item, index) => {
              if (res.data[i][index].health !== 30) {
                this.list.push(res.data[i][index])
              }
            })
          } else if (res.data[i].length !== 0) {
            this.list.push(...res.data[i])
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.Home {
  width: 10rem;
  margin: 0 auto;
}
.Home .Home-header {
  width: 100%;
  height: 1.066667rem;
  line-height: 1.066667rem;
  text-align: center;
  background: #00BCD4;
  color: #FFF;
  font-size: .32rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.Home .Home-row {
  text-align: center;
  margin-top: 1.066667rem;
}
.item-img {
  width: 3rem;
  height: 6.2rem;
}
</style>
