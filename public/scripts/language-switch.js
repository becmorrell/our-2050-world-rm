document.addEventListener("DOMContentLoaded", languageDropdown());

function switchLanguage(language) {
    console.log(`Changing language cookie to ${language}`)
    document.cookie = `firebase-language-override=${language}`;
    window.location.reload();
};

function languageDropdown() {
    $(".select_ul").children().eq(0).hide();

    $('html').click(function(e) { 
        const element = document.querySelector('#language-dropdown');

        if (e.target !== element && !element.contains(e.target)){
            $('.select_wrap').removeClass("active");           
        }
    });

    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
    }) 

    $(".select_ul li").click(function(){
        $(this).siblings().show();
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).hide();
        $(this).parents(".select_wrap").removeClass("active");
        var newLang = $(this).children().eq(0).attr("lang")
        switchLanguage(newLang)

        function switchLanguage(language) {
            console.log(`Changing language cookie to ${language}`);

            plausible('Translate', {props: {Language: language}});

            document.cookie = `firebase-language-override=${language}`;
            window.location.reload();
        };
    })
}