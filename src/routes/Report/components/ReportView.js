import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PerfReport from 'components/PerfReport'
import ListingReport from 'components/ListingReport'
import { loadStateTopLevelMeasures } from 'store/modules/report'
import DropDown from 'components/utils/DropDown'
import StatesHash from 'components/utils/StatesHash.json'
import GeoNames from 'components/utils/GeoNames.json'
import './ReportView.scss'

const measures = [
  {
    title: 'Level of Travel Time Reliability',
    info: 'The percentage of mileage of the road network that provides reliable travel.',
    key: 'system_lottr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/systemperf20042016.pdf',
    roadTypes: ['interstate', 'noninterstate']
  },
  {
    title: 'Peak Hour Travel Time Expectations',
    info: (
      'The percentage of mileage of the road network that provides peak hour travel' +
        ' times with in %50 of expected travel times.' +
        ' We use 50% of the speed limit as the expected threshold for this measure.'
    ),
    key: 'system_phttr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/systemperf20042016.pdf',
    roadTypes: ['interstate', 'noninterstate']
  },
  {
    title: 'Truck Travel Time Reliability',
    info: 'The percentage of mileage of the interstate network that provides reliable travel time for freight.',
    key: 'system_tttr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/freightmeas20042016.pdf',
    roadTypes: ['interstate']
  },
  {
    title: 'Mileage Uncongested',
    info: 'The percentage of mileage of the interstate network that provides reliable travel time for freight.',
    key: 'system_percent_milage_uncongested',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/freightmeas20042016.pdf',
    roadTypes: ['interstate']
  },
  {
    title: 'Hours of Excessive Delay',
    info: (
      'The  the Total Excessive Delay for all vehicles traveling through each' +
        ' travel time segment on the NHS within an applicable urbanized area for a full year.'
    ),
    key: 'system_total_excessive_delay',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/cmaq20042016.pdf',
    roadTypes: ['controlled_access', 'noncontrolled_access']
  }
]

class ReportView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { year: '2016' }
    this.renderReport = this.renderReport.bind(this)
    this.setYear = this.setYear.bind(this)
  }

  componentWillMount () {
    console.log(this.props.params.stateId, this.props.reports)
    if (
      !this.props.reports[this.props.params.stateId] || !this.props.reports[this.props.params.stateId][this.state.year]
    ) {
      this.props.loadStateTopLevelMeasures(this.props.params.stateId, this.state.year)
    }
  }

  setYear (d) {
    this.setState({ year: d })
  }

  renderReport () {
    if (
      !this.props.reports[this.props.params.stateId] || !this.props.reports[this.props.params.stateId][this.state.year]
    ) {
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
          <div>
            <PerfReport measureInfo={measures} measures={data} type='STATE' geoId={this.props.params.stateId} />
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
        <li className='nav-item'>
          <Link className={'nav-link ' + this.isActive(undefined)} to={'/r/' + this.props.params.stateId}>
            <i className='fa fa-user' />
            State Wide
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={'nav-link ' + this.isActive('mpo')} to={'/r/' + this.props.params.stateId + '/mpo'}>
            <i className='fa fa-user' />
            MPOs
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={'nav-link ' + this.isActive('county')} to={'/r/' + this.props.params.stateId + '/county'}>
            Counties
          </Link>
        </li>
        <li className='nav-item' style={{ float: 'right' }}>

          <DropDown options={['2015', '2016']} selected={this.state.year} onChange={this.setYear} prefix={'Year:'} />

        </li>
      </ul>
    )
  }

  render () {
    console.log('listing view', this.props)
    if (
      !this.props.reports[this.props.params.stateId] || !this.props.reports[this.props.params.stateId][this.state.year]
    ) {
      this.props.loadStateTopLevelMeasures(this.props.params.stateId, this.state.year)
    }

    return (
      <div className='container-fluid homeBody' style={{ width: '100%' }}>
        <div className='container homeContent' style={{ zIndex: 5 }}>
          <section className='section' style={{ paddingTop: 30 }}>
            <Link to='/'>Back</Link>
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

ReportView.propTypes = {
  params: React.PropTypes.object.isRequired,
  loadStateTopLevelMeasures: React.PropTypes.func.isRequired,
  reports: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({ reports: state.report })

export default connect(mapStateToProps, { loadStateTopLevelMeasures })(ReportView)

