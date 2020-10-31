import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import YearPage from "./pages/year";
import MonthPage from "./pages/month";
import DayPage from "./pages/day";
import Pages from "./constants/pages";
import Layout from "./pages/layout";

// GitHub Pages only work properly with HashRouter.
// Browser Router provide more beatiful links.
const Router =
  process.env.serveFromGitPages === "1" ? HashRouter : BrowserRouter;

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext>
          <Layout auth={false}>
            <Switch>
              <Route path={Pages.Home} exact={true}>
                <p>Home</p>
              </Route>
              <Route path={Pages.Auth}>
                <p>Auth</p>
              </Route>
              <Route path={Pages.Year}>
                <YearPage />
              </Route>
              <Route path={Pages.Month}>
                <MonthPage />
              </Route>
              <Route path={Pages.Day}>
                <DayPage />
              </Route>
              <Route path={Pages.Logout} >
                <Redirect to={Pages.Home} />
              </Route>
              <Redirect to={Pages.Home} />
            </Switch>
          </Layout>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;
