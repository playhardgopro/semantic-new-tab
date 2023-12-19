import { BookmarkFolders } from './components/SettingsModal/settings-modal-form-folder';
import { Bookmark } from './components/main-container';

export function getAll(type: 'folder', array: unknown[]): BookmarkFolders[];
export function getAll(type: 'bookmark', array: unknown[]): Bookmark[];
export function getAll<T extends Bookmark>(type?: T['type'], array?: T[]): T[] {
	return array?.filter((node) => node.type === type) || [];
}
