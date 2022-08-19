const initialState = {
    sighting: [],
    users: [],
    usersCopy: [],
    userLogged: []
  }


  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_SIGHTING':
        return {
          ...state,
          sighting: action.payload,
        }

      case 'POST_SIGHTING':
        return {
          ...state,
          sighting: [...state. sighting, action.payload],
        }

      case 'GET_USERS':
        return {
          ...state,
          users: action.payload,
          usersCopy: action.payload,
        }

    case 'POST_USER':
     
      return {
        ...state,
        userLogged: action.payload,
      }

        default:
          return state
      }
    }

    

  
  export default rootReducer