import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//此处引入redux中的store
import store from "./redux/store";

import Search from "./routes/search";
import Home from "./routes/home";
import Hospitals from "./routes/hospitals";
import Item from "./routes/item";
import DemandsMap from "./routes/demandsMap";

//该组件重写了create-react-app的默认组件
function App() {
  return (
    //Provider在根组件的最外面包了一层，这样App的所有子组件都默认可以拿到state.
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/hospitals/:id" component={Item} />
          <Route path="/hospitals" component={Hospitals} />
          <Route path="/search" component={Search} />
          <Route path="/demandsMap" component={DemandsMap} />
          <Route path="/" component={Home} /> 
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
