import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", ()=>{
    it('should can create and select fields', async()=>{
        const customer = await prismaClient.customer.create({
            data : {
                id:'rully',
                email : 'rully@pzn.com',
                phone : '1222334455',
                nama : 'Rully Nugraha'
            },
            select:{
                id : true,
                nama : true
            }
        })

        expect(customer.id).toBe('rully');
        expect(customer.nama).toBe('Rully Nugraha');
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    })

    it('should can select fields', async()=>{
        const customers = await prismaClient.customer.findMany({
            select:{
                id: true,
                nama : true
            }
        })

        console.info(customers)

        for (let customer of customers){
            expect(customer.id).toBeDefined();
            expect(customer.nama).toBeDefined();
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();
        }
    })
})