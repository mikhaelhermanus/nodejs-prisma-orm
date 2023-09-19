import { prismaClient } from "../src/prisma-client"
//create many untuk create sekaligus banyak record ke DB
describe("Prisma Client", () => {
    it('should can create many records', async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "joko",
                    email: 'joko@pzn.com',
                    nama: 'joko',
                    phone: "1234567123127"
                },
                {
                    id: 'mikhael',
                    email: 'mikhael@pzn.com',
                    phone: '123454321',
                    nama: 'mikhael'
                }
            ]
        });

        expect(count).toBe(2);
    })

    it('should be able to update many', async () => {
        const { count } = await prismaClient.customer.updateMany({
            data: {
                email: 'mikhaellagi@pzn.com'
            },
            where: {
                nama: 'mikhael'
            }
        })

        expect(count).toBe(1)
    })

    it('should be able to delete many', async () => {
        const { count } = await prismaClient.customer.deleteMany({
            where: {
                nama: 'Tidak Ada'
            }
        })

        expect(count).toBe(0);
    })

    it('should be able to read many', async()=>{
        const customers = await prismaClient.customer.findMany({});
        console.info(customers);
        expect(customers.length).toBe(10);
    })
})