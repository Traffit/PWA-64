const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Liam Smith",
    comment:
      "¿Qué hay mejor que disfrutar de dulces y ganar a lo grande? ¡Sweet Bonanza es mi elección para las victorias más dulces!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Olivia Tremblay",
    comment:
      "He estado jugando a Sweet Bonanza durante semanas, ¡es simplemente cautivador! Ganancias consistentes y un montón de giros gratis. ¡Adoro absolutamente esta tragamonedas!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Noah MacKenzie",
    comment:
      "¡Este juego es una oleada de emoción azucarada! Los colores vibrantes y la acción incesante de Sweet Bonanza lo hacen un placer adictivo.",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Emma Gagnon",
    comment:
      "¡Sweet Bonanza es un regalo para los ojos y el bolsillo! Me encanta la emoción constante de las victorias en cascada y los giros gratis en abundancia",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Lucas Leblanc",
    comment:
      "No puedo tener suficiente de la tragamonedas temática de dulces. Sweet Bonanza es mi placer culpable con sus gráficos fantásticos y su gran potencial de ganancias.",
  },
  {
    img: "../../media/photos/comments/comment6.png",
    name: "Ava Dubois",
    comment:
      "¡Este juego es como una tienda de dulces de ganancias! Los giros gratis de Sweet Bonanza nunca dejan de traer esas deliciosas victorias.",
  },
  {
    img: "../../media/photos/comments/comment7.png",
    name: "Ethan Roy",
    comment:
      "Totalmente adicto a Sweet Bonanza! La emoción de las victorias consecutivas con la función de caída es inigualable.",
  },
  {
    img: "../../media/photos/comments/comment8.png",
    name: "Charlotte Lefebvre",
    comment:
      "Sweet Bonanza satisface mi deseo tanto de dulces como de victorias. Es una mezcla fantástica de diversión y posibles grandes pagos.",
  },
  {
    img: "../../media/photos/comments/comment9.png",
    name: "Benjamin Beaulieu",
    comment:
      "¡Un juego tan divertido! Los giros gratis de Sweet Bonanza me hacen volver una y otra vez, y los gráficos son simplemente encantadores.",
  },
  {
    img: "../../media/photos/comments/comment10.png",
    name: "Sophia Caron",
    comment:
      "¡Sweet Bonanza nunca decepciona! ¡Amo la oleada de adrenalina cuando esas victorias en cascada siguen llegando! ¡Altamente recomendado!",
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
              <a class="btn-true" aria-label="Yes">Sí</a>
              <a class="btn-false" aria-label="No">No</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
