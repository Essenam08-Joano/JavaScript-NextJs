// Collect list of users and display their names

// Add a state of loading
async function loadUsers(){
    //Récupérer les éléments HTML
    const status = document.getElementById("status") ;
    const list = document.getElementById("listUsers");

    //Afficher le message de chargement avant le lancement de la requête
    status.textContent = "Chargement...";
    
    //Récupération des données
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Afficher les noms des utilisateurs
    users.forEach(user => {
        //Création d'un nouvel élément
        const li = document.createElement("li");
        //On mets le nom de l'utilisateur dans l'élément
        li.textContent = user.name;
        //On ajoute ce <li> dans la <ul>
        list.appendChild(li);
    });
}

loadUsers();
