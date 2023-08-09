import React from 'react'

const FormInput = ({examplefor, formLabel, label, type, formControl, inputId, ariaDes, value, onChange}) => {
  return (
    <div className="mb-3">
    <label htmlFor={examplefor} className={formLabel}>{label}</label>
    <input type={type} className={formControl} id={inputId} aria-describedby={ariaDes} value={value} onChange={onChange}/>
  </div>
  )
}

export default FormInput