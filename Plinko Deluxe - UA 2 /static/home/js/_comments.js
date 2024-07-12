const reviews_users = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "./media/photos/comments/Samuel_Fry.png",
    name: "BlueEagle21",
    comment:
      "Так, графіка справді дивовижна! Ви будете насолоджуватися грою в Plinko Delux™. Насолоджуйтесь цим і маєте веселощі!",
  },
  {
    img: "./media/photos/comments/comment2.png",
    name: "LuckyStar99",
    comment:
      "Бонуси та промоції в Plinko Delux™ дійсно щедрі! Це надає ще більше мотивації для гри та перемог!",
  },
  {
    img: "./media/photos/comments/comment3.png",
    name: "GoldenLioness",
    comment: "Захист даних є для мене надзвичайно важливим, і я спокійна з Plinko Delux™.",
  },
  {
    img: "./media/photos/comments/comment4.png",
    name: "DiamondAce78",
    comment:
      "Мобільна версія Plinko Delux Special™ - справжній плюс! Можу грати у свої улюблені ігри скрізь, що дуже зручно і захоплююче!",
  },
  {
    img: "./media/photos/comments/comment5.png",
    name: "SilverFox22",
    comment:
      "Plinko Delux™ пропонує повне ігрове досвід з великим вибором казино ігор. Я впевнений, що знайду щось, що відповідає моїм смакам і побажанням!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // Поки залишаються елементи для перемішування...
  while (currentIndex !== 0) {
    // Вибираємо залишаючийся елемент...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // І міняємо його місцями з поточним елементом.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Перемішуємо масив reviews_data
const shuffledReviews = shuffle(reviews_data);

// Беремо перші три відгуки для відображення
shuffledReviews.slice(0, 5).forEach((review) => getReview(review));

function getReview(data) {
  // Ваша функція getReview залишається такою ж
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
              <a class="review__more" aria-label="Більше відгуків">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Позначити як неприйнятне">Позначити як неприйнятне</a>
                <a class="spam__btn" aria-label="Позначити як спам">Позначити як спам</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Оцінка цього продукту - 5.0 з 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Чи був цей відгук корисним?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Так">Так</a>
              <a class="btn-false" aria-label="Ні">Ні</a>
            </div>
          </div>
        </div>
  `;
  return (reviews_users.innerHTML += review_template);
}
