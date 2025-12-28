function generateQR() {
  const qrcode = document.getElementById("qr-code");
  const input = document.getElementById("qr-input");

  if (qrcode.innerHTML !== "") {
    qrcode.innerHTML = "";
  }
  if (input.value.trim() === "") {
    alert("Please enter text or URL");
    return;
  }

  new QRCode(qrcode, {
    text: input.value,
    width: 200,
    height: 200,
    colorDark: "#22c55e",
    colorLight: "#ffffff",
  });
}

const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", function () {
  const qrImage = document.querySelector("#qr-code img");

  if (!qrImage) {
    alert("Please generate a QR code first!");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "QRCode.png";
  link.click();
});
