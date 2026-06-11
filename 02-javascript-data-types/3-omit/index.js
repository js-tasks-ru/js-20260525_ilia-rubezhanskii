/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
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
    for(const [key,value] of Object.entries(tmp))
    {
        if(result[key] != undefined) delete tmp[`${key}`];
    }
    return tmp;
};