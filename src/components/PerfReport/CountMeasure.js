import React from 'react'
import YearBarGraph from './YearBarGraph'
// import { VictoryPie } from 'victory'

class CountMeasure extends React.Component {

  getMonths (key, road_type) {
    var  months = Array.from({ length: 12 }, (v, k) => 0)
    if (!this.props.measures.months) {
      return months
    }
    return this.props.measures.months.map(d => {
      var output = d && d[this.props.geo_type] ?
        d[this.props.geo_type][this.props.geoId][this.props.measure_type][this.props.road_type] 
        : 0
      return output
    })
  }

  render () {
    console.log(
      'the average',
      this.props.measures[this.props.geo_type][this.props.geoId][this.props.measure_type][this.props.road_type],
      this.props.geo_type,this.props.geoId,this.props.measure_type,this.props.road_type
      )
    var avg = this.props.measures[this.props.geo_type][this.props.geoId][this.props.measure_type][this.props.road_type]
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h4 style={{textAlign: 'center'}}> {this.props.title} </h4>
        </div>
        <div className='col-md-4 col-xs-6'>
          <h1 style={{ textAlign: 'center' }}>{ (avg).toLocaleString() }</h1>
        </div>
        <div className='col-md-8' >
          <YearBarGraph color={this.props.colors[0]} data={this.getMonths()}  max={Math.max(...this.getMonths())}/>
        </div>
      </div>
    )
  }
}

export default CountMeasure