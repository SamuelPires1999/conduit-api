// Exclude keys from given object
export function exclude(target: any, keys: string[]) {
    for (let key of keys) {
        delete target[key];
    }
    return target;
}
