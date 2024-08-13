document.getElementById('upload-button').addEventListener('click', function() {
    const videoInput = document.getElementById('video-upload');
    const videoList = document.getElementById('video-list');

    if (videoInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(videoFile);
        videoElement.controls = true;
        videoElement.width = 480;
        
        const videoItem = document.createElement('div');
        videoItem.appendChild(videoElement);
        videoList.appendChild(videoItem);

        videoInput.value = ''; // Reset file input
    } else {
        alert('Please select a video file to upload.');
    }
});
