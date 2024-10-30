import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"
import { getCookie } from "cookies-next";


const createOne = async (pet: any): Promise<ResponseDetailAdoptablePet> => {
  try {
    const res = await fetchData({
      path: "adoptablepet",
      method: "POST",
      body: pet,
      token: getCookie('token')
    });
    if (!res.success) return { data: res, success: false };
    return res;
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  createOne as createOneAdoptablePet
}