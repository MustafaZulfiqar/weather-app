import { Component } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public topic:any;
  public newsData:any;
  public feels:any;
  public city:any;
  constructor(public api:WeatherapiService) {}
  public display=false;
  public x;

  search(){
    this.newsData=null;
    this.feels=null;
    this.city=this.topic;
    this.display=true;
    this.x=this.display;
    this.api.getNews(this.topic).subscribe((result:any)=>{
      console.log(result);
      this.newsData=result.weather;
      this.feels=result.main;
 
    },(err => alert('no such city exists')));
  }
}