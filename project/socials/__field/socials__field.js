$(document).ready(function () {
    let allSocailFields = document.querySelectorAll('.socials__field');
    for (let socialField of allSocailFields) {

        $(socialField).focus(function () {
            let classActive = $(this).data('class-active');
            $(this).parent().addClass(`${classActive}`);
            $(this).parent().css({'borderColor' : '#841eb6'});
        })
        $(socialField).blur(function () {
            if (!$(this).val()) {
                let classActive = $(this).data('class-active');
                $(this).parent().removeClass(`${classActive}`);
            };
            $(this).parent().css({'borderColor' : '#eaedf3'});
        });
    };
});