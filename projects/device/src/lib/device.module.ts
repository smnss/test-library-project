import { NgModule } from '@angular/core';
import { DeviceComponent } from './device.component';
import { HomeComponent } from './home/home.component';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  declarations: [DeviceComponent, HomeComponent],
  imports: [
    DeviceRoutingModule
  ],
  exports: [DeviceComponent, DeviceRoutingModule]
})
export class DeviceModule { }
