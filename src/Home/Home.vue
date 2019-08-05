<template>
  <div class="Home">
    <header class="Home-header">炉石传说卡牌</header>
    <home-header @switchArr="Arrcost" :numArr='num'></home-header>
    <home-list :list="arrAy"></home-list>
    <home-loding :LodingShow="Loding"></home-loding>
  </div>
</template>

<script>
import HomeList from './components/List'
import HomeHeader from './components/Header'
import HomeLoding from '../common/components/Loding'
export default {
  name: 'Home',
  data () {
    return {
      list: [],
      arrAy: [],
      num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Loding: true
    }
  },
  components: {
    HomeList,
    HomeHeader,
    HomeLoding
  },
  mounted () {
    this.getData()
  },
  methods: {
    /* 请求数据，把获取到的数据渲染到页面上 */
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
    /* 数组排序 */
    arrSort (arr) {
      let [array, array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11] = [[], [], [], [], [], [], [], [], [], [], [], []]
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
    },
    Arrcost (number, show) {
      this.Loding = true
      this.arrAy = []
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].cost === number) {
          this.arrAy.push(this.list[i])
        }
      }
    }
  },
  watch: {
    arrAy: {
      handler (newVal, oldVal) {
        if (newVal.length !== 0) {
          this.Loding = false
        }
      }
    }
  }
}
</script>

<style scoped>
.Home {
  width: 10rem;
  margin: 0 auto;
}
.Home-header {
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
</style>
