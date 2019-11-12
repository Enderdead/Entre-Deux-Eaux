var slide3content = document.getElementById("slide3content")

var enBref = "Souvent la gestion publique de l'eau va être réalisée par les municipalités en régie : le conseil municipal vote le tarif de l'eau et les comptes sont publics. Cela signifie que les investissements dans l'eau sont financés par la tarification au consommateur. Pour l’eau, c’est donc différent d'autres services publiques qui sont financés par impôts : “On a un budget à part donc on doit être à l'équilibre. Et donc, le tarif est censé représenter à peu près le coût de l'eau et de distribution de l'eau”, résume Simon Porcher, maître de conférence à l’institut d’administration des entreprises et spécialiste de réforme des services publics de l’eau en France. “Quand on est en privé par contre on a différentes formules de contrats. Le contrat le plus générique, c'est la délégation de service public : un opérateur privé va gérer le service mais ne détient pas l'infrastructure. Le réseau d'eau reste public mais c’est une entreprise privée qui gère, souvent Veolia ou Suez. C’est elle qui va produire l'eau, la distribuer et envoyer la facture au consommateur.“"

var enDetail = "La DSP : 5 critères pour ne pas se mouiller" +
    "La DSP est un mode de gestion que l’on retrouve traditionnellement sur des services tels que la distribution de l’eau potable. Sa recette*, repose sur cinq critères. Il faut d’abord un contrat, signé entre une autorité délégante et un délégataire."

+"Dans le domaine de l’eau, une autorité délégante, ce sont par exemple l’État, les Collectivités Territoriales ou des établissements publics d’aménagement et de gestion des eaux. Et du côté du délégataire on retrouve les entreprises privées ( Veolia, Suez ou Saur), les sociétés d’économie mixte ( Eau du Bassin Rennais, Brest Métropole), des associations (Association Française des Professionnels de l’Eau et des Déchets, EAU - Élus Association Usagers,...), des personnes physiques (n’importe quel citoyen) ou morales de droit public (que sont par exemple les collectivités territoriales incarnées par le Préfet)."

+
"Deux critères encore pour définir la DSP : la gestion du service public que délègue la DSP sur la base d’une rémunération liée à l’exploitation de ce service." +
"Ces deux derniers éléments sont essentiels : au coeur du contrat, ce sont eux qui feront de la DSP un exercice vertueux pour la défense de l’intérêt général ou pas."

+
"* une définition issue de l’ouvrage Services Publics délégués au privé : à qui profite le deal? de la journaliste Isabelle Jarjaille."

+
"Voilà pour les critères de la DSP, mais celle-ci peut revêtir diverses formes :" +
"Le contrat de concession" +
"Le concessionnaire assure la responsabilité financière de la délégation. La société privée s’engage sur l’investissement initial puis la gestion de l’équipement, et se remboursera en percevant les recettes du service public." +
"L’affermage " +
"Dans cette situation, l’entreprise exploite et prend soin du réseau, mais la collectivité décide et finance les investissements. La commune reste la propriétaire des équipements tandis que la société privée entretient le réseau d’eau potable." +
"La régie intéressée" +
"Ici, la personne publique confie la gestion de la distribution de l’eau au régisseur. Ce dernier gère la relation avec les usagers, réalise les travaux courants, tout en agissant pour le compte de la collectivité. C’est lui qui fait fonctionner le service et sera rémunéré en fonction de certains résultats d’exploitation." +
"La gérance" +
"C’est comme pour la régie intéressée sauf qu’ici, la rémunération est fixe, quels que soient les résultats d’exploitation du service d’eau."



slide3content.innerHTML = enBref;

function changeSlide3Content(mode) {
    if (mode == "bref") {
        slide3content.innerHTML = enBref;
        document.getElementById("enbref-slide3").style.backgroundColor = '#FFFFFFCC'
        document.getElementById("endetail-slide3").style.backgroundColor = '#FFFFFF55'
    } else {
        slide3content.innerHTML = enDetail;
        document.getElementById("endetail-slide3").style.backgroundColor = '#FFFFFFCC'
        document.getElementById("enbref-slide3").style.backgroundColor = '#FFFFFF55'
    }
};