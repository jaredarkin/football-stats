import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MemberSectionComponent } from './members/member-section.component'
import { MemberListComponent } from './members/member-list.component';
import { MemberDetailComponent } from './members/member-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  MemberDetailComponent,
                  MemberListComponent,
                  MemberSectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
