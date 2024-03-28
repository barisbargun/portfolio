import {allowedOrigins} from ".";

const corsOptions = {
  origin: (origin:any, callback:CallableFunction) => {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200
};
export default corsOptions