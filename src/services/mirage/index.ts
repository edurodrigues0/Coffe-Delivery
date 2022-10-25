import { Model, belongsTo, createServer, hasMany } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      coffee: Model
    },
    seeds(server) {
      server.db.loadData({
        coffees: [
          {
            id: 1,
            name: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            image: "/coffees/tradicional.png",
            price: 9.90,
            tags: ["tradicional"] 
          },
          {
            id: 2,
            name: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            image: "/coffees/tradicional.png",
            price: 8.90,
            tags: ["tradicional"] 
          },
          {
            id: 3,
            name: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            image: "/coffees/tradicional.png",
            price: 7.90,
            tags: ["tradicional"] 
          },
          {
            id: 4,
            name: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            image: "/coffees/tradicional.png",
            price: 10.90,
            tags: ["tradicional", "gelado"] 
          },
          {
            id: 5,
            name: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            image: "/coffees/tradicional.png",
            price: 7.90,
            tags: ["tradicional", "com leite"] 
          },
          {
            id: 6,
            name: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            image: "/coffees/tradicional.png",
            price: 11.90,
            tags: ["tradicional", "com leite"] 
          },
          {
            id: 7,
            name: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            image: "/coffees/tradicional.png",
            price: 11.00,
            tags: ["tradicional", "com leite"] 
          },
          {
            id: 8,
            name: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            image: "/coffees/tradicional.png",
            price: 9.90,
            tags: ["tradicional", "com leite"] 
          },
          {
            id: 9,
            name: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            image: "/coffees/tradicional.png",
            price: 9.90,
            tags: ["tradicional", "com leite"] 
          },
          {
            id: 10,
            name: "Chocolate Quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            image: "/coffees/tradicional.png",
            price: 15.90,
            tags: ["especial", "com leite"] 
          },
          {
            id: 11,
            name: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            image: "/coffees/tradicional.png",
            price: 14.90,
            tags: ["especial", "alcoólico", "gelado"] 
          },
          {
            id: 12,
            name: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            image: "/coffees/tradicional.png",
            price: 9.50,
            tags: ["especial"] 
          },
          {
            id: 13,
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            image: "/coffees/tradicional.png",
            price: 16.90,
            tags: ["especial"] 
          },
          {
            id: 14,
            name: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            image: "/coffees/tradicional.png",
            price: 12.40,
            tags: ["especial", "acoólico"] 
          },
        ]
      })
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/coffees', () => {
        return this.schema.all('coffee')
      });
    }
  })
}