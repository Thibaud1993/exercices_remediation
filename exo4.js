$( document ).ready(function() {
    console.log( "ready!" );

    /* section 1 */


    $('#s1 h2').html("La bonne cible");
    $('#s1 #s1_paragraphe').html("Je suis un paragraphe"); 

    var s1_messageToAlert = $('#s1_messageToAlert').html();
    alert(s1_messageToAlert);

    $('#s2_success').addClass('alert-success');
    $('#s2_info').addClass('alert-info');
    $('#s2_warning').addClass('alert-warning');
    $('#s2_danger').addClass('alert-danger');


    /* section 2 */


    $('#s2_source').keyup('s2_source',function(){
    	$('#s2_destination').html($(this).val());

    });

    $('#s2_number').change('s2_number',function(){
    	$('#s2_pos').html($(this).val());
    	console.log($(this).val());
    	$('#s2_pos').attr("class", "label");

    	if ($(this).val() == '10'){
    		$('#s2_pos').addClass('label-success');
    	}

    	else if($(this).val() == '-10'){
    		$('#s2_pos').addClass('label-danger');

    	}

    	else {
    		$('#s2_pos').addClass('label-default');
   		}
    	

    });

     var anneeActu = new Date().getFullYear();
    /*console.log(anneeActu);*/

    $("#s2_year").keyup(function(){
        var anneeSaisie = $(this).val();
        var anneeSaisieLong = anneeSaisie.length;
        /*console.log(anneeSaisie);
        console.log(anneeSaisieLong);*/
        if ((anneeSaisieLong == 4) && (anneeActu - parseInt(anneeSaisie) >= 18)){
            /*console.log("jdjhg");*/
            $("#s2_name").removeClass("hidden");
        }
    });
    $("#s2_name_input").keyup(function(){
            var longPrenom = $(this).val();
            var lettrePrenom = longPrenom.length;
            if (lettrePrenom >= 5) {
                console.log(lettrePrenom);
                $("#s2_submit").removeClass("hidden");
            }
    });








    /* section 3 */
	$("li").click(function(){
        $(this).html("coulé");
    });
});