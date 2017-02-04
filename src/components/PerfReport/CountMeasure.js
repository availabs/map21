import React from 'react'
import YearBarGraph from './YearBarGraph'
// import { VictoryPie } from 'victory'

class CountMeasure extends React.Component {

  getMonths (key, roadType) {
    var months = Array.from({ length: 12 }, (v, k) => 0)
    if (!this.props.measures.months) {
      return months
    }
    return this.props.measures.months.map(d => {
      var output = d && d[this.props.geoType]
        ? d[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType]
        : 0
      return output
    })
  }

  render () {
    console.log(
      'the average',
      this.props.measures[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType],
      this.props.geoType, this.props.geoId, this.props.measureType, this.props.roadType
      )
    var avg = this.props.measures[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType]
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h4 style={{ textAlign: 'center' }}> {this.props.title} </h4>
        </div>
        <div className='col-md-4 col-xs-6'>
          <h1 style={{ textAlign: 'center' }}>{ (avg).toLocaleString() }</h1>
        </div>
        <div className='col-md-8' >
          <YearBarGraph color={this.props.colors[0]} data={this.getMonths()} max={Math.max(...this.getMonths())} />
        </div>
      </div>
    )
  }
}

CountMeasure.propTypes = {
  colors: React.PropTypes.array,
  geoId: React.PropTypes.string,
  geoType: React.PropTypes.string,
  measureType: React.PropTypes.string,
  measures: React.PropTypes.object,
  roadType: React.PropTypes.string,
  title: React.PropTypes.string
}

export default CountMeasure
