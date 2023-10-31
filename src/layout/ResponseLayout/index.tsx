import { Outlet } from "react-router-dom";

import useStyles from "./styles";

const ResponseLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Outlet />
    </div>
  );
};

export default ResponseLayout;
