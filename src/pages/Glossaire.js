import React, { useEffect } from 'react'
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/Plan' },
    { style: { color: 'blue' }, link: '/InternshipReport/Introduction' },
];

const AzuresFunctions = `
Fonctions Azures : Les fonctions Azure sont un concept sans serveur de conception native cloud
qui permet à un morceau de code de se déployer et de s'exécuter sans avoir besoin
d'infrastructure de serveur, de serveur Web ou de toute autre configuration.`

const WebScraping = `
Web Scraping : Le Web Scraping consiste à extraire des données d’un site internet puis les
exporter dans un format plus utile pour les utilisateurs comme le JSON ou l'Excel par exemple.`

const Pipeline = `
Pipeline : Un outil Azure DevOps qui combine le déploiement continu, les tests automatisés,
envoi vers une destination avec une intégration continue en résumé du CI/CD.`

const LogicApp = `
Logic App : Une plateforme cloud sur laquelle nous pouvons exécuter des workflows automatisés avec peu ou pas de code.`

const BlobStorage = `
Blob Storage : Les Azures Blobs Storages permet  de créer des données pour nos besoins d’analyse et de stockage pour créer des applications cloud puissantes.`

const PuppeteerSelenium = `
Puppeteer Sharp / Selenium Sharp : Des librairies de web scraping qui fournissent une API de haut niveau pour contrôler chromium.`

const VisualStudio = `
Visual Studio : Une suite de logiciels de développement destinés à Windows et Mac OS,
développé par Microsoft. Visual Studio 2022 est un Environnement de Développement Intégré
autrement appelé IDE qui permet de coder dans quasiment tous les langages.`

const IFS = `
Internal Firm Services : Un département de la société qui gère les ressources internes de la société.`

const MicrosoftAzure = `
Microsoft Azure : Un gestionnaire cloud d'applications créées par Microsoft, Azure fournit une
collection de logiciels, une plate-forme et une infrastructure, tout cela en tant que service et
prend en charge de nombreux langages de programmation, outils y compris des logiciels et des
systèmes spécifiques à Microsoft et tiers.`

const AzureDevOps = `
Azure DevOps : Un produit Microsoft qui fournit le contrôle sur de multiples choses, comme la
gestion de projets, la gestion des exigences, des tests automatisés et d’autres fonctionnalités
qui couvrent l'entièreté du cycle de développement d'une application et y ajoute la partie DevOps
qui fournit un développement continu avec une haute qualité logiciel.`

const SSIS = `
SSIS : Microsoft SQL Server Integration Services est un composant de Microsoft SQL Server
database logiciel qui peut être utilisé pour effectuer un large éventail de tâches de migration de données.`

const SSRS = `
SSRS : SQL Server Reporting Services est un système logiciel de génération de rapports basé sur un serveur de Microsoft.
Il fait partie d'une suite de services Microsoft SQL Server.`

const SSMS = `
SSMS : Microsoft SQL Server Management Studio est une application logicielle développée par Microsoft qui est utilisée pour configurer,
gérer et administrer tous les composants de Microsoft SQL Server.`

const OracleDatabase = `
Oracle Database : Un système de gestion de base de données relationnelles autrement dit (SGBDR) qui depuis l’introduction du support du modèle
objet peut être qualifié de système de gestion de base de données relationnelles-objet (SGBDRO).`

const RBE = `
RBE : Registre des Bénéficiaires Économiques`

const AllSections = [
    { title: 'Azures Functions', text: AzuresFunctions },
    { title: 'Web Scraping', text: WebScraping },
    { title: 'Pipeline', text: Pipeline },
    { title: 'Logic App', text: LogicApp },
    { title: 'Blob Storage', text: BlobStorage },
    { title: 'Puppeteer Sharp / Selenium Sharp', text: PuppeteerSelenium },
    { title: 'Visual Studio', text: VisualStudio },
    { title: 'Internal Firm Services', text: IFS },
    { title: 'Microsoft Azure', text: MicrosoftAzure },
    { title: 'Azure DevOps', text: AzureDevOps },
    { title: 'SSIS', text: SSIS },
    { title: 'SSRS', text: SSRS },
    { title: 'SSMS', text: SSMS },
    { title: 'Oracle Database', text: OracleDatabase },
    { title: 'RBE', text: RBE },
]

const Glossaire = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Glossaire</h1>
                <div className='glossaire'>
                    {AllSections.map((section, index) => (
                        <div key={index} className='glossaire-section'>
                            <h2 className='glossaire-title'>{section.title}</h2>
                            <p className='glossaire-text'>{section.text}</p>
                        </div>
                    ))}
                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    )
}

export default Glossaire;