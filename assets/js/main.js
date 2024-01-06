(function () {
    pagination(true);
})();
(async () => {
    var ul = document.getElementsByClassName('nav')[0];
    ul.firstElementChild.firstElementChild.innerText="HOME";
    var githubli = document.createElement('li');
    var xli = document.createElement('li');
    var githuba = document.createElement('a');
    var xa = document.createElement('a');
    githuba.appendChild(document.createTextNode('GITHUB'));
    githuba.target='_blank';
    githuba.href ='https://github.com/tortxoFFoxtrot';
    xa.appendChild(document.createTextNode('X'));
    xa.target='_blank';
    xa.href ='https://x.com/realfarfoxache';
    githubli.appendChild(githuba);
    xli.appendChild(xa);
    ul.appendChild(githubli);
    ul.appendChild(xli);
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
