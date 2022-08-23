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
  

  export function getSightingCountry(payload) {
    return {
      type: 'GET_SIGHTING_COUNTRY',
      payload: payload,
    }
  }

  export function getSightingPlace(payload) {
    return {
      type: 'GET_SIGHTING_PLACE',
      payload: payload,
    }
  }

  export function getSightingDate(payload) {
    return {
      type: 'GET_SIGHTING_DATE',
      payload: payload,
    }
  }

  export function getSightingTime(payload) {
    console.log('TIIME',payload)
    return {
      type: 'GET_SIGHTING_TIME',
      payload: payload,
    }
  }

  export function getSightingName(payload) {
    return {
      type: 'GET_SIGHTING_NAME',
      payload: payload,
    }
  }

  export function getSightingScientificName(payload) {
    return {
      type: 'GET_SIGHTING_SCIENTIFICNAME',
      payload: payload,
    }
  }

  export function getSightingType(payload) {
    return {
      type: 'GET_SIGHTING_TYPE',
      payload: payload,
    }
  }

  export function getSightingObservador(payload) {
    return {
      type: 'GET_SIGHTING_OBSERVADOR',
      payload: payload,
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