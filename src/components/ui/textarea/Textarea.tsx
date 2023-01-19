import React from 'react';

interface TextareaProps {
  props?: any
  ref?: any;
}

export const Textarea: React.FC<TextareaProps> = React.forwardRef(({ref, ...props}) => {
  return (
      <textarea
          {...props}
          ref={ref}
      />
  )
});