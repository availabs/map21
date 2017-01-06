import React from 'react'
import HexMap from 'components/HexMap/HexMap'
import './LandingView.scss'

export const HomeView = () => (
  <div className='container-fluid' style={{ width: '100%' }}>
    <div className='row' style={{
      backgroundImage: 'url("/design/traffic-congestion.jpg")',
      backgroundSize: 'cover',
      height: '75vh',
      textAlign: 'center',
      color: 'white'
    }}>
      <div className='col-xs-12' style={{textAlign: 'center'}}>
        <h2 style={{ paddingTop: '25vh' }}>
          <img src='/icons/freeflow-logo-grey.png' />
          
        </h2>
      </div>
    </div>
    <div className='row bg' />
    <div className='container' style={{ position:'relative', top: -60, zIndex:5 }}>
      <section>
        <div className='col-sm-12 padded' style={{textAlign: 'center'}}>
            <h1 className='section-heading'>Map-21 Reporting Made Easy<br />
            <small>Click a State to Begin</small></h1>
          </div>
        <div style={{position:'relative', top:-90}}>
          <HexMap />
        </div>
      </section>
      <section className='section'>
        <div className='row'>
          {/* Section heading */}
          

          <div className='col-sm-6 padded'>
            <h4 style={{ textAlign: 'center' }}>MEET MAP-21 AND FAST ACT REQUIREMENTS</h4>
            <p style={{ textAlign: 'justify' }}>
          Get the first jump on the competition with your morning coffee.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <div className='col-sm-6 padded' >
            <h4 style={{ textAlign: 'center' }}>Easily Searchable</h4>
            <span style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          </span>
          </div>
          <div className='col-sm-6 padded' >
            <h4 style={{ textAlign: 'center' }}>Maps & Analysis</h4>
            <span style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </span>
          </div>
          <div className='col-sm-6 padded' >
            <h4 style={{ textAlign: 'center' }}>Other Features</h4>
            <span style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default HomeView

