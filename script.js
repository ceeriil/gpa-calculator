//create a new line for inputing course
function addnew() {
  let elem = document.createElement("div");
  elem.classList.add("course-card");
  const container = document.querySelector(".course-container");
  elem.innerHTML = `            <div class="course">
          <div class="course-name">
            <input
              type="text"
              name="course"
            
              placeholder="Course Name"
            />
          </div>
          <div class="grade">
            <select name="grade">
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
            <input type="number" placeholder="Credit Load"  min="1"
            max="5" class="credit-input"/>
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
    if (parseInt(arr[i].value)) sum += parseInt(arr[i].value);
  }
  console.log(sum);
}
