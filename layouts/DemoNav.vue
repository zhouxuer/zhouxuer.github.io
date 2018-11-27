<template>
  <div class="nav">
      <DemoNav/>
    </div>
</template>

<script>
import DemoNav from '~/components/DemoNav.vue'
  export default {
    layout: 'default',
    components: {
    DemoNav
    }
    }
</script>

<style scoped lang='scss'>
.index-nav {
  background-color: #fff;
  margin: 20px;
  .title-text {
    color: #111;
    padding: 20px;
  }
}
</style>