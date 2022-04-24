import React from "react";
import QuoteSvg from "../../../assets/ordersIcons/getQuote.svg";
//components
import PackageSection from "./PackageSection";
import AddAnotherPackageSection from "./AddAnotherPackageSection";
import PackageBottom from "./PackageBottom";
import { useTranslation } from "react-i18next";
const Package = () => {
  const {t} = useTranslation(["orders","orders/manorder"])

  return (
    <>
      <div className="package">
        <div className="package-content">
          <div className="package-top">
            <div className="package-top-content">
              <PackageSection middle={false} />
              <AddAnotherPackageSection />
            </div>
          </div>

          <div className="package-top">
            <div className="package-top-content">
              <PackageSection middle={true} />
            </div>
          </div>

          <PackageBottom />
          <div className="package-btns">
            <button className="get-quote">
              <img src={QuoteSvg} alt="" />
              {t("orders/manorder:getaquote")}
            </button>
            <button className="add-another-package">
              <i className="fas fa-plus"></i>
               {t("orders/manorder:addpack")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
