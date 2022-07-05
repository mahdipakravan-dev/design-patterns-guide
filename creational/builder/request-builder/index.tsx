import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {RequestBuilder} from "./libs/request.builder";

const App = () => {
    const sendRequest = () => {
      const request= RequestBuilder.forge()
          .withUrl("https://google.com")
          .withMethod("POST")
          .withPayload({})
          .build();
        (async () => {
            await request.run();
            alert("Request Sent!")
        })()
    }
    return (
        <div className={"container"}>
            <button onClick={sendRequest}>Send Request</button>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
