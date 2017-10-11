export default {
    phone: (rule, value, callback) => {
        console.log(11)
        value = value ? value.replace(/ /g, '') : value;
        if (value && !/^1(3|4|5|7|8)\d{9}$/.test(value)) {
            callback('手机号码输入不正确');
        } else {
            callback();
        }
    }
}