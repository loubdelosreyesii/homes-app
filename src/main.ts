import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter, provideRoutes } from '@angular/router'
bootstrapApplication(AppComponent, { providers: [provideRouter([])] }).catch(
  (err) => console.error(err)
)
