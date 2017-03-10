// var users = {
//   alex: 'am1238wk',
//   shane: 'orlando',
//   avail: 'password'
// }

const HOST = "http://aauth.availabs.org/api/"

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function receiveAuthResponse (res) {
  return {
    type : USER_LOGIN,
    res
  }
}

export function logout () {
  return {
    type: USER_LOGOUT
  }
}
// fetch("/echo/json/",
// {
//     method: "POST",
//     body: data
// })
export const login = (email, password) => {
  return (dispatch) => {
    return fetch(`${HOST}login/auth`,
        {
          method: "POST",
          body: new FormData().append("json", JSON.stringify({ email, password }))
        })
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveAuthResponse(json))
      })
  }
}

export const actions = {
  login,
  logout
}

// -------------------------------------
// Initial State
// -------------------------------------
const initialState = {
  name: null,
  key: null,
  error: null,
  id: null
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN] : (state, action) => {
    var newState = Object.assign({}, state)
    // console.log('login attempt', action.user, action.pass, users[action.user])
    // if (users[action.user] && users[action.user] === action.pass) {
    //   newState.name = action.user
    //   newState.key = 'as09fga9-s8dghaskjdfj2io4hg[iaefdhg;skdgj0929i4ehgoqiwai'
    //   if (typeof (Storage) !== 'undefined') {
    //     localStorage.setItem('user', action.user)
    //     localStorage.setItem('key', 'as09fga9-s8dghaskjdfj2io4hg[iaefdhg;skdgj0929i4ehgoqiwai')
    //   }
    //   delete newState.error
    //   return newState
    // }
    // newState.error = 'Invalid User or Pass'
    let user = action.res;
    newState = user;
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('token', user.token)
        localStorage.setItem('status', user.status)
        localStorage.setItem('id', user.id)
        if(user.userGroup){
          localStorage.setItem('userType', user.userGroup.type)        
        }
      }
      if (user.id == -1) {
        localStorage.setItem('token', '')
        localStorage.setItem('userType', '')
        localStorage.setItem('id', -1)
        localStorage.setItem('status',false)
      }
    return newState
  },
  [USER_LOGOUT] : (state, action) => {
    if (typeof (Storage) !== 'undefined') {
      localStorage.removeItem('user')
      localStorage.removeItem('key')
    }
    return initialState
  }

}

// ------------------------------------
// Reducer
// ------------------------------------

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
