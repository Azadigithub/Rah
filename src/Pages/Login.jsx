import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// {...register("fname"),{pattern:{ / [0-9]/}}} or Yup
/* <input {...register("exampleRequired", { required: true })} /> */

const Login = () => {

  const shema = yup.object({
    fname: yup
      .string()
      .required("نام معتبر نیست! ")
      .matches(/^[^0-9]*$/, "نام نباید شامل عدد باشد"),
    lname: yup
      .string()
      .required("نام خانوادگی وارد نشده!")
      .matches(/^[^0-9]*$/, "نام خانوادگی نباید شامل عدد باشد"),
    email: yup.string().email("ایمیل وارد شده معتبر نیست"),
    phonenumber: yup
      .string()
      .required("شماره همراه معتبر نیست!")
      .matches(/^09\d{9}$/, "فرمت شماره صحیح نیست!"),
    otp: yup
      .string()
      .required( "کد وارد شده صحیح نیست!")
      .matches(/^\d{6}$/, "کد وارد شده صحیح نیست!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      teamname: "",
      phonenumber: "",
      otp: "",
    },
    resolver: yupResolver(shema),
    
  });

  const Submit = (data) => {
    console.log(data);
  };
  return (
    <div className="font-vazir">
      <div className="flex flex-col items-center justify-center my-[50px]">
        <div className="max-w-[200px]">
          <img src="./Images/rah.png" alt="rah" className="w-full h-full" />
        </div>
        <h1>ایجاد حساب کاربری</h1>
      </div>
      <form
        onSubmit={handleSubmit(Submit)}
        className="flex flex-col items-center justify-center gap-3"
      >
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام"
            className={`border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px] outline-0 ${
              errors.fname ? "border-red-500" : "border-gray-400"
            }`}
            {...register("fname")}
          />
          {errors.fname && (
            <span className="text-red-600 self-start pr-[15px] w-full">
              {errors.fname.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام خانوادگی"
            className={`border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-0 ${
              errors.lname ? "border-red-500" : "border-gray-400"
            }`}
            {...register("lname")}
          />
          {errors.lname && (
            <span className="text-red-600 self-start pr-[15px] w-full">
              {errors.lname.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="email"
            placeholder="ایمیل"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-0"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600 self-start pr-[15px] w-full">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام تیم یا شرکت"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-0"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="number"
            placeholder=" شماره همراه"
            className={`border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-0 ${errors.phonenumber ? "border-red-500" : "border-gray-400"}`}
            {...register("phonenumber")}
          />
          {errors.phonenumber && (
            <span className="text-red-600 self-start pr-[15px] w-full">
              {errors.phonenumber.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="number"
            placeholder=" کد پیامک شده"
            className={`border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px] outline-0 ${errors.otp? "border-red-500" : "border-gray-400"} `}
            {...register("otp")}
          />
          {errors.otp && (
            <span className="text-red-600 self-start pr-[15px] w-full">
              {errors.otp.message}
            </span>
          )}

        </div>
        <button
          type="submit"
          className=" bg-blue-800 text-white rounded-lg p-2 w-[70%] max-w-[250px]  outline-blue-700"
        >
          پیش ثبت نام
        </button>
        <button className=" bg-blue-800 text-white rounded-lg p-2 w-[70%] max-w-[250px]  outline-blue-700">
          {" "}
          باما تماس بگیرید
        </button>
        <div className="flex items-center justify-center">
          <p>در حال حاضر حساب کاربری دارید ؟</p>
          <p className="text-blue-800">ورود به حساب</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
