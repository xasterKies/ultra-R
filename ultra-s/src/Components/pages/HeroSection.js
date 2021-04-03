import React from 'react'
import {Button} from './Button';
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-darkBg'}></div>
        </>
    )
}

export default HeroSection
