chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript({
    file: "scripts.js",
    runAt: "document_end"
  }, function(){
    console.log('script executed')
  })
})

