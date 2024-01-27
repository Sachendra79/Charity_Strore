 
import sofaa from "../../assets/sofaa.svg";
import Logo from "../Authentication/LogoIcon";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
const [getItem,setGetItem] = useState([])
const navigation = useNavigate()
    useEffect(()=>{
    const getHandler =async()=>{
try{
    const response = await axios.get("https://auth-api-jexl.onrender.com/category/your-model")
    if(response.data){
        console.log("dd")
       console.log(response)
        setGetItem(response.data)
    }
}
  catch(error){
    
  }  
    }
    getHandler();
    },[])
  return (
    <div className=" flex flex-col">
      <div className="w-[100vw] h-[80px] bg-[#E8F6D1] pl-[161px] flex justify-start pt-[10px] gap-[11.04vw]">
        <Logo />
        <div className=" h-[54px] w-[39.16vw] bg-[#BFE68C] rounded-[50px]">
          <input
            className=" bg-transparent h-[100%] w-[100%] text-[24px] text-[#a7d56b] px-[15px] "
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="to w-[100vw] h-[66px] px-[160px] flex justify-between py-[20px] ">
        <div className=" cursor-pointer " onClick={()=>navigation("/home")}>Back</div>
        <div>
            <select className="bg-white p-2 rounded-md">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
             
            </select>
          </div>
      </div>
      <div className=" mt-[10px] mx-auto flex flex-col gap-[26.92px]">
        <div className=" flex gap-[24.62px]">
        {getItem?getItem.map((item,index)=>(
            index <= 3?
            <div className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px]">
            <img src={item.image_field} className="w-[100%] h-[205px]" />
            <div className=" text-[#98c361] text-[1.5rem]">Brown Sofa</div>
          </div>:null
        )):null}
          
         
        </div>
        <div className=" flex gap-[24.62px]">
        {getItem?getItem.map((item,index)=>(
            index >= 3 && index<=6?
            <div className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px]">
            <img src={item.image_field} className="w-[100%] h-[205px]" />
            <div className=" text-[#98c361] text-[1.5rem]">Brown Sofa</div>
          </div>:null
        )):null}
          
         
        </div>
      </div>
    </div>
  );
};

export default ListPage;
