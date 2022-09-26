import React from "react";
import "./index.css";
import "material-symbols";


function Index( { children, type, onClick, icon, variant, size, stretched, position } ) {

    const STYLES = [
        "btn--primary--solid",
        "btn--primary--outline",
        "btn--warning--solid",
        "btn--warning--outline",
        "btn--danger--solid",
        "btn--danger--outline",
        "btn--succes--solid",
        "btn--succes--outline"
    ];

    const SIZES = [
        "btn--small",
        "btn--medium",
        "btn--large"
    ];

    const STRETCHED = [
        "btn--fit-content",
        "btn--stretched"
    ];

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
            { position === "icon--left"
                && <span className="material-symbols-outlined">{ icon }</span>
            }
            { children }
            { position === "icon--right"
                && <span className="material-symbols-outlined">{ icon }</span>
            }

        </button>
    );
}

export default Index;