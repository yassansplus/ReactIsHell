export default function checkType(value, configuration) {
    //Configuration represente l'objet que auquel doit correspondre notre variable
    //Exemple
    //proptypes = {
    //         type: "array",
    //         propertiesType: {
    //             type: "object",
    //             properties: {
    //                 firstName: {
    //                     type: "string"
    //                 },
    //                 lastName: {
    //                     type: "string"
    //                 }
    //             }
    //         }
    //     }
    //Ici notre  algo va verifié le type, de type Array et renvoyer true ou false si value n'est pas un tableau.
    // Le fonctionnement reste le meme pour les autre type de données.
    if (!configuration) {
        throw new Error("No configuration specified");
    }
    switch (configuration.type) {
        case "string":
        case "boolean":
        case "number":
            return typeof value === configuration.type;
        case "array":
            if (!Array.isArray(value)) {
                return false;
            }

            value.forEach((item) => {
                if (!checkType(item, configuration.propertiesType)) {
                    return false;
                }
            });
            return true;
        case "object":
            if (value instanceof Object) {
                if (configuration.properties == null) {
                    throw new Error(
                        "Properties must be specified when type checking an object"
                    );
                }
                for (const key in configuration.properties) {
                    // Avoid checking prototype properties
                    if (configuration.properties.hasOwnProperty(key)) {
                        // Check that the given object has a key corresponding to the configuration
                        let hasKey = value.hasOwnProperty(key);
                        if (!hasKey) {
                            return false;
                        }
                        // Check that the given object property has the correct type
                        if (
                            !checkType(
                                value[key],
                                configuration.properties[key]
                            )
                        ) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;

        default:
            throw new Error("Unsupported type " + configuration.type);
    }
}
