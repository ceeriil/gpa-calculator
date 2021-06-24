const GRADES = {
  a: 5,
  b: 4,
  c: 3,
  d: 2,
  e: 1,
  f: 0,
};

const newCard = (id) => {
  return `     
   <div class="course">
        <div class="course-name"> <input type="text" name="course" placeholder="Course Name" /></div>
        <div>
          <select name="grade" class="grade">
            <option value="none" selected>Grade</option>
            <option value="a">A</option> <option value="b">B</option> <option value="c">C</option>
            <option value="d">D</option><option value="e">E</option><option value="f">F</option>
          </select>
        </div>
        <div class="credit-load"> <input type="number" placeholder="Credit Unit" min="1" max="5" id="credit-input-${id}" class="credit-input"/> </div>
   </div>`;
};

document.getElementById("credit-input-0").addEventListener("keyup", (e) => {
  lessThanFive(e);
});

//create a new line for inputing course
function addnew() {
  let coursecard = document.querySelectorAll(".course-card");
  if (coursecard.length >= 15) return alert(" 15 is the maximum courses");

  let elem = document.createElement("div");
  elem.classList.add("course-card");
  const container = document.querySelector(".course-container");
  elem.innerHTML = newCard(coursecard.length);
  container.appendChild(elem);

  document
    .getElementById(`credit-input-${coursecard.length}`)
    .addEventListener("keyup", (e) => {
      lessThanFive(e);
    });
  return null;
}

//delete the last course that was added
function remove() {
  const container = document.querySelector(".course-container");
  return container.removeChild(container.lastChild);
}

const lessThanFive = (e) => {
  if (parseInt(e.target.value) === NaN) {
    e.target.value = "1";
    e.preventDefault();
    return null;
  }

  if (parseInt(e.target.value) >= 7) {
    e.target.value = "6";
    e.preventDefault();
    return null;
  }
};

//object to convert grades to their respective grade point

function calcGPA() {
  let creditLoads = document.querySelectorAll(".credit-input");
  let grades = document.querySelectorAll(".grade");

  let creditLoadArray = [];
  let gradeArray = [];
  let gpArray = [];

  for (let i = 0; i < grades.length; ++i) {
    let creditLoad = parseInt(creditLoads[i].value);
    let grade = grades[i].value;

    if (!Object.keys(GRADES).includes(grade))
      return alert(`Grade for course  ${i + 1}  is not valid`);

    if (creditLoads[i].value == 0 || creditLoad == NaN)
      return alert(`Credit load for course  ${i + 1}  is not valid`);

    gradeArray.push(grade);
    creditLoadArray.push(creditLoad);
    gpArray.push(GRADES[grade] * creditLoad);
  }

  let totalGp = gpArray.reduce((x, y) => x + y);
  let totalCreditLoad = creditLoadArray.reduce((x, y) => x + y);
  let gpa = (totalGp / totalCreditLoad).toFixed(2);

  let gpTotalDom = document.getElementById("Gp-total");
  let creditLoadTotalDom = document.getElementById("credit-load");
  let GpaDom = document.getElementById("result");

  GpaDom.textContent = gpa;
  gpTotalDom.textContent = totalGp;
  creditLoadTotalDom.textContent = totalCreditLoad;

  showResultBox();
}

const showResultBox = () => {
  document.querySelector(".overlay-r").style.display = "flex";
  document.querySelector(".result-box").style.transform = "translateY(0)";
};

const hideResultBox = () => {
  document.querySelector(".overlay-r").style.display = "none";
  document.querySelector(".result-box").style.transform = "translateY(200%)";
};
