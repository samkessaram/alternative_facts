function repealAndReplace(node){
  node.innerHTML = node.innerHTML.replace(/Donald\sJ\.?\sTrump/g,'Stephen K. Bannon')
  node.innerHTML = node.innerHTML.replace(/Donald\sJohn\sTrump/g,'Stephen Kevin Bannon')
  node.innerHTML = node.innerHTML.replace(/Donald\sTrump/g,'Steve Bannon')
  node.innerHTML = node.innerHTML.replace(/\sTrump/g,' Bannon')
  node.innerHTML = node.innerHTML.replace(/@realDonaldTrump/g,'@reallySteveBannon')
  node.innerHTML = node.innerHTML.replace(/>Trump\s/g,'>Bannon ')
  node.innerHTML = node.innerHTML.replace(/Trump\s/g,'Bannon ')
}

function checkStorage(callback){
  console.log('Checking storage...')
  chrome.storage.local.get(null, function(resp){
    callback(resp['clean_page'])
  })
}

function getNodes(){
  return document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6, figcaption, span');
}

function makeTheInternetGreat(){
  checkStorage(getSetNodes);
}

function getSetNodes(page){
  if ( !page ){
    chrome.storage.local.set({
      'clean_page': document.body.innerHTML
    })
    nodes = getNodes()
    for (var i = 0; i < nodes.length; i++) {
      if ( nodes[i].innerHTML.indexOf('Trump') > -1){
        repealAndReplace(nodes[i])
      }
    }
  } else {
    console.log('page reset');
    document.body.innerHTML = page;
    chrome.storage.local.set({
      'clean_page': ''
    })
  }
}



makeTheInternetGreat()


// Sean 'CAN I FINISH???' Spicer
// Donald 'Pussy-Grabbin'