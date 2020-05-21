// console.log('Hello webpack!')
import Vue  from  'vue'
import App from './App'

new Vue({
    el: '#app',
   /*
   render (createElement) {
        return createElement(App)
    },
    */

    /*
    render: (h) => {
        return h(App)
    }
    */
    render: h => h(App)
})