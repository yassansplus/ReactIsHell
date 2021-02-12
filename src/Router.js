export default class Router {
    constructor() {
        this.routes = [];
    }

    get(uri, callback) {
        if (!uri || !callback) throw new Error("URI or callback must be given"); // If URI/Callback is missing
        if (typeof uri !== "string")
            throw new TypeError("Type of URI must be a string"); // If URI isn't a string
        if (typeof callback !== "function")
            throw new TypeError("Type of callback must be a function"); // If callback isn't a function.
        this.routes.forEach((route) => {
            if (route.uri === uri)
                throw new Error(`The uri ${route.uri} already exists`);
        });

        this.routes.push({ uri, callback });
    }

    init() {
        this.routes.some((route) => {
            let path = window.location.hash;

            let regex = new RegExp(`^${route.uri}$`);

            if (path.match(regex)) {
                let req = { path };
                return route.callback.call(this, req);
            }
        });
    }
}
