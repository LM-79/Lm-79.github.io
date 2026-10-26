/*
  Liste des articles de veille.
  Pour ajouter un article : copier un bloc { ... } dans le bon thème,
  puis modifier les champs. Le site s'affiche tout seul, rien d'autre à toucher.

  Champs :
    titre   : titre de l'article
    source  : nom du site ou du média
    date    : date de publication (AAAA-MM-JJ)
    ajoute  : mois où tu l'ajoutes au portfolio (AAAA-MM), sert à regrouper l'affichage
    langue  : "FR" ou "EN"
    url     : lien vers l'article original
    resume  : ton résumé en 2-3 phrases, avec tes propres mots
*/

const ARTICLES = {

    cyber: [
        {
            titre: "Les réseaux sociaux sont-ils devenus la nouvelle boîte à arnaques ?",
            source: "Bitdefender (blog)",
            date: "2026-07-06",
            ajoute: "2026-09",
            langue: "FR",
            url: "https://www.bitdefender.com/fr-fr/blog/hotforsecurity/les-reseaux-sociaux-sont-il-devenus-la-nouvelle-boite-a-arnaques",
            resume: "S'appuyant sur le rapport mondial 2026 de Bitdefender, l'article montre que 36 % des utilisateurs exposés à des arnaques sur les réseaux sociaux ont interagi avec elles. Les arnaques liées au mode de vie y réussissent mieux que les arnaques financières classiques."
        },
        {
            titre: "Cameroun. « Mon compte a été vidé » : la cyberpiraterie prend le large",
            source: "Le360 Afrique",
            date: "2026-07-26",
            ajoute: "2026-09",
            langue: "FR",
            url: "https://afrique.le360.ma/societe/cameroun-mon-compte-a-ete-vide-la-cyberpiraterie-prend-le-large_ZDXCQHAIIZHJVDAFZBYUXY75WQ/",
            resume: "L'agence camerounaise des technologies de l'information a traité 32 500 plaintes l'an dernier, soit 30 % de plus. Les comptes Facebook, WhatsApp, Instagram et TikTok sont piratés tous les jours à Yaoundé, souvent suivis de fausses demandes d'aide envoyées aux proches de la victime."
        },
        {
            titre: "Facebook : les Tunisiens ciblés par une nouvelle technique de piratage, alerte l'ANCS",
            source: "Webdo.tn",
            date: "2026-08-14",
            ajoute: "2026-10",
            langue: "FR",
            url: "https://www.webdo.tn/fr/actualite/national/facebook-les-tunisiens-cibles-par-une-nouvelle-technique-de-piratage-alerte-lancs/402565/",
            resume: "L'agence tunisienne de cybersécurité alerte sur la hausse des piratages de comptes Facebook. L'arnaque repose sur une confusion : le code reçu par SMS paraît anodin alors qu'il sert à vérifier l'identité du titulaire du compte. L'agence conseille de vérifier les paramètres de sécurité, de changer le mot de passe et de contrôler les sessions et appareils connectés."
        },
        {
            titre: "Meta frappe fort contre les réseaux d'escrocs : 3,7 millions de comptes et pages ciblés",
            source: "Hespress FR",
            date: "2026-09-24",
            ajoute: "2026-10",
            langue: "FR",
            url: "https://fr.hespress.com/489534-meta-frappe-fort-contre-les-reseaux-descrocs-37-millions-de-comptes-et-pages-cibles.html",
            resume: "Meta a supprimé ou désactivé 3,7 millions de comptes, pages et contenus liés à des escroqueries, grâce notamment aux informations de la police de Singapour. Selon Meta, les fraudeurs utilisent l'IA pour créer rapidement de faux profils et des images trompeuses."
        },
        {
            titre: "PHP : deux failles critiques ont fuité avant l'heure, un correctif d'urgence arrive ce 21 octobre !",
            source: "IT-Connect (Florian Burnel)",
            date: "2026-10-21",
            ajoute: "2026-11",
            langue: "FR",
            url: "https://www.it-connect.fr/php-failles-critiques-rce-cve-2026-109618-cve-2026-109619/",
            resume: "Un message supprimé depuis sur Hacker News annonçait deux failles d'exécution de code à distance dans PHP, confirmées ensuite par la société watchTowr (CVE-2026-109618 et CVE-2026-109619). L'équipe de sécurité de PHP a alors annoncé un correctif pour le 21 octobre à 16 h, heure de Paris. D'après le CERT-EU, les versions corrigées sont PHP 8.5.12, 8.4.27, 8.3.36 et 8.2.35."
        },
        {
            titre: "Compte Instagram ou Facebook piraté, faux compte à votre nom : récupérer l'accès, faire effacer et obtenir réparation (2026)",
            source: "Kohen Avocats",
            date: "2026-10-14",
            ajoute: "2026-11",
            langue: "FR",
            url: "https://kohenavocats.fr/2026/10/14/compte-instagram-facebook-pirate-faux-compte-effacer-plainte-reparation-2026/",
            resume: "L'article propose une méthode pour récupérer l'accès à un compte sans détruire les preuves, exiger l'effacement d'un faux compte, déposer plainte et saisir la CNIL. Il distingue le piratage, qui relève de la sécurisation et de la récupération d'accès, de la création d'un faux compte, qui relève de l'usurpation d'identité. Blog d'un cabinet d'avocats : l'angle est juridique."
        }
    ],

    automatisation: [
        {
            titre: "RPA, IA ou hybride : quelle automatisation choisir pour vos processus métier en 2026 ?",
            source: "Techsy",
            date: "2026-07-21",
            ajoute: "2026-09",
            langue: "FR",
            url: "https://techsy.io/fr/blog/rpa-vs-ia-automatisation",
            resume: "L'article défend un modèle hybride : un agent IA décide et orchestre, tandis que des robots RPA exécutent les étapes qui suivent toujours les mêmes règles. Il cite une prévision de Gartner selon laquelle 40 % des applications d'entreprise intégreront des agents IA dédiés d'ici fin 2026, contre moins de 5 % en 2025. Blog d'un éditeur : l'angle est commercial."
        },
        {
            titre: "Computer use agents: From RPA to agentic process automation (APA)",
            source: "Citi Ventures",
            date: "2026-08-24",
            ajoute: "2026-10",
            langue: "EN",
            url: "https://www.citigroup.com/ventures/perspectives.html",
            resume: "Les agents capables d'utiliser un ordinateur comme le ferait une personne sont présentés comme une nouvelle approche de l'automatisation en entreprise, portée par un écosystème croissant de startups. Le lien pointe vers la page « Perspectives » de Citi Ventures, où se trouve l'article."
        },
        {
            titre: "GitHub Actions for developers who still deploy manually",
            source: "DEV Community",
            date: "2026-08-03",
            ajoute: "2026-09",
            langue: "EN",
            url: "https://dev.to/carlosjcastrog/github-actions-for-developers-who-still-deploy-manually-22he",
            resume: "L'article explique comment placer le pipeline CI/CD directement dans le dépôt, avec des workflows YAML déclenchés par les événements Git. Il détaille aussi les nouveautés de juillet-août 2026 : Copilot CLI utilisable dans un workflow sans jeton personnel, et version minimale imposée aux runners auto-hébergés."
        },
        {
            titre: "OpenTofu vs Terraform in 2026: which should you use for IaC?",
            source: "StackGuardian",
            date: "2026-08-21",
            ajoute: "2026-10",
            langue: "EN",
            url: "https://www.stackguardian.io/post/opentofu-vs-terraform",
            resume: "OpenTofu et Terraform ont réellement divergé en 2026 : licences et gouvernance différentes, et des fonctionnalités présentes dans l'un mais pas dans l'autre. À la mi-2026, OpenTofu était en version 1.12.2, avec plus de 3 900 fournisseurs dans son registre, contre Terraform 1.14.x. Site d'un éditeur d'outils : l'angle est commercial."
        },
        {
            titre: "n8n Agents : quand l'automatisation devient agentique",
            source: "L'AGENT X",
            date: "2026-10-02",
            ajoute: "2026-11",
            langue: "FR",
            url: "https://lagentx.com/n8n-agents-automatisation-agentique/",
            resume: "Le 25 septembre 2026, n8n a présenté un nouveau type d'agent qui reçoit un objectif, choisit lui-même ses outils et détermine les étapes à suivre. Selon l'article, l'intérêt principal est de faire travailler agents et workflows ensemble, avec des agents utilisables directement depuis Slack, Telegram, Linear ou Discord. Blog d'une agence spécialisée en IA : l'angle est commercial."
        },
        {
            titre: "Terraform in CI/CD: Plan/Apply Gates with GitHub Actions",
            source: "DEV Community (manojkagitha)",
            date: "2026-10-26",
            ajoute: "2026-11",
            langue: "EN",
            url: "https://dev.to/manojkagitha/terraform-in-cicd-planapply-gates-with-github-actions-1onn",
            resume: "Les modifications d'infrastructure passent par un plan sur la pull request, une relecture, puis un apply lancé depuis la CI avec des identifiants à courte durée de vie. L'authentification OIDC remplace les clés d'accès stockées dans GitHub Secrets, et la promotion se fait de staging vers prod, jamais en parallèle."
        }
    ]

};
