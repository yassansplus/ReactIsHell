import Component from "./Component.js";
import { Core } from "./core.js";
export default class HelloComponent extends Component {
    createHTML() {
        return Core.createElement(
            "div",
            null,
            Core.createElement(
                "h1",
                null,
                `Hello ${this.props?.fullName?.firstName} ${this.props?.fullName?.lastName} `
            )
        );
    }

    //PROTYPE
    proptypes = {
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
}
