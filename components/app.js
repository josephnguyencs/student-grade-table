class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
    this.updateGrade = this.updateGrade.bind(this)
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this)
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var sum = 0
    var length = 0
    for (var i=0; i<grades.length; i++) {
      sum += grades[i].grade
      length++
    }
    var avg = Math.trunc(sum / length)
    this.pageHeader.updateAverage(avg)
  }
  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "x-access-token": "V3nsU11k"
        },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
    this.gradeTable.onUpdateClick(this.updateGrade)
  }
  createGrade(name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      headers: {
        "X-Access-Token": "V3nsU11k"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades()
  }
  deleteGrade(id) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      headers: {
        "X-Access-Token": "V3nsU11k"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error)
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
  }
  updateGrade(id) {
    var name = document.getElementById("nameID").value
    var course = document.getElementById("courseID").value
    var grade = document.getElementById("gradeID").value
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "PATCH",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "V3nsU11k"
      },
      success: this.handleUpdateGradeSuccess,
      error: this.handleUpdateGradeError
    })
  }
  handleUpdateGradeError(error) {
    console.error(error)
  }
  handleUpdateGradeSuccess(response) {
    this.getGrades()
  }
}
