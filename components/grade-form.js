class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.formElement = formElement
    this.formElement.addEventListener('submit', this.handleSubmit)
    this.formElement.addEventListener('click', this.handleCancel)
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade
  }
  handleSubmit(event) {
    event.preventDefault()
    var formData = new FormData(event.target)
    var name = formData.get("name")
    var course = formData.get("course")
    var grade = parseInt(formData.get('grade'))
    this.createGrade(name, course, grade)
    event.target.reset()
  }
  handleCancel() {
    document.getElementById("nameID").textContent = ""
    document.getElementById("courseID").textContent = ""
    document.getElementById("gradeID").textContent = ""
  }
}
