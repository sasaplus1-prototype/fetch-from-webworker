(function(){

  'use strict';

  var vm = new ViewModel,
      worker = new Worker('worker.js');

  function ViewModel() {
    this.result = ko.observable('');
    this.fetch = (function(){
      worker.postMessage({
        uri: 'data.json'
      });
    }).bind(this);
  }

  worker.addEventListener('error', function(err) {
    console.log(err);
  });
  worker.addEventListener('message', function(res) {
    vm.result(ko.utils.stringifyJson(res.data, null, 2));
  }, false);

  ko.applyBindings(vm);

}());
