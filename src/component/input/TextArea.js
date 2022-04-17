import React from 'react'

const TextArea = ({examplefor, formLabel, label, formControl, inputId, row}) => {
  return (
    <div class="mb-3">
  <label for={examplefor} class={formLabel}>{label}</label>
  <textarea class={formControl} id={inputId} rows={row}></textarea>
</div>
  )
}

export default TextArea