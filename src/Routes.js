import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Footer } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
      <Footer
        email="hi@seathustler.com"
        links={[
          {
            to: "https://www.linkedin.com/in/lechkuznecov",
            name: "LinkedIn",
          },
          {
            to: "https://www.github.com/LechKuznecov",
            name: "GitHub",
          },
        ]}
        copyright="&copy; Copyright 2021, Lech Kuznecov"
      />
    </Router>
  );
}

export default Routes;
