import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"


const getAll = async (): Promise<any> => {
  try {
    const res = await fetchData({ path: "adoptionrequest" });
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