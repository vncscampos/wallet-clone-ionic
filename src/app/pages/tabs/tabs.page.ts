import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    @ViewChild('tabs', { static: false })
    tabs!: IonTabs;
    selectedTab: any;

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit() {}

    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
    }
}
