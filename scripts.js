function repealAndReplace(nodes){
  for (var i = 0; i < nodes.length; i++) {
    nicks.forEach(function(nick){
      nodes[i].innerHTML = nodes[i].innerHTML.replace(nick[0], nick[1])
    })
  }

  // node.innerHTML = node.innerHTML.replace(/Donald\sJ\.?\sTrump/g,'Stephen K. Bannon')
  // node.innerHTML = node.innerHTML.replace(/Donald\sJohn\sTrump/g,'Stephen Kevin Bannon')
  // node.innerHTML = node.innerHTML.replace(/Donald\sTrump/g,'Steve Bannon')
  // node.innerHTML = node.innerHTML.replace(/\sTrump/g,' Bannon')
  // node.innerHTML = node.innerHTML.replace(/@realDonaldTrump/g,'@reallySteveBannon')
  // node.innerHTML = node.innerHTML.replace(/>Trump\s/g,'>Bannon ')
  // node.innerHTML = node.innerHTML.replace(/Trump\s/g,'Bannon ')
}

function checkStorage(callback){
  console.log('Checking storage...')
  chrome.storage.local.get(null, function(resp){
    console.log(resp)
    callback(resp)
  })
}

function makeTheInternetGreat(){
  checkStorage(getSetNodes);
}

function getSetNodes(resp){
  var pageMatch = resp['href'] === window.location.href
  if ( !pageMatch ){

    console.log('Saving clean page...')

    chrome.storage.local.set({
      'clean_page': document.body.innerHTML,
      'href': window.location.href
    })

    console.log('Replacing nodes...')

    var nodes = document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6, figcaption, span');
    repealAndReplace(nodes)
  } else {

    console.log('Resetting page...');

    document.body.innerHTML = resp['clean_page'];

    console.log('Clearing storage...')

    chrome.storage.local.clear()
  }
}



makeTheInternetGreat()

var nicks = [
  [/(\bPresident\b\s)?Donald\sTrump/g,'Pathological Liar Donald Trump'],
  [/Steve Bannon/g,'Darth Bannon'],
  [/Sean Spicer/g,'Balding, Angry Melissa McCarthy'],
  [/Justin Trudeau/g,'Justin \'Joe\' Trudeau'],
  [/Reince Preibus/g, 'Reincelstiltskin']
]
