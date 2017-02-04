import React from 'react'
import './Pricing.scss'

var PricingComponent = React.createClass({
  render: function () {
    return (
      <section className='section'>
        {/* Section heading */}
        <h1 className='section-heading'>Our pricing plans</h1>
        {/* Section description */}
        <p className='section-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi,
            veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
          Quia, minima?
        </p>
        {/* First row */}
        <div className='row'>
          {/* First column */}
          <div className='col-lg-4 col-md-12 mb-r'>
            {/* Pricing card */}
            <div
              className='card-overlay pricing-card'
              style={{ backgroundImage: 'url("/design/logo5.png")', backgroundSize: 'cover' }}
            >
              {/* Content */}
              <div className='white-text text-xs-center'>
                <div className='card-block'>
                  <h5>Basic</h5>
                  {/* Price */}
                  <div className='price'>
                    <h1>10</h1>
                  </div>
                  {/* /.Price */}
                  <ul className='striped'>
                    <li>
                      <p><strong>1</strong> project</p>
                    </li>
                    <li>
                      <p><strong>100</strong> components</p>
                    </li>
                    <li>
                      <p><strong>150</strong> features</p>
                    </li>
                    <li>
                      <p><strong>200</strong> members</p>
                    </li>
                    <li>
                      <p><strong>250</strong> messages</p>
                    </li>
                  </ul>
                  <a className='btn btn-lg btn-outline-white'> Buy now</a>
                </div>
              </div>
            </div>
            {/* /.Pricing card */}
          </div>
          {/* /First column */}
          {/* Second column */}
          <div className='col-lg-4 col-md-6 mb-r'>
            {/* Pricing card */}
            <div
              className='card-overlay pricing-card'
              style={{ backgroundImage: 'url("/design/logo45.png")', backgroundSize: 'cover' }}
            >
              {/* Content */}
              <div className='white-text text-xs-center'>
                <div className='card-block'>
                  <h5>Pro</h5>
                  {/* Price */}
                  <div className='price'>
                    <h1>20</h1>
                  </div>
                  {/* /.Price */}
                  <ul className='striped'>
                    <li>
                      <p><strong>3</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>200</strong> components</p>
                    </li>
                    <li>
                      <p><strong>250</strong> features</p>
                    </li>
                    <li>
                      <p><strong>300</strong> members</p>
                    </li>
                    <li>
                      <p><strong>350</strong> messages</p>
                    </li>
                  </ul>
                  <a className='btn btn-lg btn-outline-white'> Buy now</a>
                </div>
              </div>
            </div>
            {/* /.Pricing card */}
          </div>

          <div className='col-lg-4 col-md-6 mb-r'>
            {/* Pricing card */}
            <div
              className='card-overlay pricing-card'
              style={{ backgroundImage: 'url("/design/logo44.png")', backgroundSize: 'cover' }}
            >
              {/* Content */}
              <div className='white-text text-xs-center'>
                <div className='card-block'>
                  <h5>Unlimited</h5>
                  {/* Price */}
                  <div className='price'>
                    <h1>?</h1>
                  </div>
                  {/* /.Price */}
                  <ul className='striped'>
                    <li>
                      <p><strong>3</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>200</strong> components</p>
                    </li>
                    <li>
                      <p><strong>250</strong> features</p>
                    </li>
                    <li>
                      <p><strong>300</strong> members</p>
                    </li>
                    <li>
                      <p><strong>350</strong> messages</p>
                    </li>
                  </ul>
                  <a className='btn btn-lg btn-outline-white'> Buy now</a>
                </div>
              </div>
            </div>
            {/* /.Pricing card */}
          </div>
        </div>

      </section>
    )
  }
})

module.exports = PricingComponent

