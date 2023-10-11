import { Types } from "mongoose";

export {};

declare global {
  namespace Express {
    interface Request {
      user: {
        id: Types.ObjectId;
        email: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        avatar: string;
      };
    }
  }
}
