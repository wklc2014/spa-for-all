import React from 'react';
import styles from './NotFound.less';

const NotFound = React.createClass({
    render() {
        return (
            <div className="cardOuter">
                <div className="cardWraper cardWraperOnlyOne" style={{height: '100%'}}>
                    <div className={styles.NotFound}>
                        <div>该功能暂未上线，敬请期待！</div>
                    </div>
                </div>
            </div>
        );
    }
});

export default NotFound;
