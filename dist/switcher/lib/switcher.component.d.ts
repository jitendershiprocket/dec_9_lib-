import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwitcherComponent implements OnChanges {
    data: string;
    isModalOpen: boolean;
    openModal(): void;
    closeModal(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitcherComponent, "lib-switcher", never, { "data": "data"; }, {}, never, never>;
}
