import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Button } from './Button'

interface CoffeeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: [string];
}

export function CoffeeCard({name, description, image, price, tags}: CoffeeCardProps) {
  return(
    <div className="w-64 h-80 px-5 flex flex-col bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[35px] relative">
      <img className="absolute top-[-20px] left-[calc(50%-120px/2)]" src={image} alt="coffee" />
      <div className="mt-28 w-full flex flex-col justify-center items-center">
        <div className="flex items-center gap-1">
          {
            tags.map(tag => {
              return(
                <span className="px-2 py-1 bg-yellow-light rounded-full text-yellow-dark text-xs font-sans font-bold">
                  {tag.toUpperCase()}
                </span>
              )
            })
          }
        </div>
        <h2 className="mt-4 font-baloo font-bold text-sm">
          {name}
        </h2>
        <p className="mt-2 font-sans text-[0.875rem] text-center text-base-label">
          {description}
        </p>
      </div>

      <div className="mt-8 mb-5 flex flex-1">
        <div className="flex flex-1 items-center justify-between">
          <p className="font-sans font-xs text-base-text">
            R$
            <span className="font-baloo font-extrabold text-2xl ml-[2px]">
              {price}
            </span>
          </p>

          <div className="flex gap-2">
            <div className="flex gap-1 items-center bg-base-button rounded">
              <Button.Root buttonType="transparent">
                <Button.Icon>
                  <Minus className="text-purple-normal" size={14}/>
                </Button.Icon>
              </Button.Root>
              <span>0</span>
              <Button.Root buttonType="transparent">
                <Button.Icon>
                  <Plus className="text-purple-normal" size={14}/>
                </Button.Icon>
              </Button.Root>
            </div>

            <Button.Root buttonType='icon'>
              <Button.Icon >
                <ShoppingCart className="text-base-card" weight='fill' size={22} />
              </Button.Icon>
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  )
}