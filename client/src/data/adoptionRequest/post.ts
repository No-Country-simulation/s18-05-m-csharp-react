import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"
import { getCookie } from "cookies-next";


const createAdoptionRequest = async (id: number): Promise<ResAdoptionRequest> => {
  try {
    const res = await fetchData({
      path: "adoptionrequest",
      method: "POST",
      body: { adoptablePetId: id },
      token: getCookie('token')
    });
    if (!res.success) return { data: res, success: false };
    return res;
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  createAdoptionRequest
}