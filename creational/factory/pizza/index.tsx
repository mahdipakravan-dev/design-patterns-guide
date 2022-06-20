import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"

const App = () => {
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
                  {Array.from("123456789").map(() => <article className={"product"}>
                      🍕 PizzaName 🍕
                  </article>)}
              </div>
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
