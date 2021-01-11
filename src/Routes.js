import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading, Footer } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
        </Switch>
      </Suspense>
      <Footer
        email="lech.kuznecoff@gmail.com"
        phoneNumber="+37060329231"
        copyright="&copy; Copyright 2021, Lech Kuznecov"
      />
    </Router>
  );
}

export default Routes;
