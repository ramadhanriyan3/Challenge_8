import jwt from "jsonwebtoken";
const privateKey: string = "soSecret";

interface payloadTOken {
  user_id: string;
  name: string;
  email: string;
  role: string;
  created_at: Date;
}
function createToken(payload: payloadTOken) {
  return jwt.sign(payload, privateKey, { expiresIn: "1d" });
}

export default createToken;
