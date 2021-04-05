import React from 'react'
import { Button } from './Button'

function Pricing() {
    return (
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up"
                         className='pricing__container-cardInfo'>
                            <div className="icon">
                                <FaFire/>
                            </div>
                            <h3>Starter</h3>
                            <h4>$8.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-feature">
                                <li>100 Transactions</li>
                                <li>2% cash back</li>
                                <li>$10,000 Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
