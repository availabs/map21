import React from 'react'
import HexMap from 'components/HexMap/HexMap'
import { withRouter } from 'react-router'
import './HomeView.scss'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      state:''
    }
    // this.pagination = this.pagination.bind(this)
    this.stateClick = this.stateClick.bind(this)
  }
  stateClick (stateId) {
    console.log('st', stateId)
    this.props.router.push('/r/' + stateId)
  }

  render () {
    return (
      <div className='container-fluid homeBody' style={{ width: '100%' }}>
        <div className='container homeContent' style={{ zIndex:5 }}>
          <section className='section'>
            <div className='row'>
              <div className='col-xs-12'>
                <h1 className='section-heading' />
                <div style={{ padding: 5 }}>
                  <HexMap stateClick={this.stateClick} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

HomeView.propTypes = {
  router: React.PropTypes.object
}

export default withRouter(HomeView)

