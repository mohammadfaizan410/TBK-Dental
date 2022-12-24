$("#appointments").click(function (e) { 
    if ($('#appt-container:visible').length) {   
        $('#appt-container').hide();
        $('.direction').html("<i class='fa-solid fa-arrow-down'>");
    }
    else {   
        $('#appt-container').show();
        $('.direction').html('<i class="fa-solid fa-arrow-up"></i>');
    }
    });
