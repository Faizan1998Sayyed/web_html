document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".card-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active-tab"));
            tab.classList.add("active-tab");

            tabContents.forEach((content) => content.style.display = "none");
            document.querySelector(`#card-content-${index + 1}`).style.display = "block";
        });
    });

    // Show the content of the first tab and mark it as active by default
    tabs[0].classList.add("active-tab");
    tabContents[0].style.display = "block";
});
