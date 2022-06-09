// $("#toggle").click(function(){
//     if (this.checked){
//         alert('checked')
//     }
//     else {
//         alert('unchecked')
//     }
// })
toggle = document.querySelector("#toggle")

document.addEventListener('DOMContentLoaded', function () {
  // 切换弹幕屏蔽状态
  toggle.addEventListener('change', () => {
    if(toggle.checked) sendMessageToContentScript({ type: 'on' });
    else sendMessageToContentScript({ type: 'off' });
  });
});

// 向content_scripts发送消息的函数
function sendMessageToContentScript(message, callback) {
  // 这里用到了tabs，所以前面配置文件需要配置"permissions": ["tabs"]
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      if (callback) callback(response);
    });
  });
}
