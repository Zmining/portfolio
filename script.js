async function apiResponseGit(){
    const apiResponse = await fetch("https://api.github.com/users/zmining/repos")
    const data = await apiResponse.json()

    console.log(data)

    for(var key in data){
        const projetosParaExcluir = ['Zmining', 'E-Commerce'];
        if(data[key].name != projetosParaExcluir[0] && data[key].name != projetosParaExcluir[1]){
            const projetosContainer = document.getElementById('projetos');
            console.log(data[key].name)
            console.log(data[key].description)
            const projetoElement = document.createElement('div');
                projetoElement.className = 'projeto';
                projetoElement.innerHTML = `
                    <h2><a href="${data[key].html_url}" target="_blank">${data[key].name}</a></h2>
                    <p>${data[key].description || 'Sem descrição'}</p>
                `;
                projetosContainer.appendChild(projetoElement);
        }
    }

}


apiResponseGit()

const curriculum = document.getElementById('curriculum');

curriculum.addEventListener('click', function(){
    const link = document.createElement('a')
    link.href = './assets/archives/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
})
