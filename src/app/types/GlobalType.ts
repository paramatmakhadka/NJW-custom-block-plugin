import { AxiosError, AxiosResponse } from "axios"


export interface LooseObject {
  [key: string]: any
}


export type EmptyFunType = (   ) => any;

export type singleVarFunction = (arg1: any , arg2?: any, arg3?:any) => void;

export type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

export type WindowWithCustomField = Window & {

}