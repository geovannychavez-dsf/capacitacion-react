export interface ResponseInterface {
  status: boolean;
  message: string;
  data: LoginresponseInterface;
}

export interface LoginresponseInterface {
  refreshToken: string;
  token: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
