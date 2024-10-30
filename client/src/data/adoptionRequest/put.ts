import responseError from "@/utils/responseError";
import { fetchData } from "../fetchData"
import { getCookie } from "cookies-next";



const updateOne = async (id: number, newStatus: number): Promise<ResGetAdoptionRequest> => {
  try {
    const res = await fetchData({
      path: `adoptionrequest/${id}`,
      token: getCookie("token"),
      method: "PUT",
      body: { status: newStatus }
    });
    if (!res.success) return res;
    return res;
  } catch (error) {
    return { data: null, ...responseError(error) }
  }
}


export {
  updateOne as updateOneAdoptionRequest
}