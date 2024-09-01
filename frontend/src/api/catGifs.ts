import { Cat } from "../types/cat";

const API_URL = "http://localhost:3000/api/cat-gifs";

export const getCats = async (): Promise<Cat[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    throw error; 
  }
};