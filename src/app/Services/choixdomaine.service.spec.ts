import { TestBed } from '@angular/core/testing';

import { ChoixdomaineService } from './choixdomaine.service';

describe('ChoixdomaineService', () => {
  let service: ChoixdomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoixdomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
