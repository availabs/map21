import { connect } from 'react-redux'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */

      console.log('user key', nextState.user, store.getState().user)

      let HomeView = require('./components/LandingView').default
      if (store.getState().user.token) {
        HomeView = require('./components/HomeView').default
      }

      const mapStateToProps = (state) => ({
        user : state.user
      })

      connect(mapStateToProps, {})(HomeView)
      /*  Return getComponent   */
      cb(null, HomeView)

    /* Webpack named bundle   */
    }, 'landing')
  }
})
