import React from 'react'
import Header from 'components/Nav'
import './CoreLayout.scss'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid' >
    <Header />
    <div className='row' style={{ overflowX: 'hidden' }}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
