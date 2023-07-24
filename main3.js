function luoUusi(event) {

    event.preventDefault();

    let o = document.getElementById("idotsikko").value
    let t = document.getElementById("idteksti").value

    if (o == "") {
        alert("Syötä otsikko!")
    } else {
        if (t == "") {
            alert("Syötä teksti!")
        } else {
            const tarkistus = window.confirm("Oletko varma että haluat luoda uuden äänestyksen?")

            if (tarkistus) {
                const valmis = alert("Äänestyksesi on luotu");
                location.replace("yllapitaja.html")
            }
        }



    }
}