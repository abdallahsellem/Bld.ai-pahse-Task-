let GlobalInput = "   ";
let target = "courses_python";
let IsEvent = false;
let WidthChanged = false;
function search_On_Grid() {
  let input = document.getElementById("Input_ID").value;
  Body = document.querySelector("body");
  WidthOfBody = Body.offsetWidth;
  input = input.toLowerCase();

  if (
    GlobalInput === input &&
    IsEvent === false &&
    WidthChanged === WidthOfBody >= 500
  ) {
    return;
  }
  IsEvent = false;
  GlobalInput = input;
  if (WidthOfBody >= 500) {
    WidthChanged = true;
  } else {
    WidthChanged = false;
  }
  const renderDetails = async () => {
    const res = await fetch("http://localhost:3000/" + target);
    const post = await res.json();
    Listi = post;
    templete = "";
    Temporary_Div = document.querySelector(".carousel-inner");
    Temporary_Div.innerHTML = "";
    childDiv1 = document.createElement("div");
    childDiv1.className = "carousel-item active";
    childDiv2 = document.createElement("div");
    childDiv2.className = "CardWarp";
    childDiv1.appendChild(childDiv2);
    Temporary_Div.appendChild(childDiv1);
    let Curr_Div = childDiv2;
    Curr_Div.innerHTML = "";
    let created = false;
    let NumberOfCards = 0;
    let NumberOfBages = 3;
    if (WidthOfBody >= 500) {
      NumberOfBages = 3;
    } else {
      NumberOfBages = 1;
    }
    for (i = 0; i < Listi.length; i++) {
      a = Listi[i]["title"];
      if (a.toLowerCase().indexOf(input) > -1) {
        NumberOfCards++;
        if (NumberOfCards > NumberOfBages) {
          Temporary_Div = document.querySelector(".carousel-inner");
          childDiv1 = document.createElement("div");
          childDiv1.className = "carousel-item";
          childDiv2 = document.createElement("div");
          childDiv2.className = "CardWarp";
          childDiv1.appendChild(childDiv2);
          Temporary_Div.appendChild(childDiv1);
          created = true;
          Curr_Div = childDiv2;
          NumberOfCards -= NumberOfBages;
        }
        Card = document.createElement("div");
        Card.className = "card";
        Imgi = document.createElement("img");
        Imgi.src = Listi[i]["image"];
        Imgi.className = "card-img-top";
        Imgi.alt = "...";
        Card.appendChild(Imgi);
        BodyOfCard = document.createElement("div");
        BodyOfCard.className = "CardBody";
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
setInterval(search_On_Grid, 1000);
document.querySelector(".python").addEventListener("click", () => {
  target = "courses_python";
  IsEvent = true;
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
});
document.querySelector(".DataSc").addEventListener("click", () => {
  target = "courses_Data";
  IsEvent = true;
});
