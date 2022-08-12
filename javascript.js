function search_animal() {
  let input = document.getElementById("inpooo").value;
  input = input.toLowerCase();

  const renderDetails = async () => {
    // console.log("ahemd") ;
    const res = await fetch("http://localhost:3000/courses");
    const post = await res.json();
    Listi = post;
    templete = "";
    let Big_div = document.querySelector(".Courses_Section");
    Big_div.innerHTML = "";
    //Big_div.removeChild();
    for (i = 0; i < Listi.length; i++) {
      a = Listi[i]["title"];

      if (a.toLowerCase().indexOf(input) > -1) {
        let DivOfCourse = document.createElement("div");
        DivOfCourse.className = "Con2Div";
        let imgOfDiv = document.createElement("img");
        imgOfDiv.src = Listi[i]["image"];
        DivOfCourse.appendChild(imgOfDiv);
        let DivOfTitle = document.createElement("div");
        DivOfTitle.className = "CoursesB1";
        Header3 = document.createElement("h3");
        Header3.textContent = a;
        DivOfTitle.appendChild(Header3);
        DivOfCourse.appendChild(DivOfTitle);
        SpanOfRating = document.createElement("span");
        SpanOfRating.className =
          "udlite-heading-sm StarRating--rating-number--2o8YM";
        SpanOfRating.ariaHidden = "hidden";
        SpanOfRating.dataset.purpose = "rating-number";
        SpanOfRating.textContent = Listi[i]["rating"];
        DivOfCourse.appendChild(SpanOfRating);
        SecOfStars = document.createElement("section");
        SecOfStars.className = "StarRating";
        for (let i = 1; i <= 4; i++) {
          stars = document.createElement("span");
          stars.className = "fa fa-star checked";
          SecOfStars.appendChild(stars);
        }
        ancOfstars = document.createElement("a");
        ancOfstars.textContent = Listi[i]["people"];
        SecOfStars.appendChild(ancOfstars);
        DivOfCourse.appendChild(SecOfStars);
        DivOfPrice = document.createElement("div");
        DivOfPircechild = document.createElement("div");
        DivOfPircechild.className = "PriceText2";
        DivOfPircechild.textContent = Listi[i]["price"];
        DivOfPrice.appendChild(DivOfPircechild);
        DivOfCourse.appendChild(DivOfPrice);

        //BIG DIV SCOPE
        Big_div.appendChild(DivOfCourse);
      }
    }
  };
  renderDetails();
}
setInterval(search_animal, 1000);
