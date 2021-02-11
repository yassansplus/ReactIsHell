export default class Router {

    constructor(){
        this.routes = [];
    }

    get(uri, callback) {
        this.routes.forEach(route => {
            if (route.uri === uri) throw new Error(`The uri ${route.uri} already exists`);
        });

        const route = { uri, callback };
        this.routes.push(route);
    }

}