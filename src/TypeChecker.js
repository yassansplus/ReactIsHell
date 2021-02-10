export default function checkType(value, configuration) {
    //Configuration represente l'objet que auquel doit correspondre notre variable
    //Exemple
    //propertiesConfiguration = {
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
    if(!configuration) {
        throw new Error("No configuration specified")
    }
    switch(configuration.type) {
        case "string":
        case "boolean":
        case "number":
            return typeof value === configuration.type


        default:
            throw new Error("Unsupported type " + configuration.type);
    }
}
