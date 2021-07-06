/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/kotonX/main/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'r',
                type: 'image',
                rect: ['-207px', '-253px','1752px','656px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'f2',
                type: 'image',
                rect: ['-9px', '-63px','429px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.jpg",'0px','0px']
            },
            {
                id: 'f1',
                type: 'image',
                rect: ['-383px', '-11px','313px','171px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.jpg",'0px','0px']
            },
            {
                id: 'back_y',
                type: 'image',
                rect: ['-475px', '-274px','720px','700px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back_y.svg",'0px','0px'],
                transform: [[],[],[],['0.27306','0.25']]
            },
            {
                id: 'tov',
                type: 'image',
                rect: ['116px', '1px','470px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tov.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'back_r',
                type: 'image',
                rect: ['-685px', '-109px','1888px','335px','auto', 'auto'],
                clip: ['rect(0px 1288px 191px 612px)'],
                fill: ["rgba(0,0,0,0)",im+"back_r.svg",'0px','0px'],
                transform: [[],[],[],['-0.5','0.35']]
            },
            {
                id: 'lozung',
                type: 'image',
                rect: ['-175px', '-69px','920px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lozung.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'y',
                type: 'image',
                rect: ['-476px', '24px','2292px','180px','auto', 'auto'],
                clip: ['rect(0px 1920px 180px 360px)'],
                fill: ["rgba(0,0,0,0)",im+"y.svg",'0px','0px'],
                transform: [[],[],[],['0.27532','0.28']]
            },
            {
                id: 'list',
                type: 'image',
                rect: ['-524px', '-69px','1470px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"list.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'addr',
                type: 'image',
                rect: ['-404px', '39px','1230px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"addr.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_f2}": [
                ["style", "top", '-63px'],
                ["style", "height", '227px'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "width", '429px']
            ],
            "${_r}": [
                ["style", "top", '-253px'],
                ["transform", "scaleY", '0.25'],
                ["style", "clip", [0,1752,656,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.25'],
                ["style", "height", '656px'],
                ["style", "left", '-207px'],
                ["style", "width", '1752px']
            ],
            "${_lozung}": [
                ["style", "top", '-72px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '225px']
            ],
            "${_f1}": [
                ["style", "top", '-4px'],
                ["style", "height", '171px'],
                ["style", "opacity", '1'],
                ["style", "left", '-383px'],
                ["style", "width", '313px']
            ],
            "${_tov}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '116px'],
                ["style", "background-position", [528,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_y}": [
                ["style", "top", '24px'],
                ["transform", "scaleY", '0.28'],
                ["style", "clip", [0,1920,180,360], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.27532'],
                ["style", "opacity", '1'],
                ["style", "left", '-476px'],
                ["style", "width", '2292px']
            ],
            "${_list}": [
                ["style", "top", '-69px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '1'],
                ["style", "left", '-524px'],
                ["style", "background-position", [0,-296.2962962963], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_back_r}": [
                ["style", "top", '-112px'],
                ["transform", "scaleY", '0.35'],
                ["style", "clip", [0,1288,191,612], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '-0.5'],
                ["style", "height", '335px'],
                ["style", "left", '-285px'],
                ["style", "width", '1888px']
            ],
            "${_addr}": [
                ["style", "top", '39px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '1'],
                ["style", "left", '-404px'],
                ["style", "background-position", [0,-160], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_back_y}": [
                ["style", "top", '-274px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.27306'],
                ["style", "opacity", '1'],
                ["style", "left", '-481px'],
                ["style", "width", '720px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16000,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_r}", "left", '-663px', { fromValue: '-207px'}], position: 3250, duration: 1303, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "style", "${_r}", "clip", [0,1752,656,2032], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1752,656,0]}], position: 11287, duration: 713, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${_lozung}", "left", '-175px', { fromValue: '225px'}], position: 1435, duration: 772, easing: "easeInOutCubic" },
                { id: "eid29", tween: [ "style", "${_lozung}", "left", '225px', { fromValue: '-175px'}], position: 5250, duration: 606, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_addr}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-160]}], position: 6557, duration: 257, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${_f2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 857, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_f2}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 857, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "style", "${_back_y}", "opacity", '0', { fromValue: '1'}], position: 15394, duration: 606, easing: "easeInOutCubic" },
                { id: "eid4", tween: [ "style", "${_back_r}", "top", '-109px', { fromValue: '-112px'}], position: 940, duration: 983, easing: "easeInOutCubic" },
                { id: "eid58", tween: [ "style", "${_back_r}", "top", '-109px', { fromValue: '-109px'}], position: 3695, duration: 0, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${_back_r}", "top", '-112px', { fromValue: '-109px'}], position: 6191, duration: 771, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_addr}", "opacity", '0', { fromValue: '1'}], position: 10121, duration: 918, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${_lozung}", "top", '-69px', { fromValue: '-72px'}], position: 1435, duration: 772, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_lozung}", "top", '-72px', { fromValue: '-69px'}], position: 5250, duration: 606, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_list}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 918, easing: "easeInOutCubic" },
                { id: "eid55", tween: [ "style", "${_f1}", "top", '-4px', { fromValue: '-4px'}], position: 11837, duration: 0, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "style", "${_f1}", "left", '-3px', { fromValue: '-383px'}], position: 11312, duration: 525, easing: "easeInCubic" },
                { id: "eid54", tween: [ "style", "${_f1}", "left", '1px', { fromValue: '-3px'}], position: 11837, duration: 163, easing: "easeOutCubic" },
                { id: "eid40", tween: [ "style", "${_y}", "opacity", '0', { fromValue: '1'}], position: 10668, duration: 644, easing: "easeInOutCubic" },
                { id: "eid6", tween: [ "style", "${_back_r}", "left", '-685px', { fromValue: '-285px'}], position: 940, duration: 983, easing: "easeInOutCubic" },
                { id: "eid31", tween: [ "style", "${_back_r}", "left", '-285px', { fromValue: '-685px'}], position: 6191, duration: 771, easing: "easeInOutCubic" },
                { id: "eid67", tween: [ "style", "${_tov}", "opacity", '0', { fromValue: '1'}], position: 15394, duration: 606, easing: "easeInOutCubic" },
                { id: "eid66", tween: [ "style", "${_f1}", "opacity", '0', { fromValue: '1'}], position: 15394, duration: 606, easing: "easeInOutCubic" },
                { id: "eid64", tween: [ "style", "${_tov}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [528,0]}], position: 12000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid50", tween: [ "style", "${_back_y}", "left", '-19px', { fromValue: '-481px'}], position: 11215, duration: 688, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${_y}", "left", '-932px', { fromValue: '-476px'}], position: 5984, duration: 764, easing: "easeInOutCubic" },
                { id: "eid53", tween: [ "style", "${_lozung}", "opacity", '0', { fromValue: '1'}], position: 5378, duration: 606, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${_list}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-296.2962962963]}], position: 6300, duration: 257, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-16470078");
