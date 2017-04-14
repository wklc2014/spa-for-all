import keyMirror from 'keymirror';

const ActionType = keyMirror({
    COUNTER_INCREMENT: null,
    COUNTER_DECREMENT: null,
    COUNTER_DISABLED: null,
});

export default ActionType;
