import React, {useState,useEffect} from "react";
import axios from 'axios';
import Attachment from "../../../../components/OrdersComponents/Attachment";
import CommonInformation from "../../../../components/OrdersComponents/CommonInformation";
import CustomerSection from "../../../../components/OrdersComponents/CustomerSection";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import MainPackage from "../../../../components/OrdersComponents/Package/MainPackage";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";
import "../../../../orders.scss";
import Customerinfo from './Jsons/Customerinfo.json';
import Commoninfo from './Jsons/Commoninfo.json';
const ManuelOrder = () => {
    const [data, setData] = useState(Customerinfo);
    const [com, setCom] = useState(Commoninfo);
  // let everydata = data.map((a) => a);
  // let data_1 = Object.keys(everydata[0]).map(a => a);
  // let data_2 = Object.keys(everydata[1]).map(a => a);
  // console.log(data_1);
  // console.log(data_2);
  let emtyinputs = Object.values(data).slice(0).every(a => (a && a !== "0"));
  let emtycommon = Object.values(com).slice(0).every(a => (a && a !== "0"));
  console.log(emtyinputs);
  console.log(emtycommon);

  const [two, setTwo] = useState(emtyinputs ? true:false);
  if(emtyinputs){
  let items = JSON.stringify(data);
  localStorage.setItem('adress_information', items);
  let userinfo = localStorage.getItem('adress_information');
  let send = JSON.parse(userinfo);
}
  const [three, setThree] = useState(emtycommon ? true : false);
  if (emtycommon){
    let items = JSON.stringify(com);
    localStorage.setItem('common_information', items);
    let userinfo = localStorage.getItem('common_information');
    let send = JSON.parse(userinfo);
    
}
  // useEffect(() => {
  //   if (emtyinputs){
  //     setToggle(!toggle);
  //   }
      
    
  // }, []);
  function handle(e) {
    e.preventDefault()
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
    // console.log(JSON.parse(userinfo));
  };

function Common(e){
const newdata={...com}
newdata[e.target.id] = e.target.value;
setCom(newdata);
console.log(newdata);
}

// function Submit(){
//   let emtyinputs=Object.values(data).slice(1).every(a=>(a && a!=="0"));
  
//   if (emtyinputs){
//     // e.preventDefault();\
//     let items = JSON.stringify(data);
//     localStorage.setItem('adress_information', items);
//     let userinfo = localStorage.getItem('adress_information');
//     let send = JSON.parse(userinfo);
//     // axios.post('http://kargo.kendigetir.az/public/api/address/create', send)
//     //   .then(res => console.log(res))
//     //   .catch((error) => {
//     //     if (error.response) {
//     //       console.log(error.response.data);
//     //     }})
//     // EN SONDA AXIOS ILE APILER POST OLUNMALIDIR BACKENDE.....
//     setToggle(()=>!toggle);
    

//   }
// }
function Conditinal(){
if(two){
  return (<CommonInformation com={com} Common={Common} />)
}
else if(two&&three){
  return (<OrderInformation />);
}
}
  return (
    <>
      <CustomerSection data={data} handle={handle} />
      {/* <CommonInformation com={com} Common={Common} /> */}
      {/* {two===true && <CommonInformation com={com} Common={Common} />}
      {three&&two && (<OrderInformation />)}       */}
{/* <OrderInformation /> */}
      {Conditinal()}
      <MainPackage />
      <ShipmentDefination shipment={true} />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default ManuelOrder;
