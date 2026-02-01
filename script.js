// Données pour les scores
const matchScores = [
    { id: 1, team1: "TNT U13 M1", team2: "AZAY CHEILLE", score1: 55, score2: 29, date: "24/01/2026", competition: "Championnat Départemental", nextMatch: "31 janv. à 17h00", comment: "Superbe victoire à domicile !" },
    { id: 2, team1: "TNT U13 F", team2: "ESO", score1: 35, score2: 33, date: "24/01/2026", competition: "Championnat Départemental" },
    { id: 3, team1: "TNT U13 M2", team2: "Montlouis", score1: 24, score2: 33, date: "24/01/2026", competition: "Championnat Départemental" },
    { id: 4, team1: "TNT U15 F1", team2: "BOURGUEIL", score1: 47, score2: 40, date: "24/01/2026", competition: "Championnat Départemental" }
];

// ... (existing code) ...



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
        photo: "photos/photo%20d'equipes/U13F/2026-01-24%20183800.png",
        players: []
    },
    {
        id: 3,
        name: "U13 M1",
        category: "U13 MASCULIN 1",
        coach: "Clément CIAVALDINI-MARET, Nelson HUGUET",
        training: "Lun 18h15-19h30 (Monnaie), Mer 15h30-16h45 (Château-Renault)",
        nextMatch: "31 janv. à 17h00",
        photo: "photos/photo%20d'equipes/U13M1/2026-01-24%20183702.png",
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
        photo: "photos/photo%20d'equipes/U15M/2026-01-24%20185219.png",
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
        photo: "photos/photo%20d'equipes/U15F1/Screenshot%202026-01-24%20183907.png",
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
        photo: "photos/photo%20d'equipes/U15F2/2026-01-24%20185136.png",
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
    // Catégorie: Moments Forts
    { id: 1, url: "https://images.unsplash.com/photo-1544919982-b61976a0d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Entraînement U13", category: "Moments Forts" },
    { id: 2, url: "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Victoire Senior", category: "Moments Forts" },
    { id: 3, url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Match U15 Féminin", category: "Moments Forts" },
    { id: 4, url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Concentration avant match", category: "Moments Forts" },
    { id: 5, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Exercice de tir", category: "Moments Forts" },
    { id: 6, url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Esprit d'équipe", category: "Moments Forts" },

    // Catégorie: Photo du weekend
    {
        id: 7,
        url: "photos/photo d'equipes/U13M1/2026-01-24 183702.png",
        title: "U13 M1",
        category: "Photo du weekend",
        type: "external",
        link: "https://flic.kr/s/aHBqjCHJUv"
    }
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

    // Chargement des données externes (U13M1)
    loadExternalData();

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

    // Initialisation de la recherche
    initSearch();
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
    window.addEventListener('scroll', checkVisible);
    checkVisible(); // Appel initial
}

// Fonction pour vérifier et afficher les éléments (maintenant globale pour être appelée après render)
function checkVisible() {
    const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Afficher les scores
// Variables globales pour le carrousel
let currentScoreIndex = 0;

// Afficher les scores
function renderScores() {
    const scoresContainer = document.getElementById('scoresContainer');
    if (!scoresContainer) return;

    scoresContainer.innerHTML = '';

    // Si on est sur la page d'accueil
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('.html');

    if (isHomePage) {
        // Logique Carrousel
        const isMobile = window.innerWidth <= 768;
        const itemsToShow = isMobile ? 1 : 2; // 1 sur mobile, 2 sur PC

        // Créer le conteneur du carrousel
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'carousel-wrapper';

        // Bouton Précédent
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => {
            currentScoreIndex--;
            if (currentScoreIndex < 0) {
                currentScoreIndex = Math.max(0, currentScores.length - itemsToShow);
                if (currentScoreIndex < 0) currentScoreIndex = 0;
            }
            renderScores();
        };

        // Bouton Suivant
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => {
            currentScoreIndex++;
            if (currentScoreIndex > currentScores.length - itemsToShow) {
                currentScoreIndex = 0;
            }
            renderScores();
        };

        // Conteneur des cartes (grille responsive)
        const cardsGrid = document.createElement('div');
        cardsGrid.className = 'carousel-cards-grid';
        cardsGrid.style.gridTemplateColumns = isMobile ? '1fr' : '1fr 1fr';

        // Sélectionner les scores à afficher
        if (currentScoreIndex > currentScores.length - itemsToShow && currentScores.length >= itemsToShow) {
            currentScoreIndex = 0;
        }

        const scoresSlice = currentScores.slice(currentScoreIndex, currentScoreIndex + itemsToShow);

        scoresSlice.forEach(match => {
            const scoreCard = createScoreCard(match);
            scoreCard.style.width = '100%';
            scoreCard.style.margin = '0';
            cardsGrid.appendChild(scoreCard);
        });

        // Assemblage
        if (currentScores.length > itemsToShow) carouselWrapper.appendChild(prevBtn);
        carouselWrapper.appendChild(cardsGrid);
        if (currentScores.length > itemsToShow) carouselWrapper.appendChild(nextBtn);

        scoresContainer.appendChild(carouselWrapper);

        // Ajouter un écouteur de redimensionnement
        if (!window.resizeListenerAdded) {
            window.addEventListener('resize', () => {
                renderScores();
            });
            window.resizeListenerAdded = true;
        }

    } else {
        // Page Scores : Affichage normal en grille
        scoresContainer.style.display = 'grid';
        scoresContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
        scoresContainer.style.gap = '35px';

        currentScores.forEach(match => {
            const scoreCard = createScoreCard(match);
            scoresContainer.appendChild(scoreCard);
        });
    }

    // Déclencher l'animation pour les nouveaux éléments
    checkVisible();
}

// Fonction helper pour créer une carte de score (évite la duplication)
function createScoreCard(match) {
    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-card fade-in';

    // Déterminer le gagnant pour le style
    const winner = match.score1 > match.score2 ? 'team1' : 'team2';

    scoreCard.innerHTML = `
        <div class="match-title" style="text-align: center; margin-bottom: 20px;">
            <h3 style="color: var(--accent-orange); font-size: 1.5rem; text-transform: uppercase;">MATCH ${match.team1}</h3>
        </div>
        <div class="teams-score-layout">
            <div class="team-column team-1">
                <div class="team-logo logo-tnt">
                    <img src="img/logo TNT sans fond.png" alt="TNT">
                </div>
                <div class="team-name">${match.team1}</div>
                <div class="team-score ${winner === 'team1' ? 'winner' : ''}">${match.score1}</div>
            </div>
            
            <div class="center-column">
                <div class="vs">VS</div>
                <div class="score-separator">-</div>
            </div>
            
            <div class="team-column team-2">
                <div class="team-logo">
                    ${match.team2.substring(0, 3).toUpperCase()}
                </div>
                <div class="team-name">${match.team2}</div>
                <div class="team-score ${winner === 'team2' ? 'winner' : ''}">${match.score2}</div>
            </div>
        </div>
        
        ${match.comment ? `
        <div class="match-comment-box">
            <p class="match-comment">"${match.comment}"</p>
        </div>` : ''}
        <div class="match-info">
            <p><strong>Compétition:</strong> ${match.competition}</p>
            <p><strong>Date:</strong> ${match.date}</p>
            ${match.nextMatch ? `<p class="next-match-info"><strong>Prochain match:</strong><br>${match.nextMatch}</p>` : ''}
        </div>
    `;
    return scoreCard;
}

// Afficher la galerie
function renderGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = '';

    // Grouper les images par catégorie
    const categories = {};
    currentGallery.forEach(image => {
        const cat = image.category || 'Autres';
        if (!categories[cat]) {
            categories[cat] = [];
        }
        categories[cat].push(image);
    });

    // Ordre d'affichage des catégories (Photo du weekend en premier)
    const categoryOrder = ["Photo du weekend", "Moments Forts", "Autres"];
    const sortedCategories = Object.keys(categories).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        // Si les deux sont dans list, trier par index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // Si seulement a est dans liste, a vient avant
        if (indexA !== -1) return -1;
        // Si seulement b est dans liste, b vient avant
        if (indexB !== -1) return 1;
        // Sinon ordre alphabétique
        return a.localeCompare(b);
    });

    // Afficher chaque catégorie
    sortedCategories.forEach(categoryName => {
        const images = categories[categoryName];

        // Container pour la section
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'gallery-section-wrapper fade-in';
        sectionContainer.style.marginBottom = '60px';

        // Titre de la catégorie
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'gallery-category-title';
        categoryTitle.textContent = categoryName;
        sectionContainer.appendChild(categoryTitle);

        // Grid pour les images de cette catégorie
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'gallery-grid';

        images.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            // Indicateur pour lien externe
            const externalIcon = image.type === 'external' ? '<i class="fas fa-external-link-alt external-icon"></i>' : '';
            const overlayText = image.type === 'external' ? '<span class="external-hint">Voir l\'album sur Flickr</span>' : '';

            galleryItem.innerHTML = `
                <img src="${image.url}" alt="${image.title}" loading="lazy">
                ${externalIcon}
                <div class="gallery-item-overlay">
                    <p>${image.title}</p>
                    ${overlayText}
                </div>
            `;

            galleryItem.addEventListener('click', function () {
                if (image.type === 'external' && image.link) {
                    window.open(image.link, '_blank');
                } else {
                    openLightbox(image);
                }
            });

            categoryGrid.appendChild(galleryItem);
        });

        sectionContainer.appendChild(categoryGrid);
        galleryContainer.appendChild(sectionContainer);
    });

    // Déclencher l'animation pour les nouvelles images
    checkVisible();
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
                ${team.photo ? `<div class="team-photo" onclick="openLightbox({url: '${team.photo}', title: '${team.name}'})" style="cursor: pointer;"><img src="${team.photo}" alt="Photo ${team.name}" style="width:100%; border-radius:8px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"></div>` : ''}
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

    // Déclencher l'animation pour les nouvelles cartes d'équipes
    checkVisible();
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
        const version = "2026.02.01.07.12";
        versionDisplay.textContent = `Version: ${version}`;
    }
}

// Charger les données externes (U13M1)
function loadExternalData() {
    // Utiliser le chemin GitHub raw pour accéder au JSON
    const jsonPath = 'https://raw.githubusercontent.com/batoucode/tnt/master/resultat_et_match_a_venir/U13M1/dernier_match.json';

    fetch(jsonPath + '?t=' + new Date().getTime()) // Cache busting
        .then(response => {
            if (!response.ok) {
                // Si échec (ex: local file system), on garde les données manuelles
                throw new Error('Erreur chargement données U13M1 ou fichier local');
            }
            return response.json();
        })
        .then(data => {
            console.log("Données U13M1 chargées:", data);

            // 1. Mise à jour du score
            // Format flexible: "EQUIPE SCORE - SCORE EQUIPE" ou "EQUIPE SCORE-SCORE EQUIPE"
            const scoreRegex = /^(.*?)\s+(\d+)\s*[-]\s*(\d+)\s+(.*)$/;
            const match = data.dernier_match.match(scoreRegex);

            console.log("Extraction match regex:", match);

            if (match) {
                // Chercher l'entrée existante pour U13 M1
                const existingScoreIndex = currentScores.findIndex(s => s.team1.includes("U13 M1") || s.id === 1);

                if (existingScoreIndex !== -1) {
                    // Update existing
                    currentScores[existingScoreIndex].score1 = parseInt(match[2]);
                    currentScores[existingScoreIndex].score2 = parseInt(match[3]);
                    currentScores[existingScoreIndex].team2 = match[4].replace(/\s*-\s*\d+$/, '');  // Nettoyer le " - 1", " - 2", etc.
                    currentScores[existingScoreIndex].nextMatch = data.prochain_match;
                    currentScores[existingScoreIndex].comment = data.commentaire;
                } else {
                    // Create new if not found
                    const newScore = {
                        id: 999,
                        team1: "TNT U13 M1",
                        team2: match[4].replace(/\s*-\s*\d+$/, ''),  // Nettoyer le " - 1", " - 2", etc.
                        score1: parseInt(match[2]),
                        score2: parseInt(match[3]),
                        date: "Récemment",
                        competition: "Championnat"
                    };
                    currentScores.unshift(newScore);
                }

                // Mettre à jour l'affichage des scores
                renderScores();
            }

            // 2. Mise à jour du prochain match pour l'équipe U13 M1
            const u13m1Team = teams.find(t => t.name === "U13 M1");
            if (u13m1Team) {
                u13m1Team.nextMatch = data.prochain_match;
                // Mettre à jour l'affichage des équipes
                renderTeams();
            }
        })
        .catch(error => {
            console.error('Erreur loadExternalData:', error);
            console.warn('Utilisation des données manuelles (Fichier JSON inaccessible ou bloqué par CORS)');
        });
}

// ==================== SEARCH FUNCTIONALITY ====================

// Contenu du site pour la recherche
const siteContent = [
    {
        title: "Accueil",
        description: "La Team Nord Touraine (TNT) est une Coopération Territoriale de Clubs regroupant le Monnaie Basket Club et Château-Renault.",
        url: "index.html",
        keywords: ["accueil", "tnt", "team", "nord", "touraine", "basket", "club", "monnaie", "chateau-renault"],
        category: "Page"
    },
    {
        title: "Le Club",
        description: "Découvrez l'histoire de la TNT, une coopération territoriale de clubs pour faire rayonner le basket en Nord Touraine.",
        url: "club.html",
        keywords: ["club", "histoire", "ctc", "cooperation", "monnaie", "chateau-renault", "fusion"],
        category: "Page"
    },
    {
        title: "Scores",
        description: "Consultez tous les résultats des matchs de nos équipes TNT.",
        url: "scores.html",
        keywords: ["scores", "resultats", "matchs", "victoires", "championnat"],
        category: "Page"
    },
    {
        title: "Galerie",
        description: "Découvrez nos photos d'entraînements, matchs et événements du club.",
        url: "galerie.html",
        keywords: ["galerie", "photos", "images", "entrainement", "match", "evenements"],
        category: "Page"
    },
    {
        title: "Équipes",
        description: "Découvrez toutes nos équipes : Séniors, U18, U15, U13, Féminines et Masculines.",
        url: "equipes.html",
        keywords: ["equipes", "seniors", "u18", "u15", "u13", "feminin", "masculin", "joueurs"],
        category: "Page"
    },
    {
        title: "Contact",
        description: "Contactez-nous pour toute question ou pour rejoindre le club.",
        url: "contact.html",
        keywords: ["contact", "email", "telephone", "adresse", "inscription"],
        category: "Page"
    }
];

// Initialisation de la recherche
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchCloseBtn = document.getElementById('searchCloseBtn');
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchBtn || !searchModal) return;

    // Ouvrir le modal
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    });

    // Fermer le modal
    function closeSearch() {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        showSuggestions();
    }

    searchCloseBtn.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', closeSearch);

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });

    // Recherche en temps réel
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (query.length > 0) {
            searchClearBtn.classList.add('visible');
            performSearch(query);
        } else {
            searchClearBtn.classList.remove('visible');
            showSuggestions();
        }
    });

    // Bouton clear
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        searchInput.focus();
        showSuggestions();
    });

    // Tags de suggestion
    attachTagListeners();

    // Afficher les suggestions par défaut
    showSuggestions();
}

// Attacher les événements aux tags
function attachTagListeners() {
    const searchTags = document.querySelectorAll('.search-tag');
    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const query = tag.getAttribute('data-query');
            const searchInput = document.getElementById('searchInput');
            searchInput.value = query;
            document.getElementById('searchClearBtn').classList.add('visible');
            performSearch(query);
        });
    });
}

// Afficher les suggestions
function showSuggestions() {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
        <div class="search-suggestions">
            <p class="search-suggestions-title">Suggestions populaires :</p>
            <div class="search-tags">
                <button class="search-tag" data-query="équipes">Équipes</button>
                <button class="search-tag" data-query="scores">Scores</button>
                <button class="search-tag" data-query="contact">Contact</button>
                <button class="search-tag" data-query="galerie">Galerie</button>
                <button class="search-tag" data-query="basket">Basket</button>
            </div>
        </div>
    `;
    attachTagListeners();
}

// Effectuer la recherche
function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Filtrer les résultats dans les pages
    const pageResults = siteContent.filter(item => {
        const titleMatch = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedQuery);
        const descMatch = item.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedQuery);
        const keywordMatch = item.keywords.some(keyword =>
            keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedQuery)
        );

        return titleMatch || descMatch || keywordMatch;
    });

    // Chercher dans les joueurs des équipes
    const playerResults = [];
    teams.forEach(team => {
        team.players.forEach(player => {
            const normalizedPlayerName = player.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (normalizedPlayerName.includes(normalizedQuery)) {
                playerResults.push({
                    title: player.name,
                    description: `Joueur de l'équipe ${team.category}`,
                    url: "equipes.html",
                    category: "Joueur",
                    teamName: team.category
                });
            }
        });
    });

    // Combiner les résultats
    const results = [...pageResults, ...playerResults];

    // Afficher les résultats
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <svg class="search-no-results-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h3>Aucun résultat trouvé</h3>
                <p>Essayez avec d'autres mots-clés comme "équipes", "scores" ou un nom de joueur</p>
            </div>
        `;
        return;
    }

    // Limiter à 10 résultats
    const limitedResults = results.slice(0, 10);

    let resultsHTML = `<div style="margin-bottom: 20px; color: var(--text-secondary); font-size: 0.95rem;">
        <strong>${results.length}</strong> résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}
    </div>`;

    limitedResults.forEach(result => {
        const icon = getCategoryIcon(result.category);
        resultsHTML += `
            <div class="search-result-item" onclick="window.location.href='${result.url}'">
                <div class="search-result-title">
                    ${icon}
                    ${highlightQuery(result.title, query)}
                </div>
                <div class="search-result-description">
                    ${highlightQuery(result.description, query)}
                </div>
                <div class="search-result-meta">
                    <span class="search-result-badge">${result.category}</span>
                </div>
            </div>
        `;
    });

    searchResults.innerHTML = resultsHTML;
}


// Icônes par catégorie
function getCategoryIcon(category) {
    const icons = {
        'Page': '<svg class="search-result-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
        'Équipe': '<svg class="search-result-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        'Joueur': '<svg class="search-result-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        'Match': '<svg class="search-result-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
    };
    return icons[category] || icons['Page'];
}

// Surligner la requête dans le texte
function highlightQuery(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong style="color: var(--accent-orange);">$1</strong>');
}
