import React, { useEffect, useMemo, useState } from "react";
import "./AddEmployee.css";
import axios from "axios";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";
import { Navigate, useNavigate } from "react-router-dom";
import { Category, LineAxisOutlined } from "@mui/icons-material";
import { RadialBarChart } from "recharts";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";

const Client = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password2, setpassword2] = useState("");
  const [position, setposition] = useState("");

  const navigate = useNavigate();

  // handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });


  //Adding new entry into db from CDF
  const adEmployee = () => {
    axios
      .post("http://localhost:3001/addemployee", {
        username: username,
        email: email,
        password2: password2,
        position: position,
      })
      .then(() => {
        console.log("success");
        alert("Succesfully Submitted in Login Table");
      });
  };

  //to refresh the page after submit
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <div className="fin">
        <div className="frm">
          <label htmlFor="pos">
            <button
              className="bttns"
              id="svng1"
              type="submit"
              onClick={() => {
                if (window.confirm("Are you sure you want to submit?"))
                  adEmployee();
              }}
            >
              Save
            </button>
            <button className="bttns" id="sr13" onClick={() => refreshPage()}>
              New
            </button>
            <button
              className="bttns"
              id="sr2"
              onClick={() => navigate("/editdelemployee")}
            >
              Edit/Delete
            </button>
          </label>
        </div>

        <div className="Forms">
          {/* EntryForm1 */}
          <div className="EntryFormC123">
            <hr />

            <div className="frm123">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                required="required"
                onChange={(event) => {
                  setusername(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Email Id</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Password</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setpassword2(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            <div className="frm123">
              <label htmlFor="name">Position</label>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setposition(event.target.value);
                }}
              ></input>
            </div>

            <hr />

            {/* <div className="frm123">
              <label htmlFor="name">Password</label>
              <input
                type= "text" name="name" onChange={(event) => {
                  setpassword2(event.target.value);
                }}
                placeholder="Password"
                className={`w-full h-14 rounded-lg ${
                  errors.password &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                } `}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(\S)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[A-Za-z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                    message:
                      "Password should include at least one uppercase, one numeric value and one special character",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum Required length is 8",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum Required length is 20",
                  },
                })}
              />
              {errors.password && (
                <span className="pass">
                  {errors.password.message}
                </span>
              )}

              
            </div> */}

            <hr />

          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
