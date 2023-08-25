import { events, Lib, router } from "stateful-dom";
import { _ } from "../index.mjs";
import "./components.css";

events.add(".goCart", "click", () => {
  router.navigate("/cart");
});

events.add(".logo", "click", () => {
  router.navigate("/");
});

export const header = () => {
  const template = `
        <header class='header'>
            <div class='logo'>SmartCart</div>
            <div class="actions">
              <button class="goCart btn btn-outline-primary">Cart (${_.state.cart.length})</button>
            </div>
        </header>
    `;
  return Lib.createComponent(template);
};
