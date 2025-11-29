import { ResponseShape } from "./common.types";

export type TRegistrationResponse = {
  success: boolean,
  message: string,
  data: {
    accessToken: string,
    refreshToken: string,
    farmer: FarmerProfile
  }
}

export type LoginResponse = {
  success: boolean;
  message: string;
  data: FarmerProfile;
};

export interface FarmerProfile {
  id: string,
    name: string,
    email: string,
    phone: string,
    preferredLanguage: 'bn' | 'en'
  location?: {
    division: string;
    district: string;
    address: string;
    village?: string;
  };
  createdAt: string;
}

export type TFarmerProfileResponse = ResponseShape<FarmerProfile>;