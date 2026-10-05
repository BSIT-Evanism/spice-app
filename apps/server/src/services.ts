import { createAuth } from "@spice-app/auth";
import { createDb } from "@spice-app/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
