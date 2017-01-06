
export default (store) => ({
  path : 'login',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */

      // console.log('store', store, nextState)
      // console.log('user key', nextState.user, store.getState().user)
      const Login = require('./Login').default

      /*  Return getComponent   */
      cb(null, Login)

    /* Webpack named bundle   */
    }, 'login')
  }
})
