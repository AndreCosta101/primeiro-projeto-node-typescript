import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvalilabilityService from './MonthAvailabilityService';

describe('ListProviderMonthAvalilability', () => {
  let listProviderMonthAvalilability: ListProviderMonthAvalilabilityService;
  let fakeAppointmentsRepository: FakeAppointmentsRepository;

  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvalilability = new ListProviderMonthAvalilabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to check the providers month availability', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 10, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 10, 20, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 10, 21, 10, 0, 0),
    });

    const availability = await listProviderMonthAvalilability.execute({
      provider_id: 'user',
      year: 2020,
      month: 11,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
