
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  totalTime: 13,
  list: [1,5,9,3,11]
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

