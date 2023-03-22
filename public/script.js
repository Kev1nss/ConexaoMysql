document.getElementById("linkSobre").addEventListener("click", function() {
  redirecionarPagina("sobre");
});

document.getElementById("linkCursos").addEventListener("click", function() {
  redirecionarPagina("cursos");
});

document.getElementById("linkCadastro").addEventListener("click", function() {
  redirecionarPagina("cadastro");
});
function redirecionarPagina(pagina) {
  console.log("Redirecionando para página: " + pagina);
  switch(pagina) {
    case "sobre":
      window.location.href = "sobre.html";
      break;
    case "cursos":
      window.location.href = "cursos.html";
      break;
    case "cadastro":
      window.location.href = "cadastro.html";
      break;
    default:
      console.log("Página não encontrada");
  }
}