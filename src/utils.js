/**
 * 处理数据工具方法
 */
export default class Utils {

    /**
     * 判断是否为空
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isEmpty(obj) {
        if (!obj) return true;
        if (this.isArray(obj)) {
            return obj.length == 0;
        } else if (this.isObject(obj)) {
            for (var name in obj) {
                return false;
            }
            return true;
        }
        return false;
    };

    /**
     * 判断是否为对象
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    /**
     * 判断是否为数组
     * @param  {[type]}  obj 数组
     * @return {Boolean}     [description]
     */
    static isArray(obj) {
        return Array.isArray(obj) || toString.call(obj) === '[object Array]';
    };

}
