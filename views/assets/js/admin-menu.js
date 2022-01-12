$(document).ready(function () {
    $("#sessionUserName").text(sessionStorage.user);

    // var links = $("#menu-admin a");
    // for(let i = 0; i <= links.length; i++){
    //     console.log(links[i])
    // }
    $("#menu-admin a").each(function(indice,elemento){
        let hash = $(location).attr('pathname');
        let href = $(this).attr("href")
        
        if(href == hash) $(this).addClass("active");
    })
});

$(".btn-logout").click(function (e) {
    e.preventDefault();
    sessionStorage.clear();
    location.href = "login";
});
