const CATEGORY_ID = process.env.CATEGORY_ID;

const mapCategoryNamesFromCategories = async (categories) => {
    return await categories.map(category => category.name);
};

export const mapCategoryNamesFromCategory = async (category) => {
    const { name, path_from_root } = category;
    let categoryNames;
    if ( path_from_root.length) {
        categoryNames = await mapCategoryNamesFromCategories(path_from_root);
    } else {
        categoryNames = [name];
    }
    return categoryNames;
};

export const mapCategoryNamesFromFilters = async (filters) => {
    const categoryFilter = await filters.find(filter => filter.id === CATEGORY_ID);
    const categories = categoryFilter ? categoryFilter.values[0].path_from_root : [];
    const mapedCategories = await mapCategoryNamesFromCategories(categories);
    return mapedCategories;
};
