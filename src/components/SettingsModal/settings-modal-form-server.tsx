import React, { useCallback } from 'react';
import { Divider, Form, Header, Icon, Message } from 'semantic-ui-react';

export const SettingsModalFormServer: React.FC = () => {
	const updateServer = useCallback(() => {
		const domainName = (
			document.getElementById('serverDomain') as HTMLInputElement
		).value;
		browser.storage.local.set({
			faviconServerURL: domainName,
		});
		window.location.reload();
	}, []);

	return (
		<Form
			id="serverForm"
			onSubmit={updateServer}
		>
			<Divider horizontal>
				<Header as="h3">
					<Icon
						name="warning circle"
						size="small"
					/>
					Advanced
				</Header>
			</Divider>
			<Header
				as="h4"
				content="Icon Server"
			/>
			<Form.Input
				placeholder="https://besticon-demo.herokuapp.com"
				name="serverDomain"
				id="serverDomain"
			/>
			<Form.Button
				inverted
				color="green"
				type="submit"
				content="Update"
			/>
			<Message as="p">
				To serve high quality icons for the bookmarks, we use&nbsp;
				<a href="https://besticon-demo.herokuapp.com ">
					icon-fetcher-go
				</a>
				&nbsp; deployed on&nbsp;
				<a href="https://heroku.com">heroku</a>. In case you wish to
				host it yourself, please follow the instructions provided in
				the&nbsp;
				<a href="https://github.com/mat/besticon">
					favicon fetcher service
				</a>
				&nbsp;and replace the domain in the text box above.
			</Message>
			<Divider />
		</Form>
	);
};
