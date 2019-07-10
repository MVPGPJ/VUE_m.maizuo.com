import axios from 'axios'


let aa = {
  "a": "3000",
  "ch": "1002",
  "v": "5.0.4",
  "e": "156181020310488310141481"
}
const http = {
  get({params={},host}) {
    return axios({
      url : 'https://m.maizuo.com/gateway',
      method: 'GET',
      params,
      headers: {
        "X-Client-Info": JSON.stringify(aa),
        "X-Host": host,
      }
    })
    .then((result) => {
      return result.data
    })
  }
}

export default http