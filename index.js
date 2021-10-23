var max = document.getElementById("max")
var min = document.getElementById("min")

chrome.storage.local.get(["max", "min"], (result) => {
  console.log("retriving ", result);
  setVal(max, result.max, 20)
  setVal(min, result.min, 10)

})

setVal = (elem, value, defaultVal) => {
  elem.value = value ? value : defaultVal;
  elem.dispatchEvent(new Event('input'));
}

//saving

max.addEventListener("input", (e) => {
  let Elval = e.target.value
  let obj = { "max": Elval }
  //console.log("oninput ", obj)
  chrome.storage.local.set(obj)
})
min.addEventListener("input", (e) => {
  let Elval = e.target.value
  let obj = { "min": Elval }
  //console.log("oninput ", obj)
  chrome.storage.local.set(obj)
})


