import {Component, Input} from '@angular/core'

@Component({
    selector: 'tab'
})

public class Tab {
    public isActive: boolean;
    @Input('tabname') public tabName: string;

    //Since Tabs is the container element, we can pass reference to the constructor
    constructor(tabs: Tabs) {
        tabs.addTab(this);
    }
}