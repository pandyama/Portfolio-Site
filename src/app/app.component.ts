import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

declare const active: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MatPortfolio';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer, private router: Router){
    this.matIconRegistry.addSvgIcon(
      'Github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'googleplay',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/googleplay.svg')
    )
  }

  ngOnInit(){
    this.router.navigate(['']);
  }

  onClick(){
    active();
  }
}
