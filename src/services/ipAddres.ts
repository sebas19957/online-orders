import axios from "axios";

export const getIp = async () => {
  try {
    const response = await axios.get("https://api.ipify.org");
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
