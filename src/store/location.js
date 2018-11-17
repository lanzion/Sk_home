var href =  window.location.origin + window.location.pathname+'?origin='+'&vscf='+vscf
          

            
var str = window.location.origin + '/member/LoginShopOuath?origin='+origin+'&vscf='+vscf+'&redict='+ escape(href)

// var str =  'http://192.168.0.120:8003/member/LoginShopOuath?origin='+origin+'&vscf='+vscf+'&redict='+ escape(href)

str = str.replace("membercode", "membercode_temp")
  window.location.href = 'https://gdtvshop.weixinmvp.com/OAuth/Server/GetMemberCode.aspx'+ "?goto=" + escape(str)