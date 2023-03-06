import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabFillPage } from './tab_fill.page';

describe('TabFillPage', () => {
  let component: TabFillPage;
  let fixture: ComponentFixture<TabFillPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabFillPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
