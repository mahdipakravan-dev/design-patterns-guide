import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./app.css"
import {Composite} from "./libs/composite";
import {Leaf} from "./libs/leaf";

const App = () => {

    const onClick = () => {
        const tree = new Composite();
        const leaf1 = new Leaf("Leaf1");
        const leaf2 = new Leaf("Leaf2");
        tree.addComponent(leaf1)
        tree.addComponent(leaf2)

        const tree2 = new Composite();
        const leaf2_1 = new Leaf("Tree2 Leaf1");
        tree2.addComponent(leaf2_1)
        tree.addComponent(tree2)


        tree.render();
    }

  return (
    <div className={"container"}>

      <div className="form">
          <h1 onClick={onClick}>Click</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
