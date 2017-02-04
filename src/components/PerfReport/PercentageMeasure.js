import React from 'react'
import YearBarGraph from './YearBarGraph'
import { VictoryPie } from 'victory'

class PercentageMeasure extends React.Component {

  getMonths (key, roadType) {
    var months = Array.from({ length: 12 }, (v, k) => 0)
    if (!this.props.measures.months) {
      return months
    }
    return this.props.measures.months.map(d => {
      var output = d && d[this.props.geoType]
        ? d[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType]
        : 0
      return output * 100
    })
  }

  render () {
    // console.log(
    //   // this.props.measures[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType],
    //   this.props.geoType,this.props.geoId,this.props.measureType,this.props.roadType
    //   )
    var avg = this.props.measures[this.props.geoType][this.props.geoId][this.props.measureType][this.props.roadType]
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h4 style={{ textAlign: 'center' }}> { this.props.title } </h4>
        </div>
        <div className='col-md-3 col-xs-6'>
          <h1 style={{ textAlign: 'center' }}>{ (avg * 100).toLocaleString() }%</h1>
        </div>
        <div className='col-md-3 col-xs-6'>
          <VictoryPie
            data={[
              { type: 'Not Passing', value: 100 - (avg * 100) },
              { type: 'Passing', value: (avg * 100) }
            ]}
            innerRadius={55}
            colorScale={this.props.colors}
            x='type'
            y={(datum) => datum.value}
          />
        </div>
        <div className='col-md-6' >
          <YearBarGraph color={this.props.colors[0]} data={this.getMonths()} />
        </div>
      </div>
    )
  }
}

PercentageMeasure.propTypes = {
  colors: React.PropTypes.array,
  geoId: React.PropTypes.string,
  geoType: React.PropTypes.string,
  measureType: React.PropTypes.string,
  measures: React.PropTypes.object,
  roadType: React.PropTypes.string,
  title: React.PropTypes.string
}

export default PercentageMeasure
