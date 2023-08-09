import React from 'react'

const TextArea = ({examplefor, formLabel, label, formControl, inputId, row, value, onChange}) => {
  return (
    <div className="mb-3">
  <label htmlFor={examplefor} className={formLabel}>{label}</label>
  <textarea className={formControl} id={inputId} rows={row} value={value} onChange={onChange}></textarea>
</div>
  )
}

export default TextArea