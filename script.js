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
        name: "U13 M1",
        category: "U13 MASCULIN 1",
        coach: "Marc Dupont",
        training: "Lun 17h-19h, Jeu 18h-20h",
        nextMatch: "22/10/2023 vs Blois",
        players: [
            { name: "Léo Martin", number: 7, position: "Meneur" },
            { name: "Thomas Bernard", number: 12, position: "Ailier" },
            { name: "Alexandre Petit", number: 5, position: "Pivot" },
            { name: "Noah Leroy", number: 9, position: "Arrière" },
            { name: "Mathis Moreau", number: 14, position: "Ailier fort" }
        ]
    },
    {
        id: 2,
        name: "Senior",
        category: "SENIOR MASCULIN",
        coach: "Jean Lefèvre",
        training: "Mar 20h-22h, Ven 19h-21h",
        nextMatch: "21/10/2023 vs Orléans",
        players: [
            { name: "Pierre Dubois", number: 4, position: "Meneur" },
            { name: "Antoine Laurent", number: 8, position: "Arrière" },
            { name: "Sébastien Girard", number: 15, position: "Pivot" },
            { name: "Nicolas Renault", number: 6, position: "Ailier" },
            { name: "David Perrin", number: 10, position: "Ailier fort" }
        ]
    },
    {
        id: 3,
        name: "U15 F1",
        category: "U15 FÉMININ 1",
        coach: "Sophie Lambert",
        training: "Mer 16h-18h, Sam 10h-12h",
        nextMatch: "20/10/2023 vs Chinon",
        players: [
            { name: "Emma Chevallier", number: 5, position: "Meneuse" },
            { name: "Chloé Roux", number: 9, position: "Ailière" },
            { name: "Manon Fournier", number: 12, position: "Pivot" },
            { name: "Léa Da Silva", number: 7, position: "Arrière" },
            { name: "Julie Garnier", number: 11, position: "Ailière forte" }
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

    // Initialisation du thème
    initThemeSwitch();

    // Affichage de la version
    displayVersion();
});

// Thème Clair/Sombre
function initThemeSwitch() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'light-theme') {
            toggleSwitch.checked = true;
        }
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

    mobileMenuBtn.addEventListener('click', function () {
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

    // Fermer le menu mobile au clic sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');

            // Mettre à jour l'état actif
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gestion du défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
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
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
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
    scoresContainer.innerHTML = '';

    currentScores.forEach(match => {
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
        const version = "v2026.01.18.14.04";
        versionDisplay.textContent = `Version: ${version}`;
    }
}
