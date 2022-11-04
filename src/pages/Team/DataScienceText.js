const outils = `Au cours de ce stage et des projets realise dans l'equipe data science j'ai pu apprendre a utiliser de nombreux outils, notamment Microsoft Visual Studio que ca
soit la version la plus recente ou celle de 2019, Visual Studio est une suite de logiciel de developpement destine a windows et macOs et developpe par Microsoft, Visual Studio
2022 est un Environnement de Developpement Intégré autrement appelle IDE qui perment de coder notamment en C# language principal que j'ai utilise avec cette equipe.

J'ai aussi appris a utiliser Azure Devops, Azure DevOps est un produits Mircosoft qui fournit le controle sur de multiples choses, comme la gestion de projets, le gestions des
exigences, des tests automatise, des dossier git, la gestions des "releases" et de multiples autre fonctionnalites qui couvre l'entierte du cycle de développement
d'une application et ajoute la partie DevOps qui elle est la partie qui fournit un developpement continu avec une haute qualite logiciel.

De plus j'ai appris a utiliser Microsoft Azure est un gestionnaire cloud d'applications creer par Microsoft, Azure fournit Il fournit des logiciels en tant que service,
une plate-forme en tant que service et une infrastructure en tant que service et prend en charge de nombreux langages de programmation, outils y compris des logiciels et 
des systèmes spécifiques à Microsoft et tiers.

Enfin le dernier outils que j'ai appris a utiliser fut SQL Server Management Studio ou SSMS est un logiciel lui aussi developper par Microsoft qui permet de gerer, configuer
et administrer tous les composants de Microsoft SQL Server et donc de gerer toutes les bases de donnees avec du language SQL.`

const project = `Lors de mon travail dans l'equipe DataScience j'ai pu travailler sur de multiples projets tous assez differents les uns des autres

Scheduler : Ce projet consitait a migrer un framework C# de la version 4.6.1 jusque la 4.8.0 pour permettre a l'equipe de pouvoir continuer de travailler tout en restant a jour
etant donner que le framekwork 4.6.1 va bientot etre "perime" et donc sans mise a jour ni resolution des problemes, ensuite j'ai du faire des tests unitaires pour tester leurs
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
dans la database de creer fichier excel qui recuperer toutes ces donnees en faisant des liaisons entre les differentes tables de la database.`

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

export { outils, project, DiffRen }