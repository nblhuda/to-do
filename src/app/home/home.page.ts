import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskName: any = ''; // Entered Text
  taskList = []; // Array to store tasks

  constructor() {}

// addTask Function
  addTask() {
    if (this.taskName.length > 0) { // First we check if the text is entered or not in input box by verifying if length > 0
      let task = this.taskName;     // If length is greater than 0, then only we add taskName to taskList array
      this.taskList.push(task);     // After adding we reset the taskName
      this.taskName = '';
    }
  }

  
// deleteTask Function
  deleteTask(index) {               // When user clicks the delete task button, this function is called with index i as parameter
    this.taskList.splice(index, 1);// Since tasks are added to taskList, we delete the task at index i using splice() array method
  }                                // This deletes only that task at index i

}