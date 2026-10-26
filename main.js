/* ---------- Onglets ---------- */

function openTab(tabName) {
    const section = document.getElementById(tabName);
    if (!section) return;

    document.querySelectorAll(".tab-content").forEach(function (el) {
        el.classList.remove("active");
    });
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    section.classList.add("active");
    window.scrollTo(0, 0);
}

document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        openTab(btn.dataset.tab);
        // met à jour l'adresse : lm-79.github.io/#veille-cyber ouvre directement l'onglet
        history.replaceState(null, "", "#" + btn.dataset.tab);
    });
});

// ouverture directe d'un onglet depuis l'adresse (#veille-cyber, #guide, ...)
if (location.hash) {
    openTab(location.hash.slice(1));
}


/* ---------- Articles ---------- */

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
              "août", "septembre", "octobre", "novembre", "décembre"];

function formatMois(aaaaMm) {
    const parts = aaaaMm.split("-");
    return MOIS[parseInt(parts[1], 10) - 1] + " " + parts[0];
}

function formatDate(aaaaMmJj) {
    const p = aaaaMmJj.split("-");
    return parseInt(p[2], 10) + " " + MOIS[parseInt(p[1], 10) - 1] + " " + p[0];
}

function creerArticle(a) {
    const bloc = document.createElement("article");
    bloc.className = "article";

    const titre = document.createElement("h4");
    const lien = document.createElement("a");
    lien.href = a.url;
    lien.target = "_blank";
    lien.rel = "noopener noreferrer";
    lien.textContent = a.titre;
    titre.appendChild(lien);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = a.source + ", publié le " + formatDate(a.date) + " (" + a.langue + ")";

    const resume = document.createElement("p");
    resume.textContent = a.resume;

    const source = document.createElement("a");
    source.className = "lien-source";
    source.href = a.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Lire l'article";

    bloc.append(titre, meta, resume, source);
    return bloc;
}

function afficherArticles(conteneur) {
    const liste = ARTICLES[conteneur.dataset.theme] || [];

    if (liste.length === 0) {
        const vide = document.createElement("p");
        vide.className = "vide";
        vide.textContent = "Aucun article pour le moment.";
        conteneur.appendChild(vide);
        return;
    }

    // Regroupe les articles par mois d'ajout, du plus récent au plus ancien.
    const parMois = {};
    liste.forEach(function (a) {
        (parMois[a.ajoute] = parMois[a.ajoute] || []).push(a);
    });

    // Chaque mois possède sa propre colonne, tout en conservant les cartes d'articles.
    Object.keys(parMois).sort().reverse().forEach(function (mois) {
        const colonne = document.createElement("section");
        colonne.className = "mois-colonne";

        const titreMois = document.createElement("h3");
        titreMois.className = "mois";
        titreMois.textContent = formatMois(mois) + " (" + parMois[mois].length + " articles)";
        colonne.appendChild(titreMois);

        parMois[mois]
            .sort(function (x, y) { return y.date.localeCompare(x.date); })
            .forEach(function (a) {
                colonne.appendChild(creerArticle(a));
            });

        conteneur.appendChild(colonne);
    });
}

document.querySelectorAll(".articles").forEach(afficherArticles);
