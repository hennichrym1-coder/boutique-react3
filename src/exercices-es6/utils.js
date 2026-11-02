function calculerttc(ht) {
    return ht * 1.2;
}
function appliquerRemise(prix,pourcentage) {
     return prix - (prix * pourcentage / 100);
    }
    function formaterPrix(montant) {
        return montant.toFixed(2) + " €";
    }