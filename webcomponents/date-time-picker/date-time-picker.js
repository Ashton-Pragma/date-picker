import { BaseElement } from "./../../../node_modules/pragma-views2/baremetal/lib/base-element.js";
import { PragmaDialogs } from "./../../../node_modules/pragma-views2/webcomponents/pragma-dialogs/pragma-dialogs.js";

export class DateTimePicker extends BaseElement {
    connectedCallback() {
        super.connectedCallback();
        this.initTemplate();
        this.setup();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    initTemplate() {
        const instance = document.importNode(window.templates.get("date-time-picker-template"), true);
        this.appendChild(instance);
    }

    setup() {
        let dateInput = this.querySelector(".date-time-picker-date-entry");
        dateInput.addEventListener("click", this.showDatePicker);

        let timeInput = this.querySelector(".date-time-picker-time-entry");
        timeInput.addEventListener("click", this.showTimePicker);
    }

    showDatePicker() {
        console.log("Show date picker");

        let options =  {
            message : "hello"
        }

        let dialog = new PragmaDialogs();
        dialog.showMessage(options);
    }

    showTimePicker() {
        console.log("Show time picker");
    }
}

customElements.define('date-time-picker', DateTimePicker);