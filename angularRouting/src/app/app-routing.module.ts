// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResearchDepartmentComponent } from './components/research-department/research-department.component'
import { CatalystComponent } from './components/research-department/catalyst/catalyst.component';
import { OneResearchComponent } from './components/research-department/one-research/one-research.component'
import { BuisnessComponent } from './components/buisness/buisness.component';
import { MarketingComponent } from './components/buisness/marketing/marketing.component';
import { SalesComponent } from './components/buisness/sales/sales.component';
import { AccountsComponent } from './components/buisness/accounts/accounts.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SoftwareEngineeringComponent } from './components/technology/software-engineering/software-engineering.component';
import { DataTransformationComponent } from './components/technology/software-engineering/data-transformation/data-transformation.component';
import { DT1Component } from './components/technology/software-engineering/data-transformation/dt1/dt1.component'
import { DT2Component } from './components/technology/software-engineering/data-transformation/dt2/dt2.component'
import { DT3Component } from './components/technology/software-engineering/data-transformation/dt3/dt3.component';
import { PassportComponent } from './components/technology/software-engineering/passport/passport.component';
import { PP1Component } from './components/technology/software-engineering/passport/pp1/pp1.component';
import { PP2Component } from './components/technology/software-engineering/passport/pp2/pp2.component';
import { PP3Component } from './components/technology/software-engineering/passport/pp3/pp3.component'
import { PP4Component } from './components/technology/software-engineering/passport/pp4/pp4.component'
import { ISSACComponent } from './components/technology/software-engineering/issac/issac.component'
import { EcomComponent } from './components/technology/software-engineering/ecom/ecom.component'
import { PublicationComponent } from './components/technology/publication/publication.component';
import { CloudEngineeringComponent } from './components/technology/cloud-engineering/cloud-engineering.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'research-department',
    component: ResearchDepartmentComponent,
    children: [
      { path: 'catalyst', component: CatalystComponent },
      { path: 'one-research', component: OneResearchComponent },
    ],
  },
  {
    path: 'business',
    component: BuisnessComponent,
    children: [
      { path: 'marketing', component: MarketingComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'accounts', component: AccountsComponent },
    ],
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    children: [
      {
        path: 'software-engineering',
        component: SoftwareEngineeringComponent,
        children: [
          { path: 'data-transformation', component: DataTransformationComponent, children: [
            { path: 'dt1', component: DT1Component },
            { path: 'dt2', component: DT2Component },
            { path: 'dt3', component: DT3Component },
          ] },
          { path: 'passport', component: PassportComponent, children: [
            { path: 'pp1', component: PP1Component },
            { path: 'pp2', component: PP2Component },
            { path: 'pp3', component: PP3Component },
            { path: 'pp4', component: PP4Component },
          ] },
          { path: 'issac', component: ISSACComponent },
          { path: 'ecom', component: EcomComponent },
        ],
      },
      { path: 'publication', component: PublicationComponent },
      { path: 'cloud-engineering', component: CloudEngineeringComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}