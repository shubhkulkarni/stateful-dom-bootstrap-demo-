import { events, Lib } from "stateful-dom";
import { _ } from "../index.mjs";
import "./components.css";

events.add(".addcart", "click", (e) => {
  if (!_.state.cart.includes(Number(e.target.value)))
    _.setState("cart", [..._.state.cart, Number(e.target.value)]);
});

events.add(".removecart", "click", (e) => {
  _.setState(
    "cart",
    _.state.cart.filter((i) => i !== Number(e.target.value))
  );
});

export const card = (props, isCart = false) => {
  const { title, category, price, id, image } = props;
  const inCart = _.state.cart.includes(id);
  const template = `
        <div class="card" title="${title}">
        <div >
          <img src="${image}" class="image"/>
        </div>
        <div class="category">${category}</div>
            <div class="title">
                ${title}
            </div>
            <div class="price">${price}</div>
            ${
              isCart
                ? `<button class="removecart btn btn-warning btn-sm" value='${id}'>
            Remove</button>`
                : `<button class="addcart btn btn-warning btn-sm" value='${id}'>
            ${inCart ? "Added" : "Add to cart"}</button>`
            }
        </div>
        
    `;
  return Lib.createComponent(template);
};
