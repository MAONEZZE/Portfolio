import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    MatIconModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fotosProjetos: String[] = ['pagina_login_AgendaMedica.png', 'AgendaMedica_dashboard.png', 
  'listar_medico.png', 'APMDB_FilmeSelec.png',
  'Filme_pesquisado.png', 'filmes_popular.png']

  // fazer um array para fotos do projeto do cinema e outro para os 
  // eagenda e no carrossel eles terão link para o meu repositorio dos respectivos projetos
}
