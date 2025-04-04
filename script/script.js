$(document).ready(function () {
    // Quando uma miniatura for clicada
    $('.thumbnail').on('click', function () {
        const src = $(this).attr('src'); // Obtém o caminho da imagem
        $('#lightboxImage').attr('src', src); // Define a imagem no lightbox
        $('#lightbox').css('display', 'flex'); // Exibe a lightbox
    });

    // Quando o botão de fechar for clicado
    $('#closeLightbox').on('click', function () {
        $('#lightbox').css('display', 'none'); // Oculta a lightbox
    });
});