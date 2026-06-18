/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns the new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    try
    {
    for(let [key, value] of Object.entries(obj))
    {
        if(value != undefined || value != null)
        {
            delete obj[`${key}`];
            obj[`${value}`] = key;
        } else throw new Error();
    }
    } catch  
    {
        return undefined;
    }
    return obj;
}
