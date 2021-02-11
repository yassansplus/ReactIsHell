import Router from "./Router.js";
import HelloComponent from "./HelloComponent.js";
// import BasicComponent from "./components/BasicComponent.js";
import List from "./components/List.js";

let root = document.getElementById("root");

const router = new Router();

//POC
// router.get("/", () => {
//     let basicComponent = new BasicComponent();
//     basicComponent.display(null).then((template) => {
//         root.appendChild(template);
//     });
// });

router.get("/users", () => {
    const users = [
        {
            firstName: "Wassim",
        },
        {
            firstName: "Théo",
        },
        {
            firstName: "Yassine",
        },
    ];

    const userList = new List();
    userList.display(users).then((template) => {
        root.appendChild(template);
    });
});

router.get("/hello", () => {
    const user = {
        fullName: {
            firstName: "Wassim",
            lastName: "Dahmane",
        },
    };
    const helloComponent = new HelloComponent();
    helloComponent.display(user).then((template) => {
        root.appendChild(template);
    });
});

router.init();
