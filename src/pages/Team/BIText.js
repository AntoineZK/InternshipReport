const Objectif = `L'objectif principal de l'équipe “Reporting / Dashboarding” est la création, le
support, et l'actualisation des Dashboards et les reports tout en s’occupant de la
maintenance du Data Warehouse.

Le Data Warehouse se trouve être l'entrepôt de PricewaterhouseCoopers où toutes
les données à l'état brut sont récupérées puis redirigées pour que les utilisateurs
puissent les utiliser sans problème.`

const Projet = `Lors de mes 3 mois dans l'équipe “Reporting / Dashboarding”, j'ai travaillé
sur différents projets :

    - RFC : Autrement dit Report For Changes. Ce sont des cas où nous devons
    résoudre les problèmes que les personnes des différents services ont
    rencontré, en general avec une database comme un manque de ligne,
    colonnes vides, etc… Dans d’autres cas, la création et réalisation d’un
    rapport, l’ajout de colonnes à une table SQL, la création d’un flux SSIS,
    création d’un SSRS ou Dashboards.

    - Migration ORACLE vers SQL Server : Le but de ce projet est de migrer
    l'entièreté d’un flux SSIS créé à base de requête d'Oracle Database vers SQL
    Server puisque prochainement PwC n'utilisera plus Oracle Database. En
    effet, les coûts de licences augmentent vu que de moins en moins de firmes
    nationales PricewaterhouseCoopers ne les utilisent.
    Pour réaliser cette migration, il fallait modifier les types de certaines
    données, vérifier si chaque application était fonctionnelle, si les données
    étaient bien remplies avec les nouveaux types de variables, tester si les
    connecteurs étaient bons.

    - Optimisation Documentum : Le but de ce projet était d'optimiser des
    requêtes SQL pour faire gagner du temps aux flux SSIS les utilisant.
    La motivation de ce projet était qu’auparavant ces requêtes prenaient
    beaucoup de temps tout en ayant des risques d'erreurs lors de l'exécution ce
    qui obligeait à ré-exécuter les requêtes. Grâce aux nouvelles requêtes
    réalisées sur dqMan, cela va permettre de réduire le temps d'exécution et de
    remplissage des tables SSMS tout en réduisant le risque d’erreur avec
    comme seule modification : quelques requêtes dans le SSIS.

Voici un schéma expliquant la réalisation du projet :
`

const DiffRen = `Lors de cette partie de stage, j’ai été confronté à bien plus de difficultés
étant donné que c'était un domaine où j'avais très peu de connaissances, ni
d'expérience.

La première difficulté majeure que j'ai rencontrée fut la compréhension et
l'utilisation des nombreuses bases de données de PwC, chacune ayant un objectif
et une utilisation différente. De plus, c'était la première fois que je réalisais des
requêtes SQL et ma très faible connaissance des bases de données de PwC a fait
qu’au début, j'étais extrêmement lent pour réaliser les tâches que j'avais à faire.

J'ai eu besoin d'énormément d'aide de mes collègues pour savoir où se trouvait
telle table dans les bases de données même si au fur et à mesure ça s'est amélioré.

La seconde difficulté majeure était la disponibilité des personnes faisant les
requêtes de tâches ou RFC, étant donné que ces personnes ne sont pas
concentrées uniquement sur ce qu'elles nous demandent. Il est arrivé que je sois
bloqué pendant plusieurs jours par quelque chose qui ne pouvait être résolu que
grâce à l'aide de la personne qui soit n'avait pas le temps, soit était malade ou en
congé.

Enfin dernier problème, un petit plus mineur, a été les droits d'accès, étant donné
que j'étais stagiaire, mon PC était configuré pour avoir des droits d'accès
extrêmement limités ce qui fait que sur certaines requêtes SQL que je réalisais il
me manquait des droits sur des tables ou des bases de données.`

const ConAcq = `Grâce aux trois mois passés auprès de l'équipe “Reporting / Dashboarding”,
j'ai beaucoup appris notamment sur la partie SQL, comme des réalisations de query
avec des jointures, première fois que j’en faisais, de plus j'ai compris et appris à
utiliser SSMS et SSIS.

J'ai aussi utilisé dqMan qui est un outil d'administration complet permettant aux
utilisateurs d'OpenText Documentum d'administrer, de maintenir et de programmer
leur serveur de contenu Documentum.

J’ai donc pu réaliser mon second projet, l'optimisation Documentum.

Tout au long de mon stage, j'ai participé à des formations qui m'ont offert la
possibilité de comprendre et de pratiquer sur des applications qui, dans le futur,
me seront utiles comme la formation Power BI entre autres.

Dans l’équipe, j’ai apporté mon aide sur des tâches simples et moins
compliquées afin que les tâches les plus importantes restent dans les mains de
mes collègues ayant bien plus d'expériences que moi dans ce domaine.

Mes projets ont permis de régler des problèmes qui étaient présents comme la
lenteur d'exécution dans le cas de l'optimisation de Documentum, ou le problème
de licence logicielle qui va bientôt disparaître dans le cas de la migration oracle.
J'ai aussi participé à la résolution de RFC ou de Task afin de réduire le temps
d’attente des personnes ayant fait les demandes pour les RFC/Task pour que
l'équipe ne soit pas trop débordée de demandes.
`
const Apport = `Dans l’équipe, j’ai apporté mon aide sur des tâches simples et moins
compliquées afin que les tâches les plus importantes restent dans les mains de
mes collègues ayant bien plus d'expériences que moi dans ce domaine.

Mes projets ont permis de régler des problèmes qui étaient présents comme la
lenteur d'exécution dans le cas de l'optimisation de Documentum, ou le problème
de licence logicielle qui va bientôt disparaître dans le cas de la migration oracle.

J'ai aussi participé à la résolution de RFC ou de Task afin de réduire le temps
d’attente des personnes ayant fait les demandes pour les RFC/Task pour que
l'équipe ne soit pas trop débordée de demandes.
`

export { Objectif, Projet, DiffRen, ConAcq, Apport }