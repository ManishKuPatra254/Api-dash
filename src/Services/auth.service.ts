import axios from "axios";
// import Cookies from "js-cookie";
const API_URL: string = import.meta.env.VITE_API_URL as string;

const token = localStorage.getItem("token") || "";
console.log(token);

// register ts api ...................................

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
}

export const registerUser = async (
  formData: FormData
): Promise<RegisterResponse> => {
  try {
    const responseContact = await axios.post<RegisterResponse>(
      `${API_URL}/api/auth/register`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(responseContact.data, "responseContact");
    return responseContact.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Contact error", error.message);
    } else {
      console.log("Contact error", String(error));
    }
    throw error;
  }
};

// ḷogin ts api......................................

interface FormDataLogin {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token: string;
}

export const loginUser = async (
  formData: FormDataLogin
): Promise<LoginResponse> => {
  console.log(formData);
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/api/auth/login`,
      formData
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Login error", error.message);
    } else {
      console.log("Login error", String(error));
    }
    throw error;
  }
};

// logout API ......................................................

interface LogoutResponse {
  success: boolean;
  data: unknown;
}

interface FormDataLogout {
  email: string;
  password: string;
}

export const logout = async (
  formData: FormDataLogout
): Promise<LogoutResponse> => {
  console.log(formData);
  try {
    const response = await axios.post<LogoutResponse>(
      `${API_URL}/api/auth/logout`,
      formData
    );

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Login error", error.message);
    } else {
      console.log("Login error", String(error));
    }
    throw error;
  }
};

// me

interface MeResponse {
  success: boolean;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    "--v": number;
  };
}

export const me = async (): Promise<MeResponse> => {
  try {
    const response = await axios.get<MeResponse>(`${API_URL}/api/auth/me`);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Login error", error.message);
    } else {
      console.log("Login error", String(error));
    }
    throw error;
  }
};
