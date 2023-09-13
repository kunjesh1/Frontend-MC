(() => {
  const apiKey = "zN0bZNhV2JRZMyFKg5Ksjaf4xxYlqtfGQDaBpooQlmfemmURP50oFzZj";
  const perPage = 10;
  let page = 1;

  const columnViewContainer = document.getElementById("column-view");
  const loading = document.getElementById("loading");

  async function fetchImages() {
    loading.style.display = "block";

    const apiUrl = `https://api.pexels.com/v1/search?query=nature&page=${page}&per_page=${perPage}`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      const photos = data.photos;

      photos.forEach((photo) => {
        const imgElement = document.createElement("img");
        imgElement.src = photo.src.medium;
        imgElement.classList.add("parallax");
        columnViewContainer.appendChild(imgElement);
      });

      page++;
      loading.style.display = "none";
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  function isScrollingToBottom() {
    return (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    );
  }

  window.addEventListener("scroll", () => {
    if (isScrollingToBottom()) {
      fetchImages();
    }
  });

  fetchImages();
})();
