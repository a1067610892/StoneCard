<template>
  <div class="Details">
      {{item}}
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      item: {}
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      this.item = JSON.parse(this.$route.query.itemList)
    }
  }
}
</script>

<style scoped>
.Details {
  width: 10rem;
  margin: 0 auto;
}
</style>
