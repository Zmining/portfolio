fetch('https://api.github.com/users/zmining/repos', {
    headers: {
        'Authorization': 'token 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'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
    if (Array.isArray(data)) {
        data.filter(repo => !projetosParaExcluir.includes(repo.name))
            .forEach(repo => {
            const projetoElement = document.createElement('div');
            projetoElement.className = 'projeto';
            projetoElement.innerHTML = `
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                <p>${repo.description || 'Sem descrição'}</p>
            `;
            projetosContainer.appendChild(projetoElement);
        });
    }
          else {
        console.error('Resposta inesperada:', data);
    }
})
.catch(error => console.error('Erro ao carregar repositórios:', error));


const curriculum = document.getElementById('curriculum');

curriculum.addEventListener('click', function(){
    const link = document.createElement('a')
    link.href = './assets/archives/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
})
