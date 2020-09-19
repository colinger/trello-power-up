var GRAY_ICON = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/252/top-arrow_1f51d.png';

const fetch = require('node-fetch');

var onDoneBtnClick = function (t, opts) {
    // t.list('all')
    // .then(function (board) {
    //   console.log(JSON.stringify(board, null, 2));
    // });
   return t.card('all').then(function (card) { 
        // console.log(JSON.stringify(card, null, 2));
        fetch('https://api.trello.com/1/cards/'+card.id+'?key=%%APP_KEY%%&token=%%TOKEN%%',{
            method: 'PUT',
            body: JSON.stringify({
                dueComplete: true,
                idList: '5f4c64f6812a2719e38eb563'
            }),
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(JSON.stringify(data, null, 2))
        });
    });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // but of course, you could also just kick off to a url if that's your thing
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/docomo/205/heavy-check-mark_2714.png',
      text: '完成',
      callback: onDoneBtnClick,
      condition: 'edit'
    }];
  }
}, 
{
    appName: 'MyTool',
    appKey: '3223224f4dacfccedd728fac62c4352d'
});
