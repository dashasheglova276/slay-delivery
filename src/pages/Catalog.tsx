import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import Thumb from "../components/Thumb";
import { RecipeCardSmall } from "../components/RecipeCards";
import { heroRecipeId, recipes, RecipeTag } from "../data";

const filters: ("Все" | RecipeTag)[] = ["Все", "Быстрые", "ПП", "Веганские", "Десерты"];

export default function Catalog() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Все");
  const nav = useNavigate();
  const hero = recipes.find((r) => r.id === heroRecipeId)!;
  const list = recipes.filter(
    (r) => r.id !== heroRecipeId && (filter === "Все" || r.tags.includes(filter))
  );

  return (
    <>
      <h1 className="title-lg">Каталог</h1>

      <div className="chips" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={"filter" + (filter === f ? " on" : "")}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="hero">
        <Thumb className="hero-thumb" emoji={hero.emoji} bg="transparent" image={hero.image} size={120} />
        <div className="hero-text">
          <span className="chip chip-white">
            <Icon name="clock" size={13} /> {hero.minutes} мин
          </span>
          <h2>
            Паста
            <br />
            Карбонара
          </h2>
          <p>Просто. Быстро. Вкусно.</p>
          <button className="btn-white" onClick={() => nav("/recipes")}>
            Открыть рецепт <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </section>

      <div className="section-head">
        <h2>Популярные рецепты</h2>
        <button className="link" onClick={() => nav("/recipes")}>
          Все <Icon name="arrow-right" size={16} />
        </button>
      </div>

      {list.length ? (
        <div className="scard-grid">
          {list.map((r) => (
            <RecipeCardSmall key={r.id} recipe={r} />
          ))}
        </div>
      ) : (
        <p className="empty">В этой категории пока пусто</p>
      )}
    </>
  );
}
