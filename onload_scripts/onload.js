chrome.storage.sync.get({
    scriptText : ''
  }, function(items) {
    eval( items.scriptText);
  });
