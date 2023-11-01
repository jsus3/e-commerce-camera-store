// You can use JavaScript to dynamically load product reviews and handle interactions.

// Example: Load reviews dynamically
const reviewsContainer = document.querySelector(".reviews");

const sampleReviews = [
    { username: "User1", rating: 4, comment: "Great camera!" },
    { username: "User2", rating: 5, comment: "Excellent product." },
    // Add more reviews here
];

sampleReviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `
        <p><strong>${review.username}</strong> (Rating: ${review.rating}): ${review.comment}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
});
