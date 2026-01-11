fetch("https://random.imagecdn.app/500/150")
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.url; // Extract image URL
    document.getElementById("postImage").src = imageUrl; // Set image source
  })
  .catch((error) => console.error("Error:", error));
