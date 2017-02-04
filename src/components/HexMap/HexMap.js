import React from 'react'
import * as d3 from 'd3'
import states from './states.json'
import './HexMap.scss'
class HexMap extends React.Component {
  toggle () {
    this.setState({ open: !this.state.open })
  }

  componentDidMount () {
    var scope = this
    d3.selectAll('path.state').on('mouseover', function () {
      d3.select(this).style('fill', '#7cb342') // hover color
    }).on('mouseout', function () {
      d3.select(this).style('fill', '#DDDDDD') // default color
    }).on('click', function () {
      var state = states[this.classList[1].split('-').filter(d => d !== 'state').join(' ')] // get 2 digit state
      if (scope.props.stateClick) {
        scope.props.stateClick(state)
      }
    })
  }

  render () {
    return (
      <div>
        <svg version='1.1' className='Layer_1' x='0px' y='0px' viewBox='0 0 436 254' enableBackground='new 0 0 436 254'>
          <g>
            <text className='label' x='278.70553100585937' y='204.78125'>Ala.</text>
            <text className='label' x='36.2184073638916' y='24.78125'>Alaska</text>
            <text className='label' x='140.14145935058593' y='204.78125'>Ariz.</text>
            <text className='label' x='226.74399841308593' y='174.78125'>Ark.</text>
            <text className='label label-active' x='88.17993438720703' y='174.78125'>Calif.</text>
            <text className='label label-active' x='140.14145935058593' y='144.78125'>Colo.</text>
            <text className='label label-active' x='399.9490759277344' y='114.78125'>Conn.</text>
            <text className='label label-active' x='382.6285656738281' y='144.78125'>Del.</text>
            <text className='label label-active' x='365.30807006835937' y='174.78125'>D.C.</text>
            <text className='label' x='296.0260266113281' y='234.78125'>Fla.</text>
            <text className='label' x='313.3465368652344' y='204.78125'>Ga.</text>
            <text className='label label-active' x='18.89790199995041' y='234.78125'>Hawaii</text>
            <text className='label' x='88.17993438720703' y='114.78125'>Idaho</text>
            <text className='label label-active' x='226.74399841308593' y='114.78125'>Ill.</text>
            <text className='label' x='261.38501220703125' y='114.78125'>Ind.</text>
            <text className='label label-active' x='192.10298400878906' y='114.78125'>Iowa</text>
            <text className='label' x='192.10298400878906' y='174.78125'>Kan.</text>
            <text className='label' x='244.06450927734375' y='144.78125'>Ky.</text>
            <text className='label' x='209.42348754882812' y='204.78125'>La.</text>
            <text className='label label-active' x='417.26958740234375' y='24.78125'>Maine</text>
            <text className='label label-active' x='347.9875439453125' y='144.78125'>Md.</text>
            <text className='label label-active' x='382.6285656738281' y='84.78125'>Mass.</text>
            <text className='label' x='278.70553100585937' y='84.78125'>Mich.</text>
            <text className='label label-active' x='174.78247314453125' y='84.78125'>Minn.</text>
            <text className='label' x='244.06450927734375' y='204.78125'>Miss.</text>
            <text className='label' x='209.42348754882812' y='144.78125'>Mo.</text>
            <text className='label' x='105.50044128417969' y='84.78125'>Mont.</text>
            <text className='label' x='174.78247314453125' y='144.78125'>Neb.</text>
            <text className='label label-active' x='105.50044128417969' y='144.78125'>Nev.</text>
            <text className='label label-active' x='399.9490759277344' y='54.78125'>N.H.</text>
            <text className='label label-active' x='365.30807006835937' y='114.78125'>N.J.</text>
            <text className='label label-active' x='157.46197021484375' y='174.78125'>N.M.</text>
            <text className='label label-active' x='347.9875439453125' y='84.78125'>N.Y.</text>
            <text className='label' x='296.0260266113281' y='174.78125'>N.C.</text>
            <text className='label' x='140.14145935058593' y='84.78125'>N.D.</text>
            <text className='label' x='296.0260266113281' y='114.78125'>Ohio</text>
            <text className='label' x='174.78247314453125' y='204.78125'>Okla.</text>
            <text className='label label-active' x='70.8594253540039' y='144.78125'>Ore.</text>
            <text className='label' x='330.66704833984375' y='114.78125'>Pa.</text>
            <text className='label label-active' x='417.26958740234375' y='84.78125'>R.I.</text>
            <text className='label' x='330.66704833984375' y='174.78125'>S.C.</text>
            <text className='label' x='157.46197021484375' y='114.78125'>S.D.</text>
            <text className='label' x='261.38501220703125' y='174.78125'>Tenn.</text>
            <text className='label' x='192.10298400878906' y='234.78125'>Texas</text>
            <text className='label label-active' x='122.8209521484375' y='174.78125'>Utah</text>
            <text className='label label-active' x='365.30807006835937' y='54.78125'>Vt.</text>
            <text className='label' x='313.3465368652344' y='144.78125'>Va.</text>
            <text className='label label-active' x='70.8594253540039' y='84.78125'>Wash.</text>
            <text className='label' x='278.70553100585937' y='144.78125'>W.Va.</text>
            <text className='label label-active' x='209.42348754882812' y='84.78125'>Wis.</text>
            <text className='label' x='122.8209521484375' y='114.78125'>Wyo.</text>
          </g>

          <g className='River'>
            <g className='map' transform='translate(1.000000, 2.000000)'>
              <g className='states'>
                <path className='state state-alaska' d='M35.5,0l17.3,10v20L35.5,40L18.2,30V10L35.5,0z' />
                <path className='state state-maine' d='M416.6,0l17.3,10v20l-17.3,10l-17.3-10V10L416.6,0z' />
                <path
                  className='state state-vermont'
                  d='M364.6,30l17.3,10v20l-17.3,10l-17.3-10V40
                    L364.6,30z'
                />
                <path
                  className='state state-new-hampshire'
                  d='M399.3,30l17.3,10v20l-17.3,10l-17.3-10V40
                    L399.3,30z'
                />
                <path
                  className='state state-washington'
                  d='M70.2,60l17.3,10v20l-17.3,10L52.8,90V70
                    L70.2,60z'
                />
                <path
                  className='state state-montana'
                  d='M104.8,60l17.3,10v20l-17.3,10L87.5,90V70
                    L104.8,60z'
                />
                <path
                  className='state state-north-dakota'
                  d='M139.4,60l17.3,10v20l-17.3,10l-17.3-10V70
                    L139.4,60z'
                />
                <path
                  className='state state-minnesota'
                  d='M174.1,60l17.3,10v20l-17.3,10l-17.3-10V70
                    L174.1,60z'
                />
                <path
                  className='state state-wisconsin'
                  d='M208.7,60l17.3,10v20l-17.3,10l-17.3-10V70
                    L208.7,60z'
                />
                <path className='state state-michigan' d='M278,60l17.3,10v20L278,100l-17.3-10V70L278,60z' />
                <path
                  className='state state-new-york'
                  d='M347.3,60l17.3,10v20l-17.3,10L330,90V70
                    L347.3,60z'
                />
                <path
                  className='state state-massachusetts'
                  d='M381.9,60l17.3,10v20l-17.3,10l-17.3-10V70
                    L381.9,60z'
                />
                <path
                  className='state state-rhode-island'
                  d='M416.6,60l17.3,10v20l-17.3,10l-17.3-10V70
                    L416.6,60z'
                />
                <path
                  className='state state-idaho'
                  d='M87.5,90l17.3,10v20l-17.3,10l-17.3-10v-20L87.5,90z
                    '
                />
                <path
                  className='state state-wyoming'
                  d='M122.1,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L122.1,90z'
                />
                <path
                  className='state state-south-dakota'
                  d='M156.8,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L156.8,90z'
                />
                <path
                  className='state state-iowa'
                  d='M191.4,90l17.3,10v20l-17.3,10l-17.3-10v-20L191.4,90
                    z'
                />
                <path
                  className='state state-illinois'
                  d='M226.1,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L226.1,90z'
                />
                <path
                  className='state state-indiana'
                  d='M260.7,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L260.7,90z'
                />
                <path
                  className='state state-ohio'
                  d='M295.3,90l17.3,10v20l-17.3,10L278,120v-20L295.3,90z
                    '
                />
                <path
                  className='state state-pennsylvania'
                  d='M330,90l17.3,10v20L330,130l-17.3-10v-20
                    L330,90z'
                />
                <path
                  className='state state-new-jersey'
                  d='M364.6,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L364.6,90z'
                />
                <path
                  className='state state-connecticut'
                  d='M399.3,90l17.3,10v20l-17.3,10l-17.3-10v-20
                    L399.3,90z'
                />
                <path
                  className='state state-oregon'
                  d='M70.2,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L70.2,120z'
                />
                <path
                  className='state state-nevada'
                  d='M104.8,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L104.8,120z'
                />
                <path
                  className='state state-colorado'
                  d='M139.4,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L139.4,120z'
                />
                <path
                  className='state state-nebraska'
                  d='M174.1,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L174.1,120z'
                />
                <path
                  className='state state-missouri'
                  d='M208.7,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L208.7,120z'
                />
                <path
                  className='state state-kentucky'
                  d='M243.4,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L243.4,120z'
                />
                <path
                  className='state state-west-virginia'
                  d='M278,120l17.3,10v20L278,160l-17.3-10v-20
                    L278,120z'
                />
                <path
                  className='state state-virginia'
                  d='M312.7,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L312.7,120z'
                />
                <path
                  className='state state-maryland'
                  d='M347.3,120l17.3,10v20l-17.3,10L330,150v-20
                    L347.3,120z'
                />
                <path
                  className='state state-delaware'
                  d='M381.9,120l17.3,10v20l-17.3,10l-17.3-10v-20
                    L381.9,120z'
                />
                <path
                  className='state state-california'
                  d='M87.5,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L87.5,150z'
                />
                <path
                  className='state state-utah'
                  d='M122.1,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L122.1,150z'
                />
                <path
                  className='state state-new-mexico'
                  d='M156.8,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L156.8,150z'
                />
                <path
                  className='state state-kansas'
                  d='M191.4,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L191.4,150z'
                />
                <path
                  className='state state-arkansas'
                  d='M226.1,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L226.1,150z'
                />
                <path
                  className='state state-tennessee'
                  d='M260.7,150l17.3,10v20l-17.3,10l-17.3-10v-20
                    L260.7,150z'
                />
                <path
                  className='state state-north-carolina'
                  d='M295.3,150l17.3,10v20l-17.3,10L278,180
                    v-20L295.3,150z'
                />
                <path
                  className='state state-south-carolina'
                  d='M330,150l17.3,10v20L330,190l-17.3-10v-20
                    L330,150z'
                />
                <path
                  className='state state-district-of-columbia'
                  d='M364.6,150l17.3,10v20l-17.3,10
                    l-17.3-10v-20L364.6,150z'
                />
                <path
                  className='state state-arizona'
                  d='M139.4,180l17.3,10v20l-17.3,10l-17.3-10v-20
                    L139.4,180z'
                />
                <path
                  className='state state-oklahoma'
                  d='M174.1,180l17.3,10v20l-17.3,10l-17.3-10v-20
                    L174.1,180z'
                />
                <path
                  className='state state-louisiana'
                  d='M208.7,180l17.3,10v20l-17.3,10l-17.3-10v-20
                    L208.7,180z'
                />
                <path
                  className='state state-mississippi'
                  d='M243.4,180l17.3,10v20l-17.3,10l-17.3-10v-20
                    L243.4,180z'
                />
                <path
                  className='state state-alabama'
                  d='M278,180l17.3,10v20L278,220l-17.3-10v-20L278,180
                    z'
                />
                <path
                  className='state state-georgia'
                  d='M312.7,180l17.3,10v20l-17.3,10l-17.3-10v-20
                    L312.7,180z'
                />
                <path
                  className='state state-hawaii'
                  d='M18.2,210l17.3,10v20l-17.3,10L0.9,240v-20
                    L18.2,210z'
                />
                <path
                  className='state state-texas'
                  d='M191.4,210l17.3,10v20l-17.3,10l-17.3-10v-20
                    L191.4,210z'
                />
                <path
                  className='state state-florida'
                  d='M295.3,210l17.3,10v20l-17.3,10L278,240v-20
                    L295.3,210z'
                />
              </g>
              <g className='river' transform='translate(191.000000, 70.000000)'>
                <g>
                  <polygon
                    fill='#427BBD'
                    points='33,140.5 33,119.1 50.3,108.9 50.3,91 33.1,81.2 33.1,61.2 15.7,
                        51.1 15.7,31.2 -1.6,21.2 -1.6,-0.4 2.4,-0.4 2.4,18.8 19.7,28.8 19.7,
                        48.8 37.1,58.8 37.1,78.8 54.3,88.6 54.3,111.1 37,121.3 37,140.5'
                  />
                  <path
                    fill='#FFFFFF'
                    d='M1.4,0.6v18.8l17.3,10v20l17.4,10v20l17.2,9.8v21.4L36,120.8v18.7h-2v-19.9l17.3-10.2v
                        -19l-17.2-9.8v-20l-17.4-10v-20l-17.3-10v-20H1.4 M3.4-1.4h-2h-2h-2v2v20v1.2l1,
                        0.6l16.3,9.4v18.8v1.2l1,0.6l16.4,9.5v18.8v1.2l1,0.6l16.2,9.2v16.7L33,
                        117.9l-1,0.6v1.1v19.9v2h2h2h2v-2v-17.6l16.3-9.6l1-0.6v-1.1V89.2v-1.2
                        l-1-0.6l-16.2-9.2V59.4v-1.2l-1-0.6l-16.4-9.5
                        V29.4v-1.2l-1-0.6L3.4,18.3V0.6V-1.4L3.4-1.4z'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

HexMap.propTypes = { children: React.PropTypes.element, title: React.PropTypes.element }

export default HexMap

