import axios from 'axios'

const doLogin = ({ username, password }) => {
  return axios.post('/api/v1/auth/login', { username, password })
}

const getResult = (version, gd) => {
  return axios.get(`/api/v1/skill/target/${version}/${gd}`)
}

export { doLogin, getResult }
