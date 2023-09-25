import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiSheetDialogExample51} from './51';

@Component({
    selector: 'tui-sheet-dialog-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetDialogExample5 {
    constructor(private readonly tuiSheetDialogService: TuiSheetDialogService) {}

    toggle(): void {
        this.tuiSheetDialogService
            .open(new PolymorpheusComponent(TuiSheetDialogExample51), {
                closeable: true,
                stops: ['32.625rem'],
            })
            .subscribe();
    }
}
