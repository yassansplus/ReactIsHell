import Router from "./Router.js";
import HelloComponent from "./HelloComponent.js";

let root = document.getElementById("root");

const router = new Router();

router.get("/pipi", () => {
    console.log(root);
    root.innerHTML = "PipiPooPooCheck";
});

router.get("/t-max", () => {
    console.log(root);
    root.innerHTML = "T-Max pot Akrapovic";
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
