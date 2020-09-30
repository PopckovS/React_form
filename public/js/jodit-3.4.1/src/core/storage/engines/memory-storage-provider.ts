/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { IStorage, StorageValueType } from '../../../types';

export class MemoryStorageProvider<T = StorageValueType>
	implements IStorage<T> {
	private data: Map<string, T> = new Map();

	set(key: string, value: T) {
		this.data.set(key, value);
	}

	delete(key: string) {
		this.data.delete(key);
	}

	get<R = T>(key: string): R | void {
		return this.data.get(key) as R | void;
	}

	exists(key: string): boolean {
		return this.data.has(key);
	}

	clear() {
		this.data.clear();
	}
}
