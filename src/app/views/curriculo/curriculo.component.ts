import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    MatIconModule,
    RouterLink,
    MatCardModule
  ],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {

}
