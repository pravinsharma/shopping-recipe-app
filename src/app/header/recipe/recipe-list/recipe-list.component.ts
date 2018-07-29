import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipeList: Recipe[] = [
    new Recipe("Tarka", "A staple food for travellers on the go...", "https://upload.wikimedia.org/wikipedia/commons/a/a6/Dal_Chana_Tarka.JPG"),
    new Recipe("Mango Pickle", "a side dish...", "https://upload.wikimedia.org/wikipedia/commons/4/42/Mango_pickle_from_Bihar.JPG")
  ];

  constructor() { }

  ngOnInit() {
  }

}
