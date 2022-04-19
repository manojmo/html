// Saves options to chrome.storage
function save_options() {
  alert( 'save_options');
  var scriptText = document.getElementById('scriptText').value;
  chrome.storage.sync.set({
    "scriptText": scriptText
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  alert( 'restore_options');
  chrome.storage.sync.get({
    "scriptText" : ''
  }, function(items) {
    document.getElementById('scriptText').value = items.scriptText;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
alert( 'ADDED EVENTS');
