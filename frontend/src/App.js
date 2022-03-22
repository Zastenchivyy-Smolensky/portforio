import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { createContext } from "react";
import Detail from "./components/DetailProduct";
import Edit from "./components/Edit";

export const AuthContext = createContext();
function App() {
  const [product, setProduct] = useState();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={Detail} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
