import dotenv from "dotenv";
dotenv.config();

export const configFile = {
    mongodbConnectionString: process.env.DATABASE,
    jwtSecret: process.env.jwtSecret,
    PORT: process.env.PORT,
};

export const responseStatus = {
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
};

export const chatTypes = {
    OneOnOne: "OneOnOne",
    groupChat: "GroupChat",
};

export const scheduleStatus = {
    PENDING: "pending",
    SENT: "sent",
    FAILED: "failed",
};
