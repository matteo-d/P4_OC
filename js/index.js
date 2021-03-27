if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./js/serviceWorker.js")
      .then(() => console.log("sw registered"))
      .catch((err) => console.log(err));
  }