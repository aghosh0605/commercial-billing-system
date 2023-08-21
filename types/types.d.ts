/* eslint-disable no-unused-vars */
declare namespace jsonwebtoken {
  interface JwtPayload {
    id?: number;
    isAdmin?: boolean;
  }
}

declare namespace Express {
  interface Request {
    user?: Object;
  }
}
