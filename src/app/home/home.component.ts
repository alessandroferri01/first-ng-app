import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello, Angular! This is a props passed from the parent component.');

  handleKeyUp(event: KeyboardEvent) {
    console.log('Key up event:', event.key);
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Current input value:', input.value);
  }
}
