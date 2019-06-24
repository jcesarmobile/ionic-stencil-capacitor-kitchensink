import { Component, State, h } from '@stencil/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Component({
  tag: 'app-device'
})
export class AppDevice {

  @State() info = "no info";
  @State() lang = "";

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Device</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>{this.info}</p>
        <ion-item>
          <ion-label>{this.lang}</ion-label>
        </ion-item>
      </ion-content>
      
    ];
  }

  async componentWillLoad() {
    this.info = JSON.stringify(await Device.getInfo());
    this.lang = (await Device.getLanguageCode()).value;
  }
}
