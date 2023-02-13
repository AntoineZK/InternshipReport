const Objectif = `L'objectif de l'équipe “Data Science” est de gérer des projets d'Intelligence
Artificielle, de Machine Learning et d'analyser des données à travers des
visualisations interactives et soutenues par des modèles de données statistiques.

Cette équipe a la capacité de supporter votre machine learning ou votre analyse de
données que ce soit en interne ou pour des clients.`

const Projet = `Lors de mon travail dans l'équipe “Data Science”, j'ai pu travailler sur de
multiples projets tous assez différents les uns des autres.

Le premier projet consistait à migrer une application interne de .Net Framework
4.6.1 à la version 4.8.0 ce qui a permis une meilleure création et exécution des
applications windows pour l'équipe afin de pouvoir continuer à travailler en toute
tranquillité. Cette migration était nécessaire étant donné que le Framework 4.6.1
va bientôt être "obsolète" et donc ne recevra plus de mise à jour, ni de résolution
de problème.

La seconde étape du projet était de réaliser des tests unitaires pour tester les
fonctions déjà existantes pour être sûr qu'au fur à mesure de l’avancement du
projet, l’objectif de ces mêmes fonctions ne soit pas perturbé, p
uis d'implémenter
de l’intégration continue via Azure DevOps grâce à des pipelines.
Le second projet concernait un besoin différent du premier, c’était une
automatisation d’acquisition, de découpage, d’un rendu normalisé de données
depuis un site nommé lbr. Tout cela pour un besoin interne. Pour réaliser ce projet,
j'ai dû utiliser plusieurs outils comme : les fonctions Azures, le Web Scraping et les
Blob Storage.

Le projet consistait à récupérer des données d'un site luxembourgeois pour pouvoir
récupérer le nom des personnes, le nombre de personnes et d'autres informations
utiles. Nous récupérons ces données grâce à un Identifiant donné en paramètre,
puis j’ai dû les transformer en format JSON pour faciliter l’utilisateur. Enfin il a
fallu créer le fichier contenant le JSON et l'envoyer dans un Blob Storage Azure,
voici un schéma résumant le projet :`

const Projet2 = `De plus, je devais aussi réaliser la pipeline de ce projet pour gérer l'intégration
continue, l’analyse du code, la réalisation des tests unitaires et la publication sur
Azure pour déployer nos objets cloud de façon automatisée. Les pipelines chez PwC
sont réalisés en général pour tous les projets.
Voici le déroulement classique d’un projet :`

const Projet3 = `Le déploiement se trouve dans une sandbox qui nous sert de test avant de le
déployer dans l’environnement réel que ce soit Développement, Test (UAT) ou en
Production.

Le troisième projet s’est décomposé en deux parties, la première fut de migrer du
Framework C# .Net Core 3.1 jusqu'à .Net Core 6 puisque en ce mois de décembre la
version 3.1 sera déprécier. Par conséquent, il fallait changer la méthode dont on
réalisait le Web Scraping existant, notamment en passant d’une librairie à une
autre pour réaliser du docker.

La seconde partie consistait à aller sur un site et de parcourir des centaines de
pages web puis de récupérer des données comme le titre, l’url, les mots clés,
documents ainsi que d’autres données pour pouvoir aider l’équipe Knowledge
Management de PwC à reconnaître des nouvelles entrées sur un site de
publications légales. Ces données ont été envoyées dans une partie database que
j'ai dû gérer.

Ensuite, il a fallu créer un fichier Excel pour récupérer toutes ces données en
faisant des liaisons entre les différentes tables de la database en utilisant une
Logic App pour imager.
Voici un schéma :`

const DiffRen = `J'ai rencontré de nombreux problèmes lors de mes différents projets dans
cette équipe, la première fut de prendre connaissance sur comment réaliser
chaque projet comme la migration de Framework, chose que je n'avais jamais fait
avant. L'apprentissage du langage C# malgré que ce soit très proche du C, présente
quand même beaucoup de différences sur certains petits points notamment au
niveau syntaxe.

Le web scraping était aussi une nouvelle découverte pour moi comme
l'apprentissage du concept de web scraping, comment le réaliser, apprendre les
différentes librairies, les faire fonctionner en local et en cloud en même temps,
utiliser les autres fonctions et azure en général.

Par exemple, le problème sur lequel j'ai passé beaucoup de temps était de faire
exécuter la fonction azure en cloud avec les librairies de web scraping puisque
pour exécuter Puppeteer Sharp (libraries de Webscraping), il faut un composant
appelé chromedriver, chose que Puppeteer Sharp télécharge lui-même lorsque l'on
exécute son programme.

Cependant, dû au fait que l'on soit en cloud, Puppeteer Sharp ne peut pas le
télécharger automatiquement, donc il faut utiliser une autre librairie telle que
Selenium Sharp. Celle-ci en comparaison à Puppeteer Sharp, a besoin que l'on
télécharge en amont le chromedriver pour pouvoir fonctionner et donc si on utilise
une Azure fonction utilisant docker, on peut lors de la construction de l'Azure
fonctions télécharger le chromedriver tout en utilisant les images docker lier aux
Azure fonctions.

Second problème, j'étais au moment du projet l’un des seuls dans l'équipe à faire
du web scraping via C Sharp tout en utilisant une Azure fonctions, je n’ai donc pas
pu recevoir d’aide pour avancer. Par conséquent, j'ai dû chercher la solution seul,
cela m'a permis de développer ma prise d’initiative, mon autonomie et d’avoir une
nouvelle vision sur “Comment résoudre des problèmes ?” , chose sur laquelle je
manquais de compétence.
Les autres problèmes ont été mineurs, tel que des problèmes d'accès via l'IP de
PwC mais en comparaison au premier ce problème fut bien plus simple à résoudre.`

const ConAcq = `Grâce à ce stage de 3 mois dans cette équipe, j'ai acquis énormément de
compétences notamment grâce aux outils utilisés et mis à ma disposition :

Dans un premier temps, j'ai appris et compris comment utiliser du C#, langage de
programmation que je n'avais que très peu utilisé dans des projets personnels afin
de m'entraîner à l'utiliser durant ce stage. De plus, le principe de Framework .NET
m'a permis de comprendre pourquoi et comment je devais réaliser le projet de
migration Framework. Enfin, l'utilisation du C# m'a permis de développer mes
compétences en langage orienté objet, ce qui va notamment m'aider lors de mon
deuxième semestre à Epitech, tout en me forçant à utiliser Visual Studio.

Dans un second temps, j'ai appris et compris comment utiliser Azure et Azure
DevOps.

Enfin, je me suis découvert d'autres compétences autres que techniques, comme
des softs skills telles que la communication au sein de l'équipe, l'adaptabilité, la
flexibilité et le travail d'équipe.`

const Apport = `J'ai réalisé et participé à quatre projets différents tout en faisant des petites
tâches à côté. Le fait que je sois présent a permis aux autres membres de l'équipe
de réaliser des tâches différentes et sans aucun doute plus importantes, par
exemple la migration du Framework C# sur laquelle j'ai travaillé leur a permis de
pouvoir continuer dessus "sans pause" tout en ne s'inquiétant pas du fait que d'un
moment à l'autre le Framework serait obsolète et donc de devoir faire une pause
pour régler le problème.

Mon second projet a notamment permis de créer de la documentation pour les
stagiaires étant donné que le concept et la technologie du web scraping ne sont
pas les plus simples à comprendre.

De plus, pour réaliser ce projet, il fallait trouver comment faire exécuter ce
programme en cloud, grâce à la documentation que j'ai réalisée en parallèle du
projet, les futurs membres ou stagiaires de l'équipe pourront rapidement trouver
comment résoudre ce problème ce qui ne fut pas le cas pour moi.

Le troisième projet était sur des bases similaires au second. Il y avait là aussi un
problème de Framework et de compilation en cloud, en effet le problème de
compilation en cloud provenait du fait que l'ancienne utilisation du web scraping se
réalisait en 4.6.1, Framework bientôt obsolète donc il fallait l'adapter pour le 4.8.1,
Framework bien plus récent. Dans ce cas, l'utilisation originale du web scraping a
été modifiée, ce projet a donc été aussi refait quasiment dans son entièreté pour
résoudre ce problème.

Enfin le dernier projet m’a permis de remplir plusieurs tables de données, ce qui
permet à certaines personnes de l’entreprise de continuer leur travail ou même de
le commencer grâce à cette mission qui m’a été confiée.`

export { Objectif, Projet, Projet2, Projet3, DiffRen, ConAcq, Apport }