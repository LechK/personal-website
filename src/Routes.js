import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Footer } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/Skills/Skills"));
const PortfolioLazy = lazy(() => import("./pages/Portfolio/Portfolio"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route exact path="/skills" component={AboutLazy} />
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
