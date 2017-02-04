import React from 'react'
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class YearBarGraph extends React.Component {
  render () {
    var max = this.props.max || 100
    var monthCols = months.map((d, i) => {
      return (
        <div key={d} className='monthCol'>
          <div
            className='dataBar'
            style={{ height: 100 - this.props.data[i] / max * 100 + '%', backgroundColor: 'transparent' }}
          />
          <div
            className='dataBar'
            style={{ height: this.props.data[i] / max * 100 + '%', backgroundColor: this.props.color }}
          />
        </div>
      )
    })
    var monthLabel = months.map(d => {
      return <div key={d} className='monthLabel'>{d[0]}</div>
    })
    return (
      <div style={{ height: '100%', minHeight: 150 }}>
        <div className='monthGraph'>
          {monthCols}
        </div>
        <div className='monthLabels'>
          {monthLabel}
        </div>
      </div>
    )
  }
}

YearBarGraph.propTypes = {
  color: React.PropTypes.string,
  data: React.PropTypes.array,
  max: React.PropTypes.number
}

export default YearBarGraph

