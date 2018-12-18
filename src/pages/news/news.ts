import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NEWS } from "../../data/data.news";
import { NewsDetailPage } from "../index.pages"

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  
  news:any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = NEWS.splice(0);
  }

  goToDetail( newsItem: any ){
    this.navCtrl.push( NewsDetailPage, { 'newsItem': newsItem } );
  }

}
