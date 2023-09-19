import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', () => {
    it('should can do paging', async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 2
        })
        console.info(page1)
        expect(page1.length).toBe(2)

        const page2 = await prismaClient.customer.findMany({
            skip: 2,
            take: 2
        })
        console.info(page2)
        expect(page2.length).toBe(2)

        const page3 = await prismaClient.customer.findMany({
            skip: 4,
            take: 2
        })
        console.info(page3)

        expect(page3.length).toBe(2);
    });
})