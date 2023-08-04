import React from "react";
import { useContext } from "react";
import storeContext from "../Context/storeContext";

const ShowAlert = () => {
  const { alert } = useContext(storeContext);
  return (
    <div className="container fixed-top" style={{width: "24rem", marginTop: "5rem"}}>
      <div className={`alert alert-${alert.type} text-center`} role="alert">
        {alert.message}
      </div>
    </div>
  );
};

export default ShowAlert;
