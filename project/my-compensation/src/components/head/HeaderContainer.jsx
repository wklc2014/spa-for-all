import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getUserInfo} from '../redux/actions/user_action.js';

import Header from './Header.jsx';

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserInfo,
    }, dispatch);
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
