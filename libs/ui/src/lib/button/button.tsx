import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({children, ...attributes}: ButtonProps) {
  return (
    <button 
    type='button'
    className='border border-gray-800 px-4 py-2 rounded uppercase'
    { ...attributes }>
      { children }
    </button>
  );
}

export default Button;
