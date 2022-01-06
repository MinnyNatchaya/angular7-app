import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('myanimation', [
      state(
        'smaller',
        style({
          transform: 'translateY(100px)',
        })
      ),
      state(
        'larger',
        style({
          transform: 'translateY(0px)',
        })
      ),
      transition('smaller <=> larger', animate('300ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  public persondata: any = [];

  title = 'Angular 7 Project!';
  todaydate: any;
  componentproperty: any;
  emailid: any;
  formdata: any;

  showFiller = false;

  state: string = 'smaller';
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    // console.log( this.myservice.getData().subscribe());
    // this.myservice.getData().subscribe((data: any) => {
    //   this.persondata = Array.from(Object.keys(data), (k) => data[k]);
    //   console.log(this.persondata);
    // });

    // this.todaydate = this.myservice.showTodayDate();
    // console.log(this.myservice.serviceproperty);
    // this.myservice.serviceproperty = 'component created';
    // // value is changed.
    // this.componentproperty = this.myservice.serviceproperty;

    // this.formdata = new FormGroup({
    //   emailid: new FormControl('angular@gmail.com'),
    //   passwd: new FormControl('abcd1234'),
    // });

    // this.formdata = new FormGroup({
    //   emailid: new FormControl(
    //     '',
    //     Validators.compose([
    //       Validators.required,
    //       Validators.pattern('[^ @]*@[^ @]*'),
    //     ])
    //   ),
    //   passwd: new FormControl(''),
    // });

    this.formdata = new FormGroup({
      emailid: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*'),
        ])
      ),
      passwd: new FormControl('', this.passwordvalidation),
    });
  }

  passwordvalidation(formcontrol: any): any {
    if (formcontrol.value.length < 5) {
      return { passwd: true };
    }
  }

  // todaydate = new Date();
  // jsonval = {
  //   name: 'Rox',
  //   age: '25',
  //   address: { a1: 'Mumbai', a2: 'Karnataka' },
  // };
  // months = [
  //   'Jan',
  //   'Feb',
  //   'Mar',
  //   'April',
  //   'May',
  //   'Jun',
  //   'July',
  //   'Aug',
  //   'Sept',
  //   'Oct',
  //   'Nov',
  //   'Dec',
  // ];

  // isavailable = true; //variable is set to true

  // myClickFunction(event: any) {
  //   this.isavailable = !this.isavailable;
  //   // alert('Button is clicked');
  //   // console.log(event);
  // }

  // changemonths(event: any) {
  //   alert('Changed month from the Dropdown');
  // }

  // onClickSubmit(data: any) {
  //   alert('Entered Email id : ' + data.emailid);
  // }

  onClickSubmit(data: any) {
    this.emailid = data.emailid;
  }
}
