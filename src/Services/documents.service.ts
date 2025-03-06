
import axios from "axios";

// me 

interface MeResponse {

    success: boolean;
    data: {
        "id" : string;
        "name" : string;
        "email" : string;
        "role" : string;
        "createdAt" : string;
        "--v" : number;
    };
    
}

export const me = async (

  ): Promise<MeResponse> => {
    try {
      const response = await axios.get<MeResponse>(
        `https://kai-rbh7.onrender.com/api/auth/me`
      );
  
      return response.data;
  
    } catch (error: any) {
      console.log("Login error", error.message);
      throw error;
    }
  };
