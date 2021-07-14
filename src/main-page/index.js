import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DrugSearchComp from "../drug-search";
import Header from "./header";
import "./main-page.css";

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <DrugSearchComp />

                <Switch>
                    <Route path="/drugEquivalents">
                        
                    </Route>    
                </Switch>
            </div>
        </Router>
    );
}

export default App;