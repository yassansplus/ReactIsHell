const doubleCurlyBraceRegex = /{{\s*([^}]+)\s*}}/g

function interpolate(value) {
    return this.replace(doubleCurlyBraceRegex, (m, k) => {
        return value.prop_access(k);
    })
}

String.prototype.interpolate = interpolate;

function prop_access(path) {
    let pathComponents = path.trim().split('.');
    let value = this[pathComponents[0]];

    for(let i = 1; i < pathComponents.length; i++) {
        value = value[pathComponents[i]];
    }

    return (value === undefined ? this.path + "not exist" : value)
}

Object.prototype.prop_access = prop_access;