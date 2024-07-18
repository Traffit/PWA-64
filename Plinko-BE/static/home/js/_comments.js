const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Liam Smith",
    comment:
      "Wat is er beter dan jezelf verwennen met zoetigheden en groots winnen? Plinko Deluxe is mijn favoriet voor de zoetste overwinningen!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Olivia Tremblay",
    comment:
      "Ik speel al weken Plinko Deluxe - het is gewoon verslavend! Constante overwinningen en veel gratis spins. Ik hou absoluut van deze gokautomaat!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Noah MacKenzie",
    comment:
      "Dit spel is een echte uitbarsting van suiker en adrenaline! De felle kleuren en de voortdurende actie van Plinko Deluxe maken het tot een meeslepende ervaring.",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Emma Gagnon",
    comment:
      "Plinko Deluxe is een lust voor het oog en een vreugde voor de portemonnee! Ik hou van de constante spanning van opeenvolgende overwinningen en de overvloed aan gratis spins.",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Lucas Leblanc",
    comment:
      "Ik kan niet zonder dit zoetigheidsthema spel! Plinko Deluxe is mijn geheime genoegen met zijn fantastische graphics en het potentieel voor grote winsten.",
  },
  {
    img: "../../media/photos/comments/comment6.png",
    name: "Ava Dubois",
    comment:
      "Dit spel is als een snoepwinkel vol met winsten! De gratis spins van Plinko Deluxe leveren altijd deze heerlijke overwinningen op.",
  },
  {
    img: "../../media/photos/comments/comment7.png",
    name: "Ethan Roy",
    comment:
      "Sono completamente dipendente da Plinko Deluxe! L'emozione delle vittorie consecutive con la funzione Tumble è semplicemente insuperabile.",
  },
  {
    img: "../../media/photos/comments/comment8.png",
    name: "Charlotte Lefebvre",
    comment:
      "Plinko Deluxe soddisfa sia la mia voglia di dolci che la mia sete di vincite. È una fantastica combinazione di divertimento e potenziale per grandi pagamenti.",
  },
  {
    img: "../../media/photos/comments/comment9.png",
    name: "Benjamin Beaulieu",
    comment:
      "Wat een leuk spel! De gratis spins van Plinko Deluxe brengen me altijd terug en de visuele effecten zijn gewoon betoverend.",
  },
  {
    img: "../../media/photos/comments/comment10.png",
    name: "Sophia Caron",
    comment:
      "Plinko Deluxe stelt nooit teleur! Ik hou van de adrenaline wanneer de opeenvolgende overwinningen blijven komen. Een absolute aanrader!",
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
              <a class="btn-true" aria-label="Yes">Yes</a>
              <a class="btn-false" aria-label="No">No</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
