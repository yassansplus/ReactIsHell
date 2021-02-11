import Router from './Router.js';


let root = document.getElementById('root');

const router = new Router();

router.get('/pipi', () => {
    console.log(root);
    root.innerHTML = "PipiPooPooCheck";
});

router.get('/t-max', () => {
    console.log(root);
    root.innerHTML = "T-Max pot Akrapovic";
});


router.init();