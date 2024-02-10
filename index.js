const accesskey = "8rwufGVsr2KxmYAKTQZVMu1LPv_JKzT5-U9toh6pyKE";
const searchForm = document.getElementById("form-Search");
const searchBox = document.getElementById("Search-box");
const searchResult = document.getElementById("search-result");
const show_more_btn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerText = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });
  show_more_btn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
show_more_btn.addEventListener("click", () => {
  page++;
  searchImages();
});
