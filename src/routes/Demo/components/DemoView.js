import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PerfReport from 'components/PerfReport'
import ListingReport from 'components/ListingReport'
import { loadStateTopLevelMeasures } from 'store/modules/report'
import DropDown from 'components/utils/DropDown'
import StatesHash from 'components/utils/StatesHash.json'
import GeoNames from 'components/utils/GeoNames.json'
import measures from 'components/utils/Measures_Meta'
import './DemoView.scss'

class DemoView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      year: '2016'
    }
    this.renderReport = this.renderReport.bind(this)
    this.setYear = this.setYear.bind(this)
  }

  componentWillMount () {
    console.log(this.props.params.stateId, this.props.reports)
    if (!this.props.reports[this.props.params.stateId] ||
        !this.props.reports[this.props.params.stateId][this.state.year]) {
      this.props.loadStateTopLevelMeasures(this.props.params.stateId, this.state.year)
    }
  }

  setYear (d) {
    this.setState({ year:d })
  }

  renderReport () {
    if (!this.props.reports[this.props.params.stateId] ||
        !this.props.reports[this.props.params.stateId][this.state.year]) {
      return <span>Loading...</span>
    }

    let data = this.props.reports[this.props.params.stateId][this.state.year]
    console.log('test', this.props.reports[this.props.params.stateId])
    switch (this.props.params.geoType) {
      case 'mpo':
        return (
          <ListingReport
            measureInfo={measures}
            data={data}
            type={this.props.params.geoType.toUpperCase()}
            stateId={this.props.params.stateId}
          />
        )
      case 'county':
        return (
          <ListingReport
            measureInfo={measures}
            data={data}
            type={this.props.params.geoType.toUpperCase()}
            stateId={this.props.params.stateId}
          />
        )
      default:
        return (
          <div >
            <PerfReport
              measureInfo={measures}
              measures={data}
              type='STATE'
              geoId={this.props.params.stateId}
            />
          </div>
        )
    }
  }

  isActive (link) {
    if (link === this.props.params.geoType) {
      return 'active'
    }
    return ''
  }

  renderNav () {
    return (
      <ul className='nav nav-tabs md-pills pills-ins' role='tablist'>
        <li className='nav-item' style={{float: 'right'}}>
          <DropDown options={['2015', '2016']} selected={this.state.year} onChange={this.setYear} prefix={'Year:'} />
        </li>
      </ul>
    )
  }

  render () {
    console.log('listing view', this.props)
    if (!this.props.reports[this.props.params.stateId] ||
        !this.props.reports[this.props.params.stateId][this.state.year]) {
      this.props.loadStateTopLevelMeasures(this.props.params.stateId, this.state.year)
    }

    return (
      <div className='container-fluid homeBody' style={{ width: '100%' }}>
        <div className='container homeContent' style={{ zIndex:5 }}>
          <section className='section' style={{ paddingTop: 30 }}>
            <Link to='/' >Back</Link>
            <h1 style={{ marginTop: 0, marginBottom: 5 }}>
              {StatesHash[this.props.params.stateId.toUpperCase()]} {GeoNames[this.props.params.geoType]}
            </h1>
            <div className='row'>
              <div className='col-xs-12'>
                {this.renderNav()}
              </div>
            </div>
            {this.renderReport()}
          </section>
        </div>
      </div>
    )
  }
}

DemoView.propTypes = {
  params : React.PropTypes.object.isRequired,
  loadStateTopLevelMeasures : React.PropTypes.func.isRequired,
  reports : React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  reports : state.report
})

export default connect(mapStateToProps, { loadStateTopLevelMeasures })(DemoView)

