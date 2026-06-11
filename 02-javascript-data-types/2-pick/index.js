/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const tmp = {};
    const result = {};
    for(const [key,value] of Object.entries(obj))
    {
        tmp[key] = value;
    }
    for(let i = 0; i < fields.length; i++)
    {
        result[fields[i]] = tmp[fields[i]];
    }
    return result;
};