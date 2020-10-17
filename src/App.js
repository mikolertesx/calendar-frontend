import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Pages from "./constants/pages";
import Layout from "./pages/layout";

// GitHub Pages only work properly with HashRouter.
// Browser Router provide more beatiful links.
const Router =
  process.env.serveFromGitPages === "1" ? HashRouter : BrowserRouter;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path={Pages.Home} exact={true}>
              <p>Home</p>
            </Route>
            <Route path={Pages.Auth}>
              <p>Auth</p>
            </Route>
            <Route path={Pages.Month}>
              <p>Month</p>
            </Route>
            <Route path={Pages.Day}>
              <p>Day</p>
            </Route>
            <Redirect to={Pages.Home} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
