let completedReviews = parseInt(window.localStorage.getItem("completedReviews")) || 0;
completedReviews++;
window.localStorage.setItem("completedReviews", `${completedReviews}`);
document.querySelector("#review-count").textContent = `Total Reviews: ${completedReviews}`;