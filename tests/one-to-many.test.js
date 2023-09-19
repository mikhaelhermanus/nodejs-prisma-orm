import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', ()=>{
    it('should can insert and include', async ()=>{
        const comment = await prismaClient.comment.create({
            data : {
                customer_id : "eko",
                title : 'Insert Comment',
                description : 'Description Comment'
            },
            include:{
                customer: true
            }
        })

        console.info(comment);
    });

    it('can insert and many relation', async()=>{
        const customer = await prismaClient.customer.create({
            data : {
                id : 'alex',
                nama : 'Alex',
                email : 'alex@pzn.com',
                phone : "909000909090",
                comments:{
                    createMany:{
                        data :[
                            {
                                title : 'comment 1',
                                description :  'description 1'
                            },
                            {
                                title : 'comment 2',
                                description : 'Description 2'
                            }
                        ]
                    }
                }
            },
            include : {
                comments : true
            }
        })
        console.info(customer)
    });

    it('can find many with relation', async ()=>{
        const customers = await prismaClient.customer.findMany({
            where : {
                comments : {
                    some : {
                        title :{
                            contains : "Comment"
                        }
                    }
                }
            },
            include :{
                comments: true
            }
        })

        console.info(customers)
    })

})