function openModal(imageSrc, title, description) {
    // Set the image, title, and description in the modal
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;

    // Display the modal
    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    // Hide the modal
    document.getElementById('imageModal').style.display = 'none';
}