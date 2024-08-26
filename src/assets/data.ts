import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
  {
    id: 1,
    name: 'Hambuger',
    price: 5,
    cookTime: '5-10',
    favorite: false,
    origins: ['American'],
    stars: 4,
    imageUrl: 'assets/images/foods/food-1.jpg',
    tags: ['FastFood', 'Hambuger', 'Breakfast' ]
  },
  {
    id: 2,
    name: 'Pastar with Meatball',
    price: 10,
    cookTime: '15-20',
    favorite: false,
    origins: ['Italia'],
    stars: 4,
    imageUrl: 'assets/images/foods/food-2.jpg',
    tags: ['FastFood', 'Pastar', 'Lunch' ]
  },
  {
    id: 3,
    name: 'Fried Chicken',
    price: 3,
    cookTime: '5-10',
    favorite: true,
    origins: ['American'],
    stars: 4.5,
    imageUrl: 'assets/images/foods/food-3.jpg',
    tags: ['FastFood', 'FriedChicken', 'Lunch' ]
  },
  {
    id: 4,
    name: 'Hot Dog',
    price: 2,
    cookTime: '3-5',
    favorite: false,
    origins: ['American'],
    stars: 3.5,
    imageUrl: 'assets/images/foods/food-4.jpg',
    tags: ['FastFood', 'HotDog', 'Breakfast' ]
  },
  {
    id: 5,
    name: 'Pastar',
    price: 8,
    cookTime: '20-25',
    favorite: true,
    origins: ['Italia'],
    stars: 4,
    imageUrl: 'assets/images/foods/food-5.jpg',
    tags: ['FastFood', 'Pastar', 'Lunch' ]
  },
  {
    id: 6,
    name: 'Pizza',
    price: 5,
    cookTime: '5-10',
    favorite: true,
    origins: ['Italia'],
    stars: 5,
    imageUrl: 'assets/images/foods/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch' ]
  },
]
