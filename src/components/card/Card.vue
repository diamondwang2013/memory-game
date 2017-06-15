<template>
  <div class="container" @click="flipCard">
    <div class="card" :class="{flipped:card.flipped}">
      <img class="front" src="../../assets/images/8-ball.png" v-if="card.cardName=='8-ball'">
      <img class="front" src="../../assets/images/baked-potato.png" v-if="card.cardName=='baked-potato'">
      <img class="front" src="../../assets/images/dinosaur.png" v-if="card.cardName=='dinosaur'">
      <img class="front" src="../../assets/images/kronos.png" v-if="card.cardName=='kronos'">
      <img class="front" src="../../assets/images/rocket.png" v-if="card.cardName=='rocket'">
      <img class="front" src="../../assets/images/skinny-unicorn.png" v-if="card.cardName=='skinny-unicorn'">
      <img class="front" src="../../assets/images/that-guy.png" v-if="card.cardName=='that-guy'">
      <img class="front" src="../../assets/images/zeppelin.png" v-if="card.cardName=='zeppelin'">
      <!--背面 -->
      <img class="back" src="../../assets/images/back.png" alt="">
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  export default {
    props:{
        card : Object
    },
    methods : {
      ...mapMutations([
          'flip',
          'flips'
      ]),
      flipCard(){
          if (this.card.flipped){ //如果已经翻牌了，则返回
              return;
          }
          //否则翻牌
          this.flip(this.card);
          //向父组件emit事件
          this.$emit('flipped',this.card);
      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    width: 23%;
    height:100px;
    margin:10px 2px 0;
    .card {
      width: 100%;
      height: 100%;
      position: relative;
      transition: transform 1s;
      transform-style: preserve-3d;
      &.flipped{
        transform: rotateY(180deg);
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
      }
      .front {
        transform: rotateY( 180deg );
      }
      .back{
        transform: rotateY( 0deg );
      }
    }
  }
</style>
