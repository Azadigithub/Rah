import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-[50px]">
        <div className="max-w-[200px]">
          <img src="./Images/rah.png" alt="rah" className="w-full h-full" />
        </div>
        <h1>ایجاد حساب کاربری</h1>
      </div>
      <form className="flex flex-col items-center justify-center" >
        <input type="text" placeholder="نام"/>
        <input type="text" placeholder="نام خانوادگی"/>
        <input type="text" placeholder="ایمیل"/>
        <input type="text" placeholder="نام تیم یا شرکت"/>
        <input type="text" placeholder=" شماره همراه"/>
        <input type="text" placeholder=" کد پیامک شده"/>
        <button>پیش ثبت نام</button>
        <button> باما تماس بگیرید</button>
        <div className="flex items-center justify-center">
            <p>در حال حاضر حساب کاربری دارید ؟</p>
            <p>ورود به حساب</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
