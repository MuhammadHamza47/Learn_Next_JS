import React from 'react'

export default function Button(props) {
  return (
    <div>
    <button type={props.btnType} className="hero_btn btn">{props.btnName}</button>
    </div>
  )
}
