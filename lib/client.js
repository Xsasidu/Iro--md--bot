//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                          ██╗ ██████╗ ██╗███████╗    ███╗   ███╗ ██████╗                              //
//                          ██║ ██╔══██╗██║██╔════╝    ████╗ ████║ ██╔══██╗                             //
//                          ██║ ██████╔╝██║███████╗    ██╔████╔██║ ██║  ██║                             //
//                          ██║ ██╔══██╗██║╚════██║    ██║╚██╔╝██║ ██║  ██║                             //
//                          ██║ ██║  ██║██║███████║    ██║ ╚═╝ ██║ ██████╔╝                             //
//                          ╚═╝ ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝                              //
//                                                                                                      //
//                                          BY: VENOX-SENPAI                                            //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : IRIS-MD
* @Developer : Venox-Senpai
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Venox-Senpai

**/















const _0x5b9530=_0x2bf4;(function(_0xe339d6,_0x2bfc71){const _0x50855c=_0x2bf4,_0x16c8e9=_0xe339d6();while(!![]){try{const _0x37d533=parseInt(_0x50855c(0xc4))/0x1+-parseInt(_0x50855c(0xc6))/0x2+parseInt(_0x50855c(0xc0))/0x3+parseInt(_0x50855c(0xda))/0x4+parseInt(_0x50855c(0xc1))/0x5*(-parseInt(_0x50855c(0xbf))/0x6)+parseInt(_0x50855c(0xcf))/0x7+-parseInt(_0x50855c(0xd8))/0x8*(parseInt(_0x50855c(0xce))/0x9);if(_0x37d533===_0x2bfc71)break;else _0x16c8e9['push'](_0x16c8e9['shift']());}catch(_0x350823){_0x16c8e9['push'](_0x16c8e9['shift']());}}}(_0x213e,0x1f688));const _0x563347=(function(){let _0x1d17a4=!![];return function(_0x6d8e45,_0x165bfd){const _0x37a3d6=_0x1d17a4?function(){const _0x3d2a9f=_0x2bf4;if(_0x165bfd){const _0x45e9ec=_0x165bfd[_0x3d2a9f(0xd7)](_0x6d8e45,arguments);return _0x165bfd=null,_0x45e9ec;}}:function(){};return _0x1d17a4=![],_0x37a3d6;};}()),_0x3c7f7=_0x563347(this,function(){const _0x3e3676=_0x2bf4;return _0x3c7f7[_0x3e3676(0xc3)]()[_0x3e3676(0xbe)](_0x3e3676(0xca))[_0x3e3676(0xc3)]()[_0x3e3676(0xc5)](_0x3c7f7)[_0x3e3676(0xbe)]('(((.+)+)+)+$');});_0x3c7f7();const {writeExifImg,writeExifVid,imageToWebp,videoToWebp}=require('./functions.js');class Client{constructor(_0x521d3f){for(let _0x4c0a11 in _0x521d3f){this[_0x4c0a11]=_0x521d3f[_0x4c0a11];}}async[_0x5b9530(0xcd)](_0x3bcc66){const _0x44c851=_0x5b9530;_0x3bcc66[_0x44c851(0xd2)]?await this['sendPresenceUpdate']('recording',_0x3bcc66[_0x44c851(0xc9)]['remoteJid']):await this[_0x44c851(0xd4)](_0x44c851(0xd1),_0x3bcc66[_0x44c851(0xc9)]['remoteJid']);var _0x5ab1dc=await this[_0x44c851(0xc2)](_0x3bcc66[_0x44c851(0xc9)][_0x44c851(0xd9)],_0x3bcc66[_0x44c851(0xcc)],{'messageId':_0x3bcc66[_0x44c851(0xc9)]['id']});return this['ev'][_0x44c851(0xd5)](_0x44c851(0xd3),{'messages':[_0x3bcc66],'type':'append'}),_0x5ab1dc;}async['sendImageAsSticker'](_0x599c6e,_0x1c5111,_0x421857={}){const _0xa4a567=_0x5b9530;let _0x3601bc;_0x421857&&(_0x421857[_0xa4a567(0xd0)]||_0x421857[_0xa4a567(0xcb)])?_0x3601bc=await writeExifImg(_0x1c5111,_0x421857):_0x3601bc=await imageToWebp(_0x1c5111),await this[_0xa4a567(0xc7)](_0x599c6e,{'sticker':{'url':_0x3601bc},..._0x421857},_0x421857);}async[_0x5b9530(0xd6)](_0x6abeb4,_0x5b8b9c,_0x2be58e={}){const _0x522611=_0x5b9530;let _0x27bf2a;_0x2be58e&&(_0x2be58e[_0x522611(0xd0)]||_0x2be58e[_0x522611(0xcb)])?_0x27bf2a=await writeExifVid(_0x5b8b9c,_0x2be58e):_0x27bf2a=await videoToWebp(_0x5b8b9c),await this[_0x522611(0xc7)](_0x6abeb4,{'sticker':{'url':_0x27bf2a},..._0x2be58e},_0x2be58e);}}exports[_0x5b9530(0xc8)]=Client;function _0x2bf4(_0x2571e4,_0x3a7b04){const _0x573a00=_0x213e();return _0x2bf4=function(_0x3c7f7,_0x563347){_0x3c7f7=_0x3c7f7-0xbe;let _0x213e6f=_0x573a00[_0x3c7f7];return _0x213e6f;},_0x2bf4(_0x2571e4,_0x3a7b04);}function _0x213e(){const _0x38771d=['audioMessage','messages.upsert','sendPresenceUpdate','emit','sendVideoAsSticker','apply','19176oifeJs','remoteJid','421460eogdLp','search','14334IaOZXp','360528iVDOdc','15ZmEArj','relayMessage','toString','83764uofojw','constructor','368132kIODkJ','sendMessage','Client','key','(((.+)+)+)+$','author','message','relayWAMessage','747HWIRTb','1466689yDzIpe','packname','composing'];_0x213e=function(){return _0x38771d;};return _0x213e();}
