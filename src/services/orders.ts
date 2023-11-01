import axios from "axios";

import { config } from "../config/secret";

export const createOrder = async (
  product: string,
  quantity: number,
  totalPrice: number
) => {
  const username = localStorage.getItem("username");

  try {
    const response = await axios.post(
      `${config.API_URL}/order?username=${username}`,
      {
        order: {
          product,
          quantity,
          totalPrice,
          username,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};

export const getOrders = async () => {
  const username = localStorage.getItem("username");

  try {
    const response = await axios.get(
      `${config.API_URL}/order?username=${username}`
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};

export const getOrder = async (idOrder: string) => {
  const username = localStorage.getItem("username");

  try {
    const response = await axios.get(
      `${config.API_URL}/order?username=${username}&id=${idOrder}`
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
