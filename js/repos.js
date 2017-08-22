$(document).ready(function () {

    $.getJSON("https://api.github.com/users/praveenax/repos", function (data) {

        console.log(data);
        var items = [];
        $.each(data, function (key, val) {

//            if (val.owner.login == "praveenax") {
                items.push("<div class='repo_item' id='" + key + "'><a target='_blank' href='" + val.html_url + "'>" + val.name.charAt(0).toUpperCase() + val.name.substr(1).toLowerCase() + "</a><br><br> Language:"+val.language+"</div>");
//            }

        });

        $("<div/>", {
            "class": "repo-list",
            html: items.join("")
        }).appendTo("#repos");
    });


});
