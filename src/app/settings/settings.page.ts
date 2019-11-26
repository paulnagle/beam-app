import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  beamURL;

  constructor(private storage: Storage) {
    this.storage.get('beamURL')
      .then(beamValue => {
        if (beamValue) {
          this.beamURL = beamValue;
        } else {
          this.beamURL = 'https://www.google.com';
        }
      });
  }

  ngOnInit() {
  }

  selectBeamURL() {
    this.storage.set('beamURL', this.beamURL);
  }


}
