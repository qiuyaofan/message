## Message消息提示插件

一个和vue element交互调用差不多的jquery提示插件

 [ 在线例子](https://qiuyaofan.github.io/message/) 

### 1.调用方式

```
$('.btn-success').on('click',function(){
    $.message('成功');
})
$('.btn-danger').on('click',function(){
    $.message({
        message:'失败提示',
        type:'error'
    });
})
$('.btn-warning').on('click',function(){
    $.message({
        message:'警告提示',
        type:'warning'
    });
})
$('.btn-info').on('click',function(){
    $.message({
        message:'信息提醒',
        type:'info'
    });
})
```

### 2.参数介绍

```
message:' 操作成功',    //提示信息
time:'2000',           //显示时间（默认：2s）
type:'success',        //显示类型，包括4种：success.error,info,warning
showClose:false,       //显示关闭按钮（默认：否）
autoClose:true,        //是否自动关闭（默认：是）
```