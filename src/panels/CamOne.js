import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

// import persik from '../img/persik.png';
import './Persik.css';
import './bootstrap-grid.css';

const osName = platform();

const CamOne = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Cam One
		</PanelHeader>
		<div class="cam-contaier">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-6">
						<p class="cam-title">Площадь мира</p>
						<iframe title="Площадь мира" allowfullscreen="allowfullscreen" src="http://188.190.159.29/ploshad.mira-2-e33ee19a97/embed.html?autoplay=false&token=0aeddf9d-407d-4325-9a3b-b89f133dcf1b"></iframe>
					</div>
					<div class="col-md-6 col-xs-6">
						<p class="cam-title">Площадь мира 2</p>
						<iframe title="Площадь мира 2" allowfullscreen="allowfullscreen" src="http://188.190.159.29/nag.omny_m54e_2812-aeebe9c095/embed.html?autoplay=false&token=4c54eef9-c5f1-419a-81fe-e01826ed054c"></iframe>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xs-6">
						<p class="cam-title">Набережная</p>
						<iframe title="Набережная" allowfullscreen="allowfullscreen" src="http://188.190.159.29/dahua.dh-sd59225u-hni-0001f522af/embed.html?autoplay=false&token=8b623099-5d81-4baa-88d7-513adac3061a"></iframe>
					</div>
					<div class="col-md-6 col-xs-6">

					</div>
				</div>
			</div>
		</div>
	</Panel>
);



CamOne.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CamOne;
