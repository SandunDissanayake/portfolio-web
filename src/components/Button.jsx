/**
 * @copyright 2024 Sandun Dissanayake
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ButtonPrimary = ({
    href,
    target='self',
    label,
    icon,
    classes


}) => {
 
    if (href) {
        return(
            <a 
            href={href}
            target={target}
            className={"btn btn-primary" + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-round"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </a>

          )
    }   else{
        return(
            <button className={"btn btn-primary" + classes}>
                {label}

                
            </button>

        )
    }
  
}

ButtonPrimary.PropTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

const ButtonOutline = ({
    href,
    target='self',
    label,
    icon,
    classes


}) => {
 
    if (href) {
        return(
            <a 
            href={href}
            target={target}
            className={"btn btn-outline" + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-round"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </a>

          )
    }   else{
        return(
            <button className={"btn btn-outline" + classes}>
                {label}

                
            </button>

        )
    }
  
}

ButtonOutline.PropTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}



export {
    ButtonPrimary,
    ButtonOutline
}