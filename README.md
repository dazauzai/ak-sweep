# 卫戍协议 阵容配装器

明日方舟「卫戍协议·规程」的阵容配装和查询工具。打开就能用，不用登录，手机也能用：<https://dazauzai.github.io/ak-sweep/>

- 选干员，实时看激活了哪些盟约、还差几人
- 本局禁用：截图识别（可以直接粘贴），被禁的干员自动划掉
- 阵容推荐：39 套攻略阵容，分阶段写了怎么运营，按本局禁用排序
- 技能推荐、每套阵容的叠层核心和能帮忙叠层的干员
- 保存自己的阵容和思路，生成链接分享
- 资料库：出怪规律（怪组、隐藏分、各回合约出几只）、特训敌人、领袖、装备、策略

玩家自制，非官方，免费，没有广告。数据来自游戏客户端数据和 PRTS wiki（prts.wiki）；PRTS wiki 的内容按「知识共享 署名-非商业性使用-相同方式共享」授权，本项目从中整理出的数据沿用同一协议。

阵容和技能推荐整理自 B 站 UP 主的攻略，页面底部有署名和原视频链接。如果你是被收录的 UP 主，想改动或撤下自己的内容，提 issue 说一声就行。

问题和建议请提 issue。

## 致谢

这个工具里的阵容、技能推荐和机制说明，都来自下面这些作者和项目，谢谢他们。

**攻略作者**（B 站）

- [白樱iridescent](https://space.bilibili.com/1358014912)：7 套阵容（奥术精准莱塔尼亚、奥术迅捷乌萨斯、森蚺乌萨斯自动沙砾机、精灵奥森蚺、变形者集群莱塔尼亚、复奏一本流、坚守维多利亚），技能推荐，通用叠层卡的名单，通用经济卡的名单，key 牌
- [-录音机-](https://space.bilibili.com/74385129)：3 套阵容（涤火杰西卡维多利亚、炎（三炎获得时 / 六炎爆条）、谢拉格（大小初雪冻结叠层）），key 牌
- [澈澈Fault](https://space.bilibili.com/352320387)：2 套阵容（莱塔尼亚（大嘴莫布）、大帝焰尾卡西米尔）
- [取之_有道](https://space.bilibili.com/456103645)：2 套阵容（精灵奥远见森蚺、二本不屈森蚺卡西米尔）
- [某中二的鸽子](https://space.bilibili.com/271481714)：2 套阵容（三本停留卡西米尔、2 本狙击镜大丑森蚺）
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
- [迭讷](https://space.bilibili.com/1127053104)：1 套阵容（冰块承曦格雷伊谢拉格）
- [MR流星飞](https://space.bilibili.com/272882289)：1 套阵容（速本歌蕾蒂娅阿戈尔）
- [柠檬味の小小猪](https://space.bilibili.com/21341812)：1 套阵容（杰西卡乌萨斯轮椅）
- [阿粥不吃苦](https://space.bilibili.com/3546695960890001)：1 套阵容（双塞雷娅坚守维多利亚）
- [一罐方舟冰可乐](https://space.bilibili.com/26722119)：1 套阵容（灵巧不屈阿戈尔）
- [蒙太麟](https://space.bilibili.com/628934952)：1 套阵容（Pith 灵巧聚合阿戈尔）
- [龙哥哥今天又鸽了](https://space.bilibili.com/37804608)：1 套阵容（铃兰投资人大炎）
- [千海羽_YG](https://space.bilibili.com/2960413)：1 套阵容（雅拉四本莱塔尼亚）
- [泽泽z-](https://space.bilibili.com/500575134)：1 套阵容（变形者莱萨（莱塔尼亚 + 萨尔贡））
- [空气在说话](https://space.bilibili.com/383181379)：1 套阵容（不屈灵巧大丑森蚺）
- [寒小克-](https://space.bilibili.com/1072100090)：1 套阵容（聚合协防大丑森蚺）
- [anghii亮](https://space.bilibili.com/679408537)：1 套阵容（灵巧兜底森蚺）
- [春分只想说乐](https://space.bilibili.com/1175284326)：1 套阵容（坚守双蓝毒大嘴伊比利亚）
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

《明日方舟》由上海鹰角网络科技有限公司开发。干员头像、盟约图标等游戏素材的版权归上海鹰角网络科技有限公司所有，仅供个人交流使用，不作商业用途。如有侵权请联系删除。
