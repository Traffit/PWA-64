const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Vüqar Quliyev",
    comment:
      "Hamster Kombat Casino – bu inanılmaz bir şeydir! Bir axşamda 1,000 manat qazandım. Hər kəsə tövsiyə edirəm! 5-dən 5!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Elmir Hüseynov",
    comment: "Bu slotlardan ayrıla bilmirəm! Artıq bir neçə dəfə qazanmışam!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Rasim Abbasov",
    comment:
      "Bu kazino həqiqətən emosiyalar bəxş etməyi bilir. 900 manat qazandım və oynamağa davam edirəm. Tövsiyə edirəm! 5-dən 5!",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Zeynəb Məmmədova",
    comment: "Hamster Kombat Casino – əsl həzzdir!",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Murad Quliyev",
    comment:
      "Çox məmnunam bu kazinodan! Qazandım və oynamağa davam etməyi planlaşdırıram. Hər kəsə tövsiyə edirəm! 4.5-dən 5!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shuffle the reviews_data array
const shuffledReviews = shuffle(reviews_data);

// Take the first three reviews for display
shuffledReviews.slice(0, 3).forEach((review) => getReview(review));

function getReview(data) {
  // Your existing getReview function remains the same
  const review_template = `
  <div class="review">
          <div class="review__top c-black">
            <div class="review__img">
              <img src="${data.img}" alt="${data.name} comment" />
            </div>
            <div class="review__name">
              <h3>${data.name}</h3>
            </div>
            <div class="review__more-box">
              <a class="review__more" aria-label="More reviews">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Flag as inappropriate">Flag as inappropriate</a>
                <a class="spam__btn" aria-label="Flag as spam">Flag as spam</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Rating of this product is 5.0 out of 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Was this review helpful?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Yes">Так</a>
              <a class="btn-false" aria-label="No">Hi</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
