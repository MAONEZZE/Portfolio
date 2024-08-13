import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Projeto from '../../model/projeto-model';
import ProjetoObj from '../../fixtures/projetos.json'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    MatIconModule,
    RouterLink,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sobreMim: String = ProjetoObj.SobreMim;

  projetoEAgendeMedica = new Projeto(
    ProjetoObj.eAgenda.fotos, 
    ProjetoObj.eAgenda.linkGithub, 
    ProjetoObj.eAgenda.linkWeb, 
    ProjetoObj.eAgenda.descricao,
    ProjetoObj.eAgenda.nome);

  projetoAPMDB = new Projeto(
    ProjetoObj.APMDB.fotos, 
    ProjetoObj.APMDB.linkGithub, 
    ProjetoObj.APMDB.linkWeb, 
    ProjetoObj.APMDB.descricao,
    ProjetoObj.APMDB.nome);

  projeto_ECommerce = new Projeto(
    ProjetoObj.eCommerce.fotos, 
    ProjetoObj.eCommerce.linkGithub, 
    ProjetoObj.eCommerce.linkWeb, 
    ProjetoObj.eCommerce.descricao,
    ProjetoObj.eCommerce.nome);

  arrayProjetos: Projeto[] = [this.projetoEAgendeMedica, this.projetoAPMDB, this.projeto_ECommerce]
}
