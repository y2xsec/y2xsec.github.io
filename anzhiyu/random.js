var posts=["2023/09/30/复现靶场/weblogic/","2023/09/30/博客/第一篇博客/","2023/09/30/复现靶场/shiro/","2023/09/30/博客/如何写博客/","2023/09/30/应急响应靶机练习/第一次做应急win2008/","2023/09/30/渗透靶机练习/vulnhub-hackme/","2023/09/30/渗透靶机练习/vulnhub-Pinky's Palace v3/","2023/09/30/渗透靶机练习/vulnhub-hackme2/","2023/09/30/渗透靶机练习/红日靶场1/","2023/09/30/渗透靶机练习/红日靶场2/","2023/09/30/小迪安全/小迪安全（AWD红蓝对抗）/80：红蓝对抗-AWD模式&准备&攻防&监控&批量/","2023/09/30/小迪安全/小迪安全（AWD红蓝对抗）/81：红蓝对抗-AWD监控&不死马&垃圾包&资源库/","2023/09/30/CTF练习/ctfshow/RCE/","2023/09/30/小迪安全/小迪安全（Web漏洞篇）/33-逻辑越权之水平越权/","2023/09/30/小迪安全/小迪安全（AWD红蓝对抗）/82：红蓝对抗-蓝队att&ck&IDS&蜜罐&威胁情报/","2023/09/30/小迪安全/小迪安全（Web漏洞篇）/34-WEB漏洞-逻辑越权之登录脆弱及支付篡改/","2023/09/30/小迪安全/小迪安全（Web漏洞篇）/35-WEB漏洞-逻辑越权之找回机制及接口安全/","2023/09/30/小迪安全/小迪安全（Web漏洞篇）/36-WEB漏洞-逻辑越权之验证码与Token及接口/","2023/09/30/小迪安全/小迪安全（SRC挖掘）/86：SRC挖掘-教育行业平台&规则&批量自动化/","2023/09/30/小迪安全/小迪安全（内网篇）/66-内网安全-域横向批量at&schtasks&impacket/","2023/09/30/小迪安全/小迪安全（SRC挖掘）/88：SRC挖掘-拿下CNVD证书开源&闭源&售卖系统/","2023/09/30/小迪安全/小迪安全（内网篇）/67-内网安全-域横向smb&wmi明文或hash传递/","2023/09/30/小迪安全/小迪安全（内网篇）/65-内网安全-域环境&工作组&局域网探针方案/","2023/09/30/小迪安全/小迪安全（内网篇）/69-内网安全-域横向CobaltStrike&SPN&RDP/","2023/09/30/小迪安全/小迪安全（内网篇）/68-内网安全-域横向PTH&PTK&PTT哈希票据传递/","2023/09/30/小迪安全/小迪安全（内网篇）/70-内网安全-域横向内网漫游Socks代理隧道技术/","2023/09/30/小迪安全/小迪安全（应急响应）/72：内网安全-应急响应初识/","2023/09/30/小迪安全/小迪安全（内网篇）/71-内网安全-域横向网络&传输&应用层隧道技术/","2023/09/30/小迪安全/小迪安全（内网篇）/72-内网安全-域横向CS&MSF联动及应急响应初识/","2023/09/30/小迪安全/小迪安全（应急响应）/73：应急响应-WEB分析php&javaweb&自动化工具/","2023/09/30/小迪安全/小迪安全（应急响应）/75：应急响应-数据库&漏洞口令检索&应急取证箱/","2023/09/30/小迪安全/小迪安全（应急响应）/74：应急响应-win&linux分析后门&勒索病毒&攻击/","2023/09/30/小迪安全/小迪安全（权限提升）/60：权限提升-MY&MS&ORA等SQL数据库提权/","2023/09/30/小迪安全/小迪安全（权限提升）/59：权限提升-Win溢出漏洞及AT&SC&PS提权/","2023/09/30/小迪安全/小迪安全（权限提升）/58：权限提升-网站权限后台漏洞第三方获取/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};