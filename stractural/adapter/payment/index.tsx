import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {ZarinpalProvider} from "./libs/ZarinpalProvider";
import {MellatProvider} from "./libs/MellatProvider";
import {SamanProviderAdapter} from "./libs/packages/SamanProvider.adapter";
import {OnlineGatewayType} from "./libs/OnlineGateway.type";
import {Invoice} from "./libs/invoice";
import {useEffect} from "react";
import {FlyweightFactory} from "./libs";

const payments = [
    new ZarinpalProvider(),
    new MellatProvider(),
    new SamanProviderAdapter()
];

const App = () => {

  return (
    <div className={"container"}>

      <div className="form">
          <h1>Select Your Payment💳</h1>

          <div className="grid">
              {
                  payments.map(payment => (
                      <div className="box" onClick={() => {
                          const invoice = new Invoice(2000 , 300)
                          payment.startPay(invoice);
                      }}>
                          {payment._payment_title}
                      </div>
                  ))
              }
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
