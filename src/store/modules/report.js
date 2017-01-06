/* @flow */
import fetch from 'isomorphic-fetch'
const HOST = 'http://npmrds.v2.availabs.org/'
const KEY = 'SubterraneanHomesickAvailian'
// ------------------------------------
// Constants
// ------------------------------------
export const RECIEVE_STATE_REPORT = 'RECIEVE_STATE_REPORT'
export const RECIEVE_STATE_MONTHLY_REPORT = 'RECIEVE_STATE_MONTHLY_REPORT'
export const RECIEVE_STATE_METADATA = 'RECIEVE_STATE_METADATA'
// const location = '/'
// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function recieveStateReport (state, year, value) {
  return {
    type: RECIEVE_STATE_REPORT,
    payload: value,
    state: state,
    year: year
  }
}

export function recieveStateMonthsReport (state, year, value) {
  return {
    type: RECIEVE_STATE_MONTHLY_REPORT,
    payload: value,
    state: state,
    year: year
  }
}

export function recieveStateMetadata (state, value) {
  return {
    type: RECIEVE_STATE_METADATA,
    payload: value,
    state: state
  }
}

export const loadStateTopLevelMonthlyMeasures = (state, year) => {
  console.log('loadStateTopLevelMonthlyMeasures')
  return (dispatch) => {
    // console.log('loadStateTopLevelMonthlyMeasures 2')
    var months = Array.from({ length: 12 }, (v, k) => k + 1).map(month => {
      return new Promise((resolve, reject) => {
        fetch(`${HOST}top-level-measures/${state}/geography-levels/state_mpo_county_ua/${year}/${month}?key=${KEY}`)
        .then(response => {
          resolve(response.json())
        })
      })
    })

    return Promise.all(months)
      .then((allmonths) => {
        // sconsole.log('trying', allmonths)
        return dispatch(recieveStateMonthsReport(state, year, allmonths))
      })
  }
}

export const loadStateTopLevelMeasures = (state, year) => {
  return (dispatch) => {
    return fetch(`${HOST}top-level-measures/${state}/geography-levels/state_mpo_county_ua/${year}?key=${KEY}`)
      .then(response => response.json())
      .then(json => {
        dispatch(loadStateMetadata(state))
        dispatch(loadStateTopLevelMonthlyMeasures(state, year))
        return dispatch(recieveStateReport(state, year, json))
      })
  }
}

export const loadStateMetadata = (state) => {
  return (dispatch) => {
    return fetch(`${HOST}data/geography-level-attributes/${state}/geography-levels/state_mpo_county_ua?key=${KEY}`)
      .then(response => response.json())
      .then(json => {
        return dispatch(recieveStateMetadata(state, json))
      })
  }
}

export const actions = {
  loadStateTopLevelMeasures
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECIEVE_STATE_REPORT]: (state, action) => {
    var newState = Object.assign({}, state)
    if (!newState[action.state]) newState[action.state] = {}
    newState[action.state][action.year] = action.payload
    return newState
  },
  [RECIEVE_STATE_METADATA]: (state, action) => {
    var newState = Object.assign({}, state)
    if (!newState[action.state]) newState[action.state] = {}
    newState[action.state].metadata = action.payload
    return newState
  },
  [RECIEVE_STATE_MONTHLY_REPORT]: (state, action) => {
    var newState = Object.assign({}, state)
    if (!newState[action.state]) newState[action.state] = {}
    if (!newState[action.state][action.year]) newState[action.state][action.year] = {}
    console.log('test', newState[action.state][action.year])
    newState[action.state][action.year].months = action.payload
    return newState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function reportReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
