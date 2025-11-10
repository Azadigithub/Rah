import React from 'react'
import { useNavigate } from "react-router-dom";
const Success = () => {
      const navigate = useNavigate();
      const backhome=()=>{
         navigate("/Login");
      }
  return (
    <div className='flex flex-col bg-mygreen-100 items-center justify-center h-screen'>
                <div className="max-w-[200px]">
          <img src="./Images/rah.png" alt="rah" className="w-full h-full p-2.5 rounded-[50px]" />
        </div> 
        <div className="w-[100px]">
            <img src="./Images/success.jpg" alt="" className="w-full rounded-[100px]" />
        </div>
      <p>کاربر عزیز اطلاعات شما با موفقیت ثبت شد </p>
      <p>پس از برسی کارشناسان ما با شما تماس خواهند گرفت</p>
        <button onClick={backhome} className=" bg-green-700 mt-[100px] text-white rounded-lg p-2 w-[70%] max-w-[250px]  outline-0">
          متوجه شدم
        </button>
    </div>
  )
}

export default Success
