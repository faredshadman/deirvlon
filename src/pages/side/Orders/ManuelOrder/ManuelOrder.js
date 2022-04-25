import React, {useState} from "react";
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
const ManuelOrder = () => {
const [data, setData] = useState([{
  country: "",
  city: "",
  state: "", 
  address: "",
  zipcode: "",
  name: "",
  phone: "",
  email: "",
  userID:'1'
},
{
  iosnum: "",
  vattnum: "",
  currency: "",
  storage: "",
}
]);
// const [com, setCom] = useState({
//   iosnum: "",
//   vattnum: "",
//   currency: "",
//   storage: "",
// });
function Common(e){
const newdata={...data}
newdata[e.target.id] = e.target.value;
setData(newdata);
console.log(newdata);
}
function handle(e){
  e.preventDefault()
  const newdata={...data}
  newdata[e.target.id] = e.target.value;
  setData(newdata);
  // console.log(JSON.parse(userinfo));
};
const[toggle,setToggle]=useState(false);

function Submit(){
  let emtyinputs=Object.values(data).slice(1).every(a=>(a && a!=="0"));
  
  if (emtyinputs){
    // e.preventDefault();\
    let items = JSON.stringify(data);
    localStorage.setItem('adress_information', items);
    let userinfo = localStorage.getItem('adress_information');
    let send = JSON.parse(userinfo);
    // axios.post('http://kargo.kendigetir.az/public/api/address/create', send)
    //   .then(res => console.log(res))
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response.data);
    //     }})
    // EN SONDA AXIOS ILE APILER POST OLUNMALIDIR BACKENDE.....
    setToggle(()=>!toggle);
    

  }



}






  return (
    <>
      <CustomerSection data={data} handle={handle} Submit={Submit} />
      {/* <CommonInformation com={com} Common={Common} /> */}
{toggle?<CommonInformation com={data} Common={Common} />:''}

<OrderInformation />
      <MainPackage />
      <ShipmentDefination shipment={true} />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default ManuelOrder;
