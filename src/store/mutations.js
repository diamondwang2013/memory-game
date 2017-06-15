export default {
  //重置游戏
  reset(state,newState){
    state.leftMatched = newState.leftMatched;
    state.highestSpeed = newState.highestSpeed;
    state.elapsed = newState.elapsed;
    state.cards = newState.cards;
    state.status = newState.status;
  },
  //更新状态
  updateStatus(state,newStatus){
    state.status = newStatus;
  },
  //未配对数的变化
  decreaseMatch(state){
    state.leftMatched--;
  },
  //计时
  counting(state){
    state.elapsed++;
  },
  //卡片翻转
  flip(state,card){
    let c = state.cards.find(cc => cc == card);
    c.flipped = !c.flipped;
  },
  //批量卡片翻转
  flips(state,cards){
    state.cards
      .filter(cc => cards.indexOf(cc) >= 0)
      .forEach(cc => cc.flipped = !cc.flipped);
  },
  //更新最快记录
  updateHighestSpeed(state){
    if (!localStorage.getItem('highestSpeed')){
      localStorage.setItem('highestSpeed',state.elapsed);
      state.highestSpeed = state.elapsed;
      return;
    }
    if (localStorage.getItem('highestSpeed') > state.elapsed) {
      localStorage.setItem('highestSpeed',state.elapsed);
      state.highestSpeed = state.elapsed;
      return;
    }
  }
}
