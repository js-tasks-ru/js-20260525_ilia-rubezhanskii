/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    let [...arr] = path.split('.');
    /**
     * 
     * @param {Object} obj 
     */
    let newFunction = function(obj)
    {
        try
        {
            let objArr = [obj];
            let result;
            for(let i = 0; i < arr.length; i++)
            {
                let prop = (objArr[i])[`${Object.keys(objArr[i]).find(x => x.toString() === arr[i])}`];
                if(prop != null && Object.getPrototypeOf(prop) === Object.prototype)
                {
                    objArr[i+1] = prop;
                } else
                {
                    result = prop;
                }
            }
            return result;
        } catch
        {
            console.log("Ошибка распознания пути объекта");
            return undefined;
        }
    }
    return newFunction;
}