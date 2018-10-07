import {Component} from '@angular/core'

@Component({
    selector: 'tabs'
})

public class Tabs {
    private _tabs: Tab[] = [];

    public addTab(tab: Tab) {
        if (this._tabs.length === 0) {
            tab.isActive = true;
        }
        this._tabs.push(tab);
    }

    public switchTab(tab: Tab) {
        for (let t of this._tabs) {
            t.isActive = false;
        }

        tab.isActive = true;
    }
}