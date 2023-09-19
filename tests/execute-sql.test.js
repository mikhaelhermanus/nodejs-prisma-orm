import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should be able to execute sql', async () => {
        const id = "1";
        const name = "Eko Kurniawan";

        const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, nama) VALUES (${id}, ${name})`
        expect(impacted).toBe(1)
    })
})