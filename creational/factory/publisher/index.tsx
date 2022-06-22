import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useRef} from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {LinkedInPublisherFactory} from "./libs/creator.linkendInPublisherFactory";
import {InstagramPublisherFactory} from "./libs/creator.instagramPublisherFactory";
import {TwitterPublisherFactory} from "./libs/creator.twitterPublisherFactory";
import {MessagePublisherInterface} from "./libs/creator.types";
import {MessageInterface} from "./libs/message.types";

const App = () => {
  const inputRef = useRef<any>();
  const items = [
        new LinkedInPublisherFactory(),
        new InstagramPublisherFactory(),
        new TwitterPublisherFactory()
  ]

  const onClickItem = (publisher : MessagePublisherInterface) => {
      const inputText = inputRef.current.value;
      const message = new MessageInterface(inputText , "" , "This message sent from factory design pattern !");
      publisher.publish(message);
  }

  return (
    <div className={"container"}>
          <h6>select a socialMedia 📳 : </h6>

          <input type="text" placeholder={"Message : "} ref={inputRef}/>

          <div className="grid">
              {items.map(item => (
                  <div className="box" onClick={() => onClickItem(item)}>
                      {item._title}
                      <br/>
                      <span className={"desc"}>{item._desc}</span>
                  </div>
              ))}
          </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
