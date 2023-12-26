// Select the button and QR code display div
const generateQRButton = document.getElementById('generateQR');
const qrCodeDisplay = document.getElementById('qrCodeDisplay');

// Event listener for the Generate QR Code button
generateQRButton.addEventListener('click', function () {
    const currentPageUrl = window.location.href; // Get the current page URL
    // alert('error');
    const qr = new QRCode(qrCodeDisplay, {
        text: currentPageUrl,
        width: 200,
        height: 200,
    });
});
