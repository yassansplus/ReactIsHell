import Component from "../Component.js";
import { Core } from "../core.js";
import Item from "./Item.js";

export default class List extends Component {
    createHTML() {
        console.log(this.props);
        this.props?.map((user) => console.log(user?.firstName));

        return Core.createElement("p", null, "one");
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
