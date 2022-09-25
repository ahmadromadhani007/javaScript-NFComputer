$(document).ready(function () {
    $('.card').each(function () {
        $(this).click(function () {
            $('#gambar').remove();
            $('#suara').remove();
            const hewan = $(this).find('h3').attr('id');
            $(this).prepend(`<img id="gambar" class="card-img-top" src="main/img/${hewan}.jpeg" alt="">`);
            $(this).append(`<audio src="main/audio/${hewan}.mp3" autoplay id="suara"></audio>`);
        });
    });
});