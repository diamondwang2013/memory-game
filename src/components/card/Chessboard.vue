<template>
  <div class="chessboard">
    <card v-for="card in cards" :card="card" @flipped="onFlipped"></card>
  </div>
</template>

<script>
  import Card from './Card'
  import {mapState,mapMutations,mapActions} from 'vuex'
  export default {
    data(){
        return {
          lastCard : null
        }
    },
    computed:{
      ...mapState([
          'cards',
          'status',
          'leftMatched'
      ]),
    },
    methods : {
      ...mapMutations([
        'flips',
      ]),
      ...mapActions([
        'start',
        'pass',
        'match'
      ]),
      onFlipped(card){
        if (this.status == 'READY') { //游戏计时开始
          this.start();
        }
        if (!this.lastCard){//如果lastCard为空，则将当前的保存起来
          return this.lastCard = card;
        }
        //如果card配对了
        if (this.lastCard != card && this.lastCard.cardName === card.cardName) {
          this.lastCard = null;
          this.match(); //配对成功
          return this.leftMatched || this.pass();
        }
        //没有配对成功,则需要马上翻转回来
        let lastCard = this.lastCard;
        this.lastCard = null;
        setTimeout(() => {
            this.flips([lastCard,card]);
        },1000);
      }
    },
    components : {
        Card,
    },
  }
</script>
<style lang="less" scoped>
  .chessboard {
    margin-top:20px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    flex-grow:1;
  }
</style>
