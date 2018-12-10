import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from "../index.pages"
/**
 * Generated class for the SubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {

  subCategories:any[] = [];
  categoryName:any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subCategories = this.navParams.get('subCategories');
    this.categoryName = this.navParams.get('categoryName');
  }

  goToDetail( subCategory:any ){
    this.navCtrl.push( DetailPage, { 'subCategory': subCategory } );
  }

  ionViewDidLoad() {
    console.log(this.subCategories);
  } 

}
