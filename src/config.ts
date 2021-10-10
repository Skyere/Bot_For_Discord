import { getListFromEnvParser, getStringFromEnvParser, validateConfig } from "typed-env-parser";

import dotenv from "dotenv";

dotenv.config();

export default validateConfig({
    token: getStringFromEnvParser("TOKEN"),
    prefix: getStringFromEnvParser("PREFIX"),
    usersThatAllowedToUseAnnouncementCommand: getListFromEnvParser("ANNOU_ADMINS"),
    usersToBeIgnoredByAnnouncementCommand: getListFromEnvParser("ANNOU_IGNORE"),
})
