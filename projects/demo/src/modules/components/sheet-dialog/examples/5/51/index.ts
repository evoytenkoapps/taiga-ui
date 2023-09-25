import {Component, Inject, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, TUI_WINDOW_HEIGHT, tuiControlValue} from '@taiga-ui/cdk';
import {TuiInputComponent} from '@taiga-ui/kit';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const USERS = [
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith',
    'John Johnson',
    'Jane Johnson',
    'John Williams',
    'Jane Williams',
    'John Brown',
    'Jane Brown',
    'John Davis',
    'Jane Davis',
    'John Miller',
    'Jane Miller',
    'John Wilson',
    'Jane Wilson',
];

@Component({
    selector: 'tui-sheet-dialog-example-51',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetDialogExample51 {
    @ViewChild(TuiInputComponent)
    private readonly input?: TuiInputComponent;

    readonly search = new FormControl('');

    readonly users$ = tuiControlValue<string>(this.search).pipe(
        map(search => USERS.filter(user => TUI_DEFAULT_MATCHER(user, search))),
    );

    readonly buffer$ = combineLatest([this.users$, this.height$]).pipe(
        map(([users, height]) => `calc(${height}px - ${15 + users.length * 3}rem)`),
    );

    constructor(
        @Inject(TUI_WINDOW_HEIGHT) private readonly height$: Observable<number>,
    ) {}

    toggle( ): void {
        this.search.setValue('');
    }

    scroll(): void {
        const input = this.input?.nativeFocusableElement;
        const container = input?.closest('tui-sheet-dialog');

        if (!container) {
            return;
        }

        container.scrollTop = container.clientHeight;
        input?.focus();
    }
}
