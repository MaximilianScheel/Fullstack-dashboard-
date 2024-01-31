import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";


import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register } from "./pages";


import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { resources } from "./config/resources";


function App() {
  return (
    <BrowserRouter>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}

                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "rxSgu0-ntNdok-i5z13W",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route 
                    element={
                    <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login"/>}
                      >
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>
                    }
                  >
                    <Route path="/home" element={<Home />} />
                  </Route>
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
    </BrowserRouter>
  );
}

export default App;
