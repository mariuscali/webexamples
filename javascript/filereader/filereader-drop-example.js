function dropHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    // FileList object.
    var files = evt.dataTransfer.files;

    if (files.length != 1) {
        resetLog();
        appendLog("Please drag and drop 1 file!");
        return;
    }
    var file = files[0];

    var fileReader = new FileReader();

    fileReader.onloadstart = function(progressEvent) {
        resetLog();
        var msg = "File Name: " + file.name + "<br>" +
            "File Size: " + file.size + "<br>" +
            "File Type: " + file.type;

        appendLog(msg);
    }

    fileReader.onloadend = function(progressEvent) {
        // FileReader.EMPTY, FileReader.LOADING, FileReader.DONE
        appendLog("readyState = " + fileReader.readyState);

        if (fileReader.readyState == FileReader.DONE) {
            var stringData = fileReader.result;
            appendLog(" ---------------- File Content ----------------: ");
            appendLog(stringData);
        }
    }

    fileReader.onerror = function(progressEvent) {
        appendLog("Has Error!");
    }

    // Read file asynchronously.
    fileReader.readAsText(file, "UTF-8"); // fileReader.result -> String.
}

function dragoverHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    // Explicitly show this is a copy.
    evt.dataTransfer.dropEffect = 'copy';
}

function resetLog() {
    document.getElementById('log-div').innerHTML = "";
}

function appendLog(msg) {
    document.getElementById('log-div').innerHTML += "<br>" + msg;
}
