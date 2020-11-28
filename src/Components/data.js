import potatoes from '../Assets/vegetables/potatoes.png'
import cabbage from '../Assets/vegetables/cabbage.png'
import garlic from '../Assets/vegetables/garlic.png'
import onionRed from '../Assets/vegetables/onion-red.png'
import onion from '../Assets/vegetables/onion.png'
import tomatoes from '../Assets/vegetables/tomatoes.png'
import lays from '../Assets/chips/chips-lays.png'
import laysLowfat from '../Assets/chips/chips-lays-lowfat.png'
import laysHoney from '../Assets/chips/chips-lays-honeybbq.png'

export default {
  products: {
    vegetables: [
      {
        id: 'potato',
        name: 'Potatoes',
        image: potatoes,
        price: '100',
      },
      {
        id: 'cabbage',
        name: 'Cabbage',
        image: cabbage,
        price: '100',
      },
      {
        id: 'garlic',
        name: 'Garlic',
        image: garlic,
        price: '100',
      },
      {
        id: 'redOnion',
        name: 'Red Onion',
        image: onionRed,
        price: '100',
      },
      {
        id: 'onion',
        name: 'Onion',
        image: onion,
        price: '100',
      },
      {
        id: 'tomatoes',
        name: 'Tomatoes',
        image: tomatoes,
        price: '100',
      },
    ],
    snacks: [
      {
        id: 'lays',
        name: 'Lays',
        image: lays,
        price: '100',
      },
      {
        id: 'laysHoneyBbq',
        name: 'Lays HoneyBbq',
        image: laysHoney,
        price: '100',
      },
      {
        id: 'laysLowFat',
        name: 'Lays Lowfat',
        image: laysLowfat,
        price: '100',
      },
    ],
    drinks: [
      {
        id: 'coke',
        name: 'Coke',
        image: potatoes,
        price: '100',
      },
      {
        id: 'sprite',
        name: 'Sprite',
        image: cabbage,
        price: '100',
      },
      {
        id: 'pepsi',
        name: 'Pepsi',
        image: garlic,
        price: '100',
      },
    ],
    meatPoultry: [
      {
        id: 'meat',
        name: 'Meat',
        image: lays,
        price: '100',
      },
      {
        id: 'chickenWings',
        name: 'Chicken Wings',
        image: laysHoney,
        price: '100',
      },
    ],
  },
}
