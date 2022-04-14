(() => {
  const KEY = "gkmZMduo1qJ3TSHfwZNRK5WR_iW_1nk4yZeNB_2xHaQ";
  let page = 3;
  const loaderElem = document.querySelector(".loader");

  function showLoader() {
    loaderElem.classList.add("visible");
  }

  function hideLoader() {
    loaderElem.classList.remove("visible");
  }
  async function displayImage() {
    showLoader();

    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );
    const images = await result.json();

    const galleryElem = document.querySelector(".gallery");

    images.forEach((image) => {
      const imgElem = document.createElement("img");
      imgElem.src = image.urls.small;
      galleryElem.appendChild(imgElem);
    });

    hideLoader();
    page += 1;
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImage();
    }
  }
  function run() {
    displayImage();
    document.addEventListener("scroll", onScroll);
  }

  run();
})();
