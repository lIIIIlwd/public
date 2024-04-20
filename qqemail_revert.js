// for (i = 0; i < 3600 * 5; i + 10) {
//     QMAjax.send("/cgi-bin/mail_mgr", { method: "POST", content: ["sid=", getSid(), "&mailaction=mail_revert&t=mail_mgr2&timekey=", (1698465600 + i), "&logtype=2"].join('') });
//     QMAjax.send("/cgi-bin/do", { method: "POST", content: ["sid=", getSid(), "&action=checkpoint&url=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Fmail_list%3Fsid%3D0r3MM4Cw9Nb0UjJU%26folderid%3D1%26folderkey%3D1%26page%3D0%26s%3Dinbox%26topmails%3D0%26showinboxtop%3D1%26ver%3D333481.2%26cachemod%3Dmaillist%26cacheage%3D7200%26r%3D1713523618231"].join('') });

//     console.log('Taking a break...');
//     await new Promise(resolve => setTimeout(resolve, 1000));
// }

// ======================================== 调用脚本 ==============================================================
// 假设你的脚本URL支持查询字符串参数  
const baseUrl = 'https://raw.githubusercontent.com/lIIIIlwd/public/master/qqemail_revert.js?t='+encodeURIComponent("2023-10-27 12:00:00")
console.log(baseUrl);
fetch(baseUrl)
    .then(response => response.text())
    .then(scriptText => {
        const script = document.createElement('script');
        script.textContent = scriptText;
        document.body.appendChild(script);
        // script.remove();
    })
    .catch(error => console.error('Error fetching script:', error));

// ======================================== 脚本执行 ==============================================================
console.log(window.myParam);
return 1;
// 开始时间  
const simplifiedDateString = "2023-10-27 12:00:00";
// 开始时间戳
const secondsTimestamp = simplifiedDateToSecondsTimestamp(simplifiedDateString);
console.log(simplifiedDateString); 	// 输出秒级时间戳


// 使用示例：从当前时间戳开始，到1小时后的时间戳结束，每10秒发送一个请求  
const startTimestamp = secondsTimestamp;
const endTimestamp = startTimestamp + 3600 * 6; // 1小时后  
const intervalInSeconds = 10; // 每10秒  

traverseTimestamps(startTimestamp, endTimestamp, intervalInSeconds);

function simplifiedDateToSecondsTimestamp(dateString) {
    // 根据简化的日期时间格式构建Date对象  
    const parts = dateString.split(' ');
    const dateParts = parts[0].split('-');
    const timeParts = parts[1].split(':');

    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // JavaScript的月份是从0开始的  
    const day = parseInt(dateParts[2], 10);
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);

    // 创建Date对象  
    const date = new Date(year, month, day, hours, minutes, seconds);

    // 获取毫秒级时间戳并转换为秒  
    const millisecondsTimestamp = date.getTime();
    const secondsTimestamp = Math.round(millisecondsTimestamp / 1000);

    return secondsTimestamp;
}

function sendAjaxForTimestamp(timestamp) {
    QMAjax.send("/cgi-bin/mail_mgr", { method: "POST", content: ["sid=", getSid(), "&mailaction=mail_revert&t=mail_mgr2&timekey=", timestamp, "&logtype=2"].join('') });
    QMAjax.send("/cgi-bin/do", { method: "POST", content: ["sid=", getSid(), "&action=checkpoint&url=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Fmail_list%3Fsid%3D0r3MM4Cw9Nb0UjJU%26folderid%3D1%26folderkey%3D1%26page%3D0%26s%3Dinbox%26topmails%3D0%26showinboxtop%3D1%26ver%3D333481.2%26cachemod%3Dmaillist%26cacheage%3D7200%26r%3D1713523618231"].join('') });
}

function traverseTimestamps(startTimestamp, endTimestamp, intervalInSeconds) {
    let currentTimestamp = startTimestamp;
    const intervalInMilliseconds = intervalInSeconds * 1000;

    while (currentTimestamp <= endTimestamp) {
        sendAjaxForTimestamp(currentTimestamp);
        currentTimestamp += intervalInMilliseconds;
        console.log('Taking a break...');
        sleep(1);
    }
}

function sleepFn(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(m) {
    await sleepFn(m * 1000);
} 