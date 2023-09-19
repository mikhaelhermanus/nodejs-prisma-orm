import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('should be able to create customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "Khannedy",
                email: "Khannedy@pzn.com",
                nama: "Eko Khanedy",
                phone: "0812345678"
            }
        })

        expect(customer.id).toBe("Khannedy")
        expect(customer.email).toBe("Khannedy@pzn.com")
        expect(customer.nama).toBe("Eko Khanedy")
        expect(customer.phone).toBe("0812345678")
    })

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                nama: "Eko Khanedy updated",
            },
            where: {
                id: 'Khannedy'
            }
        })

        expect(customer.id).toBe("Khannedy")
        expect(customer.email).toBe("Khannedy@pzn.com")
        expect(customer.nama).toBe("Eko Khanedy updated")
        expect(customer.phone).toBe("0812345678")
    })

    it('should be able to read customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: 'Khannedy'
            }
        })

        expect(customer.id).toBe("Khannedy")
        expect(customer.email).toBe("Khannedy@pzn.com")
        expect(customer.nama).toBe("Eko Khanedy updated")
        expect(customer.phone).toBe("0812345678")
    })

    it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: 'Khannedy'
            }
        })

        expect(customer.id).toBe("Khannedy")
        expect(customer.email).toBe("Khannedy@pzn.com")
        expect(customer.nama).toBe("Eko Khanedy updated")
        expect(customer.phone).toBe("0812345678")
    })
})