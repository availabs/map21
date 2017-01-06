import React from 'react'

import PercentageMeasure from './PercentageMeasure'
import CountMeasure from './CountMeasure'
import './PerfReport.scss'
// import BargraphD4 from 'components/utils/BarGraphD4'
// import BarGraph from 'components/utils/BarGraph/index'
const colors = [
  ['#ff4444', '#CC0000'],
  ['#ffbb33', '#FF8800'],
  ['#00C851', '#007E33'],
  ['#33b5e5', '#0099CC'],
  ['#aa66cc', '#9933CC']
]

class PerfReport extends React.Component {

  renderHighwayMeasure (measure, colors, size = 12, style = {}) {
    console.log('measures', this.props.measures, measure.key)
    return (
      <div className={'col-md-' + size} style={style}>
        <div className='row flex-card' style={{ marginBottom: 10 }}>
          <div className='col-xs-12'>
            <h2 className='report-heading' style={{ backgroundColor: colors[0] }}>
              {measure.title}
              <span className='pull-right' style={{ fontSize: '0.5em', float: 'right' }}>
                <a target='_blank' style={{ color: '#efefef' }} href={measure.moreInfo}>More Info</a>
              </span>
            </h2>
            <div style={{ padding: 15 }}>
              {measure.info}
            </div>
          </div>
          {measure.roadTypes.map(roadType => {
            return (
              <div key={roadType} className={'col-md-' + 12 / measure.roadTypes.length}>
                <PercentageMeasure
                  measures={this.props.measures}
                  measure_type={measure.key}
                  geo_type={this.props.type}
                  geoId={this.props.geoId}
                  road_type={roadType}
                  title={roadType}
                  colors={colors}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  renderCountMeasure (measure, colors, size = 12) {
    console.log('measures', this.props.measures, measure.key)
    return (
      <div className={'col-xs-' + size}>
        <div className='row flex-card' style={{ marginBottom: 10 }}>
          <div className='col-xs-12'>
            <h2 className='report-heading' style={{ backgroundColor: colors[0] }}>
              {measure.title}
              <span style={{ fontSize: '0.5em', float: 'right' }}>
                <a target='_blank' style={{ color: '#efefef' }} href={measure.moreInfo}>More Info</a>
              </span>
            </h2>
            <div style={{ padding: 10 }}>
              {measure.info}
            </div>
          </div>
          {measure.roadTypes.map(roadType => {
            return (
              <div key={roadType} className={'col-md-' + 12 / measure.roadTypes.length}>
                <CountMeasure
                  measures={this.props.measures}
                  measure_type={measure.key}
                  geo_type={this.props.type}
                  geoId={this.props.geoId}
                  road_type={roadType}
                  title={roadType}
                  colors={colors}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  render () {
    let highwayMeasures = this.props.measureInfo
      .filter(d => ['system_lottr', 'system_phttr'].includes(d.key))
      .map((d, i) => this.renderHighwayMeasure(d, colors[i]))

    let freightMeasures = this.props.measureInfo
      .filter(d => ['system_tttr', 'system_percent_milage_uncongested'].includes(d.key))
      .map((d, i) => this.renderHighwayMeasure(d, colors[i + 2], 6, i === 0 ? { paddingRight: 20 } : { paddingLeft:20 }))

    return (
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>Performance of the National Highway System
              <span className='pull-right' style={{ fontSize: '0.5em', float: 'right' }}>
                <a target='_blank' href='https://www.fhwa.dot.gov/tpm/rule/overview20042016.pdf'>More Info</a>
              </span>
            </h1>
            <div className='row'>
              {highwayMeasures}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>Freight Movement on the Interstate System </h1>
            <div className='row'>
              {freightMeasures}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>Traffic Congestion</h1>
            <div className='row'>
              {this.renderCountMeasure(this.props.measureInfo[4], colors[4])}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

PerfReport.propTypes = {
  measures : React.PropTypes.object.isRequired,
  geoId: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.array
}

export default PerfReport
