import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';
import {Row, Col} from 'antd';
import Header from './head/Header.jsx';
import Footer from './foot/Foot.jsx';
import {websitePageWidth} from './common/const.js';
import Swipe from '../common/swipe.js';
import CONFIG from './common/config';
const navItems = {
    taskCenter: {
        title: '任务中心',
        desc: '智能分配审核任务',
        to: CONFIG.TASK_CENTER
    },
    claimDiary: {
        title: '保单查询',
        desc: '一键查询客户保单',
        to: '/policy'
    },
    performanceRank: {
        title: '骗赔识别',
        desc: '智慧识别恶意诈骗',
        to: '/witClaim'
    },
    caseExchange: {
        title: 'MORE',
        desc: '更多精彩敬请期待'
    }
};

const startSlide = 0;
const swipeItemLength = 2;

const Home = React.createClass({
    getInitialState() {
        return {
            isHome: false
        };
    },
    checkIsHome() {
        const href = window.location.href;
        const isHome = href.indexOf('home.html') !== -1;
        return isHome;
    },
    componentDidMount() {
        const width = $('#slider').width();
        $('#slider').width(width);
        const $iEle = $('#HomeContentPage').find('i');
        /* eslint-disable */
        const mySwipe = new Swipe(document.getElementById('slider'), {
            startSlide,
            speed: 400,
            auto: 5000,
            callback(index, elem) {
                if (swipeNum) {
                    const curr = index >= swipeNum ? index - swipeNum : index;
                    $iEle.removeClass('active').eq(curr).addClass('active');
                }
            }
        });
        $('body').addClass('bodyBgWhite');
        /*eslint-enable */
        const swipeNum = mySwipe.getNumSlides();
        $iEle.click(function() {
            const idx = $(this).index();
            mySwipe.slide(idx);
        });
        const isHome = this.checkIsHome();
        this.setState({
            isHome
        });
    },
    render() {
        const {isHome} = this.state;
        const navEle = Object.keys(navItems).map((val, i) => {
            const obj = navItems[val];
            const cls = classnames('navItem', {[`navItem-${i+1}`]: true});
            let titleEle = obj.title;
            let iconEle = null;
            /* eslint-disable */
            switch (val) {
                case 'taskCenter':
                    iconEle = <a href={obj.to} target="_blank"></a>;
                    titleEle = <a href={obj.to} target="_blank">{obj.title}</a>;
                    break;
                case 'claimDiary':
                case 'performanceRank':
                    if (isHome) {
                        iconEle = <a href={'bxs/index.htm#' + obj.to}></a>;
                        titleEle = <a href={'bxs/index.htm#' + obj.to}>{obj.title}</a>;
                    } else {
                        titleEle = <Link to={obj.to}>{obj.title}</Link>;
                        iconEle = <Link to={obj.to}></Link>;
                    }
                    break;
                default:

                    break;
            }
            /*eslint-enable */
            return (
                <Col key={val} span={6}>
                    <article className={cls}>
                        <div className="icon">{iconEle}</div>
                        <div className="title">{titleEle}</div>
                        <div className="desc">{obj.desc}</div>
                    </article>
                </Col>
            );
        });
        const swipePageEle = [];
        for (let i = 0; i < swipeItemLength; i++) {
            const cls = startSlide === i ? 'active' : '';
            swipePageEle.push(<i key={i} className={cls}></i>);
        }
        return (
            <div className="HomeContainer">
                <Header cls="home-index" isHome={isHome} />
                <section className="HomeContent">
                    <div className="swipe" id="slider">
                        <div className="swipe-wrap">
                            <article className="parentBanner1">
                                <div className="banner1">
                                    <div className="left">
                                        <div className="title">快速公正 值得信赖</div>
                                        <div className="desc">FAST FAIR & TRUSTWORTHY</div>
                                        <div className="dBtn">立即了解</div>
                                    </div>
                                </div>
                            </article>
                            <article className="parentBanner2">
                                <div className="banner2">
                                    <div className="left">
                                        <div className="title">灵活智慧 连接一切</div>
                                        <div className="desc">AGILE SMART & CONNECT ALL</div>
                                        <div className="dBtn">立即了解</div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="HomeContentPage" id="HomeContentPage">
                        {swipePageEle}
                    </div>
                </section>
                <section className="HomeNav wraper">
                    <Row>
                        {navEle}
                    </Row>
                </section>
                <Footer />
            </div>
        );
    }
});

export default Home;