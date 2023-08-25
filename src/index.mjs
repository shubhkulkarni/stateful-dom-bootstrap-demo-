import { router, Lib, State, events } from "stateful-dom";
import "./styles.css";
import { layout } from "./views/layout";

export const _ = new State(
  { counter: 0, products: [], cart: [], productLoading: false },
  "global"
);

// events.add(".counter", "click", () => {
//   _.setState("counter", _.state.counter + 1);
// });

const home = () => {
  return Lib.clubComponents([layout()]);
};

const cart = () => Lib.clubComponents([layout("cart")]);

const app = [
  { path: "/", root: home },
  { path: "/cart", root: cart },
];

router.render(app);
