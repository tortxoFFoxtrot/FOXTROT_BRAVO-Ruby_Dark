(function () {
    pagination(true);
})();
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
    const is_root = location.pathname == "/";
    if(!is_root)
    {
        const navelems = document.getElementsByClassName('nav');
        for(var i=0; i<navelems.length; i++) {
            navelems[i].style.display='flex';
        }
     }
     if(!location.hostname.toLowerCase().includes("foxblog.click"))
     {
         console.log('detected onion link')
         var l = document.links;
         for(var i=0; i<l.length; i++) {
             var cl = l[i].href;
             if( cl.includes("foxblog.click"))
             {
                 const url = new URL(cl);
                 console.log(location.protocol+'//'+location.hostname+url.pathname);
                 l[i].href = location.protocol+'//'+location.hostname+url.pathname;
             }
         }
    }
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        if (link.hostname != window.location.hostname) {
            link.target = '_blank';
        }
    });
});
