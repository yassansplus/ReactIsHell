
export default class Component {

    propertiesConfiguration = null
    template = ""

    shouldUpdate(newProps) {
        if(newProps !== this.props) {
            this.props = newProps;
            return true;
        }

        return false;
    }

    // Render is asynchronous because we might want to load some datas from an external source before compiling
    // the template.
    render() {
        this.template = this.template.interpolate(this.props);
        return Promise.resolve(null)
    }

}
