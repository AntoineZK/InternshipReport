const Objectif = `L'objectif principal de l'equipe Business Intelligence et la creation, le support, et l'actualistion pour les dashboards et les reports tout en faisant une
maintenance sur le Data Warehouse etant l'entrepot de donnée de PriceWaterHouseCoopers ou toutes les donnees a l'etat brut sont recuperer puis redirige pour que les utilisateurs
puisset les utilisers sans probleme.`

const Projet = `Lors de mes 3 mois dans l'équipe Business Intelligence j'ai travailler sur different projet :

    - RFC : report for changes

    - Migration ORACLE vers SQL Server : Le but de ce projet etait comme son nom l'indique de migrer l'entierete d'application d'Oracle Database vers SQL Server puisque prochainement PwC
    n'utilisera plus Oracle Database pour des raisons de coup de license qui augmente vu que de moins en moins de firme national PriceWaterHouseCoopers l'augmente et que
    independamment les coups de la licence Oracle est plus hauts, Oracle Database est un systeme de gestion de base de donnee relationelle autrement dit (SGBDR) qui depuis
    l'introduction du modele objet est aussi qualifie de SGBDRO (Système de gestion de base de données relationnel-objet). Pour realiser cette migration il fallait modifier
    les types de certaines donnees, verifier si chaque application etait fonctionnelle, que les donnees etait bien remplie avec les nouveaux types de variable,
    tester si les connecteurs etait bon.

    - Optimisation Documentum : Le but de ce mini projet était d'optimiser des requetes sql pour faire gagner du temps a ces requetes SQL qui auparavent prenait plusieurs heures
    avec des risques d'erreur lors de l'execution qui forcait a re-executer les requetes et donc faire perdre du temps, grace aux nouvelles requetes realiser sur dqMan puis de
    remplacer les anciennes requetes mis dans un flux SSIS par les nouvelles tout en verifiant bien que ces requetes soit fonctionnelle et qu'elle permettait de recevoir les
    même résultat dans un temps beaucoup plus court que celui d'avant.

`

const DiffRen = `Lors de cette partie de stage je me suis confronte a bien plus de difficulte etant donne que c'etait un domaine dont je n'avais que tres peu de connaissance ni
d'experience.

Premiere grosse difficulte que j'ai rencontre et la comprehension et l'utilisation des bases de donnees de PwC etant nombreuses et chacune ayant un objectif et une utilisation
differente, de plus le fait que c'etait la premiere fois que je realise des requetes sql et ma non connaissance des database de PriceWaterHouseCoopers fit que au debut j'etais
extremement lent pour realiser les taches que j'avais a faire et donc que j'ai eu besoin d'enormement de l'aide de mes collegues pour savoir ou se trouvait telle table ou view
dans les bases de donnees.

La seconde grosse difficulte est la disponibilite des personnes faisant les requetes de tache ou RFC, etant donne que ces personnes ne sont pas concentrer uniquement sur ce qu'elle
nous demande il arrive que pendant plusieurs jours j'ai ete bloque par quelque chose qui ne pouvait etre resoudre que grace a l'aide des ces personnes qui soit n'avait pas le
temps soit etait malade ou en conge

Enfin dernier probleme un petit plus mineur fut les droits d'acces, etant donnee que j'etais stagiaire mon pc etait configure pour avoir des droits d'acces extrement limite ce qui
fait que sur certaines requete SQL que je realisais il me manquais des droits sur des tables, vue ou meme base de donnee.`

const ConAcq = `Grace aux trois mois realise dans l'equipe business Intelligence, j'ai appris plusieurs chose notamment sur la partie SQL, comme des realisations de query avec
des jointures chose que je n'avais que jamais fait, de plus j'ai compris et appris a utiliser Microsoft SQL Server Management Studio (SSMS) qui est un logiciel
developper par Microsoft qui est utilise pour configurer gerer et administrer des composants a l'interieur de Microsoft SQL Server comme des Bases de donnees ainsi que des tables
et vue.

J'ai aussi appris a utiliser SSIS autrement appele Microsoft SQL Server Integration Services lui aussi développer par Microsoft, SSIS permet de realiser de multiple differebte
actions comme la creation de Flux qui permet en fonction d'action de transferer automatiquement des Tables, colonnes, bases de donnees d'une plateforme, tout en si nous le
voulons fusionners, separer ou vider differentes tables, creer un excel et beaucoup d'autre en placant des sortes de composants qui sont regler pour realiser des actions
predefini.

De plus j'ai utiliser dqMan qui est un outil d'administration complet permettant aux utilisateurs d'OpenText Documentum d'administrer, de maintenir et de programmer leur
serveur de contenu Documentum. Ce qui m'a permis de realiser mon second projet l'optimisation Documentum.

Tout au long de mon stage j'ai pu participer a des formations qui m'ont permis de comprendre et de pratiquer sur des applications qui dans le futur pourrait me servir comme la
formation Power BI à laquelle j'ai participe. Power BI est une application developpe par Microsoft pour realise de l'analyse de donnee, cela permet de creer des visualisations de donne personnalise et interactive
grace a une ineterface simple qui permet aux utilisateurs de realiser leur propres rapport ou Dashboard.
Power Bi permet de recuperer les donnees de differentes maniere et de differents format, par exemple on peut utiliser les donnes de sources SQL ou Excel pour ne citer qu'eux.
`
const Apport = `J'ai apporte plusieurs chose dans l'equipe, de l'aide sur les multiples taches qui n'avait personne pour s'en occuper et donc pouvoir m'occuper de tache plus simple
et moins complique pour que les taches les plus importantes reste dans les mains de mes collegues ayant bien plus d'experience que moi dans leur domaine.

Mes projets ont permis de pouvoir accelerer ou regler des problemes qui etait present comme la lenteur d'execution dans le cas de l'optimisation de documentum, ou le probleme de
license logiciel qui va bientot disparaitre dans le cas de la migration oracle.

J'ai aussi participer a la resolution de RFC ou de Task qui ont permit de ne pas trop faire attendre les personnes ayant fait les demandes pour les RFC/Task pour que l'equipe ne
soit pas trop deborde de demande venant de partout leur demandant de resoudre le probleme.

`

export { Objectif, Projet, DiffRen, ConAcq, Apport }