/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    try
    {
        let [...result] = arr;
        let type = param;
        const collator = new Intl.Collator(['ru', 'en'], {
            sensitivity: 'variant',
            caseFirst: 'upper'
        });
        switch(type)
        {
            case 'asc':
                result.sort(collator.compare);
                break;
            case 'desc':
                result.sort((a, b) => collator.compare(b, a));
                break;
            default:
                throw new Error("Выбран несуществующий метод сортировки");
        }
        return result;
    } catch
    {
        alert("Выбран несуществующий метод сортировки");
    }    
    return arr;
}

