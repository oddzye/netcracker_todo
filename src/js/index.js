(function() {
    var Task = {
        init: function () {
            this.rootElement = document.getElementById("root");
            console.log(this.rootElement);
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        Task.init();
      });
})();