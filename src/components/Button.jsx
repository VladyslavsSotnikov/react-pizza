import React from 'react'


function Button({onClickAdd,className, children }) {
    return (
        <button className={className} onClick = {onClickAdd? () => onClickAdd(): null}>{children}</button>
    )
}

export default Button
