import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', ()=>{
    it('should can insert many to many relation', async()=>{
        const like = await prismaClient.like.create({
            data:{
                customer_id :"joko",
                product_id : "P0001"
            },
            include: {
                customer : true,
                product : true
            }
        })
        console.info(like)
    })

    it('should can find one with many to many relation', async()=>{
        const customer = await prismaClient.customer.findUnique({
            where:{
                id : 'eko'
            },
            include:{
                likes : {
                    include :{
                        product : true
                    }
                }
            }
        })
        console.info(customer)
    })

    it('should can find many with many to many relation', async()=>{
        const customer = await prismaClient.customer.findMany({
            where:{
                likes : {
                    some : {
                        product :{
                            name:{
                                contains : 'A'
                            }
                        }
                    }
                }
            },
            include:{
                likes : {
                    include :{
                        product : true
                    }
                }
            }
        })
        console.info(customer)
    })


})

