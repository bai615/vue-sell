<template>
  <div>
    <Header></Header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    this is a home
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Home',
  components: {Header}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  .tab-item
    flex: 1
    text-align: center
</style>
