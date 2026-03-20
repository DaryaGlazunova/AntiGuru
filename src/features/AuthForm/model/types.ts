export type AuthDataType = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type AuthOptionsType = {
  username: string;
  password: string;
  remember: boolean;
};
