import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {Basket} from "./libs/basket";
import {Item} from "./libs/item";


const App = () => {
    const valueRef = useRef<any>();
    const textAreaRef = useRef<any>();
    const [basket, setBasket] = useState<Basket>(new Basket("Basket" , []));
    const [state,setState] = useState(0)

    const onClick = () => {
    }

    console.log(basket)

    return (
        <div className={"container"}>

            <div className="form">
                <label htmlFor="">AddItem : </label>
                <input type="text" name={""} placeholder={"Item Name : "} ref={valueRef}/>
                <button onClick={() => {
                    const tree = basket;
                    basket.addProduct(new Item({
                        price : 1000,
                        title : valueRef.current?.value,
                        desc : "Description"
                    }))
                    setBasket(tree)
                    setState(prev => prev += 1)
                }}>+Item</button>

                <hr/>
                <label>Add Tree</label>
                <br/>
                <input type="text" name={""} placeholder={"Item Name : "} ref={valueRef}/>
                <br/>
                <textarea placeholder={"Items : "} ref={textAreaRef}/>
                <br/>
                <button onClick={() => {
                    const options = textAreaRef.current.value as string;
                    const tree = basket;
                    tree.addProduct(
                        new Basket(valueRef.current?.value , options.split("\n").map(str => new Item({title : str , price : Math.random() , desc : ""})))
                    );
                    setBasket(tree)
                    setState(prev => prev += 1)
                }}>+Basket</button>
                <br/>
                <hr/>
                <br/>

                <div dangerouslySetInnerHTML={{__html : basket.render()}}/>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
