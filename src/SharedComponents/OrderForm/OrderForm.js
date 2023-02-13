import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const OrderForm = (props) => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* const purchaseProduct = (data) => {
    const product = {
      customer_name: user?.displayName,
      customer_email: user?.email,
      product_id: props?.carId,
      product_name: props?.carName,
      product_image: props?.carImage,
      product_price: props?.price,
    };
    console.log(product);

    fetch(`https://fast-drive-server.vercel.app/init`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((sslCommerz) => window.location.replace(sslCommerz));
  }; */

  /*  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure, you want to booking this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://fast-drive-server.vercel.app/orders", data)
          .then((response) => {
            console.log(response);
            if (response.data.insertedId) {
              Swal.fire(
                "Completed",
                "Your Booking has been Completed Successfully!",
                "success"
              );
              reset();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  }; */

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure, want to purchase this car?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fast-drive-server.vercel.app/init`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((sslCommerz) => window.location.replace(sslCommerz));

        reset();
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          value={props.carId || " "}
          {...register("carID", { required: true })}
        />

        <input
          hidden
          value={props.carImage || " "}
          {...register("carImage", { required: true })}
        />

        <input
          hidden
          value={props.carName || " "}
          {...register("carName", { required: true })}
        />

        <input
          hidden
          value={props.price || " "}
          {...register("price", { required: true })}
        />

        <input
          hidden
          value="Pending"
          {...register("status", { required: true })}
        />

        <input
          hidden
          value={user.uid || " "}
          {...register("userId", { required: true })}
        />

        <label>Full Name</label>
        <input
          readOnly
          value={user.displayName || " "}
          className="form-control mb-3"
          placeholder="Enter your Full Name"
          {...register("FullName", { required: true })}
        />
        <label>Email Address</label>
        <input
          readOnly
          type="email"
          value={user.email || " "}
          className="form-control mb-3"
          placeholder="Enter your Email Address"
          {...register("email", { required: true })}
        />
        <label>Phone</label>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter your Phone Number"
          {...register("phone", { required: true })}
        />
        <label>Address</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your address"
          {...register("address", { required: true })}
        />
        <div className="row mb-3">
          <div className="col">
            <label>Payment Type</label>
            <select className="form-control" {...register("paymentType")}>
              <option value="Bank Check">Bank Check</option>
              <option value="Gatway">Gatway</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Purchase Date</label>
            <input
              type="date"
              className="form-control mb-3"
              {...register("PurchaseDate", { required: true })}
            />
            {errors.DepDate && (
              <span className="text-danger">This field is required!</span>
            )}
          </div>
        </div>
        <textarea
          className="form-control mb-3 w-100"
          placeholder="Message..."
          {...register("message")}
        />

        <input
          // onClick={purchaseProduct}
          className="btn btn-warning rounded-pill mb-5 w-100"
          type="submit"
          value="Book Now"
        />
      </form>
    </div>
  );
};

export default OrderForm;
