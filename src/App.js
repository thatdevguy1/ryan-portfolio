import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Footer from "./components/Footer"
import { HashRouter, Link, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename='/'>

            <div className="App">
                <div>
                    <Navbar />

                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/portfolio" component={Portfolio} />

                    </Switch>
                </div>
                <div class="container"><Footer /></div>

            </div>
        </BrowserRouter>

    );
}
export default App;