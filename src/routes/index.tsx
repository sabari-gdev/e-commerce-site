import { Routes, Route } from "react-router-dom";
import { RouteDetails } from "../constants/routeConstants";
import { IRoutesDetails, ISubRouteDetails } from "../interfaces/routeInterface";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const RouteContainer = () => {
    return (
      <Routes>
        {RouteDetails.map((routeDetails: IRoutesDetails, index: number) => {
          return (
            <Route key={`route-${routeDetails.path}${index}`}>
              <Route
                key={index}
                path={routeDetails.path}
                element={
                  routeDetails.isProtected ? (
                    <ProtectedRoute>
                      <routeDetails.component />
                    </ProtectedRoute>
                  ) : (
                    <PublicRoute>
                      <routeDetails.component />
                    </PublicRoute>
                  )
                }
              >
                {routeDetails.children &&
                  routeDetails.children.map(
                    (subRoute: ISubRouteDetails, index: number) => (
                      <Route
                        key={`route-path-${subRoute.path}${index}`}
                        path={subRoute.path}
                        element={<subRoute.component />}
                      />
                    )
                  )}
              </Route>
            </Route>
          );
        })}
      </Routes>
    );
  };
  
  export default RouteContainer;