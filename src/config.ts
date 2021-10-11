import { getListFromEnvParser, getStringFromEnvParser, validateConfig } from "typed-env-parser";

import dotenv from "dotenv";

dotenv.config();

export default validateConfig({
    token: getStringFromEnvParser("TOKEN"),
    // @ts-ignore
    prefix: process.env.PREFIX,
    // @ts-ignore
    usersThatAllowedToUseAnnouncementCommand: process.env.ANNOU_ADMINS,
    // @ts-ignore
    usersToBeIgnoredByAnnouncementCommand: process.env.ANNOU_IGNORE,
})
