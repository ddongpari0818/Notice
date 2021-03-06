import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Print from "../routes/Print";
import Notices from "../routes/Notice";
import Auth from "../routes/Auth";
import PrintValue from "../routes/PrintValue";

const AppRouter = ({ notices, isLoggedIn, userObj }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <>
              <h1>
                <Link to="/" style={{ textDecoration: "none" }}>
                  κ²μν π
                </Link>
              </h1>
              <table border="1">
                <thead>
                  <tr>
                    <th>λ²νΈ</th>
                    <th>μ λͺ©</th>
                    <th>μμ±μ</th>
                    <th>λ μ§</th>
                  </tr>
                </thead>
                <tbody>
                  {notices
                    .slice(0)
                    .reverse()
                    .map((notice) => (
                      <Print
                        notice={notice}
                        key={notice.id}
                        count={notice.count}
                      />
                    ))}
                </tbody>
              </table>
              <Link
                to="/create"
                style={{ textDecoration: "none" }}
                className="create"
              >
                κΈ μ°κΈ° ποΈ
              </Link>
            </>
          ) : (
            <Auth />
          )}
        </Route>
        {notices.map((route) => (
          <Route key={route.id} exact path={`/${route.route}`}>
            {isLoggedIn ? (
              <PrintValue route={route} userObj={userObj} />
            ) : (
              <Auth />
            )}
          </Route>
        ))}
        <Route exact path="/create">
          {isLoggedIn ? (
            <>
              <h1>
                <Link to="/" style={{ textDecoration: "none" }}>
                  κ²μν π
                </Link>
              </h1>
              <Notices userObj={userObj} />
            </>
          ) : (
            <Auth />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
