import React from 'react';

interface InputProps {
  props?: any
  ref?: any
}

export const Input: React.FC<InputProps> = React.forwardRef(({ref, ...props}) => {
  return <input
      {...props}
      ref={ref}
      className={''}
  />
});