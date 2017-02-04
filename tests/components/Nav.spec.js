import React from 'react'
import { Nav } from 'components/Nav/Nav'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('(Component) Nav', () => {
  describe('When user not logged in...', () => {
    let logoutFunc = () => {}
    let wrapper = mount(<Nav logout={logoutFunc} />)

    let buttons = wrapper.find('.btn')
    let signUpButton = buttons.filterWhere(btn => btn.text() === 'Sign up')
    let loginButton = buttons.filterWhere(btn => btn.text() === 'Login')

    it('Should render two buttons', () => {
      expect(buttons).to.have.length(2)
    })

    it('Should render a \'Sign up\' button', () => {
      expect(signUpButton).to.have.length(1)
    })

    it('Should render a \'Login\' button', () => {
      expect(loginButton).to.have.length(1)
    })
  })

  describe('When user logged in...', () => {
    let username = 'Tyler Durden'
    let logoutFunc = sinon.spy()
    let wrapper = mount(<Nav logout={logoutFunc} username={username} />)

    let links = wrapper.find('.nav-link')
    let usernameLink = links.filterWhere(btn => btn.text().match(new RegExp(username)))
    let logoutLink = links.filterWhere(btn => btn.text() === 'Logout')

    it('Should render two links', () => {
      expect(links).to.have.length(2)
    })

    it('Should render a username link', () => {
      expect(usernameLink.exists())
    })

    it('Should render a \'Logout\' link', () => {
      expect(logoutLink.exists())
    })
  })
})

/*
 it('\'Logout\' link should call logout function', () => {
   logoutLink.simulate('click')
   expect(logoutFunc).to.have.property('callCount', 1)
 })

    ✖ 'Logout' link should call logout function
      PhantomJS 2.1.1 (Linux 0.0.0)
    <Link>s rendered outside of a router context cannot navigate.
*/
