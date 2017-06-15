import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  leftMatched : 0, //未配对数
  highestSpeed : 0, //最快记录
  elapsed: 0, //花费的时间
  cards:[], //卡片
  status : '' //游戏状态，有ready、playing和pass三种
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
