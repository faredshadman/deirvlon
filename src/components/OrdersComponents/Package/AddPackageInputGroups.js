import React, {useState} from "react";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import { useTranslation } from "react-i18next";
const AddPackageInputGroups = () => {
  const {t}=useTranslation(["orders","orders/manorder"])
    const [product, setProduct] = useState({
      skucode: "",
      product: "",
      count: "",
      weight: "",
      unitprice: "",
      gtipcode: ""
});

function handle(e){
const newdata={...product}
newdata[e.target.id] = e.target.value;
setProduct(newdata);
console.log(newdata);
}  
function deleteitem(e){
  const newdata={...product}
  newdata[e.target.id] = e.target.value;
  newdata[e.target.id]=" ";
  setProduct(newdata)
  console.log(newdata)
}




  return (
    <div className="package-inputs">
      <div className="package-input-groups">
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:skucode")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="skucode" value={product.skucode}
          type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:product")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="product" value={product.product} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:count")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input onChange={(e) => handle(e)}
          id="count" value={product.count} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:weight")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="weight" value={product.weight} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:unitprice")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="unitprice" value={product.unitprice} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:gtipcode")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="gtipcode" value={product.gtipcode} type="text" />
        </div>
      </div>
      <div className="remove-package">
        <div className="remove-btn">
          <button onClick={()=>deleteitem()} className="delete-btn">
            <img src={RemoveBtnImage} alt="removeImage" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPackageInputGroups;
