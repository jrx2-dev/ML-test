const getMappedBaseItem = async (rawItems, currencyInfo) => {
    const mappedBaseItems = await rawItems.map(rawItem => {
        return {
            id: rawItem.id,
            title: rawItem.title,
            price: {
                currency: currencyInfo.symbol,
                amount: rawItem.price,
                decimals: currencyInfo.decimal_places,
            },
            picture: rawItem.thumbnail,
            condition: rawItem.condition,
            free_shipping: rawItem.shipping.free_shipping,
        };
    });
    return mappedBaseItems;
};

export const getMappedItems = async (rawItems, currencyInfo) => {
    const mappedBaseItems = await getMappedBaseItem(rawItems, currencyInfo);
    const mappedItems = await mappedBaseItems.map(( baseItem, index ) => {
        return {
            ...baseItem,
            city_name: rawItems[index].address.city_name,
        }
    });
    return mappedItems;
};

export const getMappedDetailItem = async (detailItem, currencyInfo, description, categories) => {
    const [itemBaseMapped] = await getMappedBaseItem([detailItem], currencyInfo);
    return {
        ...itemBaseMapped,
        sold_quantity: detailItem.sold_quantity,
        description,
        categories,
    };
};
