import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//此处引入redux中的store
import store from "./redux/store";

import Home from "./routes/home";

//该组件重写了create-react-app的默认组件
function App() {
  return (
    //Provider在根组件的最外面包了一层，这样App的所有子组件都默认可以拿到state;
    //所有路由，必须在Router中注册(位于tabbar中的组件，其实隶属于/内嵌于Home组件，因此可以不放在路由中。)
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/*<Route path="/hospitals/:id" component={Item} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
