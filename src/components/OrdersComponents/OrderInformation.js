import React, { useState } from "react";
import OrdeInfoImage from "../../assets//ordersIcons/orderInformation.svg";
import Fba from "../../assets/ordersIcons/fbaLoungList.svg";
import LocalListImage from "../../assets/ordersIcons/localStorageList.svg";
import "../../orders.scss";
import { useTranslation } from "react-i18next";
import ShipLoungeModal from "../../popup/ShipLoungeModal";
const OrderInformation = () => {
  const { t } = useTranslation(["orders", "orders/manorder"]);
  const [orderInfo, setOrderInfo] = useState("");
  return (
    <div className="order-information">
      <div className="order-info-content">
        <div className="order-info-top">
          <img src={OrdeInfoImage} alt="" />
          <h1>{t("orders/manorder:orderinfo")}</h1>
        </div>
        <div className="order-info-bottom">
          <div className="order-lists">
            <div className="order-list">
              <div className="order-list-content">
                <div className="order-list-left">
                  <img src={LocalListImage} alt="" />
                  <label htmlFor="local">
                    <h4>{t("orders/manorder:locallist")}</h4>
                  </label>
                </div>
                <div className="order-list-right">
                  <input
                    onChange={(e) => setOrderInfo(e.target.value)}
                    type="radio"
                    checked={orderInfo === "local" ? true : false}
                    className="answer"
                    id="local"
                    name="check"
                    value="local"
                  />
                </div>
              </div>
            </div>
            <div className="order-list">
              <div className="order-list-content">
                <div className="order-list-left">
                  <img src={Fba} alt="" />
                  <label htmlFor="fba">
                    <h4>{t("orders/manorder:FBAlist")}</h4>
                  </label>
                </div>
                <div className="order-list-right">
                  <input
                    onChange={(e) => setOrderInfo(e.target.value)}
                    type="radio"
                    checked={orderInfo === "fba" ? true : false}
                    className="answer"
                    id="fba"
                    name="check"
                    value="fba"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {orderInfo === "fba" && <ShipLoungeModal setOrderInfo={setOrderInfo} />}
    </div>
  );
};

export default OrderInformation;
