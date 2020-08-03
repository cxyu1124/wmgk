import { LOGIN_TOKEN, LOGIN_CODE, BINDING_CODE } from './mutations-type'

export default {
  [LOGIN_TOKEN](state, payload) {
    state.token = payload
  },
  [LOGIN_CODE](state, payload) {
    state.qrcodeUrl = payload
  },
  [BINDING_CODE](state, payload) {
    state.bindingCode = payload
  }
}