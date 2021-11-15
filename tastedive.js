setInterval(() => {

    try {
        let m = document.getElementsByClassName("primary-entity js-entity")[0].getAttribute("data-resource-name")
        let n = document.getElementsByClassName("button-entity-action button-entity-action--add-to-list-white")[0]
        n.href = "https://lookmovie.io/movies/search/?q=" + m
        n.target = "_blank"
        console.log("success");

    } catch (e) {
        console.log(e);
    }
}, 1000);
