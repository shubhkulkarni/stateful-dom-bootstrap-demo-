import { events, Lib } from "stateful-dom";
import { header } from "../components/header";
import { _ } from "../index.mjs";
import { fetchProducts } from "../services/products";
import { cardList } from "./cardList";

events.preload(async () => {
  _.setState("productLoading", true);
  const data = await fetchProducts();
  _.setState("products", data?.data ?? []);
  _.setState("productLoading", false);
});

const loading = Lib.createComponent("Loading products...", "div", {
  class: "loading",
});

export const layout = (type) => {
  return Lib.clubComponents([
    header(),
    _.state.productLoading ? loading : cardList(type),
  ]);
};
