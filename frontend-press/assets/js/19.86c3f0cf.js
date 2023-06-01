(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{303:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-规范"}},[s._v("#")]),s._v(" javascript 规范")]),s._v(" "),a("h1",{attrs:{id:"命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[s._v("#")]),s._v(" 命名")]),s._v(" "),a("ol",[a("li",[s._v("用大写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线，也不能以下划线或美元符号结束。")])]),s._v(" "),a("p",[s._v("反例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" _name / name_ / name$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从驼峰形式。")])]),s._v(" "),a("p",[s._v("正例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" localValue / getHttpMessage() / inputUserId\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("em",[s._v("其中 method 方法命名必须是 动词 或者 动词+名词 形式")])]),s._v(" "),a("p",[s._v("正例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" saveShopCarData /openShopCarInfoDialog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("反例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" save / open / show / go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("em",[s._v("特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他（目的是为了统一各个端）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("add / update / delete / detail / get\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("附： 函数方法常用的动词:")]),s._v(" "),a("p",[s._v("get 获取/set 设置\nadd 增加/remove 删除\ncreate 创建/destory 移除\nstart 启动/stop 停止\nopen 打开/close 关闭\nread 读取/write 写入\nload 载入/save 保存\nbegin 开始/end 结束\nbackup 备份/restore 恢复\nimport 导入/export 导出\nsplit 分割/merge 合并\ninject 注入/extract 提取\nattach 附着/detach 脱离\nbind 绑定/separate 分离\nview 查看/browse 浏览\nedit 编辑/modify 修改\nselect 选取/mark 标记\ncopy 复制/paste 粘贴\nundo 撤销/redo 重做\ninsert 插入/delete 移除\nadd 加入/append 添加\nclean 清理/clear 清除\nindex 索引/sort 排序\nfind 查找/search 搜索\nincrease 增加/decrease 减少\nplay 播放/pause 暂停\nlaunch 启动/run 运行\ncompile 编译/execute 执行\ndebug 调试/trace 跟踪\nobserve 观察/listen 监听\nbuild 构建/publish 发布\ninput 输入/output 输出\nencode 编码/decode 解码\nencrypt 加密/decrypt 解密\ncompress 压缩/decompress 解压缩\npack 打包/unpack 解包\nparse 解析/emit 生成\nconnect 连接/disconnect 断开\nsend 发送/receive 接收\ndownload 下载/upload 上传\nrefresh 刷新/synchronize 同步\nupdate 更新/revert 复原\nlock 锁定/unlock 解锁\ncheck out 签出/check in 签入\nsubmit 提交/commit 交付\npush 推/pull 拉\nexpand 展开/collapse 折叠\nstart 开始/finish 完成\nenter 进入/exit 退出\nabort 放弃/quit 离开\nobsolete 废弃/depreciate 废旧\ncollect 收集/aggregate 聚集")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。")])]),s._v(" "),a("p",[s._v("正例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" MAX_STOCK_COUNT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("反例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" MAX_COUNT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("常量定义场景：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 默认值：DEFAULT_SIZE、DEFAULT_PADDING、MIN_CHAR_LENGTH ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" APP_NAME ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"代码格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码格式"}},[s._v("#")]),s._v(" 代码格式")]),s._v(" "),a("p",[s._v("不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明：")]),s._v(" "),a("p",[s._v("任何情形，没有必要插入多个空行进行隔开。")])]),s._v(" "),a("h2",{attrs:{id:"使用-es6、7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-es6、7"}},[s._v("#")]),s._v(" 使用 ES6、7")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("必须优先使用 ES6、7 中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用")])]),s._v(" "),a("li",[a("p",[s._v("必须强制使用 ES6, ES7 的新语法，比如箭头函数、await/async ， 解构， let ， for…of 等等")])])]),s._v(" "),a("h2",{attrs:{id:"undefined-判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined-判断"}},[s._v("#")]),s._v(" undefined 判断")]),s._v(" "),a("p",[s._v("永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。")]),s._v(" "),a("p",[s._v("正例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("反例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"条件判断和循环最多三层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断和循环最多三层"}},[s._v("#")]),s._v(" 条件判断和循环最多三层")]),s._v(" "),a("p",[s._v("条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过 3 层请抽成函数，并写清楚注释。")]),s._v(" "),a("h2",{attrs:{id:"this-的转换命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-的转换命名"}},[s._v("#")]),s._v(" this 的转换命名")]),s._v(" "),a("p",[s._v("对上下文 this 的引用只能使用self来命名")]),s._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),a("ol",[a("li",[s._v("文件注释")])]),s._v(" "),a("p",[s._v("文件注释应位于文件的最前面，建议注释格式如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n \n* 概要说明及版本\n \n* @author: 创建者\n \n* @date: 日期\n \n* @description: 详细说明\n \n*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("单行注释")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("两个斜杠 // 可以创建一个单行注释，斜杠后面要增加一个空格，紧接着是注释内容。")])]),s._v(" "),a("li",[a("p",[s._v("注释的缩进需要与所注释的代码一致，且要位于被注释代码的上面。")])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("函数（方法）注释")])]),s._v(" "),a("p",[s._v("函数是使用最为频繁的语法结构，相对较为复杂，所以良好的注释对于理解函数的功能非常有必要。建议注释格式如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n \n  * 函数说明\n   \n  * @author: 创建者\n   \n  * @description: 详细说明\n   \n  * @param {参数类型} 参数名 参数说明\n   \n  * @return {返回值类型} 返回值说明\n   \n  */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("常见的tag：")]),s._v(" "),a("p",[s._v("@author、@date、@description、@param、@return、@module、@enum、@callback、@copyright、@default、@deprecated、@throws 、@todo\n"),a("em",[s._v("更多tag与使用规范，详见")]),a("a",{attrs:{href:"https://jsdoc.app/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://jsdoc.app/"),a("OutboundLink")],1)])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("属性（变量）注释")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n \n  * 属性（变量）说明\n   \n  * @type {类型}\n   \n  */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);