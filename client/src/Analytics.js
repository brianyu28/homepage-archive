import * as ReactGA from "react-ga";

ReactGA.initialize("UA-123778931-1");

function logPageview() {
  if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(window.location.pathname);
  }
}

export function logResource(resource) {
  if (process.env.NODE_ENV === "production") {
      ReactGA.event({
        category: "Resource Access",
        action: resource
      });
  }
}

const Analytics = () => {
  logPageview();
  return null;
}

export default Analytics;
