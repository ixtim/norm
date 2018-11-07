let random_version = Math.floor((Math.random() * 10) + 1);
function loadScript(url, callback)
{
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
loadScript("https://raw.githubusercontent.com/roottr/norm/atesh/app.js?version="+random_version,"callback");


/*** NEW SOURCE url **/
