class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades) {
    this.tableElement.innerHTML = ""
    for (var i=0; i<grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade)
    }
    var noGradesRecorded = document.getElementById("no-grades-recorded")
    if (grades.length === 0) {
      noGradesRecorded.classList.remove("d-none")
    } else {
      noGradesRecorded.classList.add("d-none")
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade) {
    var tableRow = document.createElement("tr")
    document.getElementById("table-body").appendChild(tableRow)
    var studentName = document.createElement("td")
    studentName.textContent = data.name
    tableRow.appendChild(studentName)
    var courseName = document.createElement("td")
    courseName.textContent = data.course
    tableRow.appendChild(courseName)
    var courseGrade = document.createElement("td")
    courseGrade.textContent = data.grade
    tableRow.appendChild(courseGrade)
    var deleteButtonTd = document.createElement("td")
    var deleteButton = document.createElement("button")
    deleteButtonTd.appendChild(deleteButton)
    tableRow.appendChild(deleteButtonTd)
    deleteButton.textContent = "DELETE"
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id)
    })
    return tableRow
  }
}
