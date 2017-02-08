function repealAndReplace(node){
  node.innerHTML = node.innerHTML.replace(/Donald\sJ\.?\sTrump/g,'Stephen K. Bannon')
  node.innerHTML = node.innerHTML.replace(/Donald\sJohn\sTrump/g,'Stephen Kevin Bannon')
  node.innerHTML = node.innerHTML.replace(/Donald\sTrump/g,'Steve Bannon')
  node.innerHTML = node.innerHTML.replace(/\sTrump/g,' Bannon')
  node.innerHTML = node.innerHTML.replace(/@realDonaldTrump/g,'@reallySteveBannon')
  node.innerHTML = node.innerHTML.replace(/>Trump\s/g,'>Bannon ')
  node.innerHTML = node.innerHTML.replace(/Trump\s/g,'Bannon ')
}

function makeTheInternetGreat(){
  var items = document.querySelectorAll('a, title, p, h1, h2, h3, h4, h5, h6, figcaption, span');
  for (var i = 0; i < items.length; i++) {
    var trump = items[i].innerHTML.indexOf('Trump');
    if ( trump > -1){
      repealAndReplace(items[i])
    }
  }
}

makeTheInternetGreat()
