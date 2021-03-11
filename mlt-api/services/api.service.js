import axios from 'axios';

const API_BASE_PATH = process.env.API_BASE_PATH;

const PATH = {
    searchAPI: (query) => API_BASE_PATH + "/sites/MLA/search?q=" + query,
    currencyAPI: (currencyId) => API_BASE_PATH + "/currencies/" + currencyId,
    categoryAPI: (categoryId) => API_BASE_PATH + "/categories/" + categoryId,
    itemAPI: (itemId) => API_BASE_PATH + "/items/" + itemId,
    descriptionAPI: (itemId) => PATH.itemAPI(itemId) + "/description",
};

export const getRawItemsByQuery = async (query) => {
    const response = await axios.get(PATH.searchAPI(query));
    return response.data;
};

export const getRawItemById = async (itemId) => {
    const response =  await axios.get(PATH.itemAPI(itemId));
    return response.data;
};

export const getCurrencyById = async (currencyId) => {
    const response =  await axios.get(PATH.currencyAPI(currencyId));
    return response.data;
};

export const getCategoryByCategoryId = async (categoryId) => {
    const response =  await axios.get(PATH.categoryAPI(categoryId));
    return response.data;
}

export const getDescriptionByItemId = async (itemId) => {
    const response = await axios.get(PATH.descriptionAPI(itemId));
    return response.data.plain_text;
};
