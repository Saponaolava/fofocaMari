import "./style.css";

let app = (document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`);

const armadilha = () => {
  window.open("http://www.google.com/", "minhaJanela", "height=200,width=200");
};
setTimeout(() => {
  armadilha();
}, 100);

confirm(armadilha);
