import React, { useEffect, useState } from 'react';
import { Divider, Form, Header, Icon } from 'semantic-ui-react';

import { getAll } from '../../helpers';
import { BookmarkLinkProps } from '../bookmark-link';
import { Bookmark } from '../main-container';

async function onCreateFolder() {
	async function addBookmarksToFolder(id: string) {
		function createBookmarks(links: BookmarkLinkProps[], parentId: string) {
			return links.map((link) =>
				browser.bookmarks.create({
					title: link.title,
					url: link.url,
					parentId,
				})
			);
		}

		const allItems = (await browser.bookmarks.search({})) as Bookmark[];
		const allBookmarks = getAll('bookmark', allItems);
		createBookmarks(allBookmarks, id);
	}

	const id = await browser.storage.local.get('allFolderId');
	if (typeof id.allFolderId === 'undefined') {
		const createdFolder = await browser.bookmarks.create({
			title: 'All bookmarks',
			type: 'folder',
			parentId: 'unfiled_____',
		});
		const createdFolderId = await createdFolder.id;
		await browser.storage.local.set({
			allFolderId: createdFolderId,
		});
		addBookmarksToFolder(createdFolderId);
	}
}

async function onDeleteFolder() {
	const id = await browser.storage.local.get('allFolderId');
	if (typeof id.allFolderId !== 'undefined') {
		await browser.bookmarks.removeTree(id.allFolderId);
		await browser.storage.local.remove(['allFolderId', 'shownFolderId']);
	}
}

const setBookmarksFolder = (value: string) => {
	const selectedOption = value;
	browser.storage.local.set({
		shownFolderId: selectedOption,
	});
};
type SettingsModalFormFolderProps = {
	bookmarksFolder: Bookmark;
};
export interface BookmarkFolders extends Bookmark {
	type: 'folder';
}
interface Option {
	key: number;
	value: BookmarkFolders['id'];
	text: BookmarkFolders['title'];
}

export const SettingsModalFormFolder: React.FC<
	SettingsModalFormFolderProps
> = ({ bookmarksFolder }) => {
	const [options, setOptions] = useState<Option[]>([]);

	const updateSelect = async () => {
		const allItems = await browser.bookmarks.search({});
		const folders = getAll('folder', allItems);
		const selectOptions = folders.map<Option>(({ id, title }, i) => ({
			key: i,
			value: id,
			text: title,
		}));
		setOptions((prevState) => {
			return [...prevState, ...selectOptions];
		});
	};

	useEffect(() => {
		updateSelect();
	}, []);

	return (
		<Form id="folderForm">
			<Divider horizontal>
				<Header as="h3">
					<Icon
						name="folder open"
						size="small"
					/>
					Bookmarks
				</Header>
			</Divider>
			<Header
				as="h4"
				content="Select a new bookmark folder"
			/>

			<Form.Select
				placeholder={bookmarksFolder.title}
				options={options}
				onChange={(e, { value }) => {
					if (typeof value === 'string') setBookmarksFolder(value);
				}}
			/>
			<Form.Button
				inverted
				onClick={() => window.location.reload()}
				color="green"
				content="Update"
			/>
			<Header
				as="h4"
				content="Folder with all bookmarks inside"
			/>
			<Form.Group>
				<Form.Button
					onClick={() => {
						onCreateFolder();
						updateSelect();
					}}
					color="green"
					content="Create"
				/>
				<Form.Button
					onClick={() => {
						onDeleteFolder();
						updateSelect();
					}}
					color="red"
					content="Delete"
				/>
			</Form.Group>
		</Form>
	);
};
