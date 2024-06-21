import prismaCLient from "../../prisma";

interface ProductCategoryRequest{
    category_id: string
}

class ListByCategoryService {
    async execute({ category_id }: ProductCategoryRequest){

        const product = await prismaCLient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return product

    }
}

export { ListByCategoryService }