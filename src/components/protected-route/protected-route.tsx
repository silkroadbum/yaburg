import { RoutePath } from "@/constants/router";
import { selectIsAuthChecked, selectUser } from "@/services/user/selectors";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../loader/loader";

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: React.JSX.Element;
};

const ProtectedRoute = ({ onlyUnAuth = false, component }: TProtectedProps): React.JSX.Element => {
  const isAuthChecked = useSelector(selectIsAuthChecked);
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Loader />;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state ?? { from: { pathname: "/ " } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to={RoutePath.login} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({ component }: { component: React.JSX.Element }): React.JSX.Element => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
