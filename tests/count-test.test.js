import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', ()=>{
    it('should can count', async()=>{
        const total = await prismaClient.customer.count({
            where :{
                nama : "eko"
            }
        })

        console.info(total)
        expect(total).toBe(4);
    });
})