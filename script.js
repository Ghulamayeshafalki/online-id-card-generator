function generate() {
    let name = document.getElementById("name").value;
    let father = document.getElementById("father").value;
    let idno = document.getElementById("idno").value;
    let photo = document.getElementById("photo").files[0];

    document.getElementById("cardName").innerText = "Name: " + name;
    document.getElementById("cardFather").innerText = "Father: " + father;
    document.getElementById("cardId").innerText = "ID: " + idno;

    let reader = new FileReader();
    reader.onload = function () {
        document.getElementById("cardPhoto").src = reader.result;
    };
    reader.readAsDataURL(photo);

    document.getElementById("card").style.display = "block";
}

function downloadCard() {
    html2canvas(document.getElementById("card")).then(canvas => {
        let link = document.createElement("a");
        link.download = "ID-Card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
