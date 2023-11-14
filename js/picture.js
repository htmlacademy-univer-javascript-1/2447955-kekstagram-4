Project.load = function (obj) {
  for (var handler in obj) {
    var load = obj[handler]();

    if (!load) continue;

    if (load.init) {
      load.init();
    } else {
      Project.init(load);
    }
  }
}
