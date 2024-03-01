import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CardHoverDirective } from './directives/card-hover.directive';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CardHoverDirective, CarrosselComponent, CardComponent,],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedModule { }
