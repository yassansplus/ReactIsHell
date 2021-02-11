import Component from "../Component.js";
import List from "./List.js";

export default class AppComponent extends Component {
    propertiesConfiguration = {
        type: "object",
        properties: {
            fullName: {
                type: "object",
                properties: {
                    firstName: {
                        type: "string",
                    },
                    lastName: {
                        type: "string",
                    },
                },
            },
        },
    };

    async getDepartements() {
        return await fetch("https://geo.api.gouv.fr/departements").then((res) =>
            res.json()
        );
    }

    async render() {
        this.template = "<h1>Hello World</h1>";
        return await this.getDepartements()
            .then((data) => {
                return new List().display(data);
            })
            .then((listTemplate) => {
                this.template += listTemplate;
            });
    }
}
