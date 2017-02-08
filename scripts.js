function repealAndReplace(node){
    node.innerHTML = node.innerHTML.replace(/Donald\sJ\.?\sTrump/g,'Stephen K. Bannon')
    node.innerHTML = node.innerHTML.replace(/Donald\sJohn\sTrump/g,'Stephen Kevin Bannon')
    node.innerHTML = node.innerHTML.replace(/Donald\sTrump/g,'Steve Bannon')
    node.innerHTML = node.innerHTML.replace(/President\sTrump/g,'President Bannon')
    node.innerHTML = node.innerHTML.replace(/\sTrump/g,' Bannon')
    node.innerHTML = node.innerHTML.replace(/@realDonaldTrump/g,'@reallySteveBannon')


    // var trump = node.innerHTML.match(/>[^<]+(\sTrump)[^>]*</g)
    // if (!!trump){
    //   trump.forEach(function(name){
    //     var bannon = name.replace(/Trump/g,'Bannon')
    //     bannon = bannon.replace(/realDonaldTrump/g,'reallySteveBannon')
    //     node.innerHTML = node.innerHTML.replace(name,bannon)
    //   })
    // } else {
    //   if (node.innerHTML.match(/=\"[^"]*/) === null ){
    //     console.log(node)
    //   }
    //   node.innerHTML = node.innerHTML.replace(/\sTrump/g,'\sBannon')
    // }
}

var items = document.querySelectorAll('a, title, p, h1, h2, h3, h4, h5, h6');

for (var i = 0; i < items.length; i++) {

  var trump = items[i].innerHTML.indexOf('Trump');
  if ( trump > -1){
    repealAndReplace(items[i])
  }
}

