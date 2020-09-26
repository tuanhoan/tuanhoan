import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

import { MonitorComponent } from './monitor.component';
import { Routes, RouterModule } from '@angular/router'; 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { NzAvatarModule, NzButtonModule, NzCardModule, NzGridModule, NzIconModule, NzRadioModule } from 'ng-zorro-antd';

const routes: Routes = [
  { path: '', component: MonitorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    NzCarouselModule,
    CommonModule,
    NzButtonModule,
    NzRadioModule,
    NzAvatarModule, 
    NzCardModule,
    NzGridModule,
    NzIconModule
    
  ],
  declarations: [MonitorComponent],
  exports: [RouterModule]
})
export class MonitorModule { }

