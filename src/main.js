import Router from "./Router.js";
import HelloComponent from "./components/HelloComponent.js";
import List from "./components/List.js";

const root = document.getElementById("root");

const router = new Router();

router.get("#users", () => {
    // const users = ["Wassim", "Théo", "Yassine"];
    const users = [
        {
            name: "Théo",
            role: "Developpeur",
            img:
                "https://avatars.githubusercontent.com/u/31790786?s=400&u=a6187b84f87f6d0d1cdd2d008fe8c2f4f66fe14f&v=4",
        },
        {
            name: "Wass",
            role: "Developpeur",
            img:
                "https://pbs.twimg.com/profile_images/1347323441330974721/12NCTnWE_400x400.jpg",
        },
        {
            name: "Yass",
            role: "Developpeur",
            img:
                "https://dl.reseau-ges.fr/public/dcj6AO1JD5_t-PdBOWigoLB8L8SD6UVZx_KvxH9QFt4?pfdrid_c=true",
        },
    ];

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
