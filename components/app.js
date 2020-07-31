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
  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
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
    console.log(this.gradeForm)
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
  }
  createGrade(name, course, grade) {
    console.log(name)
    console.log(course)
    console.log(grade)
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
}
