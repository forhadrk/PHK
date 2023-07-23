import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { IonicModule } from '@ionic/angular';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeeklyservicesComponent } from './weeklyservices/weeklyservices.component';
import { MonthlyservicesComponent } from './monthlyservices/monthlyservices.component';
import { SpringservicesComponent } from './springservices/springservices.component';
import { MoveinoutservicesComponent } from './moveinoutservices/moveinoutservices.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { SaveServicesComponent } from './save-services/save-services.component';
import { FaqQuestionsComponent } from './faq-questions/faq-questions.component';
import { EntrymodalComponent } from './entrymodal/entrymodal.component';
import { ServicepPriceComponent } from './servicep-price/servicep-price.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ServiceWiseCategoryComponent } from './service-wise-category/service-wise-category.component';
import { ServiceListParentComponent } from './service-list-parent/service-list-parent.component';
import { ServiceListChildComponent } from './service-list-child/service-list-child.component';
import { ServicePriceParentComponent } from './service-price-parent/service-price-parent.component';
import { ServicePriceChildComponent } from './service-price-child/service-price-child.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { ServiceCategoryPriceComponent } from './service-category-price/service-category-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeeklyservicesComponent,
    MonthlyservicesComponent,
    SpringservicesComponent,
    MoveinoutservicesComponent,
    HomeComponent,
    FaqComponent,
    CareerComponent,
    ContactusComponent,
    ServiceComponent,
    SaveServicesComponent,
    FaqQuestionsComponent,
    EntrymodalComponent,
    ServicepPriceComponent,
    ContactInfoComponent,
    ServiceWiseCategoryComponent,
    ServiceListParentComponent,
    ServiceListChildComponent,
    ServicePriceParentComponent,
    ServicePriceChildComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    GalleryComponent,
    BookingComponent,
    ServiceCategoryPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    IonicModule.forRoot(),
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
