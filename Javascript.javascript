function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
// テキストファイルとしてダウンロード
var filename = "log_" + new Date().toISOString().replace(/[:\-\.]/g, '') + ".txt";
download(filename, document.getElementById('result').textContent);
