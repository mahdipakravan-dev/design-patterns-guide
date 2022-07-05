import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {useState} from "react";
import {TailwindFormUiFactorty} from "./libs/factories/TailwindFormUiFactorty";
import {BootstrapFormUiFactory} from "./libs/factories/BootstrapFormUiFactorty";
import {FactoryType} from "./libs/interfaces/factory.type";

const items = [
    new TailwindFormUiFactorty(),
    new BootstrapFormUiFactory()
]
const App = () => {

    const [designSystem, setDesignSystem] = useState<FactoryType>();

    console.log(items)
    return (
        <form action="" className={"container"}>
            <div className={"form-row"}>
                Select Your Design System :
                {items.map(item => (
                    <div className={"radio"} key={item._title}>
                        <input type="radio" id={item._title} name={"design-system"} value={item._title}
                               onClick={() => setDesignSystem(item)}/>
                        <label htmlFor={item._title}>{item._title}</label>
                    </div>
                ))}
            </div>

            <div style={{marginTop : "2rem"}}>
                <h5 style={{width : "100%"}}>This Contents Generate by your selected design system</h5>
                <br/>
                <hr/>
                <br/>
                <button className={designSystem?.createButton().getClasses()}>
                    Button
                </button>
            </div>
        </form>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
