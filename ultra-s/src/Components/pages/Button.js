import React from 'react'
import './Button.css';

const STYLES = ['btn-primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']



export const Button = ({children, 
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
    }) => {
        const checkButtonStyle = STYLES.include(buttonStyle) ?
        buttonStyle : STYLE[0]

        const checkButtonSize = STYLES.include(buttonSize) ?
        buttonSize : SIZES[0]

        const checkButtonColor = STYLES.include(buttonColor) ?
        buttonColor : COLOR[0]

        return(
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick} type={type}
            >{children}</button>
        )
    }
