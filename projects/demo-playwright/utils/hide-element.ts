import {Locator} from '@playwright/test';

export async function tuiHideElement(element: Locator): Promise<void> {
    return element.evaluate(el => {
        el.style.opacity = `0`;
    });
}
