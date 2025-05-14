(function () {
    'use strict';
    
    const UNACCEPT_PREFIX = 4; // префикс отказано
    const ACCEPT_PREFIX = 8; // префикс одобрено
    const PIN_PREFIX = 2; // префикс закрепить
    const NARASMOTRENII_PREFIX = 2; // Жалоба на рассмотрении
    const COMMAND_PREFIX = 10; // команде проекта
    const CLOSE_PREFIX = 7; // префикс закрыто
    const DECIDED_PREFIX = 6; // префикс решено
    const WATCHED_PREFIX = 9; // рассмотрено
    const TEX_PREFIX = 13; // техническому специалисту
    const GA_PREFIX = 12; // Главному администратору
    const NO_PREFIX = 0;
    const server = "Yellow";

   //       prefix: ACCEPT_PREFIX,
   //       status: false,

chrome.storage.local.get(["NickName"], (getNickName) => { 
    chrome.storage.local.get(["Rank"], (getRank) => {    
        chrome.storage.local.get(["Active"], (getActive) => { 
            chrome.storage.local.get(["Rules"], (getRules) => {

  console.log("Exstension BR Helper enabled: ",getActive.Active);
  console.log("Your NickName: ",getNickName.NickName);
  console.log("Your Rank: ",getRank.Rank);
  console.log("Your Permission: ",getRules.Rules);

 const nickname = getNickName.NickName;
 const rang = getRank.Rank;
 const active = getActive.Active;
 const permission = getRules.Rules;
    let buttons;

 if (active == true) {

    // PERMISSION FOR ADMINISTRATOR
    if (permission == "admin") {
     buttons = [
                 {
            title: `Текущий NickName: ${nickname}`,
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },

        {
            title: 'Для Администрации Сервера',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
    {
      title: 'Жалоба на рассмотрении',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} взял вашу жалобу на рассмотрение.<br>Просьба ожидать ответа и не создавать дубликаты данной темы.[/CENTER]<br>` +
        '[Color=Flame][CENTER]Ожидайте ответа.[/I][/CENTER][/color][/FONT]<br>' +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>',
    },
      {
     title: 'Правила Role Play процесса',
     dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Нонрп поведение',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
         `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][FONT=georgia][I][B]Нарушитель будет наказан по пункту правил: [Color=Red]2.01[/COLOR]. Запрещено поведение, нарушающее нормы процессов Role Play режима игры | [Color=Red]Jail 30 минут [/color][/FONT][/I][/B][/CENTER] " +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/color]<br> ' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]' ,
    },
    {
      title: 'Уход от РП',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил:[Color=Red]2.02[/COLOR]. Запрещено целенаправленно уходить от Role Play процесса всеразличными способами | [Color=Red]Jail 30 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'nRP Drive',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.03[/color]. Запрещен NonRP Drive — вождение любого транспортного средства в невозможных для него условиях, а также вождение в неправдоподобной манере | [Color=Red]Jail 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
      title: 'NonRP Обман',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.05[/color]. Запрещены любые OOC обманы и их попытки, а также любые IC обманы с нарушением Role Play правил и логики | [Color=Red]PermBan[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    
      },
    {
      title: 'Аморал действия',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.08[/color]. Запрещена любая форма аморальных действий сексуального характера в сторону игроков | [Color=Red]Jail 30 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Слив склада',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.09[/color]. Запрещено сливать склад фракции / семьи путем взятия большого количестве ресурсов, или же брать больше, чем разрешили на самом деле | [Color=Red]Ban 15 - 30 дней / PermBan[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
       },
    {
      title: 'DB',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.13[/color]. Запрещен DB (DriveBy) — намеренное убийство / нанесение урона без веской IC причины на любом виде транспорта | [Color=Red]Jail 60 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'RK',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.14[/color]. Запрещен RK (Revenge Kill) — убийство игрока с целью мести, возвращение на место смерти в течение 15-ти минут, а также использование в дальнейшем информации, которая привела Вас к смерти | [Color=Red]Jail 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'TK',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` + 
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.15[/color]. Запрещен TK (Team Kill) — убийство члена своей или союзной фракции, организации без наличия какой-либо IC причины | [Color=Red]Jail 60 минут / Warn[/color] ([Color=Orange]за два и более убийства[/color])[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +        
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'SK',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.16[/color]. Запрещен SK (Spawn Kill) — убийство или нанесение урона на титульной территории любой фракции / организации, на месте появления игрока, а также на выходе из закрытых интерьеров и около них | [Color=Red]Jail 60 минут / Warn[/color] ([Color=Orange]за два и более убийства[/color]).[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'PG',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.17[/color]. Запрещен PG (PowerGaming) — присвоение свойств персонажу, не соответствующих реальности, отсутствие страха за свою жизнь | [Color=Red]Jail 30 минут[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'MG',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.18[/color]. Запрещен MG (MetaGaming) — использование ООС информации, которую Ваш персонаж никак не мог получить в IC процессе | [Color=Red]Mute 30 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'DM',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` + 
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.19[/color]. Запрещен DM (DeathMatch) — убийство или нанесение урона без веской IC причины | [Color=Red]Jail 60 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Mass DM',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.20[/color]. Запрещен Mass DM (Mass DeathMatch) — убийство или нанесение урона без веской IC причины трем игрокам и более | [Color=Red]Warn / Ban 3 - 7 дней[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Сторонне ПО',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][FONT=georgia][B][I]Нарушитель будет наказан по пункту правил: [Color=Red]2.22[/color]. Запрещено хранить / использовать / распространять стороннее программное обеспечение или любые другие средства, позволяющие получить преимущество над другими игроками | [Color=Red] Ban 15 - 30 дней / PermBan[/color] <br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Реклама сторонних ресурсов',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.31[/color]. Запрещено рекламировать на серверах любые проекты, серверы, сайты, сторонние Discord-серверы, YouTube каналы и тому подобное | [Color=Red]Ban 7 дней / PermBan[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оск адм',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.54[/color]. Запрещено неуважительное обращение, оскорбление, неадекватное поведение, угрозы в любом проявлении по отношению к администрации. | [Color=Red]Mute 180 минут[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Уяз.правил',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.33[/color]. Запрещено пользоваться уязвимостью правил | [Color=Red]Ban 15 дней[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Уход от наказания',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.34[/color]. Запрещен уход от наказания | [Color=Red]Ban 15 - 30 дней[/color]([Color=Orange]суммируется к общему наказанию дополнительно[/color])[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Сбив ЗЗ + DM',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
         `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.55[/color]. Запрещается багоюз связанный с анимацией в любых проявлениях. | [Color=Red]Jail 60 / 120 минут[/color].[/CENTER]<br>" +
            "[CENTER][Color=Red]Примечание[/color]: если игрок, используя баг, убирает ограничение на использование оружия в зеленой зоне, сбивает темп стрельбы, либо быстро перемещается во время войны за бизнес или во время перестрелки на мероприятии с семейными контейнерами, последует наказание в виде Jail на 120 минут. Данное наказание используется в случаях, когда, используя ошибку, было получено преимущество перед другими игроками.[/CENTER]<br>" +
            '[CENTER][Color=Red]Примечание[/color]: если игрок использует баги, связанные с анимацией, и при этом не влияет на игровой процесс других игроков, а также не получает преимущество перед другими игроками, последует наказание в виде Jail на 60 минут.[CENTER]<br>' +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'IC и OCC угрозы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.35[/color]. На игровых серверах запрещено устраивать IC и OOC конфликты на почве разногласия о национальности и / или религии совершенно в любом формате | [Color=Red]Mute 120 минут / Ban 7 дней[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'IC конфликты в OOC',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.36[/color]. Запрещено переносить конфликты из IC в OOC и наоборот | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Угрозы OOC',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пункту правил: [Color=Red]2.37[/color]. Запрещены OOC угрозы, в том числе и завуалированные | [Color=Red]Mute 120 минут / Ban 7 дней [/color]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Злоуп наказаниями',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Нарушитель будет наказан по пункту правил: [Color=Red]2.39[/color]. Злоупотребление нарушениями правил сервера | [Color=Red]Ban 7 - 30 дней [/color][/CENTER]" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оск проекта',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.40[/color]. Запрещены совершенно любые деструктивные действия по отношению к проекту: неконструктивная критика, призывы покинуть проект, попытки нарушить развитие проекта или любые другие действия, способные привести к помехам в игровом процессе | [Color=Red]Mute 300 минут / Ban 30 дней[/color] ([Color=Cyan]Ban выдается по согласованию с главным администратором[/color])[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Продажа промо',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` + 
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.43[/color]. Запрещена продажа / обмен / покупка поощрительной составляющей от лица проекта, будь то бонус-код, либо промокод, который выдается безвозмездно игрокам в целях промоакций | [Color=Red]Mute 120 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ЕПП Фура - инк',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.47[/color]. Запрещено ездить по полям на грузовом транспорте, инкассаторских машинах (работа дальнобойщика, инкассатора) | [Color=Red]Jail 60 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Покупка фам.репы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.48[/color]. Продажа или покупка репутации семьи любыми способами, скрытие нарушителей, читеров лидером семьи. | [Color=Red]Обнуление рейтинга семьи / Обнуление игрового аккаунта лидера семьи[/color]<br>" +
        "[CENTER][Color=Orange]Примечание[/color]: скрытие информации о продаже репутации семьи приравнивается к [Color=Red]пункту правил 2.24.[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Помеха РП процессу',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.51[/color]. Запрещено вмешательство в Role Play процесс с целью помехи и препятствования дальнейшего развития Role Play процесса | [Color=Red]Jail 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нонрп аксессуары',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.52[/color]. Запрещено располагать аксессуары на теле персонажа, нарушая нормы морали и этики, увеличивать аксессуары до слишком большого размера. | [Color=Red]При первом нарушении - обнуление аксессуаров, при повторном нарушении - обнуление аксессуаров + JAIL 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Мат/Оск название предмета',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.53[/color]. Запрещено устанавливать названия для внутриигровых ценностей с использованием нецензурной лексики, оскорблений, слов политической или религиозной наклонности | [Color=Red]Ban 1 день / При повторном нарушении обнуление бизнеса[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Неув обр. к адм',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.54[/color]. Запрещено неуважительное обращение, оскорбление, неадекватное поведение, угрозы в любом их проявлении по отношению к администрации | [Color=Red]Mute 180 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Баг аним',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +        
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.55[/color]. Запрещается багоюз связанный с анимацией в любых проявлениях. | [Color=Red]Jail 60 / 120 минут [/color]<br>" +
            "[Color=Orange]Пример[/color]: если Нарушитель, используя баг, убирает ограничение на использование оружия в зеленой зоне, сбивает темп стрельбы, либо быстро перемещается во время войны за бизнес или во время перестрелки на мероприятии с семейными контейнерами, последует наказание в виде [Color=Red]Jail на 120 минут[/COLOR]. <br>" +
                "Данное наказание используется в случаях, когда, используя ошибку, было получено преимущество перед другими игроками. <br>" +
                    "[Color=Orange]Пример[/color]: если Нарушитель использует баги, связанные с анимацией, и при этом не влияет на игровой процесс других игроков, а также не получает преимущество перед другими игроками, последует наказание в виде [Color=Red]Jail на 60 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Помеха работе',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.04[/color]. Запрещены любые действия способные привести к помехам в игровом процессе, а также выполнению работ, если они этого не предусматривают и если эти действия выходят за рамки игрового процесса данной работы. | [Color=Red]Ban 10 дней / Обнуление аккаунта (при повторном нарушении)[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
     },
     {
       title: 'Попытка обмана',
       content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
       '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
       "[CENTER]Нарушитель будет наказан, запрещены любые попытки nRP обмана | [Color=Red]Ban 30[/color].[/CENTER]<br>" +
       '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Продажа ИВ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.28[/color]. Запрещена покупка/продажа внутриигровой валюты в любых ее проявлениях за реальные деньги | [Color=Red]PermBan с обнулением аккаунта + ЧС проекта[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Правила игровых чатов',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
     title: 'Транслит',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.01[/color]. Общепризнанный язык сервера — русский. Общение в IC чатах во всех Role Play ситуациях обязательно должно проходить исключительно на русском языке | [Color=Red]Устное замечание / Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
      },
    {
      title: 'Капс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.02[/color]. Запрещено использование верхнего регистра (CapsLock) при написании любого текста в любом чате | [Color=Red]Mute 30 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оск в ООС',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.03[/color]. Любые формы оскорблений, издевательств, расизма, дискриминации, религиозной враждебности, сексизма в OOC чате запрещены | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br> '+
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оск/Упом родни',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил:[Color=Red]3.04[/color]. Запрещено оскорбление или косвенное упоминание родных вне зависимости от чата (IC или OOC) | [Color=Red]Mute 120 минут / Ban 7 - 15 дней[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Флуд',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.05[/color]. Запрещен флуд — 3 и более повторяющихся сообщений от одного и того же игрока | [Color=Red]Mute 30 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Злоуп знаками',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.06[/color]. Запрещено злоупотребление знаков препинания и прочих символов | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br> '+
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оскорбление',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.07[/color]. Запрещены совершенно любые оскорбления или действия, порочащие честь и достоинства, несущие в себе подтекст сексуального характера вне зависимости от чата | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
        title: 'Редактирование в л/ц',
        content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]4.04[/color]. Запрещено редактировать поданные объявления в личных целях заменяя текст обьявления на несоответствующий отправленному игроком | [Color=Red]Ban 7 дней + Чс Организации[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Слив СМИ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.08[/color]. Запрещены любые формы «слива» посредством использования глобальных чатов | [Color=Red]PermBan[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Угрозы о наказании со стороны адм',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.09[/color]. Запрещены любые угрозы о наказании игрока со стороны администрации | [Color=Red]Mute 30 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
     },
     {
      title: 'Выдача себя за адм ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.10[/color]. Запрещена выдача себя за администратора, если таковым не являетесь | [Color=Red]Ban 7 - 15 + ЧС администрации[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Ввод в заблуждение',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил [Color=Red]3.11[/color]. Запрещено введение игроков проекта в заблуждение путем злоупотребления командами | [Color=Red]Ban 15 - 30 дней / PermBan[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Репорт Капс + Оффтоп + Транслит',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.12[/color]. Запрещено подавать репорт написанный транслитом, с сообщением не по теме (Offtop), с включенным Caps Lock и повторять обращение (если ответ был уже дан ранее) | [Color=Red]Report Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Музыка в войс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.14[/color]. Запрещено включать музыку в Voice Chat | [Color=Red]Mute 60 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Оск/Упом род в войс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.15[/color]. Запрещено оскорблять игроков или родных в Voice Chat | [Color=Red]Mute 120 минут / Ban 7 - 15 дней[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br> '+
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Шум в войс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.16[/color]. Запрещено создавать посторонние шумы или звуки | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Реклама в VOICE',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.17[/color]. Запрещена реклама в Voice Chat не связанная с игровым процессом | [Color=Red]Ban 7 - 15 дней[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'ОСК НА ДР.ЯЗЫКЕ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.01[/color]. Общепризнанный язык сервера — русский. Общение в IC чатах во всех Role Play ситуациях обязательно должно проходить исключительно на русском языке | [Color=Red]Устное замечание / Mute 30 минут[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Религиозное и политическая пропаганда',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.18[/color].  Запрещено политическое и религиозное пропагандирование, а также провокация игроков к конфликтам, коллективному флуду или беспорядкам в любом из чатов | [Color=Red]Mute 120 минут / Ban 10 дней[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br> '+
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
          },
    {
      title: 'Реклама промо',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.21[/color]. Запрещается реклама промокодов в игре, а также их упоминание в любом виде во всех чатах. | [Color=Red]Ban 30 дней[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Торговля на тт госс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]3.22[/color]. Запрещено публиковать любые объявления в помещениях государственных организаций вне зависимости от чата (IC или OOC) | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br> '+
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Положение об игровых аккаунтах',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Мульти-аккаунт [3+]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]4.04[/color]. Разрешается зарегистрировать максимально только три игровых аккаунта на сервере | [Color=Red]PermBan[/color].<br>" +
            "[Color=Orange]Примечание[/color]: блокировке подлежат все аккаунты созданные после третьего твинка.[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' + 
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Фейк аккаунт',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]4.10[/color]. Запрещено создавать никнейм, повторяющий или похожий на существующие никнеймы игроков или администраторов по их написанию | [Color=Red]Устное замечание + смена игрового никнейма / PermBan[/color].[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Активность ТК',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил:<br>4.14. Запрещено, имея транспортную или строительную компанию не проявлять активность в игре. | [Color=Red]Обнуление компании без компенсации[/color][/CENTER]<br>" +
            "[Color=Orange]Примечание[/color]: минимальный онлайн для владельцев строительных и транспортных компаний — 7 часов в неделю активной игры (нахождение в nRP сне не считается за активную игру).<br>" +
            "[Color=Orange]Примечание[/color]: если не заходить в игру в течении 5-ти дней, не чинить транспорт в ТК, не проявлять активность в СК - компания обнуляется автоматически.<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
     title: 'ГС/ЗГС ГОСС/ЛД',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
        {
      title: 'Одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]К лидеру были приняты необходимые меры.[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
            {
      title: 'Отказано',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Не вижу нарушений со стороны Лидера.[/CENTER]<br>" +
        '[Color=Lime][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
     title: 'ГС/ЗГС АП',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
        {
      title: 'Одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]К Агенту Поддержки были приняты необходимые меры.[/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
            {
      title: 'Отказано',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Не вижу нарушений со стороны Агента Поддержки.[/CENTER]<br>" +
        '[Color=Lime][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Передача жалоб',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Техническому Спец.',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        "[CENTER]Ваша жалоба была передана на рассмотрение техническому специалисту.[/CENTER]<br>" +
        '[Color=Flame][CENTER]Ожидайте ответа.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ГА',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        "[CENTER]Ваша жалоба была передана на рассмотрение Главному Администратору.[/CENTER]<br>" +
        '[Color=Flame][CENTER]Ожидайте ответа.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Спец. Администратору',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        "[CENTER]Ваша жалоба была передана на рассмотрение Специальному администратору.[/CENTER]<br>" +
        '[Color=Flame][CENTER]Ожидайте ответа.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Правила Госс.Структур',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Работа в форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]1.07[/color]. Всем сотрудникам государственных организаций запрещено выполнять работы где-либо в форме, принадлежащей своей фракции | [Color=Red]Jail 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Исп. фрак т/с в личных целях',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]1.08[/color]. Запрещено использование фракционного транспорта в личных целях | [Color=Red]Jail 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'НПРО [Объявления]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]4.01[/color]. Запрещено редактирование объявлений, не соответствующих ПРО | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'НППЭ [Эфиры]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]4.02[/color]. Запрещено проведение эфиров, не соответствующих Role Play правилам и логике | [Color=Red]Mute 30 минут[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Задержание в интерьере',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по данному пункту правил: [Color=Red]2.50[/color]. Запрещены задержания, аресты, а также любые действия со стороны игроков, состоящих во фракциях в интерьере аукциона, казино, а также во время системных мероприятий  | [Color=Red]Ban 7 - 15 дней + увольнение из организации[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/CENTER][/color] <br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ДМ от УМВД',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]6.01[/color]. Запрещено наносить урон игрокам без Role Play причины на территории УМВД | [Color=Red]Jail 60 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
          },
    {
      title: 'Розыск без причины [УМВД]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]6.02[/color]. Запрещено выдавать розыск без Role Play причины | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нонрп поведение[УМВД]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]6.03[/color]. Запрещено nRP поведение | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ДМ от ГИБДД',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]7.01[/color]. Запрещено наносить урон игрокам без Role Play причины на территории ГИБДД | [Color=Red]Jail 60 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ДМ от МО',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]2.02[/color]. Запрещено наносить урон игрокам, которые находятся вне территории воинской части, запрещено. | [Color=Red]Jail 60 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Штраф | Розыск [ГИБДД]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]7.02[/color]. Запрещено выдавать розыск, штраф без Role Play причины | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Розыск без причины [ГИБДД]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]6.02[/color]. Запрещено выдавать розыск без Role Play причины | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Лишение В/У во время погони [ГИБДД]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]7.04[/color]. Запрещено отбирать водительские права во время погони за нарушителем | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'ДМ от ФСБ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]8.01[/color]. Запрещено наносить урон игрокам без Role Play причины на территории ФСБ | [Color=Red]DM / Jail 60 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Розыск без причины [ФСБ]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]8.02[/color]. Запрещено выдавать розыск без Role Play причины | [Color=Red]Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Урон на территории ФСИН без причины',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан по пунтку правил: [Color=Red]9.01[/color]. Запрещено наносить урон игрокам без Role Play причины на территории ФСИН | [Color=Red]Jail 60 минут / Warn[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Правила ОПГ',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Нарушение правил ВЧ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан за нарушение правил нападения на [Color=Orange]Воинскую Часть,[/color] выдаётся предупреждение | [Color=Red]Jail 30 минут (NonRP нападение) / Warn (Для сотрудников ОПГ)[/color][/CENTER]<br>" +
        '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
      prefix: ACCEPT_PREFIX,
      status: false,
    },
    {
      title: 'Нападение на ВЧ через стену',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан нападение на [Color=Orange]Военную часть[/color] разрешено только через блокпост КПП с последовательностью взлома | [Color=Red]Warn NonRP В/Ч[/color][/CENTER]<br>" +
         '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Похищение | Ограбление',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушитель будет наказан за NonRP Ограбление/Похищениее в соответствии с этими правилами [URL='https://forum.blackrussia.online/index.php?threads/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BE%D0%B3%D1%80%D0%B0%D0%B1%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B8-%D0%BF%D0%BE%D1%85%D0%B8%D1%89%D0%B5%D0%BD%D0%B8%D0%B9.29/']Кликабельно[/URL][/CENTER]<br>" +
         '[Color=Lime][CENTER]Одобрено, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Отсутствие пункта жалоб',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
     {
         title: 'Уже наказан',
         content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
         '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
           "[CENTER][I][SIZE=5][FONT=courier new] [/FONT][/SIZE][SIZE=4][FONT=courier new]Данный игрок уже наказан.[/FONT][/SIZE][/I][/CENTER]<br>" +
         '[Color=Red][CENTER] Решено! [/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
     },
    {

            title: 'Отыгровка при наручниках',
            content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
            '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
            "[CENTER][I][SIZE=5][FONT=courier new] [/FONT][/SIZE][SIZE=4][FONT=courier new]При надевании наручников рп отыгровка отыгрывается автоматически.[/FONT][/SIZE][/I][/CENTER]<br>" +
            '[Color=Red][CENTER] Решено! [/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
        },
     {
            title: 'Оск в РП чат',
            content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
            '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
            "[CENTER][B][I][FONT=courier new]Оскорбление в рп чат является рп процессом![/FONT]<br>" +
            '[COLOR=red][FONT=courier new]Решено,закрыто![/FONT][/COLOR][/I][/B][/CENTER]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
        },
    {
      title: 'Нарушений не найдено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Нарушений со стороны данного игрока не было найдено.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
        },
    {
      title: 'Сборка на док-вах',
 content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
  "[CENTER]Вы используете не оригинальные файлы игры (сборку), поэтому ваша жалоба не подлежит рассмотрению.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
       },
    {
      title: 'Недостаточно доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Недостаточно доказательств на нарушение от данного игрока. Доказательства должны быть предоставлены в хорошем качестве и с полным процессом сделки или нарушения от какого-либо игрока.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Дублирование темы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Дублирование темы. Если вы дальше будете заниматься данной деятельностью (дублированием тем), то ваш форумный аккаунт будет заблокирован на 3 дня и более.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Фотохостинги',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Доказательства должны быть загружены на yapx - postimg - imgBB - Imgur - YouTube и прочие фото-видео хостинги.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'В жалобы на адм',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Вы ошиблись разделом. Обратитесь в раздел [Color=Red]Жалобы на администрацию[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'В обжалования',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Вы ошиблись разделом. Обратитесь в раздел [Color=Red]Обжалование наказаний[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Тема не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша жалоба составлена не по форме. Убедительная просьба ознакомиться [Color=Red]с правилами подачи жалоб на игроков[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нету /time',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]На ваших доказательствах отсутствует /time.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Требуются TimeCode в фрапсе',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша жалоба отказана, т.к в ней нету таймкодов. Если видео длится больше 3-ех минут - Вы должны указать таймкоды нарушений.[/CENTER]<br>" +
        '[CENTER][SPOILER="Пример"]<br>' +
        "1:56 - условия сделки<br>" +
        '2:34 - Сделка<br>' +
        "3:50 - Игрок выходит из игры[/SPOILER][/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Заголовок не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][FONT=Georgia][I]Заголовок вашей жалобы составлен не по форме. Убедительная просьба ознакомиться [Color=Red]с правилами подачи жалоб на игроков[/color].[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
      {
      title: 'Более 72 часов',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]С момента получения наказания прошло более 72 часов[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
      {
      title: 'Доква через запрет соц сети',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]3.6. Прикрепление доказательств обязательно. <br>" +
            "[Color=Orange]Примечание[/color]: загрузка доказательств в соц. сети (ВКонтакте, instagram) запрещается, доказательства должны быть загружены на фото/видео хостинги (YouTube, Япикс, imgur).[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Обмен трейд (В ДОЛГ/ЗАЙМ)',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Согласно пункту правил: [Color=Red]2.57[/color]. Запрещается брать в долг игровые ценности и не возвращать их | [Color=Red]Ban 30 дней / permban[/color][/CENTER]<br>" +
        "[Color=Red]Примечание[/color]: займ может быть осуществлен только через зачисление игровых ценностей на банковский счет, максимальный срок займа 30 календарных дней, если займ не был возвращен, аккаунт должника блокируется. В данном случае нарушений со стороны игрока нет.<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нету условий сделки',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]В данных доказательствах отсутствуют условия сделки[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нужен фрапс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]В таких случаях нужен фрапс[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нужен фрапс + промотка чата',
      content:
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]В таких случаях нужен фрапс + промотка чата.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'В жалобы на Лд',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Вы ошиблись разделом. Обратитесь в раздел [Color=Red]Жалобы на лидеров[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Нужна промотка чата',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]В таких случаях нужна промотка чата.[/CENTER]" +
         '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Неполный фрапс',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Фрапс обрывается. Загрузите полный фрапс на ютуб.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Не работают доква',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Не работают доказательства[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Доква отредактированы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваши доказательства отредактированы.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'От 3-го лица',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Жалобы от 3-их лиц не принимаются.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Ответный ДМ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]В случае ответного ДМ нужен видеозапись. Пересоздайте тему и прикрепите видеозапись.[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Ошиблись разделом',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        "[CENTER]Вы ошиблись сервером/разделом, переподайте жалобу в нужный раздел.[/CENTER]<br>",
    },
    {
      title: 'Обратитесь в жб на сотруд.',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        "[CENTER]Вы ошиблись разделом, переподайте свою жалобу в раздел жалоб на сотрудников организации.[/CENTER]<br>",
    },
    {
      title: '/try не для игр',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
         `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Система [Color=Red]/try[/color] не предназначена для игр на деньги, это не команда для определения победителя.[/CENTER]<br>" +
        "[CENTER]Данная команда служит для отыгровки действий (как /me) только имеет шансы на [Color=Lime]Удачно[/color] и [Color=Red]Неудачно[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Док-ва не рабочие/обрезаны',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваши доказательства не рабочие/обрезанные, перезалейте их правильно и без обрезаний.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
        title: 'Не доказать',
        content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
         '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
          "[CENTER]На данный момент невозможно доказать вину игрока.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
        title: 'Дублирование темы 2 раз',
        content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
         '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
          "[CENTER]Ответ дан в прошлой жалобе.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
        title: 'Читы, Баг с зз',
        content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
         '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
          "[CENTER]В данном случае у игрока произошел баг с зеленой зоной.[/CENTER]<br>" +
        '[CENTER]Если игрок использует читы. то у него снимается здоровье и резко восстанавливается.[/CENTER]<br>' +
        "[CENTER]Тут ни снимается, ни восстонавливается.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
      {
        title: 'Нет Доказательств',
        content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
         '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
          "[CENTER]В вашей жалобе отсутствуют какие-либо доказательства.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Role Play биографии',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
      {
      title: 'Биография одобрена',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Lime]Одобрено.[/I][/CENTER][/color][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Есть биография на доработке',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]У вас уже имеется RolePlay биография на рассмотрении, работайте там.[/CENTER]<br>" +
        '[Color=Red][CENTER] Отказано, закрыто.[/I][CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Биография Скопирована',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография скопирована/украдена.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Отказ [Больше Информации]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Red]Отказано.[/color]<br>Добавьте больше информации о себе в новой биографии.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Заголовок не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][FONT=Georgia][I]Заголовок вашей RolePlay биографии составлен не по форме. Убедительная просьба ознакомиться [Color=Red]с правилами подачи RolePlay биографии[/color].[/CENTER]" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
      },
      {
      title: 'Отказ [3е лицо]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Red]Отказано.[/color]<br>Причиной отказа могло послужить создание биографии от 3го лица.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Отказ [Ошибки]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Red]Отказано.[/color]<br>Причиной отказа могло послужить большое количество грамматических ошибок.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Отказ [Возраст и Дата]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Red]Отказано.[/color]<br>Причиной отказа могло послужить несовпадение возраста и даты рождения.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Биография пустая',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша RolePlay биография практически пуста. Рекомендую подумать над новым сценарием вашего игрового персонажа. Не забудьте ознакомиться с правилами подачи биографии в этом разделе.[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Отказ [18 лет]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП биография получает статус: [Color=Red]Отказано.[/color]<br>Причина отказа: минимальный возраст для составления биографии: 18 лет.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Тема не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Биографию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша [Color=Red]RolePlay[/color] биография составлена не по форме. Убедительная просьба ознакомиться [Color=Red]с правилами подачи RolePlay биографии[/color].[/CENTER]<br>" +
        '[Color=Red][CENTER]Отказано, закрыто.[/I][/CENTER][/color][/FONT]<br>' +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Role Play ситуации',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'РП ситуация одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Ситуацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП ситуация получает статус: [Color=Lime]Одобрено.[/I][/CENTER][/color][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'РП ситуация на доработке',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Ситуацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Вам даётся 24 часа на дополнение вашей РП ситуации[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
      },
    {
      title: 'РП ситуация отказ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу РП Ситуацию, и готов вынести вердикт:[/CENTER]<br>` +
       "[CENTER]Ваша РП ситуация получает статус: [Color=Red]Отказано.[/color]<br>Причиной отказа могло послужить какое-либо нарушение из Правила RP ситуаций[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
     title: 'Неофициал. орг',
dpstyle: 'oswald: 3px;     color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
    },
    {
      title: 'Неофициальная Орг Одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу Неофициальную РП Организацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП организация получает статус: [Color=Lime]Одобрено.[/I][/CENTER][/color][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Неофициальная Орг на дороботке',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу Неофициальную РП Организацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Вам даётся 24 часа на дополнение вашей Неофициальная Орг[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Неофициальная Орг отказ',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу Неофициальную РП Организацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER]Ваша РП организация получает статус: [Color=Red]Отказано.[/color]<br>Причиной отказа могло послужить какое-либо нарушение из Правила создания неофициальной RolePlay организации.[/CENTER][/FONT]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
      {
      title: 'Неофициальная Орг запрос активности',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} пересмотрел вашу Неофициальную РП Организацию, и готов вынести вердикт:[/CENTER]<br>` +
          "[CENTER][B][I][FONT=georgia]Ваша неофициальная РП организация может быть закрыта по пункту правил: Неактив в топике организации более недели, он закрывается. Прикрепите отчёт о активности организации в виде скриншотов. Через 24 часа если отчёта не будет или он будет некорректный организация будет закрыта.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
      title: 'Неофициальная Орг закрытие [Нету активности]',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый {{ user.mention }}.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} пересмотрел вашу Неофициальную РП Организацию, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Активность не была предоставлена. Организация закрыта.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    }
    ];  
    }

   if (permission == "leader") {
    // PERMISSION FOR LEADER
    buttons = [
                 {
            title: `Текущий NickName: ${nickname}`,
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },

        {
            title: 'Для Лидеров',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Одобрено.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
         {
      title: 'Одобрено БВС',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Одобрено.<br>Ожидайте одобрения АБ БВС.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Рассмотрение',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: На Рассмотрении.<br>Ожидайте ответа.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
           {
      title: 'Отказано',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },  
        {
            title: 'Отказать по причинам:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Ваша заявка составлена не по форме.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Нету /time',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: На скриншоте нету /time.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Ошибся разделом',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Вы ошиблись разделом![/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },    
     {
      title: 'Не рабочие доказательства',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства не открываются/работают.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Нету доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нету доказательств.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Противоречие в Заявке/Доквах',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Вашей заявке противоречие.<br>(К примеру никнейм в заявке пользователь1 а на скриншоте никнейм пользователь2)[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'nRP NickName',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: У вас nRP NickName.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Доказательства старые',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Ваши доказательства старые.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Недостаточно доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Недостаточно доказательств.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Нет доверия',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нет доверия.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Отказать в повышении:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Недостаточно работы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Недостаточно доказательств проделанной работы.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Чужие доказательства',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства проделанной работы которой вы предоставили не ваши.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Доказательства старые',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства проделанной работы старые.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Ранг не совпадает',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина:  Ваш ранг не соответствует заявке.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Отказать в БВС:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
             {
      title: 'nRP NickName',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина:  У вас nRP NickName.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Нету ссылки на VK',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нету ссылки на VK либо она недействительная.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Нету фрапса стрельбы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина:  Нету фрапса вашей стрельбы.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
         {
      title: 'Фрапс не работает',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Фрапс вашей стрельбы не работает.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
            {
            title: 'Отказать в переводе:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
                 {
      title: 'Нету одобрения ЛД/СС',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нету скриншота одобрения перевода от Лидера/Заместителя.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
             {
      title: 'Не соответсвует критериям',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Вы не соответствуете минимальным критериям для перевода к нам.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Отказать в жалобе:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
         {
      title: 'Недостаточно доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша жалоба получает статус: Отказано.<br>Причина: Недостаточно доказательств нарушения со стороны сотрудника.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Нету нарушения',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша жалоба получает статус: Отказано.<br>Причина: Не вижу нарушения со стороны сотрудника.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Ответ в кабинет:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
               {
      title: 'Благодарность',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        "[CENTER][B][I][FONT=georgia]Благодарю за пожелание![/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    ];
}

    if (permission == "staff") {
    // PERMISSION FOR STAFF
     buttons = [
                 {
            title: `Текущий NickName: ${nickname}`,
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },

        {
            title: 'Для Старшего Состава',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Одобрено',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Одобрено.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Рассмотрение',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: На Рассмотрении.<br>Ожидайте ответа.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Отказано',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },  
    {
            title: 'Отказать по причинам:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Не по форме',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Ваша заявка составлена не по форме.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
           {
      title: 'Нету /time',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: На скриншоте нету /time.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Ошибся разделом',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Вы ошиблись разделом![/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },    
     {
      title: 'Не рабочие доказательства',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства не открываются/работают.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Нету доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нету доказательств.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Противоречие в Заявке/Доквах',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Вашей заявке противоречие.<br>(К примеру никнейм в заявке пользователь1 а на скриншоте никнейм пользователь2)[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'nRP NickName',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: У вас nRP NickName.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Доказательства старые',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Ваши доказательства старые.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Недостаточно доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Недостаточно доказательств.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
   {
      title: 'Нет доверия',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нет доверия.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
             {
      title: 'Не соответсвует критериям',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Вы не соответствуете минимальным критериям для вступления к нам.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
    {
            title: 'Отказать в повышении:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
   {
      title: 'Недостаточно работы',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Недостаточно доказательств проделанной работы.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Чужие доказательства',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства проделанной работы которой вы предоставили не ваши.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Доказательства старые',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Доказательства проделанной работы старые.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
     {
      title: 'Ранг не совпадает',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина:  Ваш ранг не соответствует заявке.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
            {
            title: 'Отказать в переводе:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
                 {
      title: 'Нету одобрения ЛД/СС',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Нету скриншота одобрения перевода от Лидера/Заместителя.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
             {
      title: 'Не соответсвует критериям',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу заявку, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша заявка получает статус: Отказано.<br>Причина: Вы не соответствуете минимальным критериям для перевода к нам.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Отказать в жалобе:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
         {
      title: 'Недостаточно доказательств',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша жалоба получает статус: Отказано.<br>Причина: Недостаточно доказательств нарушения со стороны сотрудника.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
       {
      title: 'Нету нарушения',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        `[CENTER]Я ${rang} ${nickname} рассмотрел вашу жалобу, и готов вынести вердикт:[/CENTER]<br>` +
        "[CENTER][B][I][FONT=georgia]Ваша жалоба получает статус: Отказано.<br>Причина: Не вижу нарушения со стороны сотрудника.[/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
        {
            title: 'Ответ в кабинет:',
            dpstyle: 'oswald: 3px; color: #fff; background: #FF4500; box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),0 2px 2px 0 rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2); border: none; border-color: #FF4500',
        },
               {
      title: 'Благодарность',
      content:
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]<br>' +
        '[Color=rgb(222, 143, 255)][FONT=Georgia][CENTER][I]{{ greeting }}, уважаемый игрок.[/color][/CENTER]<br>' +
        "[CENTER][B][I][FONT=georgia]Благодарю за пожелание![/CENTER]<br>" +
        "[CENTER] Приятной игры на [Color=Red]Black Russia [/I][/CENTER][/color][/FONT]<br>" +
        '[CENTER][url=https://postimages.org/][img]https://i.postimg.cc/mrhcH5vR/1621526767066.png[/img][/url][/CENTER]',
    },
  ];
}

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        if (!document.URL.includes('/threads/')) return;

        addButtons();
    }

    function addButtons() {
        const replyContainer = document.querySelector('.button--icon--reply')?.parentElement;
        if (!replyContainer) {
            setTimeout(addButtons, 500); 
            return;
        }

        const selectButton = createButton('Ответы', 'selectAnswer', 
            'border-radius: 11px; margin-right: 8px; border: 2px solid; border-color: rgb(255, 255, 255);');
        
        replyContainer.insertBefore(selectButton, document.querySelector('.button--icon--reply'));

        selectButton.addEventListener('click', () => {
            showAnswersModal();
        });
    }

    function createButton(text, id, style) {
        const button = document.createElement('div');
        button.id = id;
       button.className = 'button--primary button rippleButton';
        button.style.cssText = style;
        button.innerHTML = `<span class="config-button-chrome">${text}</span>`;
        return button;
    }

    function showAnswersModal() {
        const modal = document.createElement('div');
        modal.className = 'brh-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            text-decoration:none;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const modalContent = document.createElement('div');
        modalContent.className = 'brh-modal-content';
        modalContent.style.cssText = `
            background: #1e1e1e;
            padding: 20px;
            border-radius: 5px;
            max-width: 80%;
            max-height: 80%;
            overflow-y: auto;
        `;

        buttons.forEach((btn, i) => {
            const button = createButton(btn.title, `brh-answer-${i}`, btn.dpstyle || 'margin: 10px;');
            button.addEventListener('click', () => {
                pasteContent(i);
                document.body.removeChild(modal);
            });
            modalContent.appendChild(button);
        });

        const closeButton = createButton('Закрыть', 'brh-close', 'margin-top: 20px;');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        modalContent.appendChild(closeButton);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    function pasteContent(id) {
        const data = getThreadData();
        const template = compileTemplate(buttons[id].content);
        
        const editor = document.querySelector('.fr-element.fr-view');
        if (editor) {
            editor.innerHTML = template(data);
        }

        if (buttons[id].prefix !== undefined) {
            editThreadData(buttons[id].prefix, buttons[id].status);
        }
    }

    function compileTemplate(template) {
        return function(data) {
            return template
                .replace(/\{\{\s*user\.mention\s*\}\}/g, data.user.mention)
                .replace(/\{\{\s*user\.name\s*\}\}/g, data.user.name)
                .replace(/\{\{\s*user\.id\s*\}\}/g, data.user.id)
                .replace(/\{\{\s*greeting\s*\}\}/g, data.greeting());
        };
    }

    function getThreadData() {
        const authorLink = document.querySelector('a.username');
        const authorID = authorLink?.getAttribute('data-user-id') || '0';
        const authorName = authorLink?.textContent || 'Пользователь';
        
        const hours = new Date().getHours();
        return {
            user: {
                id: authorID,
                name: authorName,
                mention: `[USER=${authorID}]${authorName}[/USER]`,
            },
            greeting: () =>
                hours > 4 && hours <= 11 ? 'Доброе утро' :
                hours > 11 && hours <= 15 ? 'Добрый день' :
                hours > 15 && hours <= 21 ? 'Добрый вечер' : 'Доброй ночи',
        };
    }

    function editThreadData(prefix, pin = false) {
        const threadTitle = document.querySelector('.p-title-value')?.textContent?.trim() || '';
        const url = window.location.href + '/edit';
        const formData = new FormData();
        
        formData.append('prefix_id', prefix);
        formData.append('_xfRequestUri', window.location.pathname);
        formData.append('_xfWithData', '1');
        formData.append('_xfResponseType', 'json');
        
        if (pin) {
            formData.append('sticky', '1');
        }
        
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(() => window.location.reload());
    }
}
});});});});

})();