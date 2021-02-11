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

        const route = { uri, callback };
        this.routes.push(route);
    }

    init() {
        /*
            Le code ci-dessous vas s'exécuter sur chaque routes existantes et vérifier s'il passe les tests (en l'occurence la regex correspondant à la route recherchée).
            path = route recherchée (/t-max par exemple)
            regex = la route existante sur laquelle on est entrain de boucler
            Si path = regex(route), on fais un callback sur la bonne URI pour retrouver son contenu avec get().
         */
        this.routes.some((route) => {
            let path = window.location.pathname;
            let regex = new RegExp(`^${route.uri}$`);

            if (path.match(regex)) {
                let req = { path };
                return route.callback.call(this, req);
            }
        });
    }
}
