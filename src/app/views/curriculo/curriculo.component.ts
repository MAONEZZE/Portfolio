import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    MatIconModule,
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {
  private _snackBar = inject(MatSnackBar);
  private message: string = 'Download iniciado...'

  downloadPDF() {
    const link = document.createElement('a');

    this._snackBar.open(this.message, 'Ok', {
      duration: 1000,
    });

    link.href = '../../assets/Curriculo_Atualizado.pdf'; // Caminho para o arquivo PDF na pasta 'assets'
    link.download = 'Curriculo_Atualizado.pdf'; // Nome do arquivo ao ser baixado
    link.click();
  }
}
