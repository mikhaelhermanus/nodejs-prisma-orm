import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', () => {
    it('should can execute sequential transaction', async () => {
        const [eko, kurniawan] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "eko",
                    email: 'eko@pzn.com',
                    nama: 'Eko',
                    phone: "1234567123123"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "kurniawan",
                    email: 'kurniawan@pzn.com',
                    nama: 'kurniawan',
                    phone: "112233445566"
                }
            })
        ],{
            timeout : 5
        })
        expect(eko.nama).toBe('Eko');
        expect(kurniawan.nama).toBe('kurniawan');
    });


    it('should can execute interactive transaction', async () => {
        const [eko, kurniawan] = await prismaClient.$transaction(async (prisma) => {

            const eko = await prisma.customer.create({
                data: {
                    id: "eko3",
                    email: 'eko3@pzn.com',
                    nama: 'Eko',
                    phone: "1234567123126"
                }
            })
            const kurniawan = await prisma.customer.create({
                data: {
                    id: "kurniawan3",
                    email: 'kurniawan3@pzn.com',
                    nama: 'kurniawan',
                    phone: "112233445569"
                }
            })
            return [eko, kurniawan]
        })
        expect(eko.nama).toBe('Eko');
        expect(kurniawan.nama).toBe('kurniawan');
    },{
        timeout : 5
    });
})