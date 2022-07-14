import request from './request'

const login = (data) => {
  return request({
    url: '/login?username=' + data.username + '&password=' + data.password + '&code=' + data.code + '&token=' + data.token,
    method: 'POST',
    data
  })
}

const getCaptcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

const getMenulist = () => {
  return request({
    url: '/menu/nav',
    method: 'GET'
  })
}

const getUserlist = (data) => {
  return request({
    url: '/user/list',
    method: 'GET',
    data
  })
}

const getRolelist = (data) => {
  return request({
    url: '/role/list',
    method: 'GET',
    data
  })
}

const getgoodsmenulist = (data) => {
  return request({
    url: '/menu/list',
    method: 'GET',
    data
  })
}

export default {
  login,
  getCaptcha,
  getMenulist,
  getUserlist,
  getRolelist,
  getgoodsmenulist
}