import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-dialog",
  imports: [Dialog, ButtonModule],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @Input() openDialog: boolean = false;
  @Output() dialogState = new EventEmitter<boolean>();

  showDialog() {
    this.openDialog = true;
  }

  closeDialog() {
    this.openDialog = false;
    this.dialogState.emit(this.openDialog);
  }
}
