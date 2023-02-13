import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import confirmation from "../../images/confirmation message.png";

const OrderSuccess = () => {
  const history = useHistory();
  Swal.fire(
    "Completed",
    "Your Booking has been Completed Successfully!",
    "success"
  );
  history.push("/home");
  return <></>;
};

export default OrderSuccess;
