import prismaCLient from "../../prisma";

class DetailsUserService {
    async execute(user_id: string){

        const user = await prismaCLient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { DetailsUserService }