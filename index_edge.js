/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

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
                rect: ['-207px', '-235px','1752px','656px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r.svg",'0px','0px'],
                transform: [[],[],[],['0.17865','0.30488']]
            },
            {
                id: 'f2',
                type: 'image',
                rect: ['-17px', '-6px','363px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.jpg",'0px','0px']
            },
            {
                id: 'f1',
                type: 'image',
                rect: ['-383px', '-11px','313px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.jpg",'0px','0px']
            },
            {
                id: 'back_y',
                type: 'image',
                rect: ['-475px', '-307px','720px','790px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back_y.svg",'0px','0px'],
                transform: [[],[],[],['0.27306','0.25']]
            },
            {
                id: 'tov',
                type: 'image',
                rect: ['6px', '41px','470px','170px','auto', 'auto'],
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
                rect: ['-476px', '46px','2292px','180px','auto', 'auto'],
                clip: ['rect(0px 1920px 180px 360px)'],
                fill: ["rgba(0,0,0,0)",im+"y.svg",'0px','0px'],
                transform: [[],[],[],['0.27532','0.28']]
            },
            {
                id: 'list',
                type: 'image',
                rect: ['-585px', '-59px','1470px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"list.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.3']]
            },
            {
                id: 'addr',
                type: 'image',
                rect: ['-462px', '62px','1230px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"addr.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['179px', '156px','258px','117px','auto', 'auto'],
                text: "ppu-kotor.com.ua",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_f2}": [
                ["style", "top", '-6px'],
                ["style", "height", '192px'],
                ["style", "opacity", '0'],
                ["style", "left", '-17px'],
                ["style", "width", '363px']
            ],
            "${_r}": [
                ["style", "top", '-235px'],
                ["transform", "scaleY", '0.30488'],
                ["transform", "scaleX", '0.17865'],
                ["style", "height", '656px'],
                ["style", "clip", [0,1752,656,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-207px'],
                ["style", "width", '1752px']
            ],
            "${_lozung}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '225px']
            ],
            "${_back_r}": [
                ["style", "top", '-112px'],
                ["transform", "scaleY", '0.35'],
                ["transform", "scaleX", '-0.5'],
                ["style", "height", '335px'],
                ["style", "clip", [0,1288,191,612], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-285px'],
                ["style", "width", '1888px']
            ],
            "${_list}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '1'],
                ["style", "left", '-585px'],
                ["style", "background-position", [0,-296.2962962963], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_tov}": [
                ["style", "top", '41px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '6px'],
                ["style", "background-position", [528,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["style", "top", '156px'],
                ["style", "opacity", '0'],
                ["style", "left", '179px'],
                ["style", "font-size", '15px']
            ],
            "${_f1}": [
                ["style", "top", '-4px'],
                ["style", "height", '190px'],
                ["style", "opacity", '1'],
                ["style", "left", '-383px'],
                ["style", "width", '313px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_addr}": [
                ["style", "top", '62px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '1'],
                ["style", "left", '-462px'],
                ["style", "background-position", [0,-160], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_y}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '0.28'],
                ["style", "clip", [0,1920,180,360], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.27532'],
                ["style", "opacity", '1'],
                ["style", "left", '-476px'],
                ["style", "width", '2292px']
            ],
            "${_back_y}": [
                ["style", "top", '-307px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.27306'],
                ["style", "height", '790px'],
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
            duration: 17000,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_r}", "left", '-725px', { fromValue: '-207px'}], position: 857, duration: 1303, easing: "easeInCubic" },
                { id: "eid52", tween: [ "style", "${_r}", "clip", [0,1752,656,2032], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1752,656,0]}], position: 10952, duration: 713, easing: "easeInCubic" },
                { id: "eid10", tween: [ "style", "${_lozung}", "left", '-285px', { fromValue: '225px'}], position: 1151, duration: 772, easing: "easeInCubic" },
                { id: "eid29", tween: [ "style", "${_lozung}", "left", '225px', { fromValue: '-285px'}], position: 5500, duration: 606, easing: "easeInCubic" },
                { id: "eid36", tween: [ "style", "${_addr}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-160]}], position: 6557, duration: 257, easing: "easeInCubic" },
                { id: "eid2", tween: [ "style", "${_f2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 857, easing: "easeInCubic" },
                { id: "eid24", tween: [ "style", "${_f2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 857, easing: "easeInCubic" },
                { id: "eid65", tween: [ "style", "${_back_y}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInCubic" },
                { id: "eid4", tween: [ "style", "${_back_r}", "top", '-111px', { fromValue: '-112px'}], position: 940, duration: 983, easing: "easeInCubic" },
                { id: "eid58", tween: [ "style", "${_back_r}", "top", '-111px', { fromValue: '-111px'}], position: 3695, duration: 0, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${_back_r}", "top", '-112px', { fromValue: '-109px'}], position: 5500, duration: 771, easing: "easeInCubic" },
                { id: "eid72", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 11502, duration: 481 },
                { id: "eid76", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 481 },
                { id: "eid39", tween: [ "style", "${_addr}", "opacity", '0', { fromValue: '1'}], position: 9786, duration: 918, easing: "easeInCubic" },
                { id: "eid34", tween: [ "style", "${_list}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-296.2962962963]}], position: 6300, duration: 257, easing: "easeInCubic" },
                { id: "eid38", tween: [ "style", "${_list}", "opacity", '0', { fromValue: '1'}], position: 9415, duration: 918, easing: "easeInCubic" },
                { id: "eid55", tween: [ "style", "${_f1}", "top", '-4px', { fromValue: '-4px'}], position: 11502, duration: 0, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "style", "${_f1}", "left", '-31px', { fromValue: '-383px'}], position: 10977, duration: 525, easing: "easeInCubic" },
                { id: "eid54", tween: [ "style", "${_f1}", "left", '1px', { fromValue: '-31px'}], position: 11502, duration: 163, easing: "easeInCubic" },
                { id: "eid40", tween: [ "style", "${_y}", "opacity", '0', { fromValue: '1'}], position: 10333, duration: 644, easing: "easeInCubic" },
                { id: "eid6", tween: [ "style", "${_back_r}", "left", '-759px', { fromValue: '-285px'}], position: 940, duration: 983, easing: "easeInCubic" },
                { id: "eid31", tween: [ "style", "${_back_r}", "left", '-285px', { fromValue: '-759px'}], position: 5500, duration: 771, easing: "easeInCubic" },
                { id: "eid67", tween: [ "style", "${_tov}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInCubic" },
                { id: "eid66", tween: [ "style", "${_f1}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInCubic" },
                { id: "eid64", tween: [ "style", "${_tov}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [528,0]}], position: 11665, duration: 250, easing: "easeInCubic" },
                { id: "eid70", tween: [ "style", "${_lozung}", "opacity", '1', { fromValue: '0'}], position: 1644, duration: 356, easing: "easeInCubic" },
                { id: "eid53", tween: [ "style", "${_lozung}", "opacity", '0', { fromValue: '1'}], position: 5144, duration: 606, easing: "easeInCubic" },
                { id: "eid21", tween: [ "style", "${_y}", "left", '-933px', { fromValue: '-476px'}], position: 5536, duration: 764, easing: "easeInCubic" },
                { id: "eid50", tween: [ "style", "${_back_y}", "left", '-106px', { fromValue: '-481px'}], position: 10814, duration: 688, easing: "easeInCubic" }            ]
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
