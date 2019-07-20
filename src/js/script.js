$(document).ready(function(){
    function settingsBar(selector){
        let menu = $(selector);
        let button = $('.settings-bar__close');
        let overlay = $('.settings-bar__overlay');

        menu.on('click', (e)=> {
            e.preventDefault();
            toggleMenu();
        });

        button.on('click', (e)=> {
            e.preventDefault();
            toggleMenu();
        });

        overlay.on('click', () => toggleMenu());

        function toggleMenu(){
            $('.settings-bar__overlay').toggleClass('settings-bar__overlay--active');
            $('.settings-bar__wrap').toggleClass('settings-bar__wrap--active');

            if ($('.settings-bar__wrap').hasClass('.settings-bar__wrap--active')) {
                $('.main-wrap').css('overflow', 'hidden');
            }
            else {
                $('.main-wrap').css('overflow', 'visible');
            }
        }
    }

    settingsBar('.report-filter__link-settings, .main-filter__btn-setting');
});

