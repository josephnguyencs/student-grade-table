class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement = formElement
    this.formElement.addEventListener('submit', this.handleSubmit)
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade
    console.log(createGrade)
  }
  handleSubmit(event) {
    event.preventDefault()
    var formData = new FormData(event.target)
    var name = formData.get("name")
    var course = formData.get("course")
    var grade = parseInt(formData.get('grade'))
    this.createGrade(name, course, grade)
    event.target.reset()
    console.log(event.target)
  }
}
