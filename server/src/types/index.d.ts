// import { Types } from "mongoose";
export {};
declare global {
  namespace Express {
    interface Request {
      user: {
        id: any;
        email: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        avatar: string;
      };
    }
  }
}
