import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, PanelHeaderContent} from "@vkontakte/vkui"

class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };


    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>
                    <PanelHeaderContent status="г. Жигулевск v.1.1.0">
                        Городские камеры
                    </PanelHeaderContent>
                </PanelHeader>
                <Group>
                    <div className="cam-container">
                        <div className="loading">
                            <div className="load-spin">

                            </div>

                        </div>
                        <div id="main" className="container">
                            <div className="row">
                                <div className="col-md-6 col-xs-12 col-xxs-12">
                                    <p className="cam-title">Площадь мира</p>
                                    <div id="cam1"></div>

                                </div>
                                <div className="col-md-6 col-xs-12 col-xxs-12">
                                    <p className="cam-title">Площадь мира 2</p>
                                    <div id="cam2"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12 col-xxs-12">
                                    <p className="cam-title">Набережная</p>
                                    <div id="cam3"></div>
                                </div>
                                <div className="col-md-6 col-xs-12 col-xxs-12">
                                    <p className="cam-title">Площадь победы</p>
                                    <div id="cam4"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12 col-xxs-12">
                                    <p className="cam-title">Сквер В-1</p>
                                    <div id="cam5"></div>
                                </div>
                                <div className="col-md-6 col-xs-12 col-xxs-12">


                                </div>

                            </div>
                        </div>
                    </div>


                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    closePopout,
};



export default connect(null, mapDispatchToProps)(HomePanelBase);