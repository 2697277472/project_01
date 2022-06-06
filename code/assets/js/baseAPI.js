$.ajaxPrefilter(function(options) {
    //在发起真正的ajax请求之前，统一拼接 请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url

    //统一为有权限的接口，设置header请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

})