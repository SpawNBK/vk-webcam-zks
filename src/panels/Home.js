import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import '../css/style_mail.css';
import '../css/bootstrap-grid.css';


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Телесети: Городские камеры</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}


			</Cell>
		</Group>}	

		<div class="cam-contaier">

			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Площадь мира</p>
						<iframe title="Площадь мира" allowfullscreen="allowfullscreen" src="http://188.190.159.29/ploshad.mira-2-e33ee19a97/embed.html?autoplay=false&token=0aeddf9d-407d-4325-9a3b-b89f133dcf1b"></iframe>
						
					</div>
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Площадь мира 2</p>
						<iframe title="Площадь мира 2" allowfullscreen="allowfullscreen" src="http://188.190.159.29/nag.omny_m54e_2812-aeebe9c095/embed.html?autoplay=false&token=4c54eef9-c5f1-419a-81fe-e01826ed054c"></iframe>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Набережная</p>
						<iframe title="Набережная" allowfullscreen="allowfullscreen" src="http://188.190.159.29/dahua.dh-sd59225u-hni-0001f522af/embed.html?autoplay=false&token=8b623099-5d81-4baa-88d7-513adac3061a"></iframe>
					</div>
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Площадь победы</p>
						<iframe title="Площадь победы" allowfullscreen="allowfullscreen" src="http://188.190.159.29/nag.omny_m54e_2812-24f0aefa23/embed.html?autoplay=false&token=25844a37-4c5c-45c4-90ca-ad322a561db1"></iframe>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Сквер В-1</p>
						<iframe title="Сквер В-1" allowfullscreen="allowfullscreen" src="http://188.190.159.29/nag.omny_m54e_2812-41e047cbf6/embed.html?autoplay=false&token=142f5d16-d968-4f5d-91d2-3126ea8fa272"></iframe>
					</div>
					<div class="col-md-6 col-xs-12">
						

					</div>
				</div>
			</div>
		</div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
export default Home;
