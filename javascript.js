let GlobalInput = "   ";
let target = "courses_python";
let IsEvent = false;
function search_animal() {
  let input = document.getElementById("inpooo").value;
  input = input.toLowerCase();

  if (GlobalInput === input && IsEvent === false) {
    return;
  }
  console.log(IsEvent);
  IsEvent = false;
  GlobalInput = input;
  const renderDetails = async () => {
    console.log(target);
    const res = await fetch("http://localhost:3000/" + target);
    const post = await res.json();
    Listi = post;
    templete = "";
    let Big_div = document.querySelectorAll(".CardWarp");
    let Curr_Div = Big_div[0];
    Big_div[0].innerHTML = "";
    Big_div[1].innerHTML = "";
    let NumberOfCards = 0;
    for (i = 0; i < Listi.length; i++) {
      if (NumberOfCards >= 3) {
        Curr_Div = Big_div[1];
      }
      a = Listi[i]["title"];
      if (a.toLowerCase().indexOf(input) > -1) {
        NumberOfCards++;
        Card = document.createElement("div");
        Card.className = "card";
        Imgi = document.createElement("img");
        Imgi.src = Listi[i]["image"];
        Imgi.className = "card-img-top";
        Imgi.alt = "...";
        Card.appendChild(Imgi);
        BodyOfCard = document.createElement("div");
        BodyOfCard.className = "card-body";
        CardTitle = document.createElement("h5");
        CardTitle.textContent = a;
        CardPrice = document.createElement("h6");
        CardPrice.textContent = Listi[i]["price"];
        SpanOfRating = document.createElement("span");
        SpanOfRating.className =
          "udlite-heading-sm StarRating--rating-number--2o8YM";
        SpanOfRating.ariaHidden = "hidden";
        SpanOfRating.dataset.purpose = "rating-number";
        SpanOfRating.textContent = Listi[i]["rating"];
        BodyOfCard.appendChild(SpanOfRating);
        SecOfStars = document.createElement("section");
        SecOfStars.className = "StarRating";
        for (let i = 1; i <= 4; i++) {
          stars = document.createElement("span");
          stars.className = "fa fa-star checked";
          SecOfStars.appendChild(stars);
        }
        ancOfstars = document.createElement("a");
        ancOfstars.textContent = "(" + Listi[i]["people"] + ")";
        SecOfStars.appendChild(ancOfstars);
        BodyOfCard.appendChild(SecOfStars);
        BodyOfCard.appendChild(CardTitle);
        BodyOfCard.appendChild(CardPrice);
        Card.appendChild(BodyOfCard);
        Curr_Div.appendChild(Card);
      }
    }
  };
  renderDetails();
}
setInterval(search_animal, 1000);
document.querySelector(".python").addEventListener("click", () => {
  target = "courses_python";
});
document.querySelector(".Web").addEventListener("click", () => {
  target = "courses_Web";
  IsEvent = true;
});
document.querySelector(".Java").addEventListener("click", () => {
  target = "courses_Java";
  IsEvent = true;
});
document.querySelector(".excel").addEventListener("click", () => {
  target = "courses_excel";
  IsEvent = true;
  //console.log(target);
});
