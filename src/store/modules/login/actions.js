import { LOGIN_TOKEN, LOGIN_CODE, BINDING_CODE } from './mutations-type'
import http from '@/model/client-entry'
import axios from '@/utils/axios'
import { login, common } from '@/utils/api'

export default {
  async passLogin({ commit }, { username = '', password = ''}) {
    try {
      const res = await http(axios.post(login.login, {username, password}))

      if(res) {
        commit(LOGIN_TOKEN, res)
        return Promise.resolve(res)
      }
    } catch (err) {
      console.log(err)
      return Promise.reject(err)
    }
  },
  async phoneLogin({ commit }, { phone = '', code = '' }) {
    try{
      const res = await http(axios.post(login.phoneLogin, {phone, code}))
      if(res) {
        commit
        return Promise.resolve(res)
      }
    }catch (err) {
      return Promise.reject(err)
    }
  },
  async logOut({ commit }) {
    try {
      commit
      const res = await http(axios.post(login.logout))

      if(res) {
        return Promise.resolve(res)
      }
    }catch(err) {
      return Promise.reject(err)
    }
  },
  async getLoginCode({ commit }) {
    try {
      const res = await http(axios(`${common.loginCode}`))

      if(res) {
        commit(LOGIN_CODE, res.data)
        return Promise.resolve(res)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async checkLogin({ commit }, { scene_id = '' }) {
    try {
      let res = axios(`${common.codeLogin}?sceneStr=${scene_id}`)
      if(res) {
        commit
        return Promise.resolve(res)
      }
    }catch (err) {
      return Promise.reject(err)
    }
  },
  async checkBinding({ commit }, { scene_id = '' }) {
    try {
      let res = axios(`${common.codeBinding}?sceneStr=${scene_id}`)
      if(res) {
        commit
        return Promise.resolve(res)
      }
    }catch (err) {
      return Promise.reject(err)
    }
  },
  async getBindingCode({ commit }) {
    try{
      const res = await http(axios(`${common.bindingCode}`))

      if(res) {
        commit(BINDING_CODE, res.data)
        return Promise.resolve(res)
      }
    }catch(err) {
      return Promise.reject(err)
    }
  }
}