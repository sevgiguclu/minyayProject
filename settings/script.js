/* >>>> INPUT GİRİŞlERİ TOUPPERCASE FORMATINA ÇEVİRME */
function firstBig(elementId){
    document.getElementById(elementId).style.textTransform = "capitalize";
}
/* INPUT GİRİŞİNİ TOUPPERCASE FORMATINA ÇEVİRME <<<<< */

/* >>>> INPUTLAR İÇİN TASARIM */
function mOver(elementId){
    document.getElementById(elementId).style.borderColor = "#888888";
    document.getElementById(elementId).style.boxShadow = "4px 6px #888888";
}
function mOut(elementId){
    document.getElementById(elementId).style.borderColor = "#ced4da";
    document.getElementById(elementId).style.boxShadow = "none";
}
/* INPUTLAR İÇİN TASARIM <<<< */


$(document).ready(function(){
   /* >>>>>>> MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */
    var DokumanGenisligi = $(window).outerWidth(); //ekran genişliğini verir
    if (DokumanGenisligi>=1200) { /* XL */
        var Ofset = 72;
    }else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
            var Ofset = 62;
    }else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
            var Ofset = 40;
    }else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
            var Ofset = 30;
    }else if (DokumanGenisligi<=575) { /* XS */
            var Ofset = 30;
    }
    $("#Content").css('top', Ofset);
    $("footer").css('top',Ofset);

    $(window).resize(function(){
        var DokumanGenisligi = $(window).outerWidth(); //ekran genişliğini verir
        if (DokumanGenisligi>=1200) { /* XL */
            var Ofset = 72;
        }else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
            var Ofset = 62;
        }else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
            var Ofset = 40;
        }else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
            var Ofset = 30;
        }else if (DokumanGenisligi<=575) { /* XS */
            var Ofset = 30;
        }
        $("#Content").css('top', Ofset);
        $("footer").css('top',Ofset);
    });
   /* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI <<<<<<< */

   /*>>>> ARAMA KUTUSU SONUÇ BULMA */
   $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
   /* ARAMA KUTUSU SONUÇ BULMA <<<< */

   /* >>>> FORM VERİLERİNİ ALMA VE İŞLEME */
    var persons = [];
    $("#adressForm").submit(function(e){
        var text = "";
        var name = document.forms["myForm"]["input-name"].value;
        var surname = document.forms["myForm"]["input-surname"].value; 
        var tel = document.forms["myForm"]["input-tel"].value;
        var person = [name, surname, tel];
        
        persons.push(person);
        persons.sort();
        // alert(persons[0]);

        document.forms["myForm"]["input-name"].value = "";
        document.forms["myForm"]["input-surname"].value = "";
        document.forms["myForm"]["input-tel"].value = "";

        for(let i=0; i<persons.length; i++){
            text += "<tr>";
            for(let k=0; k<persons[i].length; k++){
                text += "<td>" + persons[i][k] + "</td>";
            }
            text += "</tr>"
        }
        // alert(text);
        $("#myTable").html(text);
        e.preventDefault();
    });
    /* FORM VERİLERİNİ ALMA VE İŞLEME <<<< */

});
