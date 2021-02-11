import checkType from "./TypeChecker.js";

export default class Component {
    propertiesConfiguration = null;
    template = "";

    // Display is asynchronous and returns a Promise, because it needs to wait for render(...) to be completed
    display(newProps) {
        if (newProps) {
            if (!checkType(newProps, this.propertiesConfiguration)) {
                throw new Error("Wrong configuration");
            }
        }
        if (this.shouldUpdate(newProps)) {
            return this.render().then(() => {
                return this.template;
            });
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
    // the template.vasy c
    render() {
        this.template = this.template.interpolate(this.props);
        return Promise.resolve(null);
    }
}
