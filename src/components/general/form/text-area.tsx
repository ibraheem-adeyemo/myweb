import React from 'react'
import { InputLabel } from './input-label'
import CustomTextArea from './custom-textarea'
import { CustomFieldProps } from '@/types/components'

const TextArea = ({
    messageType,
    extraBottom,
    extra,
    isRequired,
    maxLength,
    error,
    label,
    labelStyles,
    isLoading,
    ...inputProps
}: CustomFieldProps) => {
  return (
    <div className='text-sm' data-testid='custom-textfield'>
      <CustomTextArea
        {...inputProps}
         labelStyles={labelStyles} 
         label={label}
         isRequired={isRequired} 
         maxLength={maxLength}
        isLoading={isLoading}
        error={messageType?.type === 'error' || error}
      />

      {!error && <div className='text-gray-35 text-xs'>{extraBottom}</div>}
    </div>
  )
}

export default TextArea