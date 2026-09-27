import { TestBed } from '@angular/core/testing';
import { Laravel } from './laravel';

describe('Laravel', () => {
  let service: Laravel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Laravel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
