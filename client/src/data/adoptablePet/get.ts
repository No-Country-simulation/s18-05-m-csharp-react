import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"


const getAll = async (): Promise<ResponseAdoptablePet> => {
  try {
    const res = await fetchData({ path: "adoptablepet" });
    return { data: res, success: true };
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}

const getById = async (id: number): Promise<ResponseDetailAdoptablePet> => {
  try {
    const res = await fetchData({ path: `adoptablepet/${id}` });
    if (!res.success) return res;
    return res;
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  getAll as getAdoptablePet,
  getById as getAdoptablePetById
}