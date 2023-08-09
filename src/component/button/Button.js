import React from 'react'

const Button = ({text, width, backgroundColor, color, border, type}) => {
    const style = {
        width: width ? width : "100%",
        backgroundColor: backgroundColor ? backgroundColor : "blue",
        color : color ? color : "white",
        border : border ? border : "none"
    }
  return (
    <div>
        <button style={style} type={type ? type : "submit"} className="btn btn-primary btn-lg">{text ? text : "button"}</button>
    </div>
  )
}

export default Button