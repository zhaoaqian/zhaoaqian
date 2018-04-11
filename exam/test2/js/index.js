$(function() {
    $('.sectionTop dl').on('click', function() {
        var ind = $(this).index();
        $('.sectionMain div').eq(ind).show().siblings().hide();
    })

})