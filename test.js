const fs = require('fs')

var communes = require("./src/data/departements.js")
var res = ""
var nb_regie = 0
var nb_delegation = 0
var prix = []

for(i in departements) {
    nb_regie += departements[i].nb_regie
    nb_delegation += departements[i].nb_delegation

    for(j in departements[i].prix) {
        prix.push(departements[i].prix[j])
    }
}

prix_moyen = 0
for(k in prix) {
    prix_moyen += parseFloat(("" + prix[k]).replace(",", ".")) / prix.length
}
console.log(prix_moyen)
res += "{nb_regie: " + nb_regie + ", nb_delegation: " + nb_delegation + ", prix_moyen: " + 3.52 + "}"
console.log(res)
//fs.writeFile('departements.js', JSON.stringify(departements, null, 2), (err) => {})