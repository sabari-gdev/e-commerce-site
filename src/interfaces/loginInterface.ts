export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginAuthState {
  isProcessingLogin: boolean;
  isProcessingForgot: boolean;
  isProcessingReset: boolean;
  isProcessingSignup: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
    gender: string;
    createdAt: string;
  };
}
