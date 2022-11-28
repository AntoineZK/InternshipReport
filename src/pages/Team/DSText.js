const Objectif = `L'objectif de l'equipe data science et de gere des projets d'Intelligence Artificiel, de Machine Learning et de l'analyse de données a travers des
visualisations interactive et soutenue par des modeles de donnees statistiques.

Cette equipe a la capacite de supporter vous et vos projet de machine learning ou d'analyse de donnée que ce soit en internes ou pour des clients grace a des
algorithme personalise et/ou du Deep Learning.`

const Projet = `Lors de mon travail dans l'equipe DataScience j'ai pu travailler sur de multiples projets tous assez differents les uns des autres

Scheduler : Ce projet consitait a migrer un framework C# de la version 4.6.1 jusque la 4.8.0 pour permettre a l'equipe de pouvoir continuer de travailler tout en restant a jour
etant donner que le framekwork 4.6.1 va bientot etre "obsolète" et donc sans mise a jour ni resolution des problemes, ensuite j'ai du faire des tests unitaires pour tester leurs
fonctions deja existantes pour etre sur que aux fur a mesures des fonctions et donc des modifications aucun probleme peut arriver au fonctions generiques qu'ils ont creer.

RBE : Le second projet est bien different du premier deja comparer au premier j'ai du commencer ce projet de 0, donc pas de base sur lesquels m'aider mais en contrepartie une
liberte sur la facon de coder ainsi que comment realiser le projet, Pour realiser ce projet j'ai du utiliser plusieurs outils comme : les fonctions Azures.
Les fonctions Azure sont un concept sans serveur de conception native cloud qui permet à un morceau de code de se déployer et de s'exécuter sans avoir
besoin d'infrastructure de serveur, de serveur Web ou de toute autre configuration. Le second outils c'est le web scrapping, le web scrapping consiste en extraire des donnees d0un
site internet puis les exporters dans un format plus utiles pour les utilisateurs comme le json ou l'excel par exemple. Le projet consistait en recuperer
des donnees d'un site luxembourgeois grace a un Identifiant donner en parametre via postman et les transformers en json tout en transferant ces meme donnee
transferer dans un blob storage azure et en notant le nombre de fois une requete a ete faite en fonction de l'identifiant.

KiidPoc : Le troisieme projet consistait a migrer lui aussi un framework C# jusqu'un autre dans une azure fonctions tout en changeant la methode d'on on realiser
le web scrapping, notamment en passant de puppeteersharp a seleniumsharp

CSSF : Enfin mon dernier gros projet etait lui aussi du web scrapping, car il consistait a la encore aller sur un site et de parcourirs des centaines de pages
puis de recuperer des donnees dans ces meme pages pour ensuite les envoyers dans une partie database que j'ai du gerer et apres avoir mis toutes ces donnee
dans la database de creer un fichier excel qui recuperer toutes ces donnees en faisant des liaisons entre les differentes tables de la database.`

const DiffRen = `J'ai recontrer des multiples probleme lors de mes differents projets dans cette equipe, la premiere fut de prendre connaissance sur comment
realiser telle ou telle chose comme la migration de framework chose que je n'avais jamais fais avant, de plus l'apprentissage du C# malgre que ce soit tres
proche du C il y a quand meme beaucoup de difference sur certains petit point notamment niveau syntaxe. Le web scrapping etait aussi une nouvelle connaissance
pour moi, l'apprentissage du concept de web scrapping, comment le realise, apprendre les differentes libraries les faires fonctionner en local et en cloud
dans le meme temps, utiliser les azures fonctions et azure en general. Par exemple le probleme que j'ai passer le plus de temps fut de faire executer
ma fonctions azure en cloud avec les libraries de web scrapping puisque pour executer puppeteer il faut un composants appeleer chromedriver, chose qu'il
telecharge lui meme lorsque lôn execute son programme cependant du au fait que l'on soit en cloud puppeteersharp ne peu pas le telecharger automatiquement
, donc l'options de puppeteersharp fut annuler, la seconde options est d'utiliser seleniumsharp qui comparait a puppeteer a besoin que l'on telecharge en amont
le chromedriver pour pouvoir fonctionner, et donc si on utilise une azure fonction utilisant docker on peut lors de la construction de l'Azure fonctions
telecharger le chromedriver tout en utilisant les images docker lier aux azure fonctions, second probleme le fait que j'etais a l'epoque le seul dans
l'equipe a faire du web scrapping via c# tout en utilisant une azure fonctions ce qui fait que j'ai du trouver la solution par moi meme sur internet,
et pour me faciliter la tache une seul personnes sur des centaines de liens a reussi a faire ce que je voulais faire sur un post datant de 2018, raison pour
quoi j'ai pris autant de temps pour trouver la reponse au probleme, le reste des problemes furent mineur, tel que des problemes d'acces via l'IP de pwc mais
pas plus.`

const ConAcq = `Grace a ce stage et ma participation pendant 3 mois dans cette equipe j'ai compris et obtenu ennormement de competences notamment grace aux outils qu'ils utilisent :

Dans un premier temps j'ai appris et compris comment utiliser du C#, language de programmtion que je n'avais que tres peu utiliser dans des projets personnels, pour justement
m'entrainer a l'utilser durant ce stage ce qui fut utile, de plus j'ai compris le principe de framework .NET ce qui m'a permis de comprendre pourquoi et comment je devais realiser
un projets que j'avais a faire. Enfin l'utilisation du C# m'a permis de developper mes competenses en language oriente objet ce qui va notamment m'aider lors de mon deuxieme
semestre a Epitech, tout en me forcant a utiliser Visual Studio qui est une suite de logiciel de developpement destine a windows et macOs, developpe par Microsoft, Visual Studio
2022 est un Environnement de Developpement Intégré autrement appelle IDE qui perment de coder notamment en C# ou en C++.

Dans un second temps j'ai appris et compris comment utilser Azure, Microsoft Azure est un gestionnaire cloud d'applications creer par Microsoft, Azure fournit Il fournit des logiciels en tant que service,
une plate-forme en tant que service et une infrastructure en tant que service et prend en charge de nombreux langages de programmation, outils y compris des logiciels et
des systèmes spécifiques à Microsoft et tiers.

Dans un troisieme temps j'ai appris comment utiliser Azure DevOps, Azure DevOps est un produits Mircosoft qui fournit le controle sur de multiples choses, comme la gestion de projets, le gestions des
exigences, des tests automatise, des dossier git, la gestions des "releases" et de multiples autre fonctionnalites qui couvre l'entierte du cycle de développement
d'une application et ajoute la partie DevOps qui elle est la partie qui fournit un developpement continu avec une haute qualite logiciel.

Enfin, j'ai pu acquérir d'autres compétences que des compétences techniques, des softs skills telle que la communication au sein de l'equipe, l'adaptabilite, la flexibilite,
et le travail d'equipe.`

const Apport = `Mon apport est lui pas a sous estiemr, j'ai realiser et participer a 4 projets different tout en faisant des petites taches a coter, le fait que je sois present
a permis aux autres membres de l'equipe de realiser des taches differentes et surement plus importantes par exemple la migration du framework C# que j'ai du realiser leur permet
de pouvoir continuer a travailler sur le projet "sans pause" tout en ne s'inquietant pas du fait que d'un moment a l'autre le framework soit obsolète et donc de devoir faire une
pause pour regler le probleme.

De plus mon second projet lui aussi n'est pas a sous estimer, etant du web scrapping, pas toutes l'equipe connaissait et savait comment realiser ce projet tout au plus qu'il fallait
reussir a trouver comment faire executer ce programme en cloud, heuresement grace a la documentation que j'ai realise en parallele du projet, les futurs membres ou stagiare de l'equipe
n'auront pas a passer des jours voirs semaines a trouver comment resoudre ce probleme. Puisque le troisieme projet etait sur des bases similaires au second, il y avait la aussi un probleme
de framework et de compilation en cloud, en effet le probleme de compilation en cloud venait du fait que l'ancienne utilisation du web scrapping se realisait dans la version 4.6 du C# cependant comme je l'ai
dit precedamment ce framework allait et sera bientot obsolete donc il fallait l'adapter pour le 4.8.1 framework bien plus recent et qui ne risque pas d'être obsolete prochainnement, mais
dans ce cas l'utilisation original du web scrapping fut modifier et donc ce projet aussi a du etre refait quasiment en entierete pour resoudre ce probleme.`

export { Objectif, Projet, DiffRen, ConAcq, Apport }