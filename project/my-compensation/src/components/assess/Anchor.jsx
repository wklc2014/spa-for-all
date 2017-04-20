import React from 'react';
import styles from './Assess.less';
import {BxsCardTitle} from './common/data.js';
import {Affix} from 'antd';
import {headHeight} from '../common/const.js';
import scrollTo from '../mixins/scrollTo.js';

const BxsCardTitleKeys = Object.keys(BxsCardTitle);
let currentCard;

const Anchor = React.createClass({
    mixins: [scrollTo],
    handleScrollTop(e) {
        const idx = e.currentTarget.getAttribute('data-todom');
        const linkEle = e.currentTarget;
        const scrollTop = $('#' + idx).offset().top - headHeight;
        this.handleScrollTo(scrollTop, 200, () => {
            this.handleScrollCallback(linkEle);
        });
    },
    handleScrollCallback(target) {
        $('#contentRightInner').find('.linkStyle').removeClass(styles.active);
        $(target).addClass(styles.active);
    },
    handleWindowScroll() {
        const winScrolltop = $(window).scrollTop() + headHeight;
        BxsCardTitleKeys.some((val, i) => {
            const $dom = $('#' + val);
            if ($dom.length) {
                const top = $dom.offset().top;
                const height = $dom.height();
                if (winScrolltop >= top && winScrolltop <= (top + height)) {
                    currentCard = val;
                    return true;
                }
            }
            return false;
        });
        this.handleScrollCallback($('[data-todom=' + currentCard + ']'));
    },
    componentDidMount() {
        $(window).on('scroll', this.handleWindowScroll);
    },
    componentWillUnmount() {
        $(window).off('scroll', this.handleWindowScroll);
    },
    render() {
        const listEle = BxsCardTitleKeys.map((key, i) => {
            const current = BxsCardTitle[key];
            return (
                <li className={styles.aItem} key={i}>
                    <a
                        href="javascript:;"
                        data-todom={current.id}
                        className="linkStyle"
                        onClick={this.handleScrollTop}
                    >
                        <span>{current.text}</span>
                        <i className={`iconfont ${current.className}`} />
                    </a>
                </li>
            );
        });
        return (
            <div className={styles.contentRight}>
                <Affix offsetTop={headHeight}>
                    <ul className={styles.contentRightInner} id="contentRightInner">
                        {listEle}
                    </ul>
                </Affix>
            </div>
        );
    }
});

export default Anchor;
