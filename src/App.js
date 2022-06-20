import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/search" exact component={Search} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/details/:slug" exact component={MovieDetails} />
        <Route path="/actordetails/:slug" exact component={ActorDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
