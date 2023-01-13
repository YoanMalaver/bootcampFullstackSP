import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingtransactionsComponent } from './bankingtransactions.component';

describe('BankingtransactionsComponent', () => {
  let component: BankingtransactionsComponent;
  let fixture: ComponentFixture<BankingtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingtransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
