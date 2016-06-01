(function() {
    var converter = new showdown.Converter({tables: true}),
        text      = document.body.innerText,
        html      = '<div class="container">' + converter.makeHtml(text) + '</div>';

	document.body.innerHTML = html.replace('<table>', '<table class="table table-striped">');

    chrome.storage.sync.get({
        markdownViewerTheme: 'bootstrap-3.3.6.min.css',
    }, function(items) {
        var stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = chrome.extension.getURL('themes/' + items.markdownViewerTheme);

        document.head.appendChild(stylesheet);
    });
}());
