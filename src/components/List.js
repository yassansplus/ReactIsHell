import Component from "../Component.js";
import { Core } from "../core.js";

export default class List extends Component {
    createHTML() {
        return Core.createElement(
            "div",
            null,
            ...this.props.map((user) => Core.createElement("p", null, user))
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
