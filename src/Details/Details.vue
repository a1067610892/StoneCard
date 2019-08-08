<template>
  <div class="Details">
    <details-header :title="item.name"></details-header>
    <img :onerror="Solve404" class="img-center" :src="item.img">
    <details-content :type="'背景'" :item="item.flavor"></details-content>
    <details-content v-if="item.text" :type="'描述'" :item="item.text"></details-content>
    <details-content :type="'稀有度'" :item="item.rarity"></details-content>
    <details-content :type="'类型'" :item="Occupation"></details-content>
    <details-content :type="'打造'" :item="make"></details-content>
    <details-content :type="'分解'" :item="decompose"></details-content>
    <details-content :type="'所属系列'" :item="item.cardSet"></details-content>
    <details-content :type="'画家'" :item="item.artist"></details-content>
    <details-footer></details-footer>
  </div>
</template>

<script>
import DetailsHeader from './compoents/Header'
import DetailsContent from './compoents/Content'
import DetailsFooter from './compoents/Footer'
export default {
  name: 'Details',
  data () {
    return {
      item: {},
      Occupation: '',
      itemarr: [],
      ListIndex: 0,
      make: '',
      decompose: '',
      /* 图片加载404，使用默认图片 */
      Solve404: 'this.src="' + require('../assets/img/404.png') + '"'
    }
  },
  mounted () {
    this.getItem()
    /* 转译类型 */
    this.typeTranslation(this.item.type)
    /* 转译稀有度 */
    this.typeTranslation(this.item.rarity)
    /* 转译卡牌所属卡包 */
    this.typeTranslation(this.item.cardSet)
  },
  components: {
    DetailsHeader,
    DetailsContent,
    DetailsFooter
  },
  methods: {
    getItem () {
      this.item = JSON.parse(this.$route.query.itemList)
      this.ListIndex = Number(this.$route.query.itemIndex)
    },
    /* 判断拿到的值转译为中文 */
    typeTranslation (type) {
      switch (type) {
        case 'Spell':
          this.Occupation = '法术'
          break
        case 'Minion':
          this.Occupation = '随从'
          break
        case 'Free':
          this.item.rarity = '免费'
          this.make = '无法打造'
          this.decompose = '无法分解'
          break
        case 'Common':
          this.item.rarity = '普通'
          this.make = '40 / 400'
          this.decompose = '5 / 50'
          break
        case 'Rare':
          this.item.rarity = '稀有'
          this.make = '100 / 800'
          this.decompose = '20 / 100'
          break
        case 'Epic':
          this.item.rarity = '史诗'
          this.make = '400 / 1600'
          this.decompose = '100 / 400'
          break
        case 'Legendary':
          this.item.rarity = '传说'
          this.make = '1600 / 3200'
          this.decompose = '400 / 1600'
          break
        case 'Basic':
          this.item.cardSet = '基础'
          break
        case 'Classic':
          this.item.cardSet = '经典'
          break
        case 'Naxxramas':
          this.item.cardSet = '纳克萨玛斯'
          break
        case 'Blackrock Mountain':
          this.item.cardSet = '黑石山的火焰'
          break
        case 'Goblins vs Gnomes':
          this.item.cardSet = '地精大战侏儒'
          break
        case 'The League of Explorers':
          this.item.cardSet = '探险者协会'
          break
        case 'The Grand Tournament':
          this.item.cardSet = '冠军的试炼'
          break
        case 'One Night in Karazhan':
          this.item.cardSet = '卡拉赞'
          break
        case 'Whispers of the Old Gods':
          this.item.cardSet = '上古之神的低语'
          break
        case 'Rise of Shadows':
          this.item.cardSet = '暗影崛起'
          break
      }
    }
  }
}
</script>

<style scoped>
.Details {
  width: 10rem;
  margin: 0 auto;
  background: #eee;
  text-align: center;
}
.img-center {
  width: 5rem;
  height: 7.5rem;
}
</style>
