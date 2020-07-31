class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }
  updateAverage(newAverage) {
    console.log(newAverage)
    document.querySelector(".badge").textContent = newAverage
  }
}
