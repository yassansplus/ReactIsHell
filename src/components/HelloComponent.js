import Component from "../Component.js";
import { Core } from "../core.js";

export default class HelloComponent extends Component {
    createHTML() {
        return Core.createElement(
            "div",
            null,
            Core.createElement(
                "h1",
                { className: "text-5xl" },
                "Hello  {{ fullName.firstName }} 👋🏼 !".interpolate(this.props)
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
                },
            },
        },
    };
}
