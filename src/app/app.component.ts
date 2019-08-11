import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLabmdTheme = false;
  lastDialogResult: string;
  isRtl = false;
  mode: string;
  value: number;

  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Burger', rating: 'Great' },
    { name: 'French fries', rating: 'Pretty good' },
  ];

  public selectedValue: string;

  public games = [
    {value: 'rts-0', viewValue: 'Starcraft'},
    {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
    {value: 'fps-2', viewValue: 'Doom'}
  ];

  public progress = 0;
  public slider = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': true
  };
  public tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public color: string;

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  toggleDirection() {
    this.isRtl = !this.isRtl
    document.body.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr')
    console.info('direction: ', this.isRtl ? 'RTL' : 'LTR');
  }

  toggleTheme() {
    this.isLabmdTheme = !this.isLabmdTheme;
    console.info('theme: ', this.isLabmdTheme ? 'LabMD' : 'LabOS');
  }

  openDialog() {
    const diaglogCssClass = this.isLabmdTheme ? 'labmd' : 'labos';
    const dialogRef = this._dialog.open(DialogContentComponent,{ panelClass: diaglogCssClass });

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
  closeDialog() {
    this._dialog.closeAll();
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
  get tickInterval(): number | 'auto' {
    return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
  }
  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }
}


@Component({
  template: `
    <div matDialogTitle cdkDrag cdkDragRootElement=".cdk-global-overlay-wrapper" cdkDragHandle>
      <span>Dialog title</span>
      <button mat-button [matDialogClose]=""><mat-icon>close</mat-icon></button>
    </div>
    <div matDialogContent>
      <mat-form-field class="w-100">
        <input matInput #dialogInput placeholder="This is a text box inside of a dialog.">
      </mat-form-field>
      <h3 class="example-h3">Horizontal</h3>
      <div class="st-flex-row">
        <mat-checkbox color="warn">Unchecked warn</mat-checkbox>
        <mat-checkbox [checked]="true">Checked accent</mat-checkbox>
        <mat-checkbox [indeterminate]="true" color="primary">Indeterminate primary</mat-checkbox>
        <mat-checkbox [disabled]="true">Disabled</mat-checkbox>
      </div>
      <h3 class="example-h3">Vertical</h3>
      <div class="st-flex-column">
        <mat-checkbox color="warn">Unchecked warn</mat-checkbox>
        <mat-checkbox [checked]="true">Checked accent</mat-checkbox>
        <mat-checkbox [indeterminate]="true" color="primary">Indeterminate primary</mat-checkbox>
        <mat-checkbox [disabled]="true">Disabled</mat-checkbox>
      </div>
    </div>
    <div matDialogActions>
      <button class="st-button" mat-stroked-button [matDialogClose]="">CLOSE</button>
      <button class="st-button" mat-button color="accent" [matDialogClose]="dialogInput.value">SUBMIT</button>
    </div>
  `,
})
export class DialogContentComponent {
  constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>) { }
}
