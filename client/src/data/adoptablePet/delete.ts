import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"


const deleteOneById = async (id: number): Promise<ResponseDetailAdoptablePet> => {
  try {
    const res = await fetchData({
      path: `adoptablepet/${id}`,
      method: "DELETE",

    });
    if (!res.success) return { data: res, success: false };
    return { data: res, success: true };
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  deleteOneById as deleteAdoptablePetById
}