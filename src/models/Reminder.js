import { v4 as uuidv4 } from "uuid";

// This will serve as a way to implement a different database system later.
class Reminder {
  constructor(date, value) {
    this.id = uuidv4();
    this.date = date;
    this.value = value;
  }
  find() {

  }
  save() {
    // Figure out how to save this.
    let previousItems = JSON.parse(localStorage.getItem("reminders")) || {};
    let currentItems;
    if (!previousItems) {
      currentItems = {
        [this.date.getFullYear()]: {
          [this.date.getMonth()]: {
            [this.date.getUTCDay()]: [
              {
                id: this.id,
                date: this.date.toString(),
                value: this.value,
              },
            ],
          },
        },
      };
    } else {
      currentItems = {
        ...previousItems,
      };
      currentItems[this.date.getFullYear()][this.date.getMonth()][
        this.date.getUTCDay()
      ].push({
        id: this.id,
        date: this.date.toString(),
        value: this.value,
      });
    }
    localStorage.setItem("reminders", JSON.stringify(currentItems));
  }
  remove() {
    // Figure out how to remove this.
  }
  update(newValue) {
    // Figure out how to update this.
    this.value = newValue;
    this.save();
  }
  static getReminders(date) {
    const currentItemsString = localStorage.getItem("reminders");
    if (!currentItemsString) return [];
    const currentItems = currentItemsString
      ? JSON.parse(localStorage.getItem("reminders"))
      : {};
    const dailyItems =
      currentItems[date.getFullYear()][date.getMonth()][date.getDate()];
    return dailyItems;
  }
}

export default Reminder;
