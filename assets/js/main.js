(function () {
    pagination(true);
})();
function unhideFooterNav() {
    const is_root = location.pathname == "/";
    if(!is_root)
    {
        const navelems = document.getElementsByClassName('nav');
        console.log('navelems length: '+navelems.length);
        for(var i=0; i<navelems.length; i++) {
            navelems[i].style.display='flex';
        }
     }
}
window.addEventListener("load", unhideFooterNav);
const delay = ms => new Promise(res => setTimeout(res, ms));
(async () => {
  var bool = true;
  while (true) {
    if(!bool)
    {
        bool = true;
        document.getElementById('cursor-span').style.visibility='visible';
        await delay(820);
    }
    else
    {
        bool = false;
        document.getElementById('cursor-span').style.visibility='hidden';
        await delay(640);
    }
  }
})();
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        if (link.hostname != window.location.hostname) {
            link.target = '_blank';
        }
    });
});
