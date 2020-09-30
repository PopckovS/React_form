$(document).ready(function () {

    /**
     * Отдает на скачивание нередактированный документ
     */
    $('#saveOriginalDocx').on('click', function () {
        let filepath = $('input[name="docxFilepath"]').val();
        filepath = filepath.replace('html', 'docx');
        let a = document.createElement('a');
        a.href = `/${filepath}`;
        a.download = filepath.substring(filepath.lastIndexOf('/') + 1);
        document.body.append(a);
        a.click();
        a.remove();
    });

    /**
     *  Скачивание отредактированного doc
     */
    $('#saveEditedDocx').on('click', function () {
        Export2Doc('.jodit-wysiwyg');
    });

    /**
     * html to doc
     * @param element
     * @param filename
     * @constructor
     */
    function Export2Doc(element, filename = ''){
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml+$('.jodit-wysiwyg').html()+postHtml;

        var blob = new Blob(['\ufeff', html[0]], {
            type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        filename = filename?filename+'.doc':'document.doc';

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if(navigator.msSaveOrOpenBlob ){
            navigator.msSaveOrOpenBlob(blob, filename);
        }else{
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }
});