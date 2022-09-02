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
      console.log('acion',payload)
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


  export function putSighting(payload, id) {
    console.log('payload:',payload)
    console.log('id:',id)
    return async function (dispatch) {
      const json = await axios.post(
        `http://localhost:3001/sighting/update/${id}`,
        payload
      )
      return dispatch({
        type: 'PUT_SIGHTING',
      })
    }
  }
  

  
  //POACHINGS


  export function postPoaching(payload) {
    return async function (dispatch) {
      console.log(payload)
      const json = await axios.post(
        'http://localhost:3001/poaching/addPoaching',
        payload
      )
      return dispatch({
        type: 'POST_POACHING',
        payload: payload,
      })
    }
  }

  export function getPoaching() {
    return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/poaching/')
      return dispatch({
        type: 'GET_POACHING',
        payload: json.data,
      })
    }
  }

  export function getPoachingDate(payload) {
    return {
      type: 'GET_POACHING_DATE',
      payload: payload,
    }
  }

  export function getPoachingTime(payload) {
    console.log('TIIME',payload)
    return {
      type: 'GET_POACHING_TIME',
      payload: payload,
    }
  }


  export function getPoachingCountry(payload) {
    return {
      type: 'GET_POACHING_COUNTRY',
      payload: payload,
    }
  }


  export function getPoachingName(payload) {
    return {
      type: 'GET_POACHING_NAME',
      payload: payload,
    }
  }

  export function getPoachingPlace(payload) {
    return {
      type: 'GET_POACHING_PLACE',
      payload: payload,
    }
  }

  export function getPoachingFrequencyPost(payload) {
    return {
      type: 'GET_POACHING_FREQUENCYPOST',
      payload: payload,
    }
  }

  export function getPoachingCommercyType(payload) {
    return {
      type: 'GET_POACHING_COMMERCYTYPE',
      payload: payload,
    }
  }

  export function getPoachingCommercyStatus(payload) {
    return {
      type: 'GET_POACHING_COMMERCYSTATUS',
      payload: payload,
    }
  }

  export function getPoachingAnimal(payload) {
    return {
      type: 'GET_POACHING_ANIMAL',
      payload: payload,
    }
  }

  export function getPoachingCondition(payload) {
    return {
      type: 'GET_POACHING_CONDITION',
      payload: payload,
    }
  }

  export function getPoachingObservador(payload) {
    return {
      type: 'GET_POACHING_OBSERVADOR',
      payload: payload,
    }
  }

  export function deletePoaching(id) {
    return async function (dispatch) {
      const json = await axios.delete(
        `http://localhost:3001/poaching/deletePoaching/${id}`
      )
      return dispatch({
        type: 'DELETE_POACHING',
      })
    }
  }
 

  export function putPoaching(payload, id) {
    return async function (dispatch) {
      const json = await axios.post(
        `http://localhost:3001/poaching/update/${id}`,
        payload
      )
      return dispatch({
        type: 'PUT_POACHING',
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