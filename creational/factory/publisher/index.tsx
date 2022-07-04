import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useRef} from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {LinkedInPublisherFactory} from "./libs/factory/factories/creator.linkendInPublisherFactory";
import {InstagramPublisherFactory} from "./libs/factory/factories/creator.instagramPublisherFactory";
import {TwitterPublisherFactory} from "./libs/factory/factories/creator.twitterPublisherFactory";
import {MessagePublisherInterface} from "./libs/factory/interfaces/creator.types";
import {MessageInterface} from "./libs/factory/interfaces/message.types";

const App = () => {
    const inputRef = useRef<any>();
    const items = [
        new LinkedInPublisherFactory(),
        new InstagramPublisherFactory(),
        new TwitterPublisherFactory()
    ]

    const onClickItem = (publisher: MessagePublisherInterface) => {
        const inputText = inputRef.current.value;
        const message = new MessageInterface(inputText, "", "This message sent from factory design pattern !");
        publisher.publish(message);
    }

    return (
        <div className={"container"}>
            <h6>select a socialMedia to send message 📳 : </h6>

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

ReactDOM.render(<App/>, document.getElementById('root'));
