const initialState = {
    sighting: [],
    sightingCopy: [],
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
          sightingCopy: action.payload
        }

      case 'POST_SIGHTING':
        return {
          ...state,
          sighting: [...state. sighting, action.payload],
        }


        case 'GET_SIGHTING_COUNTRY':
          const all = state.sightingCopy
          const filtereByCounty = all.filter(
            (e) => e.country === action.payload )
          
    
          return {
            ...state,
            sighting: filtereByCounty,
          }

          case 'GET_SIGHTING_PLACE':
            const allS = state.sightingCopy.filter(e=>e.place !== undefined)
            const filtereByPlace = allS.filter(
              (e) => e.place.toLowerCase().includes(action.payload.toLowerCase()) )
            
            return {
              ...state,
              sighting: filtereByPlace,
            }


            case 'GET_SIGHTING_DATE':
              let sightingOrderByDate =
                action.payload === 'Viejos'
                  ? state.sighting.sort((a, b) => {
                      if (a.date > b.date) return 1
                      if (b.date > a.date) return -1
                      return 0
                    })
                  : state.sighting.sort((a, b) => {
                      if (a.date > b.date) return -1
                      if (b.date > a.date) return 1
                      return 0
                    })
              return {
                ...state,
                sighting: sightingOrderByDate,
              }

              case 'GET_SIGHTING_TIME':
                console.log('reduTime,',action.payload)
          
                let sightingOrderByTime =
                  action.payload === 'Nuevos'
                    ? state.sighting.sort((a, b) => {
                        if (a.time > b.time) return 1
                        if (b.time > a.time) return -1
                        return 0
                      })
                    : state.sighting.sort((a, b) => {
                        if (a.time > b.time) return -1
                        if (b.time > a.time) return 1
                        return 0
                      })
                      console.log(sightingOrderByTime)
                return {
                  ...state,
                  sighting: sightingOrderByTime,
                }


                case 'GET_SIGHTING_NAME':
                  const allN = state.sightingCopy.filter(e=>e.name !== undefined)
                  const filtereByName = allN.filter(
                    (e) => e.name === action.payload )
                   
            
                  return {
                    ...state,
                    sighting: filtereByName,
                  }

                  case 'GET_SIGHTING_SCIENTIFICNAME':
                    const allsn = state.sightingCopy.filter(e=>e.scientistname !== undefined)
                    const filtereBysName = allsn.filter(
                      (e) => e.scientistname === action.payload )
                     
              
                    return {
                      ...state,
                      sighting: filtereBysName,
                    }


                    case 'GET_SIGHTING_TYPE':
                      const allT = state.sightingCopy.filter(e=>e.type !== undefined)
                      const filtereByType = allT.filter(
                        (e) => e.type === action.payload )
                       
                
                      return {
                        ...state,
                        sighting: filtereByType,
                      }
  

                      case 'GET_SIGHTING_OBSERVADOR':
                        const allO = state.sightingCopy.filter(e=>e.observador !== undefined)
                        const filtereByObservador = allO.filter(
                          (e) => e.observador.toLowerCase().includes(action.payload.toLowerCase()) )
                        
                        return {
                          ...state,
                          sighting: filtereByObservador,
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