import React from "react";
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
  return (
    <>
      <CustomerSection />
      <CommonInformation />
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
