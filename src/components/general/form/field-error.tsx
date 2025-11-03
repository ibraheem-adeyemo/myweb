import { ReactNode } from 'react';

const FieldError = ({ error }: { error?: string | ReactNode }) => {
  if (!error || (typeof error === 'string' && !error.trim())) {
    return null;
  }
  return (
    <p
      data-testid='field-error'
      role='alert'
      aria-live='polite'
      className='flex items-center gap-1 text-xs break-words text-red-500'
    >
      {error}
    </p>
  );
};

export default FieldError;
