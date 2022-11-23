
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        selectedDistrict: "NotSelect",
        selectedLibrary: "NotSelect",
        selectedWorkType: "NotSelect",
        selectedDate: "NotSelect",
        selectedSession: "",
        selectedTime: [],
        selectedWorkstationGroup: "NotSelect",
        userName: null,
        password: null,
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    getters: {
    },
    actions: {
        login(context, payload) {
            context.commit("LOGIN", payload)
        },
        logout(context) {
            context.commit("LOGOUT")
        }

    },
    mutations: {
        selectedDistrict(state, val) { // SELECT district
            state.selectedDistrict = val;
        },
        selectedLibrary(state, val) { // SELECT library
            state.selectedLibrary = val;
        },
        selectedWorkType(state, val) { // SELECT workType
            state.selectedWorkType = val;
        },
        selectedDate(state, val) { // SELECT workType
            state.selectedDate = val;
        },
        selectedSession(state, val) { // SELECT workType
            state.selectedSession = val;
        },
        selectedTime(state, val) { // SELECT workType
            state.selectedTime = val;
        },
        selectedWorkstationGroup(state, val) { // SELECT workType
            state.selectedWorkstationGroup = val;
        },
        LOGIN(state, payload) {
            state.userName = payload.name
            state.password = payload.password
            localStorage.setItem('Authorization', payload.token)
        },
        LOGOUT(state) {
            state.userName = ""
            state.password = ""
            localStorage.removeItem('Authorization')
        }
    },
        modules: {
    }
})
