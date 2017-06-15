<template>
  <div class="dashboard">
    <logo></logo>
    <info></info>
    <score></score>
  </div>
</template>

<script>
  import Logo from './Logo'
  import Info from './Info'
  import Score from './Score'

  export default {
    components : {
        Logo,
        Info,
        Score
    }
  }
</script>
<style lang="less" scoped>
  .dashboard {
    display: flex;
    justify-content: space-between;
  }
</style>
