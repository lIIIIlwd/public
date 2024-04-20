for(i=0;i<3600*5;i+10){
	QMAjax.send("/cgi-bin/mail_mgr",{method:"POST",content:["sid=",getSid(),"&mailaction=mail_revert&t=mail_mgr2&timekey=",(1698465600+i),"&logtype=2"].join('')});
	QMAjax.send("/cgi-bin/do",{method:"POST",content:["sid=",getSid(),"&action=checkpoint&url=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Fmail_list%3Fsid%3D0r3MM4Cw9Nb0UjJU%26folderid%3D1%26folderkey%3D1%26page%3D0%26s%3Dinbox%26topmails%3D0%26showinboxtop%3D1%26ver%3D333481.2%26cachemod%3Dmaillist%26cacheage%3D7200%26r%3D1713523618231"].join('')});

	console.log('Taking a break...');  
	await new Promise(resolve => setTimeout(resolve, 1000));
}