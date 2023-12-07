import { AllRoutes } from "routes";
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import { init as initApm } from "@elastic/apm-rum";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  initApm({
    serviceName: process.env.REACT_APP_ELASTIC_SERVICE_NAME,
    serverUrl: process.env.REACT_APP_ELASTIC_SERVICE_URL,
    serviceVersion: process.env.REACT_APP_ELASTIC_SERVICE_VERSION,
    environment: process.env.REACT_APP_ELASTIC_ENVIRONMENT,
  });

  return <AllRoutes />;
}

export default Sentry.withProfiler(App);
