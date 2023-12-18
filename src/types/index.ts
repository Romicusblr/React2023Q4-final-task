import React from 'react';

export type UserAuth = {
  id: string;
  email: string | null;
  token: string | null;
};

export type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserDTO = Pick<RegisterUserDTO, 'email' | 'password'>;

export interface AuthApiInterface {
  register(user: RegisterUserDTO): Promise<UserAuth>;
  login(dto: LoginUserDTO): Promise<UserAuth>;
  logout(): Promise<void>;
}

export interface LocalizationProviderProps {
  children: React.ReactNode;
}

export type Language = 'en' | 'ru';

export interface LocalizationContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export type QueryEditor = {
  query: string;
  numberOfLines: number;
};
