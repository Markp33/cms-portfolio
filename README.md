Portfolio
Inhoudsopgave Overzicht Installatie Gebruikte Plugins/Extensies Technische Werking Gebruik Licentie Overzicht Dit project is ontwikkeld met behulp van React.js en TailwindCSS. Het maakt gebruik van een headless WordPress CMS om content te beheren en op te halen via de WordPress REST API. Het doel van dit project is om een moderne frontend-ervaring te bieden terwijl de backend volledig wordt beheerd door WordPress.

Installatie Vereisten Node.js WordPress CMS React.js TailwindCSS Stappen Clone de repository. Voer npm install uit om de nodige npm-pakketten te installeren. Zorg ervoor dat je WordPress-site is ingesteld met de juiste plugins (zie hieronder). Gebruik de WordPress REST API om de content op te halen in je React-app. Gebruikte Plugins Headless Mode Waarom: Deze plugin is gebruikt om WordPress in een headless setup te draaien, waardoor WordPress alleen als backend fungeert zonder frontend weergave. Functies: Het zorgt ervoor dat de frontend van WordPress wordt uitgeschakeld en alleen de API-gegevens beschikbaar zijn voor de React-app. NoCORS Waarom: Deze plugin zorgt ervoor dat de CORS-beperkingen op de WordPress-site worden opgeheven, zodat API-verzoeken vanuit de frontend correct worden verwerkt. Functies: Het staat toe dat externe domeinen API-verzoeken kunnen doen zonder geblokkeerd te worden door CORS-beperkingen. Technische Werking Hoe werkt het project in het CMS? Het project maakt gebruik van de headless setup van WordPress in combinatie met React.js. In het CMS worden de custom fields gebruikt om de inhoud te beheren, welke vervolgens via de WordPress REST API naar de frontend wordt doorgestuurd. De front-end verwerkt de API-data en genereert dynamisch de pagina's.

Custom Fields en Thema-aanpassingen Er zijn custom fields in WordPress gebruikt om bepaalde contentgebieden dynamisch te beheren. Deze custom fields worden via de API beschikbaar gesteld aan de frontend, waardoor er flexibiliteit is in het beheren van inhoud zonder dat je code hoeft aan te passen.

Plug-ins en Functionaliteit De gebruikte plugins zoals "Headless Mode" en "NoCORS" dragen bij aan het functioneren van de site door een gescheiden backend en frontend mogelijk te maken. De React-app haalt gegevens van WordPress op en genereert pagina's op basis van deze data, terwijl CORS-beperkingen worden omzeild.

Gebruik Na het installeren en configureren van WordPress en React, kun je de applicatie lokaal starten met:

bash Code kopiëren npm start Bezoek je React-applicatie op http://localhost:3000.




https://cms-portfolio-git-main-markp33s-projects.vercel.app/
^^ link naar vercel

