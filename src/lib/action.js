import axios from 'axios'

const doLogin = ({ username, password }) => {
  return axios.post('/api/v1/auth/login', { username, password })
}

const getResult = (version, gd) => {
  return axios.get(`/api/v1/skill/target/${version}/${gd}`)
}

const getMusic = (version) => {
  return axios.get(`/api/v1/music/${version}`)
}

const getSingleMusic = (version, id) => {
  return axios.get(`/api/v1/music/single/${version}/${id}`)
}

const getRecord = (version, mid, no) => {
  return axios.get(`/api/v1/record/${version}/${mid}/${no}`)
}

export { doLogin, getResult, getMusic, getSingleMusic, getRecord }
