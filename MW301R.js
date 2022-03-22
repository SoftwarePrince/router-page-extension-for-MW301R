function convertKBtoMbps(kb) {
    return Math.round(kb * 8 / 1000, 2);
}
setTimeout(() => {
    addDiv()
    function addDiv() {
        try {
            document.getElementById("foot").innerHTML += "<h1 recog='myext'>KB</h1>"
        } catch (e) {
            document.getElementById("lgPwd").value = "admin123"
            document.getElementById("loginSub").click()
            setTimeout(() => {
                addDiv()
            }, 1000);
        }
    }

    let time = 0, tenData = 0, tenAvg = 0;
    setInterval(() => {

        let t = new Date()
        // console.log(tenData, tenAvg, " s ", t.getSeconds());
        if (time >= 10) {
            tenAvg = tenData / 10
            time = tenData = 0;
            // console.log("clearing time \n\n");
        }
        time++;

        try {

            let m = document.getElementsByClassName("bEptLHDSpeeds")
            let Tup = 0, Tdn = 0
            for (let i = 1; i < m.length; i++) {
                let up = m[i].children[0].children[1].innerText.split(" ")
                let dn = m[i].children[1].children[1].innerText.split(" ")
                if (up[1] == "MB/s") Tup += (parseFloat(up[0]) * 1000)
                if (dn[1] == "MB/s") Tdn += (parseFloat(dn[0]) * 1000)
                if (up[1] == "KB/s") Tup += parseFloat(up[0])
                if (dn[1] == "KB/s") Tdn += parseFloat(dn[0])
                // console.log(up[0], dn[0], Tup, Tdn)
            }
            Tup = Math.round(Tup, 2)
            Tdn = Math.round(Tdn, 2)
            tenData += (Tup + Tdn)
            let j = document.querySelector("#foot > h1")
            j.outerHTML = "<h1>dn "
                + convertKBtoMbps(Tdn) + "mb&nbsp" + Tdn + "KB&nbsp"
                + convertKBtoMbps(Tup) + "mb&nbsp" + Tup + "KB<br>"
                + (Tup + Tdn) + "KB<br>"
                + tenAvg + "KB</h1>"
            // console.log("success");

        } catch (e) {
            console.log(e);
        }
    }, 1000);
}, 1000);
