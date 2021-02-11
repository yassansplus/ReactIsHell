import Component from "../Component.js";

export default class Item extends Component {
    template =
        "<tr>\n" +
        "            <td>{{nom}}</td>\n" +
        "            <td>{{code}}</td>\n" +
        "            <td>{{codeRegion}}</td>\n" +
        "          </tr>";

    propertiesConfiguration = {
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
