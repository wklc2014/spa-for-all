sublime text 环境部署

一、下载
http://www.sublimetext.com/3

二、安装插件

1. package control

在线安装：
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

安装包安装：
https://github.com/wbond/package_control
https://github.com/A1k4id/channel_v3.json

Menu/Preferences/Package Settings/Package age/Setting-User
"channels": [
	"D:/program/Sublime Text Build 3176 x64/channel_v3.json",
]

三、安装其他常用插件

1. Emmet

2. All Autocomplete

3. SublimeCodeIntel
一个全功能的 Sublime Text 代码自动完成引擎

4. AutoFileName

5. BracketHighlighter

6. ChineseLocalizations
语言包

7. DocBlockr
自动生成文件注释

8. HTML-CSS-JS Prettify

9. Pretty JSON

10. SideBarEnhancements
增强右键菜单文件操作功能

11. ColorPicker

12. DeleteBlankLines

13. sass, less

14. Theme - Flatland

15. IMESupport



JSX 语法支持

1. Babel


快捷键：
ctrl+shift+n 打开新窗口
ctrl+shift+w 关闭窗口
ctrl+o 打开文件
ctrl+shift+t 打开最近关闭的文件
ctrl+n 新建文件
ctrl+s 保存文件
ctrl+shift+s 文件另存为
ctrl+f4 关闭文件
alt+f4 关闭窗口
ctrl+w 关闭文件

ctrl+k,ctrl+b 切换侧边栏
f11 切换全屏
ctrl+k,ctrl+v 从历史记录粘贴
ctrl+g 跳转多少行
f3 选中下一个相同选项
alt+f3 选中所有相同选项
shift+f3 选中上一个相同选项
ctrl+/ 行注释
ctrl+shift+/ 块注释
ctrl+j 合并成一行
ctrl+shift+d 复制当前行
f9 行排序




{
	"caret_style": "phase",
	"color_scheme": "Packages/Monokai Extended/Monokai Extended Bright.tmTheme",
	"font_face": "YaHei Consolas Hybrid",
	"font_size": 10,
	"highlight_modified_tabs": true,
	"https_proxy": "127.0.0.1:1080",
	"ignored_packages":
	[
		"Pretty JSON",
		"Vintage"
	],
	"line_padding_bottom": 2,
	"line_padding_top": 2,
	"tab_size": 2,
	"theme": "Flatland Dark.sublime-theme"
}






