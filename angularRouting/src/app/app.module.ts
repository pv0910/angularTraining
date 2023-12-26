import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResearchDepartmentComponent,
    CatalystComponent,
    OneResearchComponent,
    BuisnessComponent,
    MarketingComponent,
    SalesComponent,
    AccountsComponent,
    TechnologyComponent,
    SoftwareEngineeringComponent,
    DataTransformationComponent,
    DT1Component,
    DT2Component,
    DT3Component,
    PassportComponent,
    PP1Component,
    PP2Component,
    PP3Component,
    PP4Component,
    ISSACComponent,
    EcomComponent,
    PublicationComponent,
    CloudEngineeringComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}