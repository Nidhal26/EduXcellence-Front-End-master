import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleParticipantRoutingModule } from './module-participant-routing.module';
import { ProfileComponent } from '../profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ModuleParticipantRoutingModule
  ]
})
export class ModuleParticipantModule { }
