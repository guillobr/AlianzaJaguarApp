const initialState = {
    sighting: [],
    sightingCopy: [],
    paocginh: [],
    poachingCopy: [],
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
          sighting: [...state.sighting, action.payload],
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

      
      case 'GET_POACHING':
        return {
          ...state,
          poaching: action.payload,
          poachingCopy: action.payload
        }
  

      case 'POST_POACHING':
        return {
          ...state,
          poaching: [...state.poaching, action.payload],
        }



      case 'GET_POACHING_COUNTRY':
        const allP = state.poachingCopy
        const pfiltereByCounty = allP.filter(
          (e) => e.country === action.payload )
        
  
        return {
          ...state,
          poaching: pfiltereByCounty,
        }

        case 'GET_POACHING_DATE':
          let poachingOrderByDate =
            action.payload === 'Viejos'
              ? state.poaching.sort((a, b) => {
                  if (a.date > b.date) return 1
                  if (b.date > a.date) return -1
                  return 0
                })
              : state.poaching.sort((a, b) => {
                  if (a.date > b.date) return -1
                  if (b.date > a.date) return 1
                  return 0
                })
          return {
            ...state,
            poaching: poachingOrderByDate,
          }

        case 'GET_SIGHTING_TIME':
          console.log('reduTime,',action.payload)
        let poachingOrderByTime =
        action.payload === 'Nuevos'
          ? state.poaching.sort((a, b) => {
              if (a.time > b.time) return 1
              if (b.time > a.time) return -1
              return 0
            })
          : state.poaching.sort((a, b) => {
              if (a.time > b.time) return -1
              if (b.time > a.time) return 1
              return 0
            })
            
      return {
        ...state,
        poaching: poachingOrderByTime,
      }

      case 'GET_POACHING_NAME':
        const allPn = state.poachingCopy.filter(e=>e.name !== undefined)
        const pfiltereByName = allPn.filter(
          (e) => e.name === action.payload )
          
  
        return {
          ...state,
          poaching: pfiltereByName,
        }


    case 'GET_POACHING_PLACE':
      const allPp = state.poachingCopy.filter(e=>e.place !== undefined)
      const pfiltereByPlace = allPp.filter(
        (e) => e.place.toLowerCase().includes(action.payload.toLowerCase() ))
        

      return {
        ...state,
        poaching: pfiltereByPlace,
      }

    case 'GET_POACHING_FREQUENCYPOST':
    const allPfp = state.poachingCopy.filter(e=>e.postsFrecuency !== undefined)
    const pfiltereByFP= allPfp.filter(
      (e) => e.postsFrecuency.toLowerCase().includes(action.payload.toLowerCase() ))
      

    return {
      ...state,
      poaching: pfiltereByFP,
    }

    case 'GET_POACHING_COMMERCYTYPE':
    const allPCT = state.poachingCopy.filter(e=>e.commercyType !== undefined)
    const pfiltereByct= allPCT.filter(
      (e) => e.commercyType.toLowerCase().includes(action.payload.toLowerCase() ))
      

    return {
      ...state,
      poaching: pfiltereByct,
    }


  case 'GET_POACHING_COMMERCYSTATUS':
    const allPCS = state.poachingCopy.filter(e=>e.commercyStatus !== undefined)
    const pfiltereBycs= allPCS.filter(
      (e) => e.commercyStatus === action.payload )
      

    return {
      ...state,
      poaching: pfiltereBycs,
    }


  case 'GET_POACHING_ANIMAL':
  const allPA = state.poachingCopy.filter(e=>e.animal !== undefined)
  const pfiltereBya= allPA.filter(
    (e) => e.animal.toLowerCase().includes(action.payload.toLowerCase() ))
    

  return {
    ...state,
    poaching: pfiltereBya,
  }


  
  case 'GET_POACHING_CONDITION':
  const allPC = state.poachingCopy.filter(e=>e.animalCondition !== undefined)
  const pfiltereByc= allPC.filter(
    (e) => e.animalCondition.toLowerCase().includes(action.payload.toLowerCase() ))
    

  return {
    ...state,
    poaching: pfiltereByc,
  }

  case 'GET_POACHING_OBSERVADOR':
  const allPO = state.poachingCopy.filter(e=>e.observador !== undefined)
  const pfiltereByo= allPO.filter(
    (e) => e.observador.toLowerCase().includes(action.payload.toLowerCase() ))
    

  return {
    ...state,
    poaching: pfiltereByo,
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