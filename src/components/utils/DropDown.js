import React from 'react'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      open: false, 
      selected: this.props.selected
    }
    this.toggle = this.toggle.bind(this)
    this.setSelected = this.setSelected.bind(this)
  }
  
  toggle () {
    this.setState({ open: !this.state.open })
  }
  
  setSelected (d) {
    if(this.props.onChange) {
      this.props.onChange(d)
    }
    this.toggle()
  }

  render () {
    return (
      <div className='btn-group'>
        <a button className='btn btn-primary dropdown-toggle' aria-expanded={this.state.open} onClick={this.toggle}>
          {this.props.prefix} {this.props.selected}
        </a>
        <div className='dropdown-menu' style={{ display: this.state.open ? 'block' : 'none' }}>
          {this.props.options.map(d => {
            return (
              <a className='dropdown-item' onClick={this.setSelected.bind(null, d)} href='#'>{d}</a>
            )
          })}

        </div>
      </div>
    )
  }

}

Dropdown.propTypes = {
  options : React.PropTypes.array.isRequired,
  title : React.PropTypes.element
}

export default Dropdown
