import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiModule } from './bindApi';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule } from "ngx-modal";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    FormsModule,
    ToastyModule.forRoot(),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
