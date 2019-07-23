<template>
  <div class="Home">
    <header></header>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return { }
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
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
</style>
