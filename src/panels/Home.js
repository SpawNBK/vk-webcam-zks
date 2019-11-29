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
		<PanelHeader>Городские камеры "Жигулевск"</PanelHeader>
		{fetchedUser &&
		<Group title="Добро пожаловать">
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
						<iframe title="Площадь мира" allowfullscreen="allowfullscreen" src="https://cam.tks-net.ru/vsaas/embed/nag.omny_m54e_2812-aeebe9c095?autoplay=false&dvr=false&token=2.L9viw74hAAEABZhztBGlh7kArCw-eZfVJYGe8o9A_1PD6kQH"></iframe>
						
					</div>
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Площадь мира 2</p>
						<iframe title="Площадь мира 2" allowfullscreen="allowfullscreen" src="https://cam.tks-net.ru/vsaas/embed/ploshad.mira-2-e33ee19a97?autoplay=false&dvr=false&token=2.L9viw74hAAEABZhztBGlh3vTqIz-VmuhrYUKlt_tEfssAMfZ"></iframe>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Набережная</p>
						<iframe title="Набережная" allowfullscreen="allowfullscreen" src="https://cam.tks-net.ru/vsaas/embed/dahua.dh-sd59225u-hni-0001f522af?autoplay=false&dvr=false&token=2.L9viw74hAAEABZhztBGlh40_6rbxdHKDWdlR6UjbVoEaExVW"></iframe>
					</div>
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Площадь победы</p>
						<iframe title="Площадь победы" allowfullscreen="allowfullscreen" src="https://cam.tks-net.ru/vsaas/embed/nag.omny_m54e_2812-24f0aefa23?autoplay=false&dvr=false&token=2.L9viw74hAAEABZhztBGlhz0T_9z4Y2kIb_y-oNB2Zl5ToYA_"></iframe>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="cam-title">Сквер В-1</p>
						<iframe title="Сквер В-1" allowfullscreen="allowfullscreen" src="https://cam.tks-net.ru/vsaas/embed/nag.omny_m54e_2812-41e047cbf6?autoplay=false&dvr=false&token=2.L9viw74hAAEABZhztBGlh6eUI2CMkev5in-R-s_O0cTsbtII"></iframe>
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
