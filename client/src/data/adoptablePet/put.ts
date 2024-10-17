import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"


const updateOneById = async (pet: UpdateAdoptablePet): Promise<ResponseDetailAdoptablePet> => {
  try {
    const res = await fetchData({
      path: `adoptablepet/${pet.id}`,
      method: "PUT",
      body: pet,

    });
    if (!res.success) return { data: res, success: false };
    return { data: res, success: true };
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  updateOneById as updateAdoptablePetById
}