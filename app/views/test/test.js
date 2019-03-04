import {ViewBase} from "./../../../node_modules/pragma-views2/baremetal/lib/view-base.js";
import {loadComponent} from "./../../../node_modules/pragma-views2/webcomponents/component-loader.js";

export default class Test extends ViewBase {
    connectedCallback() {
        loadComponent("/webcomponents/date-time-picker/date-time-picker", true);
    }
}