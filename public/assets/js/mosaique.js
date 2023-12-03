document.addEventListener('DOMContentLoaded', () => {
    const data = {
        'products': [
            {
                'id': 1,
                'name': 'Les Invisibles',
                'cours': 'Expression, communication et rhétorique',
                'date': '2023-11-10',
                'type': 'Moodle',
                'collaboratif': 'individuel'
            },
            {
                'id': 2,
                'name': 'Etude de la consommation numérique',
                'cours': 'Economie, gestion et droit du numérique',
                'date': '2023-10-10',
                'type': 'Mail',
                'collaboratif': 'collaboration'
            },
            {
                'id': 3,
                'name': 'Komola',
                'cours': 'Développement Front et intégration',
                'date': '2024-01-03',
                'type': 'Moodle',
                'collaboratif': 'individuel'
            },
            {
                'id': 4,
                'name': 'Sortir dans l\'aube',
                'cours': 'Création et design interactif (UI)',
                'date': '2023-29-12',
                'type': 'Moodle',
                'collaboratif': 'individuel'
            },
            {
                'id': 5,
                'name': 'Spot publicitaire',
                'cours': 'Audiovisuel et Motion design',
                'date': '2023-24-12',
                'type': 'Moodle',
                'collaboratif': 'collaboration'
            },
            {
                'id': 6,
                'name': 'chaîne twitch',
                'cours': 'Audiovisuel et Motion design',
                'date': '2023-01-10',
                'type': 'Moodle',
                'collaboratif': 'collaboration'
            },
            {
                'id': 7,
                'name': 'podcast',
                'cours': 'Culture numérique',
                'date': '2024-12-01',
                'type': 'Moodle',
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
            deleteButton.innerHTML = '<img src="/assets/img/delete.svg" alt="">';
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
            editButton.innerHTML = '<img src="/assets/img/contract_edit.svg" alt="">'
            editButton.addEventListener('click', () => {
                openEditModal(product)
            })
            const closeButton = document.querySelector('.close');
            closeButton.addEventListener('click', () => {
                // Fermer la fenêtre modale en cachant son élément parent
                const modal = document.getElementById('modal');
                modal.style.display = 'none';

            });

            localStorage.setItem('products', JSON.stringify(product));
            article.innerHTML = `
                <div class="contenu_rendu">    
                    <div class="rendu_placement">
                        <h2> ${product.cours}</h2>
                        <h3>${product.name}</h3>
                        <div class="jppplacement">
                            <div class="info-rendu">
                                <p class="items"><img src="/assets/img/calendar_month.svg" height="20px" alt=""> ${product.date}</p>
                                <p class="items"><img src="/assets/img/event_upcoming.svg" height="20px" alt=""> ${product.type}</p>
                                <p class="items"><img src="/assets/img/group.svg" height="20px" alt=""> ${product.collaboratif}</p>
                            <div>
                            </div>
                            </div>
                        </div>
                </div>
                <div class="bouton_rendu_article">

                </div>
            `
            article.querySelector('.bouton_rendu_article').appendChild(deleteButton)
            article.querySelector('.bouton_rendu_article').appendChild(editButton)
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