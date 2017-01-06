import React from 'react'
import { connect } from 'react-redux'
import { login } from 'store/modules/user'
import { withRouter } from 'react-router'
import './Login.scss'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
      display: 'login'
    }
    this.renderLogin = this.renderLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  handleInput (e) {
    let newState = {}
    let attr = e.target.getAttribute('id')
    newState[attr] = e.target.value
    this.setState(newState)
  }

  submitLogin () {
    this.props.login(this.state.user, this.state.pass)
  }

  renderError () {
    if (!this.props.user.error) return
    const errorStyle = {
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
      border:'2px solid #CC0000',
      color: '#efefef',
      backgroundColor: 'rgba(255,68,68, 0.8)',
      textAlign: 'center'
    }

    return (
      <div className='col-xs-12' style={errorStyle}>
        {this.props.user.error}
      </div>
    )
  }

  renderLogin () {
    return (
      <div className='container-fluid' id='loginPage'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 col-md-4 offset-sm-2 offset-md-4'>
                <div className='card' id='loginForm'>
                  <div className='view overlay hm-white-slight'>
                    <br />
                    <img style={{
                      width: '96px',
                      height: '96px',
                      margin: '0 auto 10px',
                      display: 'block',
                      borderRadius: '50%' }}
                      src='/icons/freeflow-favicon.png'
                      alt=''
                    />
                  </div>
                  <div className='card-block'>
                    <h4 className='card-title' style={{ textAlign: 'center', marginTop: -20 }}>
                      <span style={{ fontWeight: 'bold' }}>FreeFlow</span>
                      <br />Login</h4>
                    {this.renderError()}
                    <div className='card-text'>
                      <input
                        value={this.state.user}
                        onChange={this.handleInput}
                        id='user' type='text' className='form-control' placeholder='Login' required autoFocus
                      />
                      <input
                        value={this.state.pass}
                        onChange={this.handleInput}
                        id='pass' type='password' className='form-control' placeholder='Password' required
                      />
                      <button
                        onClick={this.submitLogin}
                        className='btn btn-lg btn-primary btn-block' type='submit'
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <a href='#' className='text-right new-account'>Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (this.props.user.key) {
      this.props.router.push('/')
    }
    return this.renderLogin()
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, { login })(withRouter(Login))
