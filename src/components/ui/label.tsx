import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, className, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  );
};

export { Label };