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
          </div>

          <div>
              <h5>Select Your Pizza : </h5>

              <div className={"products"}>
              </div>
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
