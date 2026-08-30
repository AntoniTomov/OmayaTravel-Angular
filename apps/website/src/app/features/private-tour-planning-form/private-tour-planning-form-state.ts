import { Injectable, signal } from '@angular/core';

export interface PrivateTourPlanningFormState {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  contactMethod: string;
  adults: string;
  children: string;
  places: string;
  budget: string;
  startDate: string;
  days: string;
  details: string;
}

export const PRIVATE_TOUR_INITIAL_STATE: PrivateTourPlanningFormState = {
  name: '',
  countryCode: '+1',
  phone: '',
  email: '',
  contactMethod: '',
  adults: '',
  children: '',
  places: '',
  budget: '',
  startDate: '',
  days: '',
  details: '',
};

@Injectable({ providedIn: 'root' })
export class PrivateTourPlanningFormStateService {
  readonly state = signal<PrivateTourPlanningFormState>({ ...PRIVATE_TOUR_INITIAL_STATE });

  update<K extends keyof PrivateTourPlanningFormState>(
    key: K,
    value: PrivateTourPlanningFormState[K],
  ): void {
    this.state.update((state) => ({ ...state, [key]: value }));
  }

  reset(): void {
    this.state.set({ ...PRIVATE_TOUR_INITIAL_STATE });
  }
}
