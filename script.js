const url = "https://api.github.com/users/ArturAbreuDev/repos?sort=updated";

function getApiGitHub() {
  
  fetch(url)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      const data = await res.json();

      // Seleciona os projetos que deseja exibir
      const projetos = data.filter(item => item.name === "App_Financas" || item.name === "Jogo_mata_mosquito");

      // Seleciona os elementos HTML onde deseja exibir as informações dos projetos
      const cardgitElements = document.querySelectorAll("#git .cardgit");

      // Define o conteúdo dos elementos HTML com as informações dos projetos
      projetos.forEach((projeto, index) => {
        const titleElement = document.createElement("h2");
        titleElement.textContent = projeto.name;
        titleElement.classList.add("title-class"); // adiciona a classe "title-class"
        cardgitElements[index].appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = projeto.description;
        descriptionElement.classList.add("descricao-class"); // adiciona a classe "descricao-class"
        cardgitElements[index].appendChild(descriptionElement);

        const languageElement = document.createElement("span");
        languageElement.textContent = `${projeto.language}`;
        languageElement.classList.add("lang-class"); // adiciona a classe "lang-class"
        cardgitElements[index].appendChild(languageElement);


        const gitIconElement = document.createElement("img");
        gitIconElement.src = "assets/folder.svg";
        gitIconElement.classList.add("icon-git"); // adiciona a classe "icon-git"
        gitIconElement.alt = "Ícone do GitHub";
        cardgitElements[index].appendChild(gitIconElement);
      });
    })
    .catch((e) => console.log(e));
}

getApiGitHub();
