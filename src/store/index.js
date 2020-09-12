import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import getters from './getter'
import mutations from './mutations'
import state from './state'
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
