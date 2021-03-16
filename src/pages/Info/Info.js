import React from "react";
import Style from "./Style/Info.module.scss";
import { MenuLeft } from "../../components/MenuLeft/MenuLeft";
import { Routes } from "./routes";

export const Info = () => {
  return (
    <div id="info" className={Style.info}>
      <MenuLeft />
      <Routes />
    </div>
  );
};
