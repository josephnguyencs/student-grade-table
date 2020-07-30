class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    console.log(grades)
    this.tableElement.innerhtml = ""
    for (var i=0; i<grades.length; i++) {
      var tableRow = document.createElement("tr")
      document.getElementById("table-body").appendChild(tableRow)
      var studentName = document.createElement("td")
      studentName.textContent = grades[i].name
      tableRow.appendChild(studentName)
      var courseName = document.createElement("td")
      courseName.textContent = grades[i].course
      tableRow.appendChild(courseName)
      var courseGrade = document.createElement("td")
      courseGrade.textContent = grades[i].grade
      tableRow.appendChild(courseGrade)
    }
  }
}
