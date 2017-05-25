import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  Arraylist: any[] = [];

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    if (localStorage.getItem("array")) {
      this.Arraylist = JSON.parse(localStorage.getItem("array"));
    } 
    this.Arraylist.unshift(arrayListDetail);
    localStorage.setItem("array", JSON.stringify(this.Arraylist));
  }

  /**Get the list list from the array. */
  getList(): any[] {
    return JSON.parse(localStorage.getItem("array"));
  }

}
