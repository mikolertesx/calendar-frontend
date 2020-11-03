// This will serve as a way to implement a different database system later.
class Reminder {
  constructor(date, value) {
    this.date = date;
    this.value = value;
  }
  save() {
    // Figure out how to save this.
  }
  remove() {
    // Figure out how to remove this.
  }
  update(newValue) {
    // Figure out how to update this.
  }
}

export default Reminder;
