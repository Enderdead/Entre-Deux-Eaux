var delegation = "Délégation"
var communesList = []
var selected = "035"

function init() {
    for (i in communes) {
        if (!communesList.includes(communes[i])) {
            communesList.push({ commune: communes[i].commune })
        }
    }

    var myCommunes = document.getElementById("communes")
    var options = ""

    for (i in communes) {
        options += '<option value="' + communes[i].commune + " (" + communes[i].departement + ")" + '">'
    }
    myCommunes.innerHTML = options;
}

function search() {
    document.getElementById('infos_commune').innerHTML = getInfo(document.getElementById('commune').value)
}

function getInfo(nom_commune) {
    return getInfoCommune(nom_commune) + "<br/><br/>" + getInfoDepartement(nom_commune) + "<br/><br/>" + getInfoFrance()
}

function getInfoCommune(nom_commune) {
    for (i in communes) {
        if (nom_commune == (communes[i].commune + " (" + communes[i].departement + ")")) {

            // Collecte des infos pour tous les fournisseurs d'une même commune
            commune = communes[i]
            var communauté = false
            var delegation = false
            var regie = false
            var prix = []
            var statuts = []
            var entreprises = []

            if (commune.commune.toLowerCase().includes("communaut")) {
                communauté = true
            }

            for (j in communes[i].data) {
                if (commune.data[j].mode_gestion.includes("Délégation")) {
                    delegation = true
                }
                if (commune.data[j].mode_gestion.includes("Régie")) {
                    regie = true
                }
                if (commune.data[j].prix != "") {
                    prix.push(commune.data[j].prix)
                }
                if (commune.data[j].statut != "") {
                    statuts.push(commune.data[j].statut)
                }
                if (commune.data[j].entreprise != "" && !entreprises.includes(commune.data[j].entreprise)) {
                    entreprises.push(commune.data[j].entreprise)
                }
            }

            // Génère la chaîne de caractères
            var res = ""
            if (communauté) {
                res += "Votre communauté de communes "
            } else {
                res += "Votre commune "
            }
            if (delegation == false && regie == false) {
                res += " ne nous a pas donné d'informations sur le mode de gestion de l'eau.\n"
            } else {
                // Délégation vs Régie
                if (delegation && regie) {
                    res += "délègue en partie la livraison de l'eau"
                } else if (regie) {
                    res += "régie la livraison de l'eau"
                } else {
                    res += "délègue totalement la livraison de l'eau"
                }

                // Entreprises déléguées
                if (entreprises.length == 0) {
                    res += "."
                } else if (entreprises.length == 1) {
                    res += " à " + entreprises[0] + "."
                } else {
                    res += " à " + entreprises[0]
                    for (k = 1; k < entreprises.length - 1; k++) {
                        res += ", " + entreprises[k]
                    }
                    res += " et " + entreprises[entreprises.length - 1] + "."
                }
                res += "<br\>"

                // Prix
                if (prix.length > 0) {
                    var mean = 0
                    for (k in prix) {
                        mean += parseFloat(("" + prix[k]).replace(",", ".")) / prix.length
                    }
                    res += "Le prix moyen au mètre cube dans votre "
                    if (communauté) {
                        res += "communauté de communes "
                    } else {
                        res += "commune "
                    }
                    res += "est de " + mean.toFixed(2) + "€."
                }
            }
            return res
        }
    }
    return "Votre commune n'a pas été trouvée. Il est possible que votre mairie n'ait pas communiqué sur le mode de gestion de l'eau. Si votre commune appartient à une communauté de communes, vous pouvez essayer d'entrer le nom de cette dernière."
}

function getInfoDepartement(nom_commune) {
    for (i in communes) {
        if (nom_commune == (communes[i].commune + " (" + communes[i].departement + ")")) {
            var departement = communes[i].departement
            if (departement[0] == "0") {
                document.getElementById("jqvmap1_" + selected.substring(1, 3)).setFill(couleurs[selected.substring(1, 3)])
                selected = departement
                document.getElementById("jqvmap1_" + departement.substring(1, 3)).setFill("#ff0015")
            } else {
                document.getElementById("jqvmap1_" + selected.substring(1, 3)).setFill(couleurs[selected.substring(1, 3)])
            }

            if (departements[departement].nb_delegation > departements[departement].nb_regie) {
                return "Votre département délègue en majorité la gestion de son eau et le prix moyen au mètre cube y est de " + departements[departement].prix_moyen + "€."
            } else {
                return "Votre département régie en majorité la gestion de son eau et le prix moyen au mètre cube y est de " + departements[departement].prix_moyen + "€."
            }
        }
    }
    return ""
}

function getInfoFrance() {
    return "En France, deux tiers des communes gèrent elles-mêmes la distribution de l'eau. En métropole, le prix moyen au mètre cube est de 2.43€."
}

init()