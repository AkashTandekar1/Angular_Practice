import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-angular-concepts-practice',
  templateUrl: './angular-concepts-practice.component.html',
  styleUrls: ['./angular-concepts-practice.component.css']
})
export class AngularConceptsPracticeComponent implements OnInit {

  title:string = "property bind example";
  data:string = "hello";
  toggleOn: boolean=false;

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
 
  


  Movies: any[] = [
    {
      "name": "Avengers: Endgame"
    },
    {
      "name": "Good Boys"
    },
    {
      "name": "Playmobil: The Movie"
    },
    {
      "name": "Aquarela"
    },
    {
      "name": "Aladdin"
    }, 
    {
      "name": "Downton Abbey"
    }
  ];




  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];


  employees: any[] = [  
    {  
        code: 'emp101', name: 'karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '25/6/1988'  
    },  
    {  
        code: 'emp102', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp103', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp104', name: 'mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'  
    },  
];  

  public dropDownValue = "";

  constructor() { }

  ngOnInit(): void {
  }

  Eventbinding():void{
       console.log("Hello Angular")
  }

  Twowaydata(){
    console.log(this.data)
  }

 
  SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
}

onSubmit() {
  console.log(this.contactForm.value);
}

getColor(country:string) : any{ 
  switch (country) {
    case 'UK':
      return 'green';
    case 'USA':
      return 'blue';
    case 'HK':
      return 'red';
  }
}


}
