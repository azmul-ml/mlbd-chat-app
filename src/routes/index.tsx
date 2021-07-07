import { Route, Switch } from "react-router-dom";

// import ROUTES from "./routes/Routes";

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export const RenderRoutes = ({ routes }: any) => {
  return (
    <Switch>
      {routes.map((route: any) => {
        return <RouteWithSubRoutes key={routes.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
