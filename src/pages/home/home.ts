import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CATEGORIES } from "../../data/data.tematics";

import { SubcategoryPage } from "../index.pages"
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories:any[] = [];
  constructor(public navCtrl: NavController) {
    this.categories = CATEGORIES.splice(0);
  }

  goToSubcategories(subCategories:any[], categoryName:any ){
    this.navCtrl.push( SubcategoryPage, { 'subCategories': subCategories, 'categoryName': categoryName } );
  }
}
