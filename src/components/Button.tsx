import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

import { clsx } from "clsx";

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: 'small' | 'default' | 'icon' | 'cart' | 'transparent';
  className?: string;
}

function ButtonRoot({children, buttonType = 'default', className}: ButtonRootProps) {
  return(
    <button 
      className={clsx("flex items-center gap-1", {
        "py-3 px-2 rounded outline-none bg-yellow-normal transition-colors hover:bg-yellow-dark focus:ring-2 ring-purple-light": buttonType === "default",
        "p-2 rounded outline-none bg-purple-dark transition-colors hover:bg-purple-normal focus:ring-2 ring-purple-light": buttonType === 'icon',
        "p-2 rounded outline-none bg-base-button transition-colors hover:bg-base-hover focus:ring-2 ring-purple-normal": buttonType === 'small',
        "p-2 rounded outline-none bg-yellow-light transition-colors relative focus:ring-2 ring-purple-normal": buttonType === 'cart',
        "p-2 rounded outline-none bg-transparent relative focus:ring-2 ring-purple-normal": buttonType === 'transparent'
      },
      className
      )}
    >
      {children}
    </button>
  )
}

ButtonRoot.displayName = 'Button.Root'

interface ButtonIconProps {
  children: ReactNode;
}

function ButtonIcon({children}: ButtonIconProps) {
  return(
    <>
      {children}
    </>
  )
}

ButtonIcon.displayName = 'Button.Icon'

interface ButtonText {
  text: string;
  size?: 'xs' | 'sm';
  className?: string;
}

function ButtonText({text, size = "xs", className}: ButtonText) {
  return(
    <span 
      className={clsx("font-sans", className)}
    >
      {text}
    </span>
  )
}

ButtonText.displayName = 'Button.Text'

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText
}