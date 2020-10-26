$(document).ready(function () {
    let allReferalFields = document.querySelectorAll('.referals__field');
    for (let referalField of allReferalFields) {
        $(referalField).focus(function () {
            $(this).parent().css({'borderColor' : '#841eb6'});
        })
        $(referalField).blur(function () {
            $(this).parent().css({'borderColor' : '#eaedf3'});
        });
    };
});