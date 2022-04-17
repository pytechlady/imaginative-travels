import React from 'react'

const FormInput = ({examplefor, formLabel, label, type, formControl, inputId, ariaDes}) => {
  return (
    <div class="mb-3">
    <label for={examplefor} class={formLabel}>{label}</label>
    <input type={type} class={formControl} id={inputId} aria-describedby={ariaDes}/>
  </div>
  )
}

export default FormInput