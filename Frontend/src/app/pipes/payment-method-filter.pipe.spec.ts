import { PaymentMethodFilterPipe } from './payment-method-filter.pipe';

describe('PaymentMethodFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentMethodFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
