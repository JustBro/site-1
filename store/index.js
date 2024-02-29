import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        showHeader: false,
    },

    mutations: {
        setHeaderState(state) {
            state.showHeader
        }
    }
});

export default store;