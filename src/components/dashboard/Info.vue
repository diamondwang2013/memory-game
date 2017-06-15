<template>
  <div class="info">
    <span>Left</span>
    <strong>{{leftMatched}}</strong>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      computed : {
        ...mapState([
            'leftMatched'
          ]),
      }
  }
</script>

<style lang="less" scoped>
  @import "common";
</style>
