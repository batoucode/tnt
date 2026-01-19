// Données pour les scores
const matchScores = [
    { id: 1, team1: "TNT U13 M1", team2: "Tours Basket", score1: 78, score2: 65, date: "15/10/2023", competition: "Championnat Départemental" },
    { id: 2, team1: "TNT Senior", team2: "Joue-les-Tours", score1: 92, score2: 88, date: "14/10/2023", competition: "Pré-Nationale" },
    { id: 3, team1: "TNT U15 F1", team2: "Amboise BC", score1: 45, score2: 52, date: "13/10/2023", competition: "Régional Féminin" },
    { id: 4, team1: "TNT U18 M2", team2: "Fondettes", score1: 67, score2: 61, date: "12/10/2023", competition: "Championnat Régional" }
];

// Données pour les équipes
const teams = [
    {
        id: 1,
        name: "Séniors M",
        category: "SÉNIOR MASCULIN",
        coach: "A venir",
        training: "Mer 19h30-21h00 (Monnaie), Ven 19h45-21h00 (Monnaie)",
        nextMatch: "À venir",
        players: [
            { name: "Adrien CHERAMY", number: "", position: "" },
            { name: "Clement CIAVALDINI-MARET", number: "", position: "" },
            { name: "Sacha COURTIN", number: "", position: "" },
            { name: "Laurent DEGRAEVE", number: "", position: "" },
            { name: "Lucas HAUSSERAY", number: "", position: "" },
            { name: "Claude-bernard LECOUFFE", number: "", position: "" },
            { name: "Tom MARION MAURY", number: "", position: "" },
            { name: "Johann PUISAIS", number: "", position: "" },
            { name: "Gregory QUENAULT", number: "", position: "" },
            { name: "Adrien ROUPIE", number: "", position: "" },
            { name: "Malo SIBIRIL", number: "", position: "" },
            { name: "Loic STEPHAN", number: "", position: "" }
        ]
    },
    {
        id: 2,
        name: "U13 F",
        category: "U13 FÉMININ",
        coach: "Christian WEINLING",
        training: "Mer 13h30-15h00 (Monnaie), Mer 18h30-20h00 (Châteaux-Renault)",
        nextMatch: "À venir",
        players: []
    },
    {
        id: 3,
        name: "U13 M1",
        category: "U13 MASCULIN 1",
        coach: "Clément CIAVALDINI-MARET, Nelson HUGUET",
        training: "Lun 18h15-19h30 (Monnaie), Mer 15h30-16h45 (Château-Renault)",
        nextMatch: "À venir",
        players: [
            { name: "Cameron LECOUFFE", number: "", position: "" },
            { name: "Noah LEJEUNE", number: "", position: "" },
            { name: "Léo RIDET", number: "", position: "" },
            { name: "Gaspard ROGER", number: "", position: "" },
            { name: "Emilien SIBIRIL", number: "", position: "" },
            { name: "Thomas CHAUVET", number: "", position: "" },
            { name: "Gregory DESMARCHAIS", number: "", position: "" },
            { name: "Hugo FAYARD", number: "", position: "" },
            { name: "Louka FAYS", number: "", position: "" },
            { name: "Sosthene GIRARD", number: "", position: "" },
            { name: "Leon HUGUET", number: "", position: "" },
            { name: "Antonin LADROUE", number: "", position: "" }
        ]
    },
    {
        id: 4,
        name: "U13 M2",
        category: "U13 MASCULIN 2",
        coach: "Jean-Marie ROBIN, Adodo HOMAWOO",
        training: "Mar 18h30-20h00 (Château-R), Mer 15h00-16h30 (Monnaie)",
        nextMatch: "À venir",
        players: [
            { name: "Septime AGNUS", number: "", position: "" },
            { name: "Maxence BARROIS VOYER", number: "", position: "" },
            { name: "Grégory BOYER", number: "", position: "" },
            { name: "Noah CAZANAVE", number: "", position: "" },
            { name: "Joseph-kena DANTON", number: "", position: "" },
            { name: "Charles DAVID", number: "", position: "" },
            { name: "Nathan DELPUECH", number: "", position: "" },
            { name: "Thiago FOUQUET", number: "", position: "" },
            { name: "Noan HILI", number: "", position: "" },
            { name: "Simon HULIN", number: "", position: "" },
            { name: "Baptiste JUTTIN", number: "", position: "" },
            { name: "Teddy LECOMTE", number: "", position: "" },
            { name: "Noah LEJEUNE", number: "", position: "" },
            { name: "Tom LENOIR HUVET", number: "", position: "" },
            { name: "Warren SOBALAK", number: "", position: "" },
            { name: "Clement TANVIRAY", number: "", position: "" }
        ]
    },
    {
        id: 5,
        name: "U15 M",
        category: "U15 MASCULIN",
        coach: "Matteo MAILLE, Mickael PESSARD",
        training: "Mar 20h00-21h30 (Château-R), Jeu 18h30-20h00 (Château-R)",
        nextMatch: "À venir",
        players: [
            { name: "Charly BEGAULT", number: "", position: "" },
            { name: "Alex BERON BREDIF", number: "", position: "" },
            { name: "Hugo BESSAULT", number: "", position: "" },
            { name: "Jules BOISBELET", number: "", position: "" },
            { name: "Romain CHATAIGNIER", number: "", position: "" },
            { name: "Louis CLEMENT", number: "", position: "" },
            { name: "Elliot DIDDI", number: "", position: "" },
            { name: "Gabin LEGRET", number: "", position: "" },
            { name: "Enzo LOYAU", number: "", position: "" },
            { name: "Alexandre LUWEZ", number: "", position: "" },
            { name: "Aydan MILLET", number: "", position: "" },
            { name: "Kurt PEAUGEOIS", number: "", position: "" },
            { name: "Paul PESSARD", number: "", position: "" },
            { name: "Mathis ROHELIER", number: "", position: "" },
            { name: "Ethan SOBALAK", number: "", position: "" }
        ]
    },
    {
        id: 6,
        name: "U15 F1",
        category: "U15 FÉMININ 1",
        coach: "Mehdi BONNIN",
        training: "Lun 18h45-20h15 (Château-R), Mer 16h30-18h00 (Monnaie)",
        nextMatch: "À venir",
        players: [
            { name: "Elina BILLAUD", number: "", position: "" },
            { name: "Leonie BILLY", number: "", position: "" },
            { name: "Alyssia CHEKIOUA", number: "", position: "" },
            { name: "Séléne COUPÉ", number: "", position: "" },
            { name: "Anaïs GARONNE", number: "", position: "" },
            { name: "Lilwenn HAMON", number: "", position: "" },
            { name: "Victoria HEBERT", number: "", position: "" },
            { name: "Camille JASNIAK", number: "", position: "" },
            { name: "Maelysse MARIE-ANNE", number: "", position: "" },
            { name: "Célia MAUNY", number: "", position: "" },
            { name: "Jade PORCHER", number: "", position: "" }
        ]
    },
    {
        id: 7,
        name: "U15 F2",
        category: "U15 FÉMININ 2",
        coach: "Mehdi BONNIN, Anna Lynn PERRAULT",
        training: "Lun 18h45-20h15 (Château-R), Mer 16h30-18h00 (Monnaie)",
        nextMatch: "À venir",
        players: [
            { name: "Emma BOURHIS", number: "", position: "" },
            { name: "Mellya CHERGUI MEHANNECHE", number: "", position: "" },
            { name: "Camille DE IZARRA", number: "", position: "" },
            { name: "Kadiatou DIALLO", number: "", position: "" },
            { name: "Emilie FROUMENTY", number: "", position: "" },
            { name: "Juliette HUGUET", number: "", position: "" },
            { name: "Neia LI WOUNG KI", number: "", position: "" },
            { name: "Lola LOISEAU", number: "", position: "" },
            { name: "Coralie TERRASSIN", number: "", position: "" }
        ]
    },
    {
        id: 8,
        name: "U18 F",
        category: "U18 FÉMININ",
        coach: "Christian WEINLING",
        training: "Mer 18h00-19h30 (Monnaie), Ven 18h15-19h45 (Monnaie)",
        nextMatch: "À venir",
        players: [
            { name: "Pauline BLOT", number: "", position: "" },
            { name: "Sarah CAZANAVE", number: "", position: "" },
            { name: "Séléne COUPÉ", number: "", position: "" },
            { name: "Ela COUTAND", number: "", position: "" },
            { name: "Nael GAUTIER", number: "", position: "" },
            { name: "Lilwenn HAMON", number: "", position: "" },
            { name: "Juliette LOISEAU", number: "", position: "" },
            { name: "Veronica MAHOUKOU GHOUAMA", number: "", position: "" },
            { name: "Lili MOALIC", number: "", position: "" },
            { name: "Zoé PIRON", number: "", position: "" },
            { name: "Luna RAPIN--HERAUD", number: "", position: "" },
            { name: "Ines ROBIN", number: "", position: "" },
            { name: "Lahna ROBIN", number: "", position: "" }
        ]
    }
];

// Images pour la galerie
const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1544919982-b61976a0d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Entraînement U13" },
    { id: 2, url: "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Victoire Senior" },
    { id: 3, url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Match U15 Féminin" },
    { id: 4, url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Concentration avant match" },
    { id: 5, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Exercice de tir" },
    { id: 6, url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Esprit d'équipe" }
];

// État de l'application
let currentScores = [...matchScores];
let currentGallery = [...galleryImages];

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du thème
    initThemeSwitch();

    // Initialisation des menus
    initNavigation();

    // Chargement des scores
    renderScores();

    // Chargement de la galerie
    renderGallery();

    // Chargement des équipes
    renderTeams();

    // Animation au scroll
    initScrollAnimations();

    // Header qui change au scroll
    initHeaderScroll();

    // Ajout de l'élément pour ajouter des photos
    addPhotoUploadElement();

    // Affichage de la version
    displayVersion();

    // Lightbox pour l'image de fusion
    initFusionLightbox();
});

// Lightbox pour l'image de fusion
function initFusionLightbox() {
    const fusionImage = document.getElementById('fusionImage');
    if (fusionImage) {
        fusionImage.addEventListener('click', function () {
            openLightbox({
                url: 'img/fusion.jpg',
                title: "L'Union Explosive - TNT"
            });
        });
    }
}

// Thème Clair/Sombre
function initThemeSwitch() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (!toggleSwitch) return;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light-theme') {
        document.body.classList.add('light-theme');
        toggleSwitch.checked = true;
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}

// Navigation
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!mobileMenuBtn || !navMenu) return;

    mobileMenuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu au clic à l'extérieur
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            if (mobileMenuBtn.querySelector('i')) {
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        }
    });

    // Fermer le menu mobile au clic sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            if (mobileMenuBtn.querySelector('i')) {
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Gestion de l'état actif des liens selon l'URL (Multi-page)
    const currentPath = window.location.pathname;
    const navLinksList = document.querySelectorAll('nav a');
    navLinksList.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && href !== 'index.html' && currentPath.includes(href)) {
            link.classList.add('active');
        } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === 'index.html' || href === '#accueil')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Gestion du défilement fluide (pour les ancres internes)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header qui change au scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.padding = '12px 0';
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Animation au scroll
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = function () {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Appel initial
}

// Afficher les scores
function renderScores() {
    const scoresContainer = document.getElementById('scoresContainer');
    if (!scoresContainer) return;

    scoresContainer.innerHTML = '';

    // Si on est sur la page d'accueil, on ne montre que les 2 derniers scores
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('.html');
    const scoresToShow = isHomePage ? currentScores.slice(0, 2) : currentScores;

    scoresToShow.forEach(match => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'score-card fade-in';

        // Déterminer le gagnant pour le style
        const winner = match.score1 > match.score2 ? 'team1' : 'team2';

        scoreCard.innerHTML = `
            <div class="teams">
                <div class="team">
                    <div class="team-logo">TNT</div>
                    <div class="team-name">${match.team1}</div>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                    <div class="team-name">${match.team2}</div>
                    <div class="team-logo">${match.team2.substring(0, 3).toUpperCase()}</div>
                </div>
            </div>
            <div class="score">
                <span class="${winner === 'team1' ? 'winner' : ''}">${match.score1}</span>
                <span> - </span>
                <span class="${winner === 'team2' ? 'winner' : ''}">${match.score2}</span>
            </div>
            <div class="match-info">
                <p><strong>Compétition:</strong> ${match.competition}</p>
                <p><strong>Date:</strong> ${match.date}</p>
            </div>
        `;

        scoresContainer.appendChild(scoreCard);
    });
}

// Afficher la galerie
function renderGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = '';

    currentGallery.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';

        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <p>${image.title}</p>
            </div>
        `;

        galleryItem.addEventListener('click', function () {
            openLightbox(image);
        });

        galleryContainer.appendChild(galleryItem);
    });
}

// Ajouter l'élément pour uploader des photos
function addPhotoUploadElement() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;

    const addPhotoElement = document.createElement('div');
    addPhotoElement.className = 'add-photo-btn fade-in';
    addPhotoElement.innerHTML = `
        <i class="fas fa-plus-circle"></i>
        <p>Ajouter une photo</p>
    `;

    addPhotoElement.addEventListener('click', function () {
        addNewPhoto();
    });

    galleryContainer.appendChild(addPhotoElement);
}

// Afficher les équipes
function renderTeams() {
    const teamsContainer = document.getElementById('teamsContainer');
    if (!teamsContainer) return;

    teamsContainer.innerHTML = '';

    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card fade-in';

        let playersListHTML = '';
        team.players.forEach(player => {
            playersListHTML += `
                <li>
                    <span>${player.name} <strong>#${player.number}</strong></span>
                    <span>${player.position}</span>
                </li>
            `;
        });

        teamCard.innerHTML = `
            <div class="team-card-header">
                <h3>${team.category}</h3>
            </div>
            <div class="team-card-body">
                <div class="team-info">
                    <div class="team-info-item">
                        <span>Entraîneur:</span>
                        <span>${team.coach}</span>
                    </div>
                    <div class="team-info-item">
                        <span>Entraînements:</span>
                        <span>${team.training}</span>
                    </div>
                    <div class="team-info-item">
                        <span>Prochain match:</span>
                        <span>${team.nextMatch}</span>
                    </div>
                </div>
                <h4 style="color: var(--accent-orange); margin-bottom: 20px; font-size: 1.2rem;">Effectif</h4>
                <ul class="team-players">
                    ${playersListHTML}
                </ul>
            </div>
        `;

        teamsContainer.appendChild(teamCard);
    });
}

// Ajouter une nouvelle photo (simulation)
function addNewPhoto() {
    const newId = currentGallery.length + 1;
    const photoTitles = [
        "Nouvel entraînement",
        "Victoire en championnat",
        "Événement club",
        "Préparation physique",
        "Rencontre avec les supporters"
    ];

    const randomTitle = photoTitles[Math.floor(Math.random() * photoTitles.length)];
    const newPhoto = {
        id: newId,
        url: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=${newId}`,
        title: `${randomTitle} #${newId}`
    };

    currentGallery.push(newPhoto);
    renderGallery();
    addPhotoUploadElement();

    // Animation de notification
    showNotification(`Photo "${randomTitle}" ajoutée avec succès !`);
}

// Lightbox pour afficher les photos en grand
function openLightbox(image) {
    // Créer l'élément lightbox
    const lightbox = document.createElement('div');
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.zIndex = '2000';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.flexDirection = 'column';
    lightbox.style.opacity = '0';
    lightbox.style.transition = 'opacity 0.3s ease';

    lightbox.innerHTML = `
        <img src="${image.url}" alt="${image.title}" style="max-width: 90%; max-height: 70%; border-radius: 10px; box-shadow: 0 0 30px rgba(255, 107, 0, 0.3);">
        <h3 style="margin-top: 20px; color: var(--accent-orange); font-size: 1.8rem; text-align: center;">${image.title}</h3>
        <button style="position: absolute; top: 30px; right: 30px; background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(lightbox);

    // Animation d'entrée
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);

    // Fermer la lightbox
    const closeBtn = lightbox.querySelector('button');
    closeBtn.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    });

    // Fermer en cliquant à l'extérieur
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        }
    });
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.right = '30px';
    notification.style.backgroundColor = 'var(--accent-orange)';
    notification.style.color = 'var(--primary-dark)';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 10px 25px rgba(255, 107, 0, 0.3)';
    notification.style.zIndex = '3000';
    notification.style.fontWeight = '600';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.4s ease';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);

    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Affichage de la version
function displayVersion() {
    const versionDisplay = document.getElementById('version-display');
    if (versionDisplay) {
        // Cette valeur sera mise à jour par l'agent avant chaque commit
        const version = "v2026.01.19.14.30";
        versionDisplay.textContent = `Version: ${version}`;
    }
}
