import checkType from "./TypeChecker.js";
import { Core } from "./core.js";

export default class Component {
    proptypes = null;

    // Display is asynchronous and returns a Promise, because it needs to wait for render(...) to be completed
    display(newProps) {
        if (newProps) {
            if (!checkType(newProps, this.proptypes)) {
                throw new Error("Wrong configuration");
            }
        }
        if (this.shouldUpdate(newProps)) {
            return this.render().then(() => this.template);
        } else {
            return Promise.resolve(this.template);
        }
    }

    shouldUpdate(newProps) {
        if (newProps !== this.props) {
            this.props = newProps;
            return true;
        }

        return false;
    }

    // Render is asynchronous because we might want to load some datas from an external source before compiling
    render() {
        this.template = Core.render(this.createHTML());
        return Promise.resolve(null);
    }
}
