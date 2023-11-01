import axios from "axios";

import { config } from "../config/secret";

export const login = async (username: string, password: string, ip: string) => {
  try {
    const response = await axios.post(`${config.API_URL}/login`, {
      username,
      password,
      loginDetails: {
        ip,
      },
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
