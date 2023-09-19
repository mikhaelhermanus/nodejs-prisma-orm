import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
    errorFormat : 'pretty',
    log: ["info", "warn", "query", "error"]
});