
var datehelper = {
    format: function(fmt, date) {
        if (typeof fmt === 'undefined') {
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        if (typeof date === 'undefined') {
            date = this;
        }
        var o = {
            "M+": date.getMonth() + 1, 
            "d+": date.getDate(),  
            "h+": date.getHours(), 
            "m+": date.getMinutes(),
            "s+": date.getSeconds(), 
            "q+": Math.floor((date.getMonth() + 3) / 3), 
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    parse: function(datestr, fmt) {
        if (typeof fmt === 'undefined') {
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        var o = {
            'y+': 'setFullYear',
            'M+': 'setMonth',
            'd+': 'setDate',
            'h+': 'setHours', 
            'm+': 'setMinutes',
            's+': 'setSeconds',
            'S+': 'setMilliseconds'
        };
        var regex, match, date = new Date(1970, 0, 1, 0, 0, 0, 0), val;
        for (var k in o) {
            regex = new RegExp('(' + k + ')', 'g');
            match = regex.exec(fmt);
            if (match) {
                val = datestr.substr(match.index, match[0].length);
                if (o[k] === 'setMonth') {
                    val -= 1;
                }
                date[o[k]].apply(date, [val]);
            }
        }
        return date;
    }
};

Date.prototype.format = function(fmt) {
    return datehelper.format(fmt, this);
};
Date.prototype.getTimestamp = function() {
    return Math.round(this.getTime() / 1000);
};

/**
 * 将日期字符串转换为Date对象。扩展了JS自带的Date对象静态方法parse
 * @param datestr 日期字符串，例如2015-12-30 15:16:17
 * @param fmt 日期格式，默认：yyyy-MM-dd hh:mm:ss
 * */
Date.fromString = function(datestr, fmt) {
    return datehelper.parse(datestr, fmt);
};

exports = datehelper;
