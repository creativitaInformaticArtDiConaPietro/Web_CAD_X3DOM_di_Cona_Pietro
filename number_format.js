/*
 * number_format in Javascript
 * @ 2102 Fabio Donatantonio - www.donatantonio.net
 *
 * Sintassi chiamata:
 * number_format(valore,decimali,divisore decimali,divisiore migliaia)
 * 
 * (esempio) number_format(1320.873, 2, ',', '.') = 1.320,87
*/
function toFixedFix(n, precisione) {
    // Funzione per arrotondare valore
    var k = Math.pow(10, precisione);            
    return '' + Math.round(n * k) / k;
}

function number_format(numero, decimali, dec_separatore, mig_separatore){
    // Elimino i caratteri che non sono numeri (lascio il segno meno e il punto)
    numero = (numero).replace(/[^0-9\.\-]?/gi,"");
    // Controllo se valore numerico
    var n = 0;
    if(isFinite(+numero)){
        n=numero;
    }
    // Controllo se i decimali sono accettabili
    var precisione = 0;
    if(isFinite(+decimali) && decimali>-1){
        precisione = decimali;
    }
    // Recupero caratteri separatori
    var separatore = '.';
    if(typeof mig_separatore != 'undefined'){
        separatore = mig_separatore;
    }
    var dec = ',';
    if(typeof dec_separatore != 'undefined'){
        var dec = dec_separatore;     
    }
    
    // Arrotondo il valore se necessario - Utilizzo funzione toFixedFix
    var s = '';
    if(precisione!=0){
        s = toFixedFix(n, precisione);    
    }else{
        s = '' + Math.round(n);
    }
    // Taglio il valore in parte intera e parte decimale
    s = s.split('.');
    // Aggiungo il separatore delle migliaia - ogni 3 numeri sulla parte intera
    if (s[0].length > 3) {        
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separatore);
    }
    // Formatto la parte decimale - aggiungo degli 0 se necessari
    if ((s[1] || '').length < precisione) {
        s[1] = s[1] || '';
        s[1] += new Array(precisione - s[1].length + 1).join('0');    
    }
    // Aggiungo parte decimale a parte intera - separati da separatore decimali
    return s.join(dec);
}