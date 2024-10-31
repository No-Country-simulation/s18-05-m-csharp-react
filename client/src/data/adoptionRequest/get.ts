import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"
import { getCookie } from "cookies-next";


const getAll = async (): Promise<ResGetAdoptionRequest> => {
  try {
    const res = await fetchData({ path: "adoptionrequest", token: getCookie("token") });
    return { data: res, success: true };
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}

const getById = async (id: number): Promise<any> => {
  try {
    const res = await fetchData({ path: `adoptionrequest/${id}` });
    if (!res.success) return res;
    return res;
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  getAll as getAdoptionRequest,
  getById as getAdoptionRequestById
}