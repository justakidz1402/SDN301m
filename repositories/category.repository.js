import Category from '../models/Category.model.js';

const categoryRepository = {
    create: async ({ name , description }) => {
        return await Category.create({ name, description});
    },
};
export default categoryRepository;