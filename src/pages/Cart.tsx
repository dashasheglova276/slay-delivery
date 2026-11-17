import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import Thumb from "../components/Thumb";
import { ingredientWord, recipes } from "../data";
import { useStore } from "../store";

export default function Cart() {
  const { cart, changeQty, clearCart } = useStore();
  const nav = useNavigate();
  const items = recipes.filter((r) => cart[r.id]);
  const total = items.reduce((s, r) => s + r.ingredients * (cart[r.id] ?? 0), 0);

  if (!items.length) {
    return (
      <div className="placeholder">
        <div className="placeholder-emoji">🛒</div>
        <h1 className="title-md">Корзина пуста</h1>
        <p className="subtitle">Выберите рецепт — ингредиенты добавим одним нажатием.</p>
        <button className="btn-primary" onClick={() => nav("/recipes")}>
          К рецептам <Icon name="arrow-right" size={16} />
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className="title-lg">Корзина</h1>
      <div className="cart-list">
        {items.map((r) => (
          <div className="cart-row" key={r.id}>
            <Thumb className="cart-thumb" emoji={r.emoji} bg={r.bg} image={r.image} size={34} />
            <div className="cart-info">
              <h3>{r.title}</h3>
              <span className="meta">
                {r.ingredients} {ingredientWord(r.ingredients)} · {r.minutes} мин
              </span>
            </div>
            <div className="stepper">
              <button onClick={() => changeQty(r.id, -1)} aria-label="Меньше">
                <Icon name={cart[r.id] === 1 ? "trash" : "minus"} size={16} />
              </button>
              <span>{cart[r.id]}</span>
              <button onClick={() => changeQty(r.id, 1)} aria-label="Больше">
                <Icon name="plus" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <div>
          <span className="meta">Всего ингредиентов</span>
          <strong>{total}</strong>
        </div>
        <button className="btn-primary" onClick={() => { clearCart(); nav("/"); }}>
          Оформить заказ <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </>
  );
}
