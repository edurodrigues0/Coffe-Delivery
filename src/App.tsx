import './styles/global.css'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { CoffeeCard } from './components/CoffeeCard'
import { Header } from './components/Header'
import { Item } from './components/Item'
import { api } from './services/api'
import coffeeImage from './assets/coffee.png'

interface Coffee {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: [string]
}

export function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    api.get('/coffees').then((response) => {
      setCoffees(response.data.coffees)
    })
  }, [])

  return (
    <div className="max-w-[1440px] m-auto">
      <Header />
      <div className="w-full pt-24 px-40 pb-28 bg-background-image bg-repeat flex items-center justify-between">
        <div className="max-w-xl">
          <div className="flex flex-col gap-4">
            <h1 className="font-baloo font-bold text-5xl text-base-subtitle">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            
            <p className="text-xl font-normal font-sans text-base-subtitle">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </div>
          <div className="mt-16 grid grid-cols-[repeat(2,_minmax(300px,_1fr))] gap-y-5">
            <Item text="Compra simples e segura" color="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </Item>

            <Item text="Embalagem mantém o café intacto" color="gray">
              <Package size={16} weight="fill" />
            </Item>

            <Item text="Embalagem mantém o café intacto" color="yellow">
              <Timer size={16} weight="fill" />
            </Item>

            <Item text="O café chega fresquinho até você">
              <Coffee size={16} weight="fill" />
            </Item>
          </div>
        </div>
        <img src={coffeeImage} />
      </div>

      <main className="px-40 flex flex-col">
        <h2 className="mt-8 text-[32px] text-base-subtitle font-bold font-baloo">
          Nossos cafés
        </h2>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-10">
          {
            coffees.map((coffee) => {
              return(
                <CoffeeCard
                  key={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  image={coffee.image}
                  price={coffee.price}
                  tags={coffee.tags}
                />
              )
            })
          }
        </div>
      </main>

    </div>
  )
}
