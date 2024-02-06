import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { BreadcrumbService } from './app.breadcrumb.service';
import { MenuService } from './app.menu.service';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent } from './app.menu.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import {AppMainComponent} from './app.main.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule, AccordionModule, PanelModule],
            declarations: [
                AppComponent,
                AppMainComponent,
                AppTopBarComponent,
                AppMenuComponent,
                AppRightPanelComponent,
                AppFooterComponent,
                AppBreadcrumbComponent
            ],
            providers: [BreadcrumbService, MenuService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});