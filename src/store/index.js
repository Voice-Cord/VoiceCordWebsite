import { createStore } from 'vuex';

export default createStore({
    state: {
        auth: null,
    },
    getters: {
        getAuth: (state) => state.auth,
    },
    mutations: {
        setAuth: (state, auth) => {
            state.auth = auth;
        }
    },
    actions: {
        setAuth: ({ commit }, auth) => {
            commit('setAuth', auth);
        }
    },
});
