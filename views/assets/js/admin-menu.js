$(document).ready(function () {
    $("#sessionUserName").text(sessionStorage.user);
});

$(".btn-logout").click(function (e) {
    e.preventDefault();
    sessionStorage.clear();
    location.href = "login";
});
