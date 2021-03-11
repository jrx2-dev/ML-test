import * as itemsService from "../services/items.service.js";

import { createError } from "../helpers/error.helper.js";

export const getItemsByQuery = async (req, res) => {
    const { q: query} = req.query;
    if (query) {
        try {
            const response = await itemsService.getItemsByQuery(query);
            res.status(200).json(response);
        } catch (error) {
            createError(res, error);
        }
    } else {
        createError(res);
    }
};

export const getItemsById = async (req, res) => {
    const { id: itemId} = req.params;
    if (itemId) {
        try {
            const response = await itemsService.getItemById(itemId);
            res.status(200).json(response);
        } catch (error) {
            createError(res, error);
        }
    } else {
        createError(res);
    }
};
