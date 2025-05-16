import jwt from "jsonwebtoken";
import {configFile} from "../constants.config.js";
const { sign, verify } = jwt;

export const generateToken = (data) => {
    const token = sign(data, configFile.jwtSecret, { expiresIn: "1d" });
    return token;

};
