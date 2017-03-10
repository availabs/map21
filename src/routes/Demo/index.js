import { connect } from 'react-redux'

export default (store) => ({
  path : 'demo/:stateId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */

      let DemoView = require('./components/DemoView').default
      

      const mapStateToProps = (state) => ({
        user : state.user
      })

      connect(mapStateToProps, {})(DemoView)
      /*  Return getComponent   */
      cb(null, DemoView)

    /* Webpack named bundle   */
    }, 'demo')
  }
})
