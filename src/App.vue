<template>
  <div id="app">
    <dashboard></dashboard>
    <chessboard></chessboard>
    <status></status>
  </div>
</template>

<script>
import './assets/style/reset.css'
import Dashboard from './components/dashboard/Dashboard'
import Chessboard from './components/card/Chessboard'
import Status from './components/footer/Status'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  methods : {
    ...mapActions([
        'reset'
    ]),
  },
  created(){
      this.reset();
  },
  components: {
    Dashboard,
    Chessboard,
    Status
  }
}
</script>

<style lang="less" scoped>
  #app {
    width: 450px;
    background-color: #faf8ef;
    margin:0 auto;
    padding: 10px;
    border:4px solid #bdbdbd;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 450px){
    #app {
      width:100%;
      height:100%;
    }
  }
</style>
