const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Alex Tremblay",
    comment:
      "Helsinki Casino kasino on uskomaton! Kolikkopelit ovat viihdyttäviä ja bonukset anteliaita. 5/5!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Noah Gauthier",
    comment:
      "Kasinoharrastajana voin sanoa, että Helsinki Casino kasino tarjoaa yhden parhaista pelikokemuksista.",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Liam Bouchard",
    comment:
      "Vaikuttunut pelien monipuolisuudesta ja pelattavuuden sujuvuudesta. Helsinki Casino kasino on suosikkisovellukseni!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // Kunnes jäljellä olevia elementtejä on vielä sekoitettavana...
  while (currentIndex !== 0) {
    // Valitaan jäljellä oleva elementti...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Vaihdetaan se nykyisen elementin kanssa.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Sekoitetaan reviews_data-taulukko
const shuffledReviews = shuffle(reviews_data);

// Otetaan ensimmäiset kolme arvostelua näyttöä varten
shuffledReviews.slice(0, 3).forEach((review) => getReview(review));

function getReview(data) {
  // Olemassa oleva getReview-funktio säilyy samana
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
              <a class="review__more" aria-label="Lisää arvosteluja">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Katso muutos historiaa</a> -->
                <a class="unacceptable__btn" aria-label="Merkkaa epäsopivaksi">Merkkaa epäsopivaksi</a>
                <a class="spam__btn" aria-label="Merkkaa roskapostiksi">Merkkaa roskapostiksi</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Tuotteen arvio on 5.0 / 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Oliko tämä arvostelu hyödyllinen?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Kyllä">Kyllä</a>
              <a class="btn-false" aria-label="Ei">Ei</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
