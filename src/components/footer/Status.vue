<template>
  <div class="footer">
    <!--<button @click="start">start</button>-->
    <!--<button @click="pass">pass</button>-->
    <span v-if="status=='READY'">Ready</span>
    <span v-if="status=='PLAYING'">Playing</span>
    <a href="" v-if="status=='PASS'" @click.prevent="reset">Play again</a>
    <em>{{elapsed}}s</em>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    computed : {
      ...mapState([
          'elapsed',
          'status'
      ]),
    },
    methods : {
      ...mapActions([
          'reset',
          'start',
          'pass'
      ])
    }
  }
</script>
<style lang="less" scoped>
  .footer{
    position: relative;
    margin-top:10px;
    height:30px;
    line-height:30px;
    text-align:center;
    span {

    }
    em {
      position: absolute;
      right:10px;
    }
  }
</style>
