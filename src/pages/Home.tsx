import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import PromoCarousel from "../components/PromoCarousel";
import Thumb from "../components/Thumb";
import { RecipeCardSmall } from "../components/RecipeCards";
import { categories, promoSlides, recipes } from "../data";

export default function Home() {
  const [query, setQuery] = useState("");
  const nav = useNavigate();
  const q = query.trim().toLowerCase();

  const foundCategories = useMemo(
    () => categories.filter((c) => c.name.toLowerCase().includes(q)),
    [q]
  );
  const foundRecipes = useMemo(
    () => (q ? recipes.filter((r) => r.title.toLowerCase().includes(q)) : []),
    [q]
  );

  return (
    <>
      <label className="search">
        <Icon name="search" size={20} />
        <input
          type="search"
          placeholder="Огурцы"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      {!q && <PromoCarousel slides={promoSlides} />}

      <div className="section-head">
        <h2>Каталог</h2>
        <button className="link" onClick={() => nav("/catalog")}>
          Все категории <Icon name="arrow-right" size={16} />
        </button>
      </div>

      {foundCategories.length > 0 ? (
        <div className="cat-grid">
          {foundCategories.map((c) => (
            <button key={c.id} className="cat" onClick={() => nav("/catalog")}>
              <Thumb emoji={c.emoji} bg={c.bg} size={52} />
              <span className="cat-label">
                <span>{c.name}</span>
                <span className="circle-btn mini">
                  <Icon name="chevron" size={13} />
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        !foundRecipes.length && <p className="empty">Ничего не нашлось 🙈</p>
      )}

      {foundRecipes.length > 0 && (
        <>
          <div className="section-head">
            <h2>Рецепты</h2>
          </div>
          <div className="scard-grid">
            {foundRecipes.map((r) => (
              <RecipeCardSmall key={r.id} recipe={r} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
