import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonthlyservicesComponent } from './monthlyservices/monthlyservices.component';
import { MoveinoutservicesComponent } from './moveinoutservices/moveinoutservices.component';
import { SpringservicesComponent } from './springservices/springservices.component';
import { WeeklyservicesComponent } from './weeklyservices/weeklyservices.component';
import { FaqComponent } from './faq/faq.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SaveServicesComponent } from './save-services/save-services.component';
import { FaqQuestionsComponent } from './faq-questions/faq-questions.component';
import { ServicepPriceComponent } from './servicep-price/servicep-price.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ServiceWiseCategoryComponent } from './service-wise-category/service-wise-category.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { ServiceCategoryPriceComponent } from './service-category-price/service-category-price.component';
import { ServiceCategoryPriceDetailsComponent } from './service-category-price-details/service-category-price-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Monthly', component:MonthlyservicesComponent},
  {path:'Moveinout', component:MoveinoutservicesComponent},
  {path:'Spring', component:SpringservicesComponent},
  {path:'Weekly', component:WeeklyservicesComponent},
  {path:'Faq', component:FaqComponent},
  {path:'Career', component:CareerComponent},
  {path:'Contact', component:ContactusComponent},
  {path:'ServiceCategory', component:SaveServicesComponent},
  {path:'FAQQuestions', component:FaqQuestionsComponent},
  {path:'ServicePrice', component:ServicepPriceComponent},
  {path:'ContactInfo', component:ContactInfoComponent},
  {path:'ServiceWiseCategory', component:ServiceWiseCategoryComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'booking', component:BookingComponent},
  {path:'ServiceCategoryPrice', component:ServiceCategoryPriceComponent},
  {path:'ServiceCategoryPriceDetails', component:ServiceCategoryPriceDetailsComponent},
  {path:'users', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
