$('#card-creator__description').blur(function () {
    if($(this).val()) {
        $(CCPDescriptionCap).removeClass('field-caption_required');
    }
})