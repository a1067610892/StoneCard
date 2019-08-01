<template>
  <div class="Home">
    <header class="Home-header">炉石传说卡牌</header>
    <Row class="Home-row" type="flex" justify="center">
      <i-col order="1" span="8" v-for="(item, index) in arrAy" :key="index">
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
      list: [],
      arrAy: []
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
        this.arrSort(this.list)
      })
    },
    arrSort (arr) {
      let array = []
      let array1 = []
      let array2 = []
      let array3 = []
      let array4 = []
      let array5 = []
      let array6 = []
      let array7 = []
      let array8 = []
      let array9 = []
      let array10 = []
      let array11 = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].cost === 0) {
          array.push(arr[i])
        } else if (arr[i].cost === 1) {
          array1.push(arr[i])
        } else if (arr[i].cost === 2) {
          array2.push(arr[i])
        } else if (arr[i].cost === 3) {
          array3.push(arr[i])
        } else if (arr[i].cost === 4) {
          array4.push(arr[i])
        } else if (arr[i].cost === 5) {
          array5.push(arr[i])
        } else if (arr[i].cost === 6) {
          array6.push(arr[i])
        } else if (arr[i].cost === 7) {
          array7.push(arr[i])
        } else if (arr[i].cost === 8) {
          array8.push(arr[i])
        } else if (arr[i].cost === 9) {
          array9.push(arr[i])
        } else if (arr[i].cost === 10) {
          array10.push(arr[i])
        } else {
          array11.push(arr[i])
        }
      }
      this.arrAy.push(...array, ...array1, ...array2, ...array3, ...array4, ...array5, ...array6, ...array7, ...array8, ...array9, ...array10, ...array11)
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
