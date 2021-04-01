import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtl: AlertController,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    })

  }

  onDeleteRecipe(){
    this.alertCtl.create({
      header: 'Are you sur?',
      message: 'Do you want to delete this recipe?',
      buttons: [{
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Delete',
      handler: () => {
        this.recipesService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]
  })
  .then(alertEl => {
    alertEl.present();
  }) }
}
