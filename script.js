//create a new line for inputing course
function addnew() {
  let elem = document.createElement("div");
  elem.classList.add("course-card");
  const container = document.querySelector(".course-container");
  elem.innerHTML = `      <div class="course">
  <div class="course-name">
    <input type="text" name="course" placeholder="Course Name" />
  </div>
  <div>
    <select name="grade" class="grade">
      <option value="none" selected>Grade</option>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
      <option value="e">E</option>
      <option value="f">F</option>
    </select>
  </div>
  <div class="credit-load">
    <input
      type="number"
      placeholder="Credit Load"
      min="1"
      max="5"
      class="credit-input"
    />
  </div>
</div>`;

  let coursecard = document.querySelectorAll("coursecard");

  if (coursecard.length < 4) {
    container.appendChild(elem);
  } else if (coursecard.length > 4) {
    alert("maximum courses");
  }
}

//delete the last course that was added

function remove() {
  const container = document.querySelector(".course-container");
  container.removeChild(container.lastChild);
}

//total credit load
function getCreditLoad() {
  var arr = document.querySelectorAll(".credit-input");
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value) <= 5) {
      sum += parseInt(arr[i].value);
    } else if (parseInt(arr[i].value) >= 5) {
      alert("credit load cannot be more than 5");
    } else {
      alert("please input a valid value");
    }
  }
  const totalCredits = sum;
  console.log(totalCredits);
  creditLoadTotal.textContent = totalCredits;
}

//object to convert grades to their respective grade points
const GRADES = {
  a: 5,
  b: 4,
  c: 3,
  d: 2,
  e: 1,
  f: 0,
};

let gpTotal = document.getElementById("Gp-total");
let creditLoadTotal = document.getElementById("credit-load");
let GPA = document.getElementById("result");

let gpArray = [];

function calcGPA() {
  let creditLoads = document.querySelectorAll(".credit-input");
  let grades = document.querySelectorAll(".grade");

  for (let i = 0; i < grades.length; ++i) {
    let creditLoad = creditLoads[i].value;
    let grade = grades[i].value;
    /* let gradePoint = GRADES[grades]; */

    let gradePoint = GRADES[grade];
    const gp = gradePoint * creditLoad;
    gpArray.push(gp);
  }

  // Get Total value for everything
  const sumGradePoint = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
    gpTotal.textContent = sum;
  };
  const totalCL = getCreditLoad();
  const totalGp = sumGradePoint(...gpArray);

  let Gpa = 0;
  const gpTotalText = gpTotal.textContent;
  const creditLoadTotalText = creditLoadTotal.textContent;
  Gpa = gpTotalText / creditLoadTotalText;
  console.log(Gpa);
  GPA.textContent = Gpa.toFixed(2);
}
