// import React, { ReactNode } from 'react';

// export type ButtonProps = {
//   /**
//    * a node to be rendered in the special component.
//    */
//   children?: ReactNode;
// };

// export function Button({ children }: ButtonProps) {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }

import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  /* Determines whether a button is in 'loading' state */
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button disabled={isLoading || disabled} {...rest}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
};
