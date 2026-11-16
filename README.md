# 卫戍协议 阵容配装器

明日方舟「卫戍协议·规程」的阵容配装和查询工具。打开就能用，不用登录，手机也能用：<https://dazauzai.github.io/ak-sweep/>

- 选干员，实时看激活了哪些盟约、还差几人
- 本局禁用：截图识别（可以直接粘贴），被禁的干员自动划掉
- 阵容推荐：76 套攻略阵容，分阶段写了怎么运营，按本局禁用排序
- 技能推荐、每套阵容的叠层核心和能帮忙叠层的干员
- 保存自己的阵容和思路，生成链接分享
- 资料库：出怪规律（怪组、隐藏分、各回合约出几只）、特训敌人、领袖、装备、策略

玩家自制，非官方，免费，没有广告。数据来自游戏客户端数据和 PRTS wiki（prts.wiki）；PRTS wiki 的内容按「知识共享 署名-非商业性使用-相同方式共享」授权，本项目从中整理出的数据沿用同一协议。

阵容和技能推荐整理自 B 站 UP 主的攻略，页面底部有署名和原视频链接。如果你是被收录的 UP 主，想改动或撤下自己的内容，提 issue 说一声就行。

问题和建议请提 issue。

## 致谢

这个工具里的阵容、技能推荐和机制说明，都来自下面这些作者和项目，谢谢他们。

**攻略作者**（B 站）

- [白樱iridescent](https://space.bilibili.com/1358014912)：9 套阵容（奥术精准莱塔尼亚、奥术迅捷乌萨斯、森蚺乌萨斯自动沙砾机、精灵奥森蚺、变形者集群莱塔尼亚、复奏一本流、坚守维多利亚、六狙击镜大丑森蚺、三本伊比利亚），技能推荐，通用叠层卡的名单，通用经济卡的名单，key 牌
- [-录音机-](https://space.bilibili.com/74385129)：7 套阵容（涤火杰西卡维多利亚、炎（三炎获得时 / 六炎爆条）、谢拉格（大小初雪冻结叠层）、阿戈尔（吞噬链叠层）、森蚺大丑卡西米尔、佩佩鸿雪萨尔贡、安洁莉娜刷新叙拉古），key 牌
- [春风满马](https://space.bilibili.com/239384911)：4 套阵容（三对四莱塔尼亚、塔露拉乌萨斯、Pith 叠本家阿戈尔、小盟约（精准奥术灵巧））
- [澈澈Fault](https://space.bilibili.com/352320387)：3 套阵容（莱塔尼亚（大嘴莫布）、大帝焰尾卡西米尔、精准伊比利亚）
- [取之_有道](https://space.bilibili.com/456103645)：2 套阵容（精灵奥远见森蚺、二本不屈森蚺卡西米尔）
- [迭讷](https://space.bilibili.com/1127053104)：2 套阵容（冰块承曦格雷伊谢拉格、坚守聚合谢拉格）
- [柠檬味の小小猪](https://space.bilibili.com/21341812)：2 套阵容（杰西卡乌萨斯轮椅、精准叙拉古）
- [某中二的鸽子](https://space.bilibili.com/271481714)：2 套阵容（三本停留卡西米尔、2 本狙击镜大丑森蚺）
- [一罐方舟冰可乐](https://space.bilibili.com/26722119)：2 套阵容（灵巧不屈阿戈尔、转职逻各斯莱塔尼亚）
- [春分只想说乐](https://space.bilibili.com/1175284326)：2 套阵容（坚守双蓝毒大嘴伊比利亚、芬发牌四排团队）
- [重生之冰](https://space.bilibili.com/183240100)：2 套阵容（精灵远见小盟约、聚合协防小盟约）
- [W-涂鸦電塔](https://space.bilibili.com/211859767)：1 套阵容（贾维叙拉古）
- [橘紫灰黄](https://space.bilibili.com/535123594)：1 套阵容（大变伊比利亚）
- [霜月无极](https://space.bilibili.com/1067721798)：1 套阵容（佩佩萨尔贡）
- [我是谁压实度](https://space.bilibili.com/28860267)：1 套阵容（歌蕾蒂娅阿戈尔）
- [叚意的据点](https://space.bilibili.com/630957573)：1 套阵容（三精准裁度叙拉古）
- [一只木木夕_](https://space.bilibili.com/116012004)：1 套阵容（低本苏苏洛伊比利亚）
- [止肾宝](https://space.bilibili.com/699953704)：1 套阵容（渡桥策略）
- [自在道爷](https://space.bilibili.com/581695)：1 套阵容（百炼嘉维尔卡西米尔）
- [旺呦仔boyoujji](https://space.bilibili.com/3747570012655391)：1 套阵容（变形者维多利亚）
- [消逝的火花](https://space.bilibili.com/258913739)：1 套阵容（Pith 灵巧炎维）
- [MR流星飞](https://space.bilibili.com/272882289)：1 套阵容（速本歌蕾蒂娅阿戈尔）
- [阿粥不吃苦](https://space.bilibili.com/3546695960890001)：1 套阵容（双塞雷娅坚守维多利亚）
- [蒙太麟](https://space.bilibili.com/628934952)：1 套阵容（Pith 灵巧聚合阿戈尔）
- [龙哥哥今天又鸽了](https://space.bilibili.com/37804608)：1 套阵容（铃兰投资人大炎）
- [千海羽_YG](https://space.bilibili.com/2960413)：1 套阵容（雅拉四本莱塔尼亚）
- [泽泽z-](https://space.bilibili.com/500575134)：1 套阵容（变形者莱萨（莱塔尼亚 + 萨尔贡））
- [空气在说话](https://space.bilibili.com/383181379)：1 套阵容（不屈灵巧大丑森蚺）
- [寒小克-](https://space.bilibili.com/1072100090)：1 套阵容（聚合协防大丑森蚺）
- [anghii亮](https://space.bilibili.com/679408537)：1 套阵容（灵巧兜底森蚺）
- [白哲pure](https://space.bilibili.com/436983214)：1 套阵容（卖血速本大炎）
- [博南くらげ](https://space.bilibili.com/3546606940981996)：1 套阵容（缪尔赛思速本阿戈尔）
- [Christmas-Kyon](https://space.bilibili.com/1242846877)：1 套阵容（森蚺大丑三炎）
- [点点滴滴路](https://space.bilibili.com/1965413)：1 套阵容（拜松四本大炎）
- [冻月QWQ](https://space.bilibili.com/495992318)：1 套阵容（雅拉佩佩精灵萨聚奥）
- [尔今于安](https://space.bilibili.com/262081694)：1 套阵容（复奏大炎）
- [风吹腿毛飞-](https://space.bilibili.com/12147075)：1 套阵容（雅拉小盟约转职流）
- [久城kazuya](https://space.bilibili.com/3860125)：1 套阵容（蓝毒三本伊比利亚）
- [久痴梦](https://space.bilibili.com/247744731)：1 套阵容（杜遥夜聚合灵巧炎）
- [爱吃芒果的硫酸铜](https://space.bilibili.com/4839763)：1 套阵容（罗素深巡坚守兜底）
- [总之就是个NPC](https://space.bilibili.com/2136363119)：1 套阵容（双聚合阿戈尔）
- [诺的誓约](https://space.bilibili.com/13592464)：1 套阵容（铃兰二本谢拉格）
- [闻笛喵乐](https://space.bilibili.com/128716315)：1 套阵容（三本远程点杀陈）
- [无垠深空EV](https://space.bilibili.com/386765688)：1 套阵容（纯二本不屈灵巧大丑）
- [羡星呀](https://space.bilibili.com/441728555)：1 套阵容（老鲤策略）
- [星河依尘](https://space.bilibili.com/356649462)：1 套阵容（一本囤卡渡桥）
- [天上星际大牛](https://space.bilibili.com/21655356)：1 套阵容（二本轮椅狙击镜森蚺）
- [bili_在雨中奔跑的帅哥](https://space.bilibili.com/588664480)：1 套阵容（远见奇迹大丑森蚺）
- [终结之暗](https://space.bilibili.com/14754578)：1 套阵容（耶拉坚守迅捷谢拉格）
- [有毒的粽子](https://space.bilibili.com/2208740)：1 套阵容（苏苏洛坚守维多利亚）
- [青云_YunQing](https://space.bilibili.com/612749349)：技能推荐
- [抱小老虎的伯爵](https://space.bilibili.com/234267968)：技能推荐
- [小鬼卡比](https://space.bilibili.com/259571179)：key 牌
- [Gein_Gry](https://space.bilibili.com/1934769065)：key 牌

**机制研究**

- [黑蓑影卫攻略组《卫戍协议是如何控制出怪的？》](https://www.bilibili.com/video/BV11BW26KEZE)：怪组和每回合的分数池
- [路标月报《卫戍协议敌人生成机制深度解析》](https://www.bilibili.com/video/BV1BrWQ6zEnX)：按波次算每回合出几只

**数据**

- [PRTS wiki](https://prts.wiki/)：干员、盟约的资料和图片
- [ArknightsGameData](https://github.com/Kengxxiao/ArknightsGameData)：敌人、装备、策略、关卡等游戏数据表

也谢谢提过问题和建议的玩家。

## 版权

代码按 MIT 许可证发布，见 [LICENSE](LICENSE)。MIT 只管代码，不包括下面这些：

- 从 PRTS wiki 整理的数据沿用「知识共享 署名-非商业性使用-相同方式共享」协议
- 阵容和技能推荐的攻略内容归各位 UP 主
- 游戏素材的版权归上海鹰角网络科技有限公司

《明日方舟》由上海鹰角网络科技有限公司开发。干员头像、盟约图标等游戏素材的版权归上海鹰角网络科技有限公司所有，仅供个人交流使用，不作商业用途。如有侵权请联系删除。
