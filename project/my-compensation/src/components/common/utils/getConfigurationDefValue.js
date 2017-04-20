/**
 * [getConfigurationDefValue description]
 * @param  {object} rules 配置规则
 * @return {object}       配置规则的默认值
 */
function getConfigurationDefValue(rules, useValue) {
    const arrayRet = {};
    Object.keys(rules).forEach(v => {
        const currentObject = rules[v];
        const type = currentObject.type;
        if (type === 'enum' || type === 'checkbox') {
            currentObject.array.forEach(m => {
                if (m.selected) {
                    if (!arrayRet[v]) {
                        arrayRet[v] = type === 'checkbox' ? [] : '';
                    }
                    const value = useValue ? m.text : m.id;
                    if (type === 'checkbox') {
                        arrayRet[v].push(value);
                    } else {
                        arrayRet[v] = value;
                    }
                }
            })
        }
    });
    return arrayRet;
}

export default getConfigurationDefValue;
