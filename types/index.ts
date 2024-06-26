export type TLink = {
  name: string;
  href: string;
};

export type TServiceCard = {
  title: string;
  text: string;
  image: any;
  link: string;
};

export type TStep = {
  title: string;
  text: string;
  image: string;
};

export interface IApplication {
  name: string;
  email: string;
  phone: string;
  vin: string;
  message: string;
  status?: string;
}

export interface IApplicationResponse extends IApplication {
  id: string;
  createdAt: string;
}

export interface IUser {
  email: string;
}
