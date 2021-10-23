let m = document.getElementsByClassName("title");
for (i = 0; i < m.length; i++) {
  m[i].innerHTML = ""
}

setTimeout(() => {
  close()
}, 300000);

document.querySelector("#main > h2").remove()
document.querySelector("#main > div.video-metadata.video-tags-list.ordered-label-list.cropped").remove()


chrome.storage.local.get(["max", "min"], (result) => {
  console.log("retriving ", result);

  setTimeout(() => {
    console.log("closing");
    close()
  }, random(result.min, result.max));

})

function random(min, max) {
  min = parseInt(min)
  max = parseInt(max)
  let m = parseInt(min + Math.random() * (max - min)) * 700;
  console.log("random ", m / 1000);
  return m
}


