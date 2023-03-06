import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabLoginPage } from './tab_login.page';

describe('TabLoginPage', () => {
  let component: TabLoginPage;
  let fixture: ComponentFixture<TabLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabLoginPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
