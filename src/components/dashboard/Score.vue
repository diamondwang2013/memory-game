<template>
  <div class="info">
    <span>Highest</span>
    <strong>{{highestSpeed}}</strong>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState([
          'highestSpeed'
      ]),
    }
  }
</script>

<style lang="less" scoped>
  @import "common";
</style>
