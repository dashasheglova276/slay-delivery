import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { RecipeCardBig } from "../components/RecipeCards";
import { recipes } from "../data";

export default function Recipes() {
  const nav = useNavigate();
  const list = recipes.filter((r) => r.id !== "pancakes" && r.id !== "pumpkin-soup");
  return (
    <>
      <button className="back" onClick={() => nav(-1)}>
        <Icon name="arrow-left" size={16} /> Назад
      </button>
      <h1 className="title-md">Что приготовить сегодня?</h1>
      <p className="subtitle">Выберите рецепт — добавим все ингредиенты в корзину одним нажатием.</p>
      <div className="rcard-grid">
        {list.map((r) => (
          <RecipeCardBig key={r.id} recipe={r} />
        ))}
      </div>
    </>
  );
}
