import Component from './Component.js';

export default class HelloComponent extends Component {

    template = `<h1 class="teal-text center">Hello je m'appelle {{ fullName.firstName }} {{ fullName.lastName }} et j'aime le zouk love.</h1>`;

    propertiesConfiguration = {
        type: "object",
        properties: {
            fullName: {
                type: "object",
                properties: {
                    firstName: {
                        type: "string"
                    },
                    lastName: {
                        type: "string"
                    }
                }
            }
        }
    }

}
