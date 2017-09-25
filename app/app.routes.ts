import {Routes, RouterModule} from '@angular/router';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
// import {SportsComponent} from './sports/sports.component';
// import {SportsAquaticsComponent} from './sports/aquatics/aquatics.component';
import {NotExistComponent} from './not_exist/not_exist.component';
import {GalleryComponent} from './gallery/gallery.component';
import {MapComponent} from './map/map.component';
import {ScheduleandResultComponent} from './scheduleandresult/scheduleandresult.component';

import {GALLERY_ROUTES} from './gallery/gallery.routes';
import {CONTACTUS_ROUTES} from './contactus/contactus.routes';
import {SCHEDULEANDRESULT_ROUTES} from './scheduleandresult/scheduleandresult.routes';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // {path: 'contactus', component: ContactUsComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'sports', component: SportsComponent},
    // {path: 'sports-aquatics', component: SportsAquaticsComponent},
    {path: 'contactus', component: ContactUsComponent, children: CONTACTUS_ROUTES},
    {path: 'gallery', component: GalleryComponent, children: GALLERY_ROUTES},
    {path: 'scheduleandresults', component: ScheduleandResultComponent, children: SCHEDULEANDRESULT_ROUTES},
    {path: 'maps', component: MapComponent },
    {path: '**', component: NotExistComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);
