const axios = require('axios')

const get = (url, params) => {
  return axios.get(url, {
    params
  })
  .then(data => data)
}

module.exports = {
  get
}