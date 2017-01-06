import React from 'react'
// import NavDropdown from 'components/utils/NavDropdown'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from 'store/modules/user'
import './Nav.scss'

class Nav extends React.Component {

  renderUser () {
    console.log('props', this.props)
    return (
      <ul className='nav navbar-nav pull-right' style={{ float: 'right' }}>
        <li className='nav-item'>
          <Link to='/' className='nav-link active'> { toTitleCase(this.props.username) } </Link>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='nav-link active'>
            <span onClick={this.props.logout}>Logout</span>
          </Link>
        </li>
      </ul>
    )
  }

  renderLogin () {
    return (
      <ul className='nav navbar-nav pull-right' style={{ float: 'right' }}>
        <li className='nav-item'>
          <Link to='/' className='btn btn-light-green'>Sign up</Link>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='btn btn-orange'>Login</Link>
        </li>
      </ul>
    )
  }

  render () {
    var navClasses = this.props.username
    ? 'navbar navbar-fixed-top scrolling-navbar'
    : 'navbar navbar-dark navbar-fixed-top scrolling-navbar'

    var navStyle = this.props.username
    ? { backgroundColor: 'transparent', maxWidth: '100vw' }
    : { backgroundColor: 'transparent', maxWidth: '100vw' }

    var navLogo = this.props.username
    ? '/icons/freeflow-logo-grey.png'
    : '/icons/freeflow-logo-grey.png'

    return (
      <nav className={navClasses} style={navStyle}>
        <div className='container'>
          <div className='' id='collapseEx2'>
            <IndexLink to='/' className='navbar-brand'>
              <img src={navLogo} style={{ width: '150px' }} />
            </IndexLink>
          </div>
          { this.props.username ? this.renderUser() : this.renderLogin() }
        </div>

      </nav>
    )
  }
}

Nav.propTypes = {
  logout: React.PropTypes.func.isRequired,
  username: React.PropTypes.string
}

const mapStateToProps = (state) => ({
  username : state.user ? state.user.name : null
})

export default connect(mapStateToProps, { logout })(Nav)

function toTitleCase (str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}
