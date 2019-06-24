import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  appPages = [
    {
      title: 'StatusBar',
      url: '/statusbar',
      icon: 'browsers'
    },
    {
      title: 'Device',
      url: '/device',
      icon: 'phone-portrait'
    }
  ];

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route url="/" component="app-home" />
        <ion-route url="/statusbar" component="app-statusbar" />
        <ion-route url="/device" component="app-device" />
      </ion-router>
    );
  }

  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
          <ion-menu content-id="menu-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content forceOverscroll={false}>
              <ion-list>
                <ion-list-header>Navigate</ion-list-header>
                {this.appPages.map((p) => (
                  <ion-menu-toggle autoHide={false}>
                    <ion-item href={p.url}>
                      <ion-icon slot="start" name={p.icon}></ion-icon>
                      <ion-label>{p.title}</ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                ))}
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    );
  }
}
