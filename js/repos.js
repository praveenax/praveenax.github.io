$(document).ready(function () {

    $.getJSON("https://api.github.com/users/praveenax/repos", function (data) {

        console.log(data);
        var items = [];
        $.each(data, function (key, val) {

//            if (val.owner.login == "praveenax") {
                items.push("<li class='repo_item' id='" + key + "'><a target='_blank' href='" + val.html_url + "'>" + val.name + "</a></li>");
//            }

        });

        $("<ul/>", {
            "class": "repo-list",
            html: items.join("")
        }).appendTo("#repos");
    });


});
