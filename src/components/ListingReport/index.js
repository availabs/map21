import React from 'react'

// import PercentageMeasure from './PercentageMeasure'
// import './ListingReport.scss'
const colors = [
  ['#ff4444', '#CC0000'],
  ['#ffbb33', '#FF8800'],
  ['#00C851', '#007E33'],
  ['#33b5e5', '#0099CC'],
  ['#aa66cc', '#9933CC']
]

const spacing = [6, 6, 3, 3, 6]

class ListingReport extends React.Component {

  render () {
    var measureData = this.props.data[this.props.type][this.props.stateId]
    var mpos = Object.keys(measureData).map((d, k) => {
      var measures = this.props.measureInfo.map((measure, i) => {
        var roads = measure.roadTypes.map(roadType => {
          return (
            <div className='col-xs-6' style={{ textAlign: 'center' }} key={roadType}>
              {roadType}<br />

              { measure.key !== 'system_total_excessive_delay'
                ? `${(measureData[d][measure.key][roadType] * 100).toLocaleString()}%`
                : `${(parseInt(measureData[d][measure.key][roadType])).toLocaleString()}`
              }
            </div>
          )
        })
        // console.log({borderTop: '2px solid ' + colors[i] })
        return (
          <div className={'col-md-' + spacing[i]} key={`${measure}:${i}`}>
            <div className='row'>
              <div className='col-xs-12'
                style={{ textAlign: 'center',
                  color: '#fefefe',
                  backgroundColor: colors[i][0],
                  paddingTop: 7,
                  paddingBottom: 7 }} >
                {measure.title}
              </div>
            </div>
            <div className='row' style={{ padding:10, borderTop: '2px solid ' + colors[i][1] }} key={`${i}:${measure}`}>
              {roads}
            </div>
          </div>
        )
      })
      return (
        <div className='row flex-card' style={{ padding: 10, marginBottom: 10 }} key={k}>
          <div className='col-xs-12'>
            <h4>{d}</h4>
          </div>
          {measures}
        </div>
      )
    })
    return (
      <div style={{ paddingTop: 30 }}>
        {mpos}
      </div>
    )
  }

}

ListingReport.propTypes = {
  data: React.PropTypes.object,
  type: React.PropTypes.string,
  stateId: React.PropTypes.string,
  measureInfo: React.PropTypes.array
}

export default ListingReport
