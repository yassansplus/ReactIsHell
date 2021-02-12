import Component from "../Component.js";
import { Core } from "../core.js";

export default class List extends Component {
    createHTML() {
        return Core.createElement(
            "div",
            { className: "flex w-10/12 justify-around" },
            ...this.props.map((user) =>
                Core.createElement(
                    "div",
                    { className: "flex flex-col items-center justify-center" },
                    Core.createElement(
                        "img",
                        {
                            src: user.img,
                            className: "rounded-full",
                            style: "width:350px;height:350px;",
                        },
                        null
                    ),
                    Core.createElement("p", { className: "p-3" }, user.name),
                    Core.createElement("p", null, user.role)
                )
            )
        );
    }

    //PROTYPE
    proptypes = {
        type: "array",
        propertiesType: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                img: {
                    type: "string",
                },
                role: {
                    type: "string",
                },
            },
        },
    };
}
