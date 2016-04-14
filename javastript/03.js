//messagebox 里面不能带有html值 
//如果有某个地方出错 整个函数都不能运行
//window 下用ansi编码才能正确显示中文 linux下不知道
function show_confirm()
{
	alert("你点击了确认\n");
	var r = confirm("请按确认或者否定\n 提交信息");
	if(r == true)
	{
		alert("你点击了确认\n");
	}
	else
	{
		alert("你点击了取消\n")
	}
}