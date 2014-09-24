var mdjs = {};

mdjs.initializeMarkdown = function () {
    $(".mdjs").each(function () {
        var target = $(this);
        $.get("assets/md/" + $(this).data("md-file"), function (data) {
            var converter = new Markdown.Converter();
            target.html(converter.makeHtml(data));
        });
    });
};