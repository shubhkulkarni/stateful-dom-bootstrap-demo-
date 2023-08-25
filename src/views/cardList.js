import { events, Lib } from "stateful-dom";
import { card } from "../components/card";
import { _ } from "../index.mjs";
import { products } from "../mock/mock";
import { fetchProducts } from "../services/products";
import "./views.css";

export const cardList = (type) => {
  const list = _.state.products.map((i) => card(i));
  const cart = _.state.cart.map((i) => {
    const item = _.state.products.find((item) => item.id === i);
    if (item) return card(item, true);
  });

  console.log({ cart });
  const isCart = type === "cart";
  if (isCart && cart?.length) {
    return Lib.createListNode(cart, {
      class: "list-parent",
    });
  } else if (isCart && !cart?.length) {
    return Lib.createComponent(
      `<div class='loading'>Your cart is empty!</div>`
    );
  } else {
    return Lib.createListNode(list, {
      class: "list-parent",
    });
  }
};
