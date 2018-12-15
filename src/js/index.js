(function() {
    var Task = {
        init: function () {
            this.rootElement = document.getElementById("root");
            console.log("test ssh key")
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        Task.init();
      });
})();