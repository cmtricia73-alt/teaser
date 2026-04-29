function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YQgc2fKRjR":
        Script1();
        break;
      case "60UcGNjaRi1":
        Script2();
        break;
      case "6CE0PLkb80z":
        Script3();
        break;
      case "6IlbTT7WhGw":
        Script4();
        break;
      case "690odScOgo7":
        Script5();
        break;
      case "6hxGW7IekFm":
        Script6();
        break;
      case "5xNmowoLDsv":
        Script7();
        break;
      case "680np4Sx4NJ":
        Script8();
        break;
      case "5e2rENr5oU1":
        Script9();
        break;
      case "6eAetDLlTji":
        Script10();
        break;
      case "6ItDir2TdO2":
        Script11();
        break;
      case "5nDIgEIfw6C":
        Script12();
        break;
      case "5vB4oCrxo7j":
        Script13();
        break;
      case "6Lo5IPp9DrK":
        Script14();
        break;
      case "6Vxpek7gUup":
        Script15();
        break;
      case "6ZA3WVzx8NG":
        Script16();
        break;
      case "5iJUTbaZ7rK":
        Script17();
        break;
      case "5maODYy4ESx":
        Script18();
        break;
      case "5iXSOaO3aWw":
        Script19();
        break;
      case "6VcidsvWucH":
        Script20();
        break;
      case "5gvKISHk2Qo":
        Script21();
        break;
      case "5phZXjq2T3B":
        Script22();
        break;
      case "646VHsTJffD":
        Script23();
        break;
      case "5aUO8VqBCTV":
        Script24();
        break;
      case "6d7Nfj1tm1d":
        Script25();
        break;
      case "5ZRYtr7jgKa":
        Script26();
        break;
      case "6hhqRyUtPEU":
        Script27();
        break;
      case "6aSdFa9QUQ6":
        Script28();
        break;
      case "5g1iAMsYbQ0":
        Script29();
        break;
      case "6kD7zMtC1nF":
        Script30();
        break;
      case "6YK2S0EDHKr":
        Script31();
        break;
      case "6TXzdtvdClq":
        Script32();
        break;
      case "6PDC2okrCxD":
        Script33();
        break;
      case "5Xpeq1W02Wb":
        Script34();
        break;
      case "6cTPtApVOuE":
        Script35();
        break;
      case "6Oe0wja92pC":
        Script36();
        break;
      case "6kwimwxsk9i":
        Script37();
        break;
      case "6Cb6ANzvo5v":
        Script38();
        break;
      case "67CL3oZuYnY":
        Script39();
        break;
      case "5nP8fVCpDj1":
        Script40();
        break;
      case "5X7HkI36Zaq":
        Script41();
        break;
      case "5V5oIU9uUSs":
        Script42();
        break;
      case "6k4I0drumrZ":
        Script43();
        break;
      case "6puZNM4xCLm":
        Script44();
        break;
      case "69LkDMfbPoP":
        Script45();
        break;
      case "6mXpoVB5MBv":
        Script46();
        break;
      case "5nQjGlBGYFi":
        Script47();
        break;
      case "676YCPP5X1A":
        Script48();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5vLMPPh8LfZ');
const duration = 2250;
const easing = 'ease-out';
const id = '5z48GKjcrbE';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5vLMPPh8LfZ');
const duration = 750;
const easing = 'ease-out';
const id = '5xPQurMLCVD';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5vLMPPh8LfZ');
const duration = 750;
const easing = 'ease-out';
const id = '686oTr7aApj';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5rB7IEomXQV');
const duration = 2250;
const easing = 'ease-out';
const id = '6Cg1AaDIMoI';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5rB7IEomXQV');
const duration = 750;
const easing = 'ease-out';
const id = '5ZrkswJJTE3';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5rB7IEomXQV');
const duration = 750;
const easing = 'ease-out';
const id = '6AZI5npMhZh';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5YGUtBnktw7');
const duration = 3500;
const easing = 'ease-out';
const id = '5oEzUe0Vzxv';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5YGUtBnktw7');
const duration = 750;
const easing = 'ease-out';
const id = '5XpjouQBuU6';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5YGUtBnktw7');
const duration = 750;
const easing = 'ease-out';
const id = '6EQuX3uBlAk';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('64MpKAZaEBF');
const duration = 2250;
const easing = 'ease-out';
const id = '61EtUAohu9v';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('64MpKAZaEBF');
const duration = 750;
const easing = 'ease-out';
const id = '6c3a0uYFSPI';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('64MpKAZaEBF');
const duration = 750;
const easing = 'ease-out';
const id = '5XAmDDPwVxh';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5tJcOPwxUop');
const duration = 2250;
const easing = 'ease-out';
const id = '6XORwcF3lbj';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5tJcOPwxUop');
const duration = 750;
const easing = 'ease-out';
const id = '6Ir2QKMHORY';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5tJcOPwxUop');
const duration = 750;
const easing = 'ease-out';
const id = '671gff963CN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6AY37RD1cOX');
const duration = 2250;
const easing = 'ease-out';
const id = '5yNimI6BzTW';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6AY37RD1cOX');
const duration = 750;
const easing = 'ease-out';
const id = '6p1h7bwACPu';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6AY37RD1cOX');
const duration = 750;
const easing = 'ease-out';
const id = '5tSnIx59TDn';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5n4uXL53rf4');
const duration = 2250;
const easing = 'ease-out';
const id = '5rzNyE0xQXL';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5n4uXL53rf4');
const duration = 750;
const easing = 'ease-out';
const id = '5zbR3qePu13';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5n4uXL53rf4');
const duration = 750;
const easing = 'ease-out';
const id = '6EU1sCD6AWc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6YV6StlpHT9');
const duration = 2250;
const easing = 'ease-out';
const id = '5ZFHovB45lb';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6YV6StlpHT9');
const duration = 750;
const easing = 'ease-out';
const id = '6hz0ogW3J75';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6YV6StlpHT9');
const duration = 750;
const easing = 'ease-out';
const id = '6DkZFkC1Ud1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5kQ04bSaMCD');
const duration = 2250;
const easing = 'ease-out';
const id = '5ZYQBDWTtTL';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5kQ04bSaMCD');
const duration = 750;
const easing = 'ease-out';
const id = '6Y4t7DffYKP';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5kQ04bSaMCD');
const duration = 750;
const easing = 'ease-out';
const id = '5rxVTbXmYlj';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6GazYGQsENk');
const duration = 2250;
const easing = 'ease-out';
const id = '6eCWzke0Und';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6GazYGQsENk');
const duration = 750;
const easing = 'ease-out';
const id = '5rvwuRtB5St';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6GazYGQsENk');
const duration = 750;
const easing = 'ease-out';
const id = '6K3hUbUkqbQ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6KiD3KojXlI');
const duration = 2250;
const easing = 'ease-out';
const id = '6Et0FrkaRa0';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6KiD3KojXlI');
const duration = 750;
const easing = 'ease-out';
const id = '5dtjQnJqzu0';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6KiD3KojXlI');
const duration = 750;
const easing = 'ease-out';
const id = '6562bqMuWRe';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6owYXGD2Hp3');
const duration = 2250;
const easing = 'ease-out';
const id = '6XxQI7x70Ua';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6owYXGD2Hp3');
const duration = 750;
const easing = 'ease-out';
const id = '5oVOUNCwoT3';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6owYXGD2Hp3');
const duration = 750;
const easing = 'ease-out';
const id = '6iLnzIfYCaq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6Xugfi720gE');
const duration = 2250;
const easing = 'ease-out';
const id = '5jLNy3EgZnM';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6Xugfi720gE');
const duration = 750;
const easing = 'ease-out';
const id = '6jmwAfNS0bm';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6Xugfi720gE');
const duration = 750;
const easing = 'ease-out';
const id = '6bgcxLfKlAo';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5ztLyUaaWhC');
const duration = 2250;
const easing = 'ease-out';
const id = '6mium6CyPfu';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5ztLyUaaWhC');
const duration = 750;
const easing = 'ease-out';
const id = '66et4JS9jES';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('5ztLyUaaWhC');
const duration = 750;
const easing = 'ease-out';
const id = '5vQP9PFl2cl';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('64pJMIOl0pB');
const duration = 2250;
const easing = 'ease-out';
const id = '6ThfCqOIuLw';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('64pJMIOl0pB');
const duration = 750;
const easing = 'ease-out';
const id = '6As2LaRK08p';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('64pJMIOl0pB');
const duration = 750;
const easing = 'ease-out';
const id = '5gg6p7CptzZ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6qeKk9Ble9S');
const duration = 2250;
const easing = 'ease-out';
const id = '6H0ymfcMNFe';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6qeKk9Ble9S');
const duration = 750;
const easing = 'ease-out';
const id = '5WP1WXHQe9Q';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6qeKk9Ble9S');
const duration = 750;
const easing = 'ease-out';
const id = '5xI9RJxndYL';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
