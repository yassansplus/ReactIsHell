import Component from "../Component.js";
import { Core } from "../core.js";
import Item from "./Item.js";

export default class List extends Component {
    createHTML() {
        return Core.createElement(
            "p",
            null,
            ...this.props.map((user) => user.firstName)
        );
    }

    //PROTYPE
    proptypes = {
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
}
