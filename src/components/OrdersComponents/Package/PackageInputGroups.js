import React,{useState} from "react";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import { useTranslation } from "react-i18next";
const PackageInputGroups = () => {
  const {t}=useTranslation(["orders","orders/manorder"])
    const url = "";
  const [pack, setPack] = useState({
      count: "",
      type: "",
      length: "",
      width: "",
      height: "",
      weight: ""
});
function handle(e){
const newdata={...pack}
newdata[e.target.id] = e.target.value;
setPack(newdata);
console.log(newdata);
}

  return (
    // <>
    <div className="package-inputs">
      <div className="package-input-groups">
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:count")}:<span>*</span>
          </label>{" "}
          <br />
          <input onChange={(e) => handle(e)}
          id="count" value={pack.count} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:type")}:<span>*</span>
          </label>{" "}
          <br />
          <input
          onChange={(e) => handle(e)}
          id="type" value={pack.type}
          type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:length")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input onChange={(e) => handle(e)}
          id="length" value={pack.length} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:width")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input onChange={(e) => handle(e)}
          id="width" value={pack.width} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:height")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:weight")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
      </div>
      <div className="remove-package">
        <div className="remove-btn">
          <button className="delete-btn">
            <img src={RemoveBtnImage} alt="" />
          </button>
        </div>
      </div>
    </div>
    // </>
  );
};

export default PackageInputGroups;
