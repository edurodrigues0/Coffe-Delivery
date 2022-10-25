import { MapPin, ShoppingCart } from "phosphor-react"

import { Button } from "./Button"
import { Logo } from "../assets/logo"
import { useState } from "react"

export function Header() {
  const [isCoffeInCart, setIsCoffeInCart] = useState(false);

  return(
    <header className="px-40 py-8 flex items-center justify-between">
      <a href="#" className="outline-none mt-[2px] border-b-2 border-transparent focus:border-b-2 focus:border-purple-normal">
        <Logo />
      </a>
      <div className="flex items-center gap-3">
        <Button.Root buttonType="small">
          <Button.Icon>
            <MapPin size={22} weight="fill" className="text-purple-normal" />
          </Button.Icon>
          <Button.Text
            className="text-purple-dark text-sm"
            text="Porto Alegre, RS" 
          />
        </Button.Root>

        <Button.Root buttonType="cart">
          <Button.Icon>
            <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
          </Button.Icon>
          
          {isCoffeInCart && 
            <span className="h-5 w-5 flex items-center justify-center bg-yellow-dark rounded-full font-bold text-xs text-white absolute top-[-8px] right-[-8.35px]">
              3
            </span>
          }
        </Button.Root>
      </div>
    </header>
  )
}