import { Component, State, h } from '@stencil/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

@Component({
  tag: 'app-statusbar'
})
export class AppStatusbar {

  @State() state = false;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>StatusBar Style</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        
        <ion-item>
          <ion-label>Style</ion-label>
          <br/>
          <ion-label>Light</ion-label><ion-toggle
            checked={this.state}
            onIonChange=
              {ev => {
                this.state = ev.detail.checked
                StatusBar.setStyle({
                  style: this.state ? StatusBarStyle.Dark : StatusBarStyle.Light
                });
              }
            }
          /><ion-label>Dark</ion-label>
        </ion-item>
      </ion-content>
    ];
  }

  async componentWillLoad() {
    const info = await StatusBar.getInfo();
    this.state = info.style === StatusBarStyle.Dark;
  }
}
