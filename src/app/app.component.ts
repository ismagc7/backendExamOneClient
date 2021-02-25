import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './Services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {

  constructor(private apiService: ApiService){
  }
  public number: number;
   //list:string[]
   list=[];
   cont:number;
   isList: boolean=false;

  randomNumber(){
    this.number = Math.floor(Math.random() * (100 - 0)) + 0;
  }

  getList(number){
    this.list=[];
   this.apiService.getFizzBuzz(number).subscribe(items=>{
    let result = items.json();
    for (this.cont=0; this.cont<result.length; this.cont++)
    {
      this.list.push(result[this.cont])
      this.isList=true;
    }
   });

   console.log(this.list);

  }

  }


