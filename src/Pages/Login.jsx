import React from "react";

const Login = () => {
  return (
    <div className="font-vazir">
      <div className="flex flex-col items-center justify-center my-[50px]">
        <div className="max-w-[200px]">
          <img src="./Images/rah.png" alt="rah" className="w-full h-full" />
        </div>
        <h1>ایجاد حساب کاربری</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-3">
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px] outline-blue-700"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-blue-700"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="ایمیل"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-blue-700"
          />
          <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span>
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="نام تیم یا شرکت"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-blue-700"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder=" شماره همراه"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-blue-700"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <div className="w-[70%] max-w-[250px] flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder=" کد پیامک شده"
            className="border-2 border-gray-400 rounded-lg p-2 w-full max-w-[250px]  outline-blue-700"
          />
          {/* <span className="text-red-600 self-start pr-[15px] w-full">
            نام وارد شده صحیح نیست
          </span> */}
        </div>
        <button className=" bg-blue-800 text-white rounded-lg p-2 w-[70%] max-w-[250px]  outline-blue-700">
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
