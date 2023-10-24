import repositories from "../repositories/index.js";

const categoryController = {
    create: async (req, res) => {
        try {
            const category = await repositories.categoryRepository.create(req.body);
            res.status(200).send({
                message: "Category created successfully",
                category
            });
        } catch (err) {
            res.status(400).send({ message: 'Category created Fail' });
        }
    },
};
export default categoryController;