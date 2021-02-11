import Component from "../Component.js";
import { Core } from "../core.js";

export default class Item extends Component {
    createHTML() {
        return Core.createElement("p", null, "Child");
    }

    proptypes = {
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
    };
}
