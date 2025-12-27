function generateQR() {
  const qrcode = document.getElementById("qrcode");
  const text = document.getElementById("text");

  if (qrcode.innerHTML !== "") {
    qrcode.innerHTML = "";
  }

  new QRCode(qrcode, {
    text: text.value,
    width: 200,
    height: 200,
    colorDark: "transparent",
    colorLight: "#16a34a",
  });
}
