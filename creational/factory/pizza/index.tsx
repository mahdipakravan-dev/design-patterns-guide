import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {PIZZA_NAMES} from "./libs/factory/interfaces/data";
import {PizzaStore, PizzaTypes} from "./libs/PizzaStore";
import {NewYourkPizzaFactory} from "./libs/factory/factories/PizzaFactory";

const App = () => {

    const onClickPizza = (type : PizzaTypes) => {
        const shop = new NewYourkPizzaFactory();
        const pizzaStore = new PizzaStore(shop);
        pizzaStore.orderPizza(type);
    }

  return (
    <div className={"container"}>
      <h1>Welcome To Pizza🍕 Shop !</h1>

      <div className="form">
          <h6>Please Select Your Store 🛒 :</h6>

          <div className="grid">
              <div className="box">
                  NewYork Pizza Shop🗽
              </div>
              <div className="box">
                  Mexican Pizza Shop🌮
              </div>
              <div className="box">
                  Tellepizza Pizza Shop🤙
              </div>
          </div>

          <div>
              <h5>Select Your Pizza : </h5>

              <div className={"products"}>
                  {PIZZA_NAMES.map((pizzaName) =>
                      <article className={"product"} onClick={() => onClickPizza(pizzaName as PizzaTypes)}>
                        🍕 {pizzaName} 🍕
                      </article>
                  )}
              </div>
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
