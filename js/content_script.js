var itv
var emo = /emo1/;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.type=='on'){
        itv = setInterval(function () {
            document.querySelectorAll('.b-danmaku:not(.verified)').forEach(function (ele) {
                
                $.ajax({
                    url: "http://127.0.0.1:7777/index",
                    type: "POST",
                    dataType: "text",
                    data: ele.textContent,
                    success: function (data) {
                      console.log(data)
                    }
                    })

                if(!emo.test(ele.className))ele.className += ' emo1 verified'
                //if(!emo.test(ele.className))ele.className += ' emo1 verified'
            },200)
        });
        
    }
    else{
        clearInterval(itv);
    }
    sendResponse(console.log("状态变更"))
});
