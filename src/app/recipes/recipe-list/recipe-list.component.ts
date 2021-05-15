import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Beef Curry Stew',
      'Hawaiian-style beef curry stew',
      'https://www.aheadofthyme.com/wp-content/uploads/2020/08/one-pot-coconut-curry-beef-stew-683x1024.jpg.webp'
    ),
    new Recipe(
      'Beef Curry Stew',
      'Hawaiian-style beef curry stew',
      'https://www.aheadofthyme.com/wp-content/uploads/2020/08/one-pot-coconut-curry-beef-stew-683x1024.jpg.webp'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
