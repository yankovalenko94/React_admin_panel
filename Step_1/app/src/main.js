import $ from 'jquery';

function getPageList() {
    $("h1").remove();
    $.get("./api", data => {
        data.forEach(file => {
            $("body").append(`<h1>${file}</h1>`)
        })
    }, "JSON");
}

getPageList();


$("button").click(() => {
    $.post("./api/createNewPage.php", {
        "name" : $("input").val()
    }, () => {
        getPageList();
    })
    .fail(() => {
        alert("Страница уже существует!");
    })
});