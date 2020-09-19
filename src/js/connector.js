var GRAY_ICON = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/252/top-arrow_1f51d.png';

var onSortBtnClick = function (t, opts) {
  console.log('Someone clicked the sort button');
  console.log(JSON.stringify(t));
};
var onDoneBtnClick = function (t, opts) {
   return t.card('all').then(function (card){
    console.log(JSON.stringify(card, null, 2));
    //card.id
    fetch('https://api.trello.com/1/cards/'+card.id+'?key=%%APP_KEY%%&token=%%TOKEN%%',{
        method: 'PUT',
        headers: {
            'Accept': 'application/json'
        },
        body: {"dueComplete":true}
    })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data, null, 2)));
   });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: '排序',
      callback: onSortBtnClick,
      condition: 'edit'
    }, {
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
