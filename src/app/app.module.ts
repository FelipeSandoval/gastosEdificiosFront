import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

//Componentes
import { AppComponent } from './app.component';
import { SigInComponent } from './session/sig-in/sig-in.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DetalleComponent } from './gastos/detalle/detalle.component';

const appRoutes: Routes = [
  { path: 'gastos/detalles', component: DetalleComponent },
  { path: '', redirectTo: '/gastos/detalles', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    SigInComponent,
    ToolbarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
