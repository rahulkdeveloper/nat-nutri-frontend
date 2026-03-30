import React from 'react'
import { Link } from 'react-router-dom'

const BecomeDistributer = () => {
  return (
    <section className="distributor-section text-center text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Become a Distributor</h2>

          <p className="col-lg-7 mx-auto">
            Join our growing network of partners and help bring healthy
            nutrition products to more people across the country.
          </p>

          <Link className="btn btn-light mt-3" to={"/contact-us"}>Apply Now</Link>
        </div>
      </section>
  )
}

export default BecomeDistributer