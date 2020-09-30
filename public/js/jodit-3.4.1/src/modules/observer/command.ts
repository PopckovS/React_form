/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { SnapshotType } from '../../types';
import { Observer } from './observer';

export class Command {
	public undo() {
		this.observer.snapshot.restore(this.oldValue);
	}
	public redo() {
		this.observer.snapshot.restore(this.newValue);
	}

	constructor(
		readonly oldValue: SnapshotType,
		readonly newValue: SnapshotType,
		readonly observer: Observer,
		readonly tick: number
	) {}
}
