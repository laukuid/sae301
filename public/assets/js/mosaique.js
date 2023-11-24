document.addEventListener('DOMContentLoaded', () => {
    const data = {
        'products': [
            {
                'id': 1,
                'name': 'Les inconnus',
                'cours': 'Expression, communication et rhétorique',
                'date': '24 décembre 2023',
                'type': 'Moodle',
                'collaboratif': 'individuel'
            },
            {
                'id': 2,
                'name': 'Etude de la consommation numérique',
                'cours': 'Economie, gestion et droit du numérique',
                'date': '',
                'type': 'Mail',
                'collaboratif': 'collaboration'
            },
            {
                'id': 3,
                'name': 'sortir dans l\'aube',
                'cours': 'Création et design interactif (UI)',
                'date': '29 décembre 2023',
                'type': 'Mail',
                'collaboratif': 'individuel'
            }
        ]
    }

    localStorage.setItem('panier', JSON.stringify(data.products))
    datas = JSON.parse(localStorage.getItem('panier'))

    afficheArticle(datas)

    document.getElementById('ajouter').addEventListener('click', (e) => {
        e.preventDefault();
        nom = document.getElementById('nom').value;
        date = document.getElementById('date').value;
        cours = document.getElementById('cours').value;
        type = document.getElementById('type').value;
        collaboratif = document.getElementById('collaboratif').checked ? 'Collaboratif' : 'Individuel';

        const newProduct = {
            'id': datas.length + 1,
            'name': nom,
            'date': date,
            'cours': cours,
            'type': type,
            'collaboratif': collaboratif
        }

        datas.push(newProduct);
        localStorage.setItem('panier', JSON.stringify(datas));
        afficheArticle(datas);
    })

    function afficheArticle(datas) {
        const panier = document.getElementById('panier')
        panier.innerHTML = ''
        datas.forEach(product => {
            const article = document.createElement('article')
            article.classList.add('product')
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('supprimer')
            deleteButton.innerText = '❌'
            deleteButton.addEventListener('click', () => {
                const index = datas.findIndex(item => item.id === product.id)
                if (index !== -1) {
                    datas.splice(index, 1)
                    localStorage.setItem('panier', JSON.stringify(datas))
                    afficheArticle(datas)
                }
            })
            const editButton = document.createElement('button')
            editButton.classList.add('modifier')
            editButton.innerText = '✎'
            editButton.addEventListener('click', () => {
                openEditModal(product)
            })
            const closeButton = document.querySelector('.close');
            closeButton.addEventListener('click', () => {
                // Fermer la fenêtre modale en cachant son élément parent
                const modal = document.getElementById('modal');
                modal.style.display = 'none';
            });

            article.innerHTML = `
                <div class="contenu">
                    
                    <h3>Projet : ${product.name}</h3>
                    <p>Matière : ${product.cours}</p>
                    <p>Date de rendu : ${product.date}</p>
                    <p>Type de rendu : ${product.type}</p>
                    <p>travail : ${product.collaboratif}</p>
                    <div>
                        <label for="fait">mettre un rappel</label>
                        <input type="checkbox" id="fait" name="fait" value="fait"/>
                    </div>
                </div>
            `
            article.querySelector('.contenu').appendChild(deleteButton)
            article.querySelector('.contenu').appendChild(editButton)
            panier.appendChild(article)
        })
    }

    function openEditModal(product) {
        document.getElementById('editNom').value = product.name
        document.getElementById('editDate').value = product.date
        document.getElementById('editCours').value = product.cours
        document.getElementById('editType').value = product.type
        document.getElementById('editCollaboratif').checked ? 'Collaboratif' : 'Individuel'
        // ... Remplissez les autres champs pour la modification

        const modal = document.getElementById('modal')
        modal.style.display = 'block'

        document.getElementById('editForm').addEventListener('submit', (e) => {
            e.preventDefault()
            product.name = document.getElementById('editNom').value
            product.date = document.getElementById('editDate').value
            product.cours = document.getElementById('editCours').value
            product.type = document.getElementById('editType').value
            product.collaboratif = document.getElementById('editCollaboratif').checked ? 'Collaboratif' : 'Individuel'
            // ... Mettez à jour les autres détails pour la modification

            modal.style.display = 'none'
            afficheArticle(datas)
        })
    }
})