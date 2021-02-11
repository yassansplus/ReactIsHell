import Router from "./Router.js";
import HelloComponent from "./HelloComponent.js";
import AppComponent from "./components/BasicComponent.js";

let root = document.getElementById("root");

const router = new Router();

router.get("/", () => {
    let appComponent = new AppComponent();
    appComponent.display(null).then((template) => {
        root.innerHTML = template;
    });
});

router.get("/hello", () => {
    let user = {
        fullName: {
            firstName: "Wassim",
            lastName: "Dahmane",
        },
    };
    let helloComponent = new HelloComponent();
    helloComponent.display(user).then((template) => {
        root.innerHTML = template;
    });
});

router.init();
