import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    interval: null,
    currentAction: null,
    currentProgress: 0,

  },
  mutations: {

    clickAction(state, action) {
      if (state.currentAction == action) {
        state.currentProgress = 0
        state.currentAction = null
        clearInterval(state.interval)
        console.log('stop')
      }
      else {
        if (state.currentAction != action) {
          state.currentProgress = 0
          clearInterval(state.interval)
          state.currentAction = action
        }
        state.interval = setInterval(function () {
          if (state.currentProgress < action.interval) {
            console.log(state.currentProgress)
            state.currentProgress++
          }
          else if (state.currentProgress >= action.interval) {
            console.log("hi")
            state.currentProgress = 0
            action.xp++
          }
          if (action.xp >= action.toNextLevel) {
            console.log("hello")
            action.xp = action.xp - action.toNextLevel
            action.toNextLevel *= 2
            action.mastery++
          }
        }, 50)
      }
    }
  }
})

new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')


// progressbar movement could look better
// bar should keep going even when on different screen (store all action and skill data in vuex store)
// remove grey selection on cards with css
// look at python version
// add another screen with actions
// add inventory to vuex.store 