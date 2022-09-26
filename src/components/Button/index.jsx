import React from 'react';
import './index.css'
import { ReactComponent as ArrowForward } from '@material-symbols/svg-400/outlined/arrow_forward.svg';



function Index( { children, type, onClick, icon, variant, size, stretched } ) {

    const STYLES = [
        "btn--primary--solid",
        "btn--primary--outline",
        "btn--warning--solid",
        "btn--warning--outline",
        "btn--danger--solid",
        "btn--danger--outline",
        "btn--succes--solid",
        "btn--succes--outline",
    ];

    const SIZES = [
        "btn--small",
        "btn--medium",
        "btn--large"
    ]

    const STRETCHED = [
        "btn--fit-content",
        "btn--stretched"
    ]

    const setButtonVariant = STYLES.includes( variant )
        ? variant
        : STYLES[0];

    const setButtonSize = SIZES.includes( size )
        ? size
        : SIZES[0];

    const setButtonStretch = STRETCHED.includes( stretched )
        ? stretched
        : STRETCHED[0];

    return (
        <button
            className={ `btn ${ setButtonVariant } ${ setButtonSize } ${ setButtonStretch }` }
            type={ type }
            onClick={ onClick }
        >
            { children }
            <div className={`icon baseline`}>
            <ArrowForward />
            </div>
        </button>
    );
}

export default Index;