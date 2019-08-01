<template>
  <div class="Logo">
    <img src="../assets/img/1.png">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      domheight: 0
    }
  },
  created () {
    this.HomePage()
  },
  methods: {
    HomePage () {
      setTimeout(() => {
        this.$router.push({name: 'Home', path: '/Home'})
      }, 3000)
    }
  }
}
</script>

<style scoped>
.Logo {
 width: 10rem;
 margin: 0 auto;
 height: 100%;
}
.Logo img {
  width: 10rem;
}
</style>
