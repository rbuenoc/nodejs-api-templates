export function renameFields(obj: any, keysMap: any) {
    if (obj)
        return Object.keys(obj)
            .reduce((acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
        }), {});
    else
        return obj;
}
