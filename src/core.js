function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) =>
                child instanceof Object
                    ? child
                    : createElement("TEXT", { nodeValue: child })
            ),
        },
    };
}

function render(element, container) {
    const dom =
        element.type === "TEXT"
            ? document.createTextNode("")
            : document.createElement(element.type);

    Object.getOwnPropertyNames(element.props)
        .filter((prop) => prop !== "children")
        .forEach((prop) => (dom[prop] = element.props[prop]));

    element.props.children.forEach((child) => render(child, dom));

    return !container ? dom : container.appendChild(dom);
}

export const Core = {
    createElement,
    render,
};
