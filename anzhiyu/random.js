var posts=["2023/11/10/复现靶场/fastjson/","2023/09/30/复现靶场/shiro/","2023/09/30/博客/第一篇博客/","2023/09/30/博客/如何写博客/","2023/09/30/复现靶场/weblogic/","2023/09/30/渗透靶机练习/vulnhub-Pinky's Palace v3/","2023/09/30/渗透靶机练习/vulnhub-hackme/","2023/09/30/渗透靶机练习/vulnhub-hackme2/","2023/09/30/应急响应靶机练习/第一次做应急win2008/","2023/09/30/渗透靶机练习/红日靶场2/","2023/09/30/渗透靶机练习/红日靶场1/","2023/11/05/CTF练习/swpuctf/swpuctf 2023/","2023/11/03/CTF练习/ctfshow/七夕杯/","2023/09/30/CTF练习/ctfshow/RCE/","2023/10/09/CTF练习/buuctf/re/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};