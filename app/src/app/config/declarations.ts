import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-shareddataService
import { shareddataService } from '../services/shareddata/shareddata.service';
//CORE_REFERENCE_IMPORT-riskrolesComponent
import { riskrolesComponent } from '../components/riskrolesComponent/riskroles.component';
//CORE_REFERENCE_IMPORT-riskconsequenceComponent
import { riskconsequenceComponent } from '../components/riskconsequenceComponent/riskconsequence.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';
//CORE_REFERENCE_IMPORT-riskcauseComponent
import { riskcauseComponent } from '../components/riskcauseComponent/riskcause.component';
//CORE_REFERENCE_IMPORT-selectentityComponent
import { selectentityComponent } from '../components/selectentityComponent/selectentity.component';
//CORE_REFERENCE_IMPORT-riskgeneralComponent
import { riskgeneralComponent } from '../components/riskgeneralComponent/riskgeneral.component';
//CORE_REFERENCE_IMPORT-mainpageComponent
import { mainpageComponent } from '../components/mainpageComponent/mainpage.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-riskrolesComponent
riskrolesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-riskconsequenceComponent
riskconsequenceComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-riskcauseComponent
riskcauseComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectentityComponent
selectentityComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-riskgeneralComponent
riskgeneralComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainpageComponent
mainpageComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-shareddataService
shareddataService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: mainpageComponent,
children: [{path: 'entity-selection', component: selectentityComponent},{path: 'risk-general', component: riskgeneralComponent},{path: 'risk-cause', component: riskcauseComponent},{path: 'risk-roles', component: riskrolesComponent}]},{path: 'login', component: loginComponent,
children: []},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', redirectTo: '/riskgeneral'}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
