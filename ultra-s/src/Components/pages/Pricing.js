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
            
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
                            <div className="icon">
                            <IconContext.Provider value={{color: '#fff', size: 64}}>
                                <FaFire/>
                            </IconContext.Provider>
                                
                            </div>
                            <h3>Starter</h3>
                            <h4>$8.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>100 Transactions</li>
                                <li>2% cash back</li>
                                <li>$10,000 Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                         </div>
                            
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
                            <div className="icon">
                            <IconContext.Provider value={{color: '#fff', size: 64}}>
                                <BsXDiamondFill/>
                            </IconContext.Provider>
                                
                            </div>
                            <h3>Gold</h3>
                            <h4>$29.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>1000 Transactions</li>
                                <li>3.5% cash back</li>
                                <li>$100,000 Limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                Choose Plan
                            </Button>
                         </div>
                            
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                         <div className='pricing__container-cardInfo'>
                            <div className="icon">
                            <IconContext.Provider value={{color: '#fff', size: 64}}>
                                <GiCrystalize/>

                            </IconContext.Provider>
                            </div>
                            <h3>Diamond</h3>
                            <h4>$99.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li> Unlimited Transactions</li>
                                <li>5% cash back</li>
                                <li>Unlimited amount</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                         </div>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
