$(document).ready(function() {
    $('#francemap').vectorMap({
        map: 'france_fr',
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: "#ffffff00",
        colors: couleurs,
        borderColor: "#ffffffff",
        //selectedColor: "#EC000000",
        enableZoom: false,
        showTooltip: true,
        // onRegionClick: function(element, code, region)
        // {
            // var message = 'Département : ' + region + " (" + code + ")" + "\nDélégation de l'eau : "
            // var new_code = ""
            
            // if(code < 100 || code == "2A" || code == "2B") {
            //     new_code = "0" + code
            // }

            // if(!departements[new_code]) {
            //     message = 'Aucune information trouvée pour ce département.'
            // } else {
            //     message += (100 * departements[new_code].nb_delegation / (departements[new_code].nb_delegation + departements[new_code].nb_regie)).toFixed(0) + "%\n"
            //     message += 'Prix moyen : ' + departements[new_code].prix_moyen + "€/m3"
            // }

            // alert(message);
        // },
        onLabelShow: function(event, label, code)
        {
            var dept = label.prevObject[0].innerHTML
            var message = 'Département : ' + dept + " (" + code + ")" + " | Délégation de l'eau : "
            var new_code = ""
            
            if(code < 100 || code == "2A" || code == "2B") {
                new_code = "0" + code
            }

            if(!departements[new_code]) {
                message = 'Département : ' + dept + " (" + code + ")" + ' | Aucune information trouvée pour ce département.'
            } else {
                message += (100 * departements[new_code].nb_delegation / (departements[new_code].nb_delegation + departements[new_code].nb_regie)).toFixed(0) + "%"
                if(departements[new_code].prix_moyen != 0) message += ' | Prix moyen : ' + departements[new_code].prix_moyen + "€/m3"
            }
            label.prevObject[0].innerHTML = message
        }
    });
});
