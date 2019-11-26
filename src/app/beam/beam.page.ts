import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-beam',
  templateUrl: './beam.page.html',
  styleUrls: ['./beam.page.scss'],
})
export class BeamPage implements OnInit {

  beamURL;
  urlSafe: SafeResourceUrl;

  constructor(private storage: Storage, public sanitizer: DomSanitizer) {
    this.storage.get('beamURL')
      .then(beamValue => {
        if (beamValue) {
          this.beamURL = beamValue;
        } else {
          this.beamURL = 'https://bmlt.app/';
        }
        console.log('Beam URL = ', this.beamURL);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.beamURL);
        console.log('Safe URL = ', this.urlSafe);
      });
  }

  ngOnInit() {


  }

}
