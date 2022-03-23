import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteActivityComponent } from './favorite-activity/favorite-activity.component';
import { GenerateActivityComponent } from './generate-activity/generate-activity.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FavoriteActivityComponent, GenerateActivityComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FavoriteActivityComponent, GenerateActivityComponent],
})
export class ActivityModule {}
