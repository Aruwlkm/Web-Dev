import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent} from './events-list.component';

describe('EventsList', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
