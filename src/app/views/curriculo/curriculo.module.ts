import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CurriculoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CurriculoModule { }
