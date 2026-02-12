// CustomRoute.jsx
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';

const CustomRoute = ({ loader, element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={element}
      loader={loader}
    />
  );
};

export default CustomRoute;
