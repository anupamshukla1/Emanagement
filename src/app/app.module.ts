import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, StudentCreateComponent,HeaderComponent, FooterComponent,BannerComponent,HomeComponent,StudentListComponent, ContactUsComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
