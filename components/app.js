class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
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
    this.getGrades()
  }
}
