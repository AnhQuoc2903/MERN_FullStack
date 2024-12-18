import { URL } from "../../services/ApiUrl";
import axiosFromBody from "../../utils/axiosClient/formBody";

export const login = async (data) => {
    try {
      const response = await axiosFromBody.post(`${URL.USER.LOGIN}`,data);
      return response;
    } catch (error) {
      throw error;
      
    }
  };