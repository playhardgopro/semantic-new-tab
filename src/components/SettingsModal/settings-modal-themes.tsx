import * as React from 'react';
import { Divider, Header, Icon, Message, Tab } from 'semantic-ui-react';

const theme1 = `body {
  background-color: pink;
  background-image: url('https://source.unsplash.com/random/1920x1080');
  background-repeat: no-repeat;
  background-size: auto;
}`;

const theme2 = `.bookmarks-position {
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
}
.bookmark {
  margin: 30px;
  width: 64px;
  border-radius: 20%;
}
.bookmark:hover {
  transform: scale(1.5);
}
.bookmark-title {
  font-size: 8px !important;
  color: orange !important;
}`;

const theme3 = `.settings-position {
  justify-content: flex-start;
  padding: 0 10px;
}
.settings-button {
  color: purple;
}`;

const panes = [
	{
		menuItem: 'Background',
		render: () => (
			<Tab.Pane
				attached={false}
				content={<pre>{theme1}</pre>}
			/>
		),
	},
	{
		menuItem: 'Bookmarks',
		render: () => (
			<Tab.Pane
				attached={false}
				content={<pre>{theme2}</pre>}
			/>
		),
	},
	{
		menuItem: 'Settings icon',
		render: () => (
			<Tab.Pane
				attached={false}
				content={<pre>{theme3}</pre>}
			/>
		),
	},
];

export const SettingsModalThemes: React.FC = () => {
	return (
		<div>
			<Divider horizontal>
				<Header as="h3">
					<Icon
						name="theme"
						size="small"
					/>
					Themes
				</Header>
			</Divider>
			<Header
				as="h4"
				content="Use these CSS classes to customize your own theme"
			/>
			<Tab
				menu={{
					pointing: true,
				}}
				panes={panes}
			/>
			<Message as="p">
				All values above are just examples. To use pre-defined themes,
				please&nbsp;
				<a
					href="https://github.com/playhardgopro/semantic-new-tab/blob/master/THEMES.md"
					target="_blank"
					rel="noopener noreferrer"
				>
					visit this link
				</a>
				.
			</Message>
		</div>
	);
};
