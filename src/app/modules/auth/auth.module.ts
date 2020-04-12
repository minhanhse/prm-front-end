import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro, CarouselModule } from 'ng-uikit-pro-standard';
import { NavigateComponent } from './components/navigate/navigate.component';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbPopoverModule,
  NbTooltipModule,
  NbToggleModule,
  NbRadioModule,
  NbAccordionModule,
  NbSelectModule,
  NbDatepickerModule,
  NbCalendarModule,
  NbTabsetModule,
  NbLayoutModule
} from '@nebular/theme';
import { ShareModule } from 'src/app/share/share.module';
import { ThemeModule } from 'src/app/nebular/nebular.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { vi } from 'date-fns/locale';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule, IConfig } from 'ngx-mask';
// tslint:disable-next-line:prefer-const
let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbPopoverModule,
    NbToggleModule,
    NbRadioModule,
    NbAccordionModule,
    NbSelectModule,
    NbTooltipModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NbTabsetModule,
    NbDateFnsDateModule.forRoot(
      {
        parseOptions: { locale: vi, awareOfUnicodeTokens: true },
        formatOptions: { locale: vi, awareOfUnicodeTokens: true }
      }),
    NbCalendarModule,
    NbDatepickerModule,
    SweetAlert2Module.forRoot(),
    ShareModule,
    NgxMaskModule.forRoot(),
    CarouselModule,
    NgxMaskModule.forRoot(options),
    NbLayoutModule,
  ],
  declarations: [NavigateComponent]
})
export class AuthModule { }
