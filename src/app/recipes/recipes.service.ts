import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Rosol',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/09516_rosol_z_makaronem%2C_sanok.jpg',
      ingrediens: ['Kurak', 'Marchewka', 'Pietruszka']
    },
    {
      id: 'r2',
      title: 'Bigos',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Bigos_polonia.jpg',
      ingrediens: ['Boczek', 'Kapusta', 'Majeranek']
    },
    {
      id: 'r3',
      title: 'Sledz w oleju',
      imageUrl: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sledzie-w-oleju_0.jpg',
      ingrediens: ['Matjasy', 'Cebulka', 'Olej']
    }
  ]

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe (recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
