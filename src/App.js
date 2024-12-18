import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import DefaultComponet from "./components/DefaultComponent/DefaultComponet";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Path = route.path;
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponet : Fragment;
            return (
              <Route
                path={Path}
                key={Path}
                element={
                  <>
                    <Layout>
                      <Page />
                    </Layout>
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
