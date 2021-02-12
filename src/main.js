import Router from "./Router.js";
import HelloComponent from "./components/HelloComponent.js";
import List from "./components/List.js";

const root = document.getElementById("root");

const router = new Router();

router.get("#users", () => {
    const users = ["Wassim", "Théo", "Yassine"];

    const userList = new List();
    userList.display(users).then((template) => {
        root.appendChild(template);
    });
});

router.get("#hello", () => {
    const user = {
        fullName: {
            firstName: "Wassim",
        },
    };
    const helloComponent = new HelloComponent();
    helloComponent.display(user).then((template) => {
        root.appendChild(template);
    });
});
router.init();

window.addEventListener(
    "hashchange",
    () => {
        root.innerHTML = "";
        router.init();
    },
    false
);
