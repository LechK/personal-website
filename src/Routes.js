import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading, Footer } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const PortfolioLazy = lazy(() => import("./pages/Portfolio/Portfolio"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route exact path="/portfolio" component={PortfolioLazy} />
        </Switch>
      </Suspense>
      <Footer
        email="lech.kuznecoff@gmail.com"
        copyright="&copy; Copyright 2021, Lech Kuznecov"
      />
    </Router>
  );
}

export default Routes;
