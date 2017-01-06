var users = {
  alex: 'am1238wk',
  shane: 'orlando'
}

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function login (user, pass) {
  return {
    type : USER_LOGIN,
    user,
    pass
  }
}

export function logout () {
  return {
    type: USER_LOGOUT
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
  error: null
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN] : (state, action) => {
    var newState = Object.assign({}, state)
    console.log('login attempt', action.user, action.pass, users[action.user])
    if (users[action.user] && users[action.user] === action.pass) {
      newState.name = action.user
      newState.key = 'as09fga9-s8dghaskjdfj2io4hg[iaefdhg;skdgj0929i4ehgoqiwai'
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('user', action.user)
        localStorage.setItem('key', 'as09fga9-s8dghaskjdfj2io4hg[iaefdhg;skdgj0929i4ehgoqiwai')
      }
      delete newState.error
      return newState
    }
    newState.error = 'Invalid User or Pass'
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
