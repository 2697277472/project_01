$(function() {
    //调用函数获取函数基本信息
    getUserInfo()
})



//获取用户信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        //headers就是请求头配置对象
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            console.log(res);

        }
    })
}