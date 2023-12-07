import { AllRoutes } from "routes";
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import { ElasticApmConfig } from "elastic";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  ElasticApmConfig();

  return <AllRoutes />;
}

export default Sentry.withProfiler(App);
