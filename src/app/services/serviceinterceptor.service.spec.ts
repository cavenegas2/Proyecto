import { TestBed } from '@angular/core/testing';

import { ServiceinterceptorService } from './serviceinterceptor.service';

describe('ServiceinterceptorService', () => {
  let service: ServiceinterceptorService;

  describe('ServiceInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
      providers: [
        ServiceinterceptorService
        ]
    }));

    it('should be created', () => {
      const interceptor: ServiceinterceptorService = TestBed.inject(ServiceinterceptorService);
      expect(interceptor).toBeTruthy();
    });
  });
});
