export type Level = "Легко" | "Средне";
export type RecipeTag = "Быстрые" | "ПП" | "Веганские" | "Десерты";

export interface Category {
  id: string;
  name: string;
  emoji: string;
  bg: string;
}

export interface Recipe {
  id: string;
  title: string;
  minutes: number;
  level: Level;
  ingredients: number;
  emoji: string;
  bg: string;
  tags: RecipeTag[];
  /** Сюда можно положить URL или путь к фото блюда, например "/img/carbonara.jpg" */
  image?: string;
}

export const categories: Category[] = [
  { id: "veg", name: "Овощи", emoji: "🥬", bg: "linear-gradient(135deg,#ffe3e3,#ffd0c2)" },
  { id: "fruit", name: "Фрукты", emoji: "🍎", bg: "linear-gradient(135deg,#e5f5d3,#fff0c9)" },
  { id: "dairy", name: "Молочные продукты", emoji: "🥛", bg: "linear-gradient(135deg,#eef2ff,#fdf0e6)" },
  { id: "bakery", name: "Выпечка", emoji: "🥐", bg: "linear-gradient(135deg,#ffeedd,#ffe0c2)" },
  { id: "meat", name: "Мясо и рыба", emoji: "🐟", bg: "linear-gradient(135deg,#ffe1dc,#ffd3cc)" },
  { id: "drinks", name: "Напитки", emoji: "🧃", bg: "linear-gradient(135deg,#fff1cc,#ffe3d6)" },
];

export const recipes: Recipe[] = [
  { id: "carbonara", title: "Паста Карбонара", minutes: 20, level: "Легко", ingredients: 5, emoji: "🍝", bg: "linear-gradient(135deg,#fde7d3,#f9cfa8)", tags: ["Быстрые"] },
  { id: "cottage", title: "Творожная запеканка", minutes: 45, level: "Легко", ingredients: 4, emoji: "🍰", bg: "linear-gradient(135deg,#fff0d0,#ffd9a3)", tags: ["ПП", "Десерты"] },
  { id: "chicken-soup", title: "Куриный крем-суп", minutes: 50, level: "Легко", ingredients: 4, emoji: "🍲", bg: "linear-gradient(135deg,#ffe8cf,#ffc999)", tags: ["ПП"] },
  { id: "greek", title: "Греческий салат", minutes: 15, level: "Легко", ingredients: 5, emoji: "🥗", bg: "linear-gradient(135deg,#e6f6d6,#cfeeb5)", tags: ["Быстрые", "ПП", "Веганские"] },
  { id: "shrimp-pasta", title: "Паста с креветками", minutes: 25, level: "Средне", ingredients: 5, emoji: "🍤", bg: "linear-gradient(135deg,#ffe4d1,#ffc4a1)", tags: ["Быстрые"] },
  { id: "pancakes", title: "Панкейки на завтрак", minutes: 15, level: "Легко", ingredients: 5, emoji: "🥞", bg: "linear-gradient(135deg,#ffeacc,#ffd199)", tags: ["Быстрые", "Десерты"] },
  { id: "pumpkin-soup", title: "Тыквенный суп", minutes: 30, level: "Легко", ingredients: 4, emoji: "🎃", bg: "linear-gradient(135deg,#ffdfbf,#ffb877)", tags: ["ПП", "Веганские"] },
];

export const heroRecipeId = "carbonara";

export const promoSlides = [
  { id: "p1", badge: "15 минут", title: "Первый заказ —", accent: "минус 15%", text: "Промокод FIRST15\nна всё меню", cta: "Собрать заказ", emoji: "🍅", to: "/catalog" },
  { id: "p2", badge: "Новинка", title: "Рецепты с", accent: "доставкой", text: "Все ингредиенты в корзину\nодним нажатием", cta: "К рецептам", emoji: "🍳", to: "/recipes" },
  { id: "p3", badge: "Свежее", title: "Фермерские", accent: "овощи", text: "Каждый день с утра\nна вашем столе", cta: "Смотреть", emoji: "🥕", to: "/catalog" },
];

export const ingredientWord = (n: number) =>
  n === 1 ? "ингредиент" : n < 5 ? "ингредиента" : "ингредиентов";
