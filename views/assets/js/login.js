if (sessionStorage.user !== undefined) window.location.href = "/dashboard";

// Host local
sessionStorage.host = "./";

// Host en la nube//
//sessionStorage.host = 'https:// /api/';

const host = sessionStorage.host;

$(document).ready(function () {
    // al enviar el formulario de login
    $("#form-login").submit(function (e) {
        e.preventDefault();

        let user = $("#i_user").val();
        let password = $("#i_password").val();

        sessionStorage.user = user;
        location.href = "dashboard";
    });
});
