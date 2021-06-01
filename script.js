//create a new line for inputing course
function addnew() {
  let elem = document.createElement('div');
  elem.classList.add('course-card');
  const container = document.querySelector('.course-container');
  elem.innerHTML = `            <div class="course">
          <div class="course-name">
            <input
              type="text"
              name="course"
              id="course1"
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
            <input type="number" placeholder="Credit Load" maxlength="2" />
          </div>
        </div>
        <div class="cancel-box">
          <button class="btn-action cancel">x</button>
        </div>`;

  //delete the last course that was added
  container.appendChild(elem);
}
const elem = document.querySelector('course-card');
function removenew(elem) {
  while (elem.length > 0) {
    elem[0].parentNode.removeChild[0];
  }
}
