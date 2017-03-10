// var users = {
//   alex: 'am1238wk',
//   shane: 'orlando',
//   avail: 'password'
// }

const HOST = 'http://aauth.availabs.org/'

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

export const login = (email, password) => {
  console.log('test 123', JSON.stringify({ email, password }))
  return (dispatch) => {
    return fetch(`${HOST}login/auth`,
        {
          method: 'POST',
          body: new FormData().append('json', JSON.stringify({ email, password }))
          
        })
      .then(response => response.json())
      .then(json => {
        console.log('json', json)
        return dispatch(receiveAuthResponse(json.message))
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
    console.log('login attempt', action.res)

    if (action.res.type === 'error') {
      newState.error = action.res.text
    } else if (action.res.id === -1) {
      action.res
      newState = action.res
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.res))
      }
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
