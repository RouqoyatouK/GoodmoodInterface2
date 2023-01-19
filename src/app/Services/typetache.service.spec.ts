import { TestBed } from '@angular/core/testing';

import { TypetacheService } from './typetache.service';

describe('TypetacheService', () => {
  let service: TypetacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypetacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
