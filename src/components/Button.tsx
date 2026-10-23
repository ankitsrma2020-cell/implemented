import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const classes = ['button', variant, className].filter(Boolean).join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
