import axios from 'axios'

// QUOTES
// export function getQuotes() {
//     return async function (dispatch) {
//       var json = await axios.get('http://localhost:3001/quotes/')
//       return dispatch({
//         type: 'GET_QUOTES',
//         payload: json.data,
//       })
//     }
//   }

  export function getSighting() {
    return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/sighting/')
      return dispatch({
        type: 'GET_SIGHTING',
        payload: json.data,
      })
    }
  }

  export function postSighting(payload) {
    return async function (dispatch) {
      console.log(payload)
      const json = await axios.post(
        'http://localhost:3001/sighting/addSighting',
        payload
      )
      return dispatch({
        type: 'POST_SIGHTING',
        payload: payload,
      })
    }
  }

  export function deleteSighting(id) {
    return async function (dispatch) {
      const json = await axios.delete(
        `http://localhost:3001/sighting/deleteSighting/${id}`
      )
      return dispatch({
        type: 'DELETE_SIGHTING',
      })
    }
  }
  

 



//USER
  export function getUsers() {
    return async function (dispatch) {
      const json = await axios.get('http://localhost:3001/user/')
      return dispatch({
        type: 'GET_USERS',
        payload: json.data,
      })
    }
  }
  
  export function postUser(payload) {
    console.log('soy posttt:',payload)
    return async function (dispatch) {
      const json = await axios.post(
        'http://localhost:3001/user/addUser',
        payload
      )
      console.log('action del post:',payload)
      return dispatch({
        type: 'POST_USER',
        payload: json.data,
      })
    }
  }
  

  //ADMIN
  //QUOTES

  // export function getAdminQuotes() {
  //   return async function (dispatch) {
  //     var json = await axios.get('http://localhost:3001/quotes/')
  //     return dispatch({
  //       type: 'GET_ADMIN_QUOTES',
  //       payload: json.data,
  //     })
  //   }
  // }