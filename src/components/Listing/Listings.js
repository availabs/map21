import React from 'react'
import { connect } from 'react-redux'
import { loadData } from 'store/modules/listing'
import { Link, withRouter } from 'react-router'
import './ListingTable.scss'
// import BargraphD4 from 'components/utils/BarGraphD4'
// import BarGraph from 'components/utils/BarGraph/index'

class ProductListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search:'',
      currentPage: 0,
      pageLength: 30,
      productSearch:'',
      manSearch:''
    }
    // this.pagination = this.pagination.bind(this)
    // this.setPage = this.setPage.bind(this)
    this.productSearchChange = this.productSearchChange.bind(this)
    this.manSearchChange = this.manSearchChange.bind(this)
    this.filterProducts = this.filterProducts.bind(this)
  }

  componentWillMount () {
    if (this.props.listings.length === 0) {
      this.props.loadData()
    }
  }

  productSearchChange (event) {
    this.setState({ productSearch: event.target.value })
  }

  manSearchChange (event) {
    this.setState({ manSearch: event.target.value })
  }

  filterProducts (products) {
    var currentProducts = products
    // if (this.state.productSearch.length > 0) {
    //   currentProducts = currentProducts.filter((d) => {
    //     return d.title.toUpperCase().includes(this.state.productSearch.toUpperCase())
    //   })
    // }

    // if (this.state.manSearch.length > 0) {
    //   currentProducts = currentProducts.filter((d, i) => {
    //     return d.manufacturer.toUpperCase().includes(this.state.manSearch.toUpperCase())
    //   })
    // }
    return currentProducts
  }

  navigate (e) {
    console.log('nav', e.target.parent)
    this.props.router.push('/liting/' + id)
  }

  render () {
    // console.log('render listing', this.state.manSearch.toUpperCase())
    if (this.props.listings.length === 0) { return (<div>Loading...</div>) }
    var currentProducts = this.filterProducts(this.props.listings)
    console.log(currentProducts)
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <table className='table table-hover' style={{ backgroundColor: 'white' }}>
            <thead>
              <tr>
                <th>caseNumber</th>
                <th>date</th>
                <th>status</th>
                <th className='hidden-xs'>judge</th>
                <th className='hidden-sm' style={{ width: '40%' }}>description</th>
              </tr>
            </thead>
            <tbody>
              {
                currentProducts
                .sort((a, b) => {
                  return new Date(b.date) - new Date(a.date)
                })
                .map((d, i) => {
                  return (
                    <tr key={d.case_number.replace(/ /g, '')}>
                      <td>
                        <Link to={'/listing/' + d.case_number.replace(/ /g, '')}>
                          {d.case_number.replace(/ /g, '')}
                        </Link>
                      </td>
                      <td>{d.date}</td>
                      <td>{d.status}</td>
                      <td className='hidden-xs'>{d.judge}</td>
                      <td className='hidden-sm'>{d.description}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

ProductListing.propTypes = {
  loadData: React.PropTypes.func.isRequired,
  listings: React.PropTypes.array

}

const mapStateToProps = (state) => ({
  listings : state.listing.data || []
})

export default connect(mapStateToProps, { loadData })(withRouter(ProductListing))
