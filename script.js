fetch('https://api.github.com/users/zmining/repos')
.then(response => response.json())
.then(data => {
    const projetosContainer = document.getElementById('projetos');

    // Lista de nomes de repositórios a serem excluídos
    const projetosParaExcluir = ['Zmining', 'E-Commerce'];

    data
        .filter(repo => !projetosParaExcluir.includes(repo.name))
        .forEach(repo => {
            const projetoElement = document.createElement('div');
            projetoElement.className = 'projeto';
            projetoElement.innerHTML = `
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                <p>${repo.description || 'Sem descrição'}</p>
            `;
            projetosContainer.appendChild(projetoElement);
        });
})
.catch(error => console.error('Erro ao carregar repositórios:', error));

document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll('nav a');

  navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = navItem.getAttribute('href');
      const targetDiv = document.querySelector(targetId);

      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      targetDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });
  });
});

const curriculum = document.getElementById('curriculum');

curriculum.addEventListener('click', function(){
    const link = document.createElement('a')
    link.href = './assets/archives/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
})
