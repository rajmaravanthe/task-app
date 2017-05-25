import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ListService } from "../service/list.service";
import { DropDownService } from "../service/drop-down.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ListService]
})
export class AddComponent implements OnInit {

  title: string;
  description: string;
  userDetail = {};
  nameInChar: boolean = true;
  descriptionInChar: boolean = true;
  searchVal: string;
  parameter: any;
  date : any = new Date();
  constructor(private _listService: ListService, private _dropDownService: DropDownService, private _router: Router, private currentRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.userDetail = {
      title: '',
      description: '',
      date: this.date,
    }
    //this.genderArray = this._dropDownService.getDropDown();
    this.currentRoute.params.subscribe(params => {
      this.parameter = params['id'];
      console.log(this.parameter);
      if (this.parameter) {
        this.userDetail = this._listService.getList()[this.parameter];
      }
    })
  }

  checkChar(data) {
    var regex = /^[a-zA-Z ]*$/;
    if (data.name === "name") {
      this.nameInChar = regex.test(data.value);
    } else {
      this.descriptionInChar = regex.test(data.value);
    }
  }

  submit(values, isValid) {
    if (!isValid) {
      return;
    }
    console.log(values);
    let model = {
      title: values.title,
      description: values.description,
      date: values.date
    }
    this._listService.addList(model);
    this._router.navigate(['/view']);
  }

   public setMoment(status, moment: any): any {
        this.userDetail['date'] = moment;
    }

}
