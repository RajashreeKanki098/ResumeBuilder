import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioDataComponent } from './bio-data/bio-data.component'; 
import { LoginComponent } from './login/login.component'; 
import { ExampleComponent } from './example/example.component';
import { TemplateComponent } from './template/template.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'biodata', component: BioDataComponent },
    { path: 'login', component: LoginComponent },
    { path: 'template', component: TemplateComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


