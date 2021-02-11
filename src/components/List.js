import Component from "../Component.js";
import Item from "./Item.js";

export default class List extends Component {
    propertiesConfiguration = {
        type: "array",
        propertiesType: {
            type: "object",
            properties: {
                nom: {
                    type: "string",
                },
                code: {
                    type: "string",
                },
                codeRegion: {
                    type: "string",
                },
            },
        },
    };

    render() {
        this.template =
            "<h2>Liste des départements</h2>" +
            " <table>\n" +
            "        <thead>\n" +
            "          <tr>\n" +
            "              <th>Nom</th>\n" +
            "              <th>Code</th>\n" +
            "              <th>Code région</th>\n" +
            "          </tr>\n" +
            "        </thead>\n" +
            "<tbody>";

        let promise = Promise.resolve("");
        for (let i = 0; i < this.props.length; i++) {
            promise = promise
                .then(() => {
                    return new Item().display(this.props[i]);
                })
                .then((item) => {
                    this.template += item;
                });
        }

        return promise.then(() => {
            this.template += "</tbody>\n" + "      </table>";
        });
    }
}
