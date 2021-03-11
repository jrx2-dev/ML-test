import * as apiService from './api.service.js';

import { mapCategoryNamesFromFilters, mapCategoryNamesFromCategory } from "../helpers/categories.helper.js";
import { getMappedItems, getMappedDetailItem } from "../helpers/items.helper.js";
import { getAuthorInfo } from "../helpers/author.helper.js"

const DEFAULT_CURRENCY_SYMBOL = process.env.DEFAULT_CURRENCY_SYMBOL;
const DEFAULT_CURRENCY_DECIMALS = process.env.DEFAULT_CURRENCY_DECIMALS;

const NUMBER_OF_RESULTS = process.env.NUMBER_OF_RESULTS;

const getSlicedRawItemsByQuery = async (query, amount) => {
    const response = await apiService.getRawItemsByQuery(query);
    const slicedResults = await response.results.slice(0, amount);
    return [response.filters, slicedResults];
};

const getRawItemById = async (itemId) => {
    return await apiService.getRawItemById(itemId);
};

const getCurrencyById = async (currencyId) => {
    const {
        symbol = DEFAULT_CURRENCY_SYMBOL,
        decimal_places = DEFAULT_CURRENCY_DECIMALS
    } = await apiService.getCurrencyById(currencyId);
    return { symbol, decimal_places };
};

const getCategoryByCategoryId = async (categoryId) => {
    const { name, path_from_root = [] } = await apiService.getCategoryByCategoryId(categoryId);
    return { name, path_from_root };
}

const getDescriptionByItemId = async (itemId) => {
    return await apiService.getDescriptionByItemId(itemId);
};

export const getItemsByQuery = async (query) => {
    const [filters, rawItems] = await getSlicedRawItemsByQuery(query, NUMBER_OF_RESULTS);
    const currencyInfo = await getCurrencyById(rawItems[0].currency_id);
    const categories = await mapCategoryNamesFromFilters(filters);
    const items = await getMappedItems(rawItems, currencyInfo);
    return {
        author: getAuthorInfo(),
        categories,
        items,
    };
};

export const getItemById = async (itemId) => {
    const rawItem = await getRawItemById(itemId);
    const currencyInfo = await getCurrencyById(rawItem.currency_id);
    const description = await getDescriptionByItemId(itemId);
    const category = await getCategoryByCategoryId(rawItem.category_id);
    const categoryNames = await mapCategoryNamesFromCategory(category);
    const item = await getMappedDetailItem(rawItem, currencyInfo, description, categoryNames);
    return {
        author: getAuthorInfo(),
        item,
    }
};
