import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {Invoice} from "./libs/invoice";
import {OnlinePayment} from "./libs/methods/online-payment";
import {SamanGatewayHandler} from "./libs/handlers/saman-gateway-handler";

const App = () => {

    const onClick = () => {
        const invoice = new Invoice("myInvoice" , 2000);
        const handler = new SamanGatewayHandler();
        new OnlinePayment(handler);
    }

  return (
    <div className={"container"}>

      <div className="form">
          <h1>Select Your Payment💳</h1>

          <div className="grid">
              {/*{*/}
              {/*    payments.map(payment => (*/}
              {/*        <div className="box" onClick={() => {*/}
              {/*            const invoice = new Invoice("2000" , 300)*/}
              {/*            payment.startPay(invoice);*/}
              {/*        }}>*/}
              {/*            {payment._payment_title}*/}
              {/*        </div>*/}
              {/*    ))*/}
              {/*}*/}
          </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
