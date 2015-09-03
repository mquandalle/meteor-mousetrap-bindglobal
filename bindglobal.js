// MouseTrap plugin bindGlobal plugin. Adds a bindGlobal method to Mousetrap
// that allows you to bind specific keyboard shortcuts that will still work
// inside a text input field.
//
// usage:
// Mousetrap.bindGlobal('ctrl+s', _saveChanges);
//
// source:
// https://github.com/ccampbell/mousetrap/tree/master/plugins/global-bind
var _globalCallbacks = {};
var _originalStopCallback = Mousetrap.stopCallback;

Mousetrap.stopCallback = function(e, element, combo, sequence) {
  var self = this;

  if (self.paused) {
    return true;
  }

  if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
    return false;
  }

  return _originalStopCallback.call(self, e, element, combo);
};

Mousetrap.bindGlobal = function(keys, callback, action) {
  var self = this;
  self.bind(keys, callback, action);

  if (keys instanceof Array) {
    for (var i = 0; i < keys.length; i++) {
      _globalCallbacks[keys[i]] = true;
    }
    return;
  }

  _globalCallbacks[keys] = true;
};
