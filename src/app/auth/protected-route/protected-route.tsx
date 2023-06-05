import { Navigate } from "react-router-dom";
import useAuth from "../use-auth/use-auth";
import { routes } from "../../config/routes";

export type ProtectedRouteProps = React.PropsWithChildren;

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={routes.home} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (<>{children}</>);
}

export default ProtectedRoute;
