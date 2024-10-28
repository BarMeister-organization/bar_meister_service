export interface CocktailsTypeData {
  id: number;
  photo: string;
  name: string;
  description: string;
  link: string;
}

export const cocktailsTypeData: CocktailsTypeData[] = [
  { 
    id: 1,
    photo: 'img/cocktailsPage/top100.webp',
    name: 'Top 100 cocktails',
    description: 'Embark on a mixological adventure with our "Top 100 Cocktails", the ultimate destination for cocktail aficionados and bartending enthusiasts',
    link: '/top100',
  },
  { 
    id: 2,
    photo: 'img/cocktailsPage/lowalcohol.webp',
    name: 'Spritzes',
    description: 'Embrace the sparkle and zest of our exclusive "Spritzes" collection, where every sip is a toast to refreshment and vibrant flavor',
    link: '/spritzes',
  },
  { 
    id: 3,
    photo: 'img/cocktailsPage/strong.webp',
    name: 'Strong cocktails',
    description: 'Discover the bold flavors of our "Strong Cocktails" collection, where every sip packs a punch with rich spirits and intense character',
    link: '/strong',
  },
  { 
    id: 4,
    photo: 'public/img/cocktailsPage/mocktails.webp',
    name: 'Mocktails',
    description: 'Discover the vibrant world of "Mocktails / Non-Alcoholic Cocktails" on our comprehensive page, where flavor, innovation, and inclusivity meet in every glass',
    link: '/mocktails',
  }
]