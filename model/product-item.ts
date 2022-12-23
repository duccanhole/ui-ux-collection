import { NextPage } from "next";
import { ReactElement } from "react";

export default interface IProductItem {
    title: string;
    icon: ReactElement;
    path: string;
}