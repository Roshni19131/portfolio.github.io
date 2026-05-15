const projects = [
    {
        code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        site: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
        code: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        site: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
];

let index = 0;

const codeImg = document.querySelector(".code-img");
const siteImg = document.querySelector(".site-img");

document.querySelector(".right").onclick = () => {
    index = (index + 1) % projects.length;
    updateProject();
};

document.querySelector(".left").onclick = () => {
    index = (index - 1 + projects.length) % projects.length;
    updateProject();
};

function updateProject() {
    codeImg.src = projects[index].code;
    siteImg.src = projects[index].site;
}