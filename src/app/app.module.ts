import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HorariosPage } from '../pages/horarios/horarios';
import { ExamenesPage } from '../pages/examenes/examenes';
import { PlanEstudiosPage } from '../pages/plan-estudios/plan-estudios';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AboutPage } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MateriasService} from '../providers/materias.service';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HorariosPage,
    ExamenesPage,
    PlanEstudiosPage, 
    CalendarioPage,
    AboutPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HorariosPage,
    ExamenesPage,
    PlanEstudiosPage, 
    CalendarioPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MateriasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
  ]
})
export class AppModule {}
