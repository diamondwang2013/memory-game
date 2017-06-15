//引入lodash
import _ from 'lodash'
//卡片名称
const cardsName = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn','that-guy', 'zeppelin'];
//状态值
const STATUS = {
  READY : 'READY',
  PLAYING : 'PLAYING',
  PASS : 'PASS'
}
//定时器
let timer;
export default {
  //重置游戏
  reset({commit}){
    commit('reset',{
      leftMatched : cardsName.length,
      highestSpeed : localStorage.getItem('highestSpeed') || 9999,
      status : STATUS.READY,
      elapsed : 0,
      cards : _.shuffle(cardsName.concat(cardsName)).map(name => ({flipped:false,cardName:name}))
    })
  },
  //开始游戏
  start({commit}){
    commit('updateStatus',STATUS.PLAYING); //修改状态
    timer = setInterval(() => {
      commit('counting')
    },1000);
  },
  //结束游戏
  pass({commit}){
    clearInterval(timer); //清除定时器
    commit('updateStatus',STATUS.PASS); //修改状态
    commit('updateHighestSpeed'); //更新最快记录
  },
  //卡片匹配
  match({commit}){
    //如果匹配到，则需要修改leftMatched
    commit('decreaseMatch');
  },
}
