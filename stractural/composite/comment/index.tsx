import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {ParentComment} from "./libs/parent";
import {Comment} from "./libs/comment";

const comments = new ParentComment();
const child1 = new Comment({
    _id : "C1",
    owner : "Mahdi",
    parentId : "",
    text : "Hello everyone this is fantastic"
});
const parent1 = new ParentComment({
    _id : "C1",
    owner : "Mahdi",
    parentId : "",
    text : "Hello everyone this is Parent of each "
});
const child2 = new Comment({
    _id : "C2",
    owner : "Sina",
    parentId : "",
    text : "Boom"
});
const child3 = new Comment({
    _id : "C3",
    owner : "Amir",
    parentId : "",
    text : "Boom o zahremar !"
});
parent1.addChildes([child2,child3])
comments.addChildes([child1,parent1]);

const App = () => {
    return (
        <div className={"container"}>

            <div className="form">
                <div dangerouslySetInnerHTML={{__html : comments.showComment()}}/>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
