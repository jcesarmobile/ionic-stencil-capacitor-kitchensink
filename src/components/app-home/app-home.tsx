import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to Ionic Stencil Capacitor Kitchensink app
        </p>

        <ion-button href="/statusbar" expand="block">Statusbar page</ion-button>
      </ion-content>
    ];
  }
}
