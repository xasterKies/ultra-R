import React from 'react'
import { Link } from 'react-router-dom'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button'
import './Pricing.css'

function Pricing() {
    return (
        
        <div>
            <IconContext.Provider value={{color: '#fff', size: 64}}></IconContext.Provider>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
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
                         </div>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
                            <div className="icon">
                                <BsXDiamondFill/>
                            </div>
                            <h3>Gold</h3>
                            <h4>$29.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-feature">
                                <li>1000 Transactions</li>
                                <li>3.5% cash back</li>
                                <li>$100,000 Limit</li>
                            </ul>
                         </div>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                Choose Plan
                            </Button>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
                            <div className="icon">
                                <GiCrystalize/>
                            </div>
                            <h3>Diamond</h3>
                            <h4>$99.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-feature">
                                <li> Unlimited Transactions</li>
                                <li>5% cash back</li>
                                <li>$10,000 Limit</li>
                            </ul>
                         </div>
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
