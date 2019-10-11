
var UILocale = {
    'label':{ "EN":"Label", "JP":"ラベル" },
    'text':{ "EN":"Text", "JP":"テキスト" },
    'button':{ "EN":"Button", "JP":"ボタン" },
};
var MenuLocale = {
    "file":{ "EN":"File", "JP":"ファイル" },
    "new":{ "EN":"New", "JP":"新規" },
    "open":{ "EN":"Open", "JP":"開く" },
    "save":{ "EN":"Save", "JP":"保存" },
    "save2":{ "EN":"Save as...", "JP":"別名で保存" },
    "import":{ "EN":"Import", "JP":"読み込む" },
    "export":{ "EN":"Export", "JP":"書き出す" },
    "close":{ "EN":"Close", "JP":"閉じる" },
    "quit":{ "EN":"Quit", "JP":"終了" },
    
    'edit': { "EN":"Edit", "JP":"編集" },
    'copy': { "EN":"Copy", "JP":"コピー" },
    'paste': { "EN":"Paste", "JP":"ペースト" },
    'cut': { "EN":"Cut", "JP":"カット" },
    'find': { "EN":"Find", "JP":"検索" },
    'replace': { "EN":"Replace", "JP":"置換" },
    
    'window': { "EN":"Window", "JP":"ウィンドウ" },
    'minwin': { "EN":"Minimize", "JP":"最小化" },
    'maxwin': { "EN":"Maximize", "JP":"最大化" },
    'full': { "EN":"Full screen", "JP":"フルスクリーン" },

    'help': { "EN":"Help", "JP":"ヘルプ" },
};
var defaultLang = 'JP';

function mergeProperty(custom, origin) {
    Object.keys(origin).forEach(key => {
        if (key == 'class') {
            if (key in custom) custom[key] = custom[key].concat(origin[key]);
            else custom[key] = origin[key];
        }
        if (!(key in custom)) custom[key] = origin[key];
    });
    return custom;
};
var UIProp = {
    'element': undefined,
    'display': 'inline-block',
    'id': undefined,
    'name': undefined,
    'title': undefined,
    'visible': true,
    'class': [],
    'components': [],
    'margin': undefined,
    'padding': undefined,
    'halign': 'left',
    'valign': 'top',
    'cursor': 'default',
    'position': 'static',
    'x': undefined,
    'y': undefined,
    'z': undefined,
    'width': undefined,
    'height': undefined,
    'size': [],
    'border': undefined,
    'background': undefined,
    'shadow': undefined,
    'font': {
        'name': undefined,
        'style': undefined,
        'size': undefined
    },
    'color': undefined,
    'action': undefined
};
var ContainerProp = {
    'layout': undefined
};  
var ViewProp = {
    'class': [ 'sview' ]
};
var BoxProp = {
    'label': 'Box',
    'class': [ 'sbox' ]
};
var ImageViewProp = {
    'src': '',
    'alt': 'No Image.',
    'class': ['simageview']
};
var ExpandViewProp =  {
    'state': false,
    'openView': undefined,
    'openText': '&#8854; Hide',
    'closeView': undefined,
    'closeText': '&#8853; Show',
    'expand': 'down',
    'class': ['sexview'],
    'content': undefined
};
var TabProp = {
    'label': 'Tab',
    'class': [ 'stab' ],
    'content': undefined
};
var TabViewProp = {
    'select': undefined,
    'tabs': [],
    'class': [ 'stabview' ],
    'layout': {
        'type': 'flow',
        'direction': 'vertical'
    }
};
var SplitterProp = {
    'primary': undefined,
    'secondary': undefined,
    'direction': 'horizontal'
};
var SplitViewProp = {
    'direction': 'horizontal',
    'class': ['ssplitview']
}
var ListViewProp = {
    'items': [],
    'class': ['slistview']
};
var STableCellProp = {
    'value': undefined,
    'edit': false,
    'class': [ 'scell' ]
}
var STableColumnProp = {
    'index': 0,
    'name': '',
    'label': 'column',
    'type': 'text',
    'render': undefined,
    'editor': undefined,
    'sort': true,
    'search': true
};
var TableProp = {
    'label': undefined,
    'caption': undefined,
    'columns': undefined,
    'rows': undefined,
    'class': [ 'stableview' ],

    'paging': false,
    'currentPage': undefined,
    'rowsPerPage': undefined,
    'sortable': true,
    'showHeader': true,
    'showRowIndexr': false,
    'resizable': false
};
var TreeNodeProp = {
    'openview': undefined,//new SLabel({'text': '&#x25B6;'}),
    'openlabel': 'Node',
    'closeview': undefined,
    'closelabel': undefined,
    'leaf': false,
    'open': false,
    'children': undefined,
    'class': ['stnode']
};
var TreeViewProp = {
    'showRoot': false,
    'class': ['streeview']
};
var MenuItemProp = {
    'text': 'Item',
    'state': undefined,
    'shortcut': undefined,
    'class': ['smenuitem']
};
var MenuProp = {
    'items': [],
    'view': undefined,
    'text': 'Menu',
    'pop': 'vertical',
    'class': ['smenu']
};
var MenuBarProp = {
    'menus': [],
    'position': 'fixed',
    'location': 'top',
    'hidden': false,
    'class': ['smenubar']
};
var ToolBarItemPtop = {
    'mode': 'item',
    'showImage': true,
    'showLabel': true,
    'state': undefined,
    'image': undefined,
    'label': 'Text',
    'arrange': 'top',
    'pop': undefined,
    'class': ['stbitem']
};
var ToolBarProp = {
    'items': undefined,
    'direction': 'horizontal',
    'class': ['stoolbar']
};
var LabelProp = {
    'text': undefined,
    'class': [ 'slabel' ]
};
var TextProp = {
    'value': '',
    'placeholder': undefined,
    'class': ['stext'],
    'edit' : true,
    'select': true,
    'require': false
};
var DatePickProp = {
    'format': 'yyyy/mm/dd',
    'value': undefined,
    'class': ['sdate']
};
var TextEditorProp = {
    'content': undefined,
    'showControler': false,
    'class': ['stexteditor']
};
var ButtonProp = {
    'value': 'Button',
    'available': true,
    'class': ['sbutton']
};
var CheckBoxProp = {
    'label': {
        'text': 'Check',
        'visible': true,
    },
    'arrange': 'right',
    'available': true,
    'state': false
};
var RadioButtonProp = {
    'label': {
        'text': 'Radio',
        'visible': true,
    },
    'arrange': 'right',
    'available': true,
    'state': false
};
var ToggleButtonProp = {
    'state': 2,
    'current': 0,

    'labels': ['Off', 'On'],
    'arrange': 'down',
    'views': [],
    'available': true,
    'class': ['stoggle']
};
var SelectProp = {
    'multiple': false,
    'selected': 1,
    'items': [],
    'class': ['sselect']
};
var SelectItemProp = {
    'label': 'item',
    'value': 'item',
    'selected': false,
    'class': ['item']
};
var SelectItemGroupProp = {
    'label': 'group',
    'class': ['group']
};
var SliderProp = {
    'indicator': {
        'visible': true,
        'edit': false,
        'class': ['indicator']
    },
    'arrange': 'left',
    'min': 0,
    'max': 100,
    'value': 50
};
var FrameProp = {
    'title': 'window',
    'resize': true,
    'drag': true,
    'close': true,
    'showHeader': true,
    'header': 'top',
    'class': [ 'sframe' ]
}
var PanelProp = {
    'x': 0,
    'y': 0,
    'z': 1,
    'class': [ 'spanel' ]
};
var DialogProp = {
    'modal': true,
    'visible': false,
    'location': 'center',
    'z': 2,
    'class': [ 'sdialog' ],
    'screen': {
        'visible': false,
        'x': 0,
        'y': 0,
        'class': [ 'backscreen' ]
    }
};
var SKeyState = {
    'mask': 0,
    'key': 0
};
var SPointerState = {
    'pressed': false,
    'drag': false,
    'current': [],
    'diff': [],
    'ori': []
};
window.addEventListener('keydown', event=> {
    switch(event.keyCode) {
        case 17: 
            SKeyState['mask'] += 1;
            break;
        
        default: break;
    }
    console.log(event); 
});
window.addEventListener('keyup', event=> { 

    console.log(event); 
});



function SUIComponent(tag, prop = {}) {
    this.node = document.createElement(tag);
    this.parent = undefined;
    this.components = [];
    this.display = prop['display'];
    this.initNode(prop);
    if (prop['element'] != undefined) prop['element'].appendChild(this.node);
};
SUIComponent.prototype = {
    initNode: function(prop) {
        this.setDisplay(prop['display']);
        if (prop['id'] != undefined) this.setID(prop['id']);
        if (prop['name'] != undefined) this.setName(prop['name']);
        if (prop['title'] != undefined) this.setTitle(prop['title']);
        if (prop['visible'] != undefined) this.setVisible(prop['visible']);
        if (prop['class'] != undefined && 0 < prop['class'].length) this.setClass(prop['class']);
        if (prop['components'] != undefined && 0 < prop['components'].length) this.setComponent(prop['components']);
        if (prop['margin'] != undefined && 0 < prop['margin'].length) { this.setMargin(prop['margin']); }
        if (prop['padding'] != undefined && 0 < prop['padding'].length) { this.setPadding(prop['padding']); }
        if (prop['halign'] != undefined) this.setHorizontalAlign(prop['halign']);
        if (prop['valign'] != undefined) this.setVerticalAlign(prop['valign']);
        if (prop['cursor'] != undefined) this.setCursor(prop['cursor']);
        if (prop['x'] != undefined) this.setX(prop['x']);
        if (prop['y'] != undefined) this.setY(prop['y']);
        if (prop['z'] != undefined) this.setZ(prop['z']);
        if (prop['position'] != undefined) this.setPosition(prop['position']);
        if (prop['width'] != undefined) this.setWidth(prop['width']);
        if (prop['height'] != undefined) this.setHeight(prop['height']);
        if (prop['size'] != undefined) this.setSize(prop['size']);
        if (prop['border'] != undefined) this.setBorder(prop['border']);
        if (prop['background'] != undefined) this.setBackground(prop['background']);
        if (prop['shadow'] != undefined) this.setShadow(prop['shadow']);
        if (prop['font'] != undefined) this.setFont(prop['font']);
        if (prop['color'] != undefined) this.setColor(prop['color']);
        if (prop['action'] != undefined && 0 < prop['action'].length) {
            prop['action'].forEach(act => { this.addAction(act); });
        }
    },
    setDisplay: function(disp) {
        this.display = disp;
        this.node.style.display = disp;
    },
    id : function() { return this.node.id; },
    setID: function(id) { this.node.id = id; },
    name: function() { return this.node.name; },
    setName: function(name) { this.node.name = name; },
    setTitle: function(title) { this.node.title = title; },
    setVisible: function(vis) { 
        if (vis) this.node.style.display = this.display;
        else if (this.node.style.display != 'none') {
            this.display = this.node.style.display;
            this.node.style.display = 'none';
        }
    },
    setClass: function(list) { 
        list.forEach(cls => { this.addClass(cls); });
    },
    hasClass: function(cls) { return this.node.classList.contains(cls); },
    addClass: function(cls) { this.node.classList.add(cls); },
    removeClass: function(cls) { if (this.node.classList.contains(cls)) this.node.classList.remove(cls); },
    componentAt: function(idx) { return this.components[idx]; },
    setComponent: function(components) { 
        components.forEach(comp => { this.add(comp); });
    },
    elementCount: function() { return this.components.length; },
    add: function(sui) {
        sui.setParent(this);
        this.components.push(sui);
        this.node.appendChild(sui.node);
    },
    setParent: function(element) { 
        this.parent = element; 
    },
    setMargin: function(margin) { 
        this.node.style.marginTop = margin[0]; 
        this.node.style.marginRight = margin[1]; 
        this.node.style.marginBottom = margin[2]; 
        this.node.style.marginLeft = margin[3]; 
    },
    setPadding: function(padding) { 
        this.node.style.paddingTop = padding[0]; 
        this.node.style.paddingRight = padding[1]; 
        this.node.style.paddingBottom = padding[2]; 
        this.node.style.paddingLeft = padding[3]; 
    },
    setHorizontalAlign: function(align) { this.node.style.textAlign = align; },
    setVerticalAlign: function(align) { this.node.style.verticalAlign = align; },
    setCursor: function(cursor) { this.node.style.cursor = cursor; },
    setX: function(x) { this.node.style.left = x; },
    X: function() { 
        return this.node.getBoundingClientRect().left + window.pageXOffset;
    },
    setY: function(y) { this.node.style.top = y; },
    Y: function() { 
        return this.node.getBoundingClientRect().top + window.pageYOffset;
    },
    setZ: function(z) { this.node.style.zIndex = z; },
    setPosition: function(pos) { this.node.style.position = pos; },
    setWidth: function(w) { this.node.style.width = w; },
    setHeight: function(h) { this.node.style.height = h; },
    setSize: function(size) { this.setWidth(size[0]); this.setHeight(size[1]); },
    setBorder: function(border) { 
        if (border['style'] != undefined) this.node.style.borderStyle = border['style'];
        if (border['width'] != undefined) this.node.style.borderWidth = border['width'];
        if (border['color'] != undefined) this.node.style.borderColor = border['color'];
        if (border['radius'] != undefined) this.node.style.borderRadius = border['radius'];
        if (border['top'] != undefined) {
            let tborder = border['top'];
            if (tborder['style'] != undefined) this.node.style.borderTopStyle = tborder['style'];
            if (tborder['width'] != undefined) this.node.style.borderTopWidth = tborder['width'];
            if (tborder['color'] != undefined) this.node.style.borderTopColor = tborder['color'];
            if (tborder['radius'] != undefined) this.node.style.borderTopRadius = tborder['radius'];
        }
        if (border['bottom'] != undefined) {
            let bborder = border['bottom'];
            if (bborder['style'] != undefined) this.node.style.borderBottomStyle = bborder['style'];
            if (bborder['width'] != undefined) this.node.style.borderBottomWidth = bborder['width'];
            if (bborder['color'] != undefined) this.node.style.borderBottomColor = bborder['color'];
            if (bborder['radius'] != undefined) this.node.style.borderBottomRadius = bborder['radius'];
        }
        if (border['left'] != undefined) {
            let lborder = border['left'];
            if (lborder['style'] != undefined) this.node.style.borderLeftStyle = lborder['style'];
            if (lborder['width'] != undefined) this.node.style.borderLeftWidth = lborder['width'];
            if (lborder['color'] != undefined) this.node.style.borderLeftColor = lborder['color'];
            if (lborder['radius'] != undefined) this.node.style.borderLeftRadius = lborder['radius'];
        }
        if (border['right'] != undefined) {
            let rborder = border['right'];
            if (rborder['style'] != undefined) this.node.style.borderRightStyle = rborder['style'];
            if (rborder['width'] != undefined) this.node.style.borderRightidth = rborder['width'];
            if (rborder['color'] != undefined) this.node.style.borderRightColor = rborder['color'];
            if (rborder['radius'] != undefined) this.node.style.borderRightRadius = rborder['radius'];
        }
    },
    setBackground: function(back) {
        if (back['color'] != undefined) {
            this.node.style.background = back['color'];
        }
        if (back['image'] != undefined) {
            this.node.style.backgroundImage = back['image'];
        }
    },
    setShadow: function(shadow) {
        this.node.style.boxShadow = shadow;
    },
    setFont: function(font) {
        if (font['name'] != undefined) this.node.style.fontFamily = font['name'];
        if (font['style'] != undefined) {
            let style = font['style'];
            if (style != undefined && 0 < style.length) {
                style.forEach(element => {
                    if (element == 'bold') {
                        this.node.style.fontWeight = 'bold';
                    }
                    else this.node.style.fontStyle = element;
                });
            }
        } 
        if (font['size'] != undefined) this.node.style.fontSize = font['size'];
    },
    setColor: function(col) { this.node.style.color = col; },
    addAction: function(act) {
        this.node.addEventListener(act['event'], event => {
            event['trigger'] = this;
            act['action'](event);
        });
    },
    width: function() { return this.node.offsetWidth; },
    height: function() { return this.node.offsetHeight; },
    isVisible: function() { return !(this.node.display == 'none'); },
    clear: function() {
        while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
        this.components = [];
    }
};

function SUIContainer(tag, prop = {}) {
    prop = mergeProperty(prop, ContainerProp);
    SUIComponent.call(this, tag, prop);
};
SUIContainer.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.contentView = new SUIComponent('div');
            this.node.appendChild(this.contentView.node);
            this.components.push(this.contentView.node);
            if (prop['layout'] != undefined) this.setLayout(prop['layout']);
        }
    },
    elementCount: { value: function() { return this.contentView.components.length; }},
    componentAt: { value: function(idx) { return this.contentView.componentAt(idx); }},
    setParent: { value: function(sui) { this.parent = sui; }},
    add: { 
        value: function(sui) { 
            sui.setParent(this);
            this.contentView.components.push(sui);
            this.contentView.node.appendChild(sui.node);
        }
    },
    clear: { value: function() {
        while (this.contentView.node.hasChildNodes()) this.contentView.node.removeChild(this.contentView.node.lastChild);
        this.contentView.components = [];
    }},
    setLayout: {
        value: function(layout) {
            if (layout['type'] != undefined) {
                var type = layout['type'];
                if (type == 'border') this.contentView.addClass('borderLayout');
                else if (type == 'flow') {
                    this.contentView.addClass('flowLayout');
                    if (layout['direction'] != undefined) this.contentView.addClass(layout['direction']);
                    else this.contentView.addClass('horizontal');
                    if ('wrap' in layout && layout['wrap']) this.contentView.addClass('wrap');
                    if ('reverse' in layout && layout['reverse']) this.contentView.addClass('reverse');
                }
                else if (type == 'grid') {
                    this.addClass('gridLayout');
                    if ('rows' in layout) this.contentView.node.style.gridTemplateRows = layout['rows']; 
                    if ('columns' in layout) this.contentView.node.style.gridTemplateColumns = layout['columns']; 
                    else this.contentView.addClass('autorow');
                }
                else if (type == 'column') {
                    this.contentView.addClass('columnLayout');
                    if ('count' in layout) this.contentView.node.style.columnCount = layout['count'];
                }
                else this.node.addClass(type);
            }
        }
    }
});
SUIContainer.prototype.constructor = SUIContainer;

function SView(prop = {}) {
    prop = mergeProperty(prop, ViewProp);
    SUIContainer.call(this, 'div', prop);
};
SView.prototype = Object.create(SUIContainer.prototype, {
    initNode: {
        value: function(prop) {
            SUIContainer.prototype.initNode.apply(this, [ prop ]);
        }
    },
});
SView.prototype.constructor = SView;

function SBox(prop = {}) {
    prop = mergeProperty(prop, BoxProp);
    SUIContainer.call(this, 'fieldset', prop);
};
SBox.prototype = Object.create(SUIContainer.prototype, {
    initNode: {
        value: function(prop) {
            SUIContainer.prototype.initNode.apply(this, [ prop ]);
            this.legend = new SUIComponent('legend');
            this.node.insertAdjacentElement('afterbegin', this.legend.node);
            this.setLabel(prop['label']);
        }
    },
    setLabel: {
        value: function(txt) {
            this.node.childNodes[0].innerText = txt;
        }
    }
});
SBox.prototype.constructor = SBox;

function SImageView(prop = {}) {
    prop = mergeProperty(prop, ImageViewProp);
    SUIComponent.call(this, 'img', prop);
};
SImageView.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.setSource(prop['src']);
            this.setAlt(prop['alt']);
        }
    },
    setSource: { value: function(src) { this.node.src = src; } },
    setAlt: { value: function(text) { this.node.alt = text; } }
});
SImageView.prototype.constructor = SImageView;

function SExpandView(prop = {}) {
    prop = mergeProperty(prop, ExpandViewProp);
    this.state = false;
    SView.call(this, prop);
};
SExpandView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.openState = {
                'view': prop['openView'],
                'text': prop['openText']
            };
            this.closeState = {
                'view': prop['closeView'],
                'text': prop['closeText']
            };
            this.controller = new SView({
                'cursor': 'pointer',
                'class': ['sexv-controler']
            });
            this.content = new SView({
                'class': ['sexv-content']
            });
            this.ctrlView = new SView({});
            this.ctrlLabel = new SLabel({});
            if (prop['expand'] == 'top' || prop['expand'] == 'down') {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'vertical'
                });
                this.controller.setLayout({
                    'type': 'flow',
                    'direction': 'horizontal'
                });
            }
            else {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'horizontal'
                });
                this.controller.setLayout({
                    'type': 'flow',
                    'direction': 'vertical'
                });
                this.controller.setWidth('1em');
                this.ctrlLabel.addClass('vtext');
            }
            if (prop['expand'] == 'down' || prop['expand'] == 'right') {
                this.add(this.controller);
                this.add(this.content);
            }
            else {
                this.add(this.content);
                this.add(this.controller);
            }
            this.controller.add(this.ctrlView);
            this.controller.add(this.ctrlLabel);
            this.controller.node.addEventListener('click', event => {
                this.setState(!this.state);
            });
            if (prop['content'] != undefined) this.setContent(prop['content']);
            this.setState(prop['state']);
        }
    },
    expand: { value: function() { this.setState(true); }},
    collapse: { value: function() { this.setState(false); }},
    setState: { value: function(st) {
        this.state = st;
        if (this.state) {
            this.content.setVisible(true);
            this.ctrlView.clear();
            if (this.openState['view'] != undefined) this.ctrlView.add(this.openState['view']);
            this.ctrlLabel.setText(this.openState['text']);
        }
        else {
            this.content.setVisible(false);
            this.ctrlView.clear();
            if (this.closeState['view'] != undefined) this.ctrlView.add(this.closeState['view']);
            this.ctrlLabel.setText(this.closeState['text']);
        }
    }},
    setContent: { value: function(content) {
        this.content.clear();
        this.content.add(content);
    }}
});
SExpandView.prototype.constructor = SExpandView;

function STab(parent, prop = {}) {
    this.tabview = parent;
    prop = mergeProperty(prop, TabProp);
    this.header = new SView(prop);
    this.title = new SLabel({
        'text': prop['label'],
        'class': ['stab-title']
    });
    this.close = new SLabel({
        'text': '×',
        'class': ['stab-closer']
    });
    this.content = prop['content'];
    this.header.addAction({
        'event': 'click', 
        'action': event => {
            this.tabview.selectIndex(this.tabview.indexOf(this));
        }
    }); 
    this.header.add(this.title);
    this.header.add(this.close);
};
STab.prototype = {
    setText: function(text) { this.title.setText(text); },
    setContent: function(content) { this.content = content; }
};

function STabView(prop = {}) {
    prop = mergeProperty(prop, TabViewProp);
    SView.call(this, prop);
};
STabView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.tabs = [];
            this.selected = undefined;
            this.header = new SView({
                'class': ['stv-header']
            });
            this.content = new SView({
                'class': ['stv-content']
            });
            if (0 < prop['tabs'].length) this.setTabs(prop['tabs']);
            if (prop['select'] != undefined) this.selectIndex(prop['select']);
            this.add(this.header);
            this.add(this.content);
        }
    },
    addTab: { value: function(tab) { 
        this.tabs.push(tab);
        this.header.add(tab.header);
    }},
    setTabs: { value: function(tabs) { 
        tabs.forEach(tab => {
            this.addTab(new STab(this, tab));
        });
    }},
    indexOf: { value: function(element) {
        var idx = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == element) { idx = i; break; }
        }
        return idx;
    }},
    selectIndex: { value: function(idx) {
        if (-1 < idx && idx < this.tabs.length) {
            if (-1 < this.selected) this.header.componentAt(this.selected).removeClass('selected');
            if (0 < this.content.elementCount()) this.content.clear();
            this.header.componentAt(idx).addClass('selected');
            this.content.add(this.tabs[idx].content);
            this.selected = idx;
        }
    }},
    close: { value: function(tab) {
        
    }}
});
STabView.prototype.constructor = STabView;

function SSpliter(prop = {}) {
    prop = mergeProperty(prop, SplitterProp);
    if (prop['class'] == undefined) prop['class'] = [];
    if (prop['direction'] == 'vertical') prop['class'].push('svsplit');
    else prop['class'].push('shsplit');
    this.pview = prop['primary'];
    this.sview = prop['secondary'];
    SView.call(this, prop);
};
SSpliter.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.direction = prop['direction'];
            this.oriX = undefined;
            this.oriY = undefined;
            this.diffX = undefined;
            this.diffY = undefined;
            this.node.addEventListener('mousedown', event => {
                this.oriX = event.pageX;
                this.oriY = event.pageY;
                console.log("start:("+this.oriX+","+this.oriY+")");
            });
            this.node.addEventListener('mousemove', event => {
                this.diffX = event.pageX-this.oriX;
                this.diffY = event.pageY-this.oriY;
                this.oriX = event.pageX;
                this.oriY = event.pageY;
                console.log("move:("+this.diffX+","+this.diffY+")");
                if (this.direction == 'horizontal') {
                    this.pview.setWidth(this.pview.width()+this.diffX+'px');
                    this.sview.setWidth(this.sview.width()-this.diffX+'px');
                }
            });
        }
    }
});
SSpliter.prototype.constructor = SSpliter;

function SSplitView(prop = {}) {
    prop = mergeProperty(prop, SplitViewProp);
    SView.call(this, prop);
}
SSplitView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.direction = prop['direction'];
            this.setLayout({
                'type': 'flow',
                'direction': this.direction
            })
            this.primaryView = new SView();
            this.secondaryView = new SView();
            this.splitter = new SSpliter({
                'primary': this.primaryView,
                'secondary': this.secondaryView,
                'direction': prop['direction']
            });
            this.add(this.primaryView);
            this.add(this.splitter);
            this.add(this.secondaryView);
        }
    },
    setPrimaryView: { value: function(view) {
        this.primaryView.clear();
        this.primaryView.add(view);
    }},
    setSecondaryView: { value: function(view) {
        this.secondaryView.clear();
        this.secondaryView.add(view);
    }},
    update: { value: function(dif) {

    }}
});
SSplitView.prototype.constructor = SSplitView;

function SListView(prop = {}) {
    prop = mergeProperty(prop, ListViewProp);
    SView.call(this, prop);
};
SListView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            if (0 < prop['items'].length) {
                prop['items'].forEach(item => { this.addItem(item); })
            }
        }
    },
    addItem: { value: function(item) { this.add(item); }},
    itemAt: { value: function(idx) { return this.componentAt(idx); }}
});
SListView.prototype.constructor = SListView;

function SGeneralCellRenderer(val) {
    var cell = new SView({});
    cell.node.innerHTML = val;
    return cell;
}
function SGeneralCellEditor(cell, val) {
    cell.node.innerHTML = val;
}
function STextCellRenderer(val) {
    return new STextField({
        'label': {
            'visible': false
        },
        'border': {
            'style': 'none'
        },
        'background': {
            'color': 'rgba(255, 255, 255, 0)'
        },
        'value': val,
        'edit': false
    });
}
function STextCellEditor(cell, val) {
    cell.setText(val);
}
function SCheckBoxCellRenderer(val) {
    return new SCheckbox({
        'label': {
            'visible': false
        },
        'state': val,
        'edit': false
    });
}
function SCheckBoxCellEditor(cell, val) {
    cell.setState(val);
}
function SSelectCellRenderer(val) {
    return new SSelector({
        'label': {
            'visible': false
        },
        'items': val,
        'edit': false
    });
}
function SSelectCellEditor(cell, val) {
    cell.select(val);
}

function STableCell(table, column, prop = {}) {
    this.table = table;
    this.column = column;
    prop = mergeProperty(prop, STableCellProp);
    prop['width'] = window.getComputedStyle(column.node).width;
    SUIContainer.call(this, 'td', prop);
}
STableCell.prototype = Object.create(SUIContainer.prototype, {
    initNode: {
        value: function(prop) {
            SUIContainer.prototype.initNode.apply(this, [ prop ]);
            this.add(this.column.renderer(prop['value']));
        }
    },
    setValue: { value: function(val) {
        this.editor(this.componentAt(0), val);
    }}
});
STableCell.prototype.constructor = STableCell;

function STableColumn(table, prop = {}) {
    this.table = table;
    this.index = -1;
    this.type = '';
    this.sortable = true;
    this.searchable = true;
    this.renderer = undefined;
    this.editor = undefined;
    prop = mergeProperty(prop, STableColumnProp);
    SUIContainer.call(this, 'th', prop);
}
STableColumn.prototype = Object.create(SUIContainer.prototype, {
    initNode: {
        value: function(prop) {
            SUIContainer.prototype.initNode.apply(this, [ prop ]);
            if (prop['render'] != undefined) this.setRenderer(prop['render']);
            if (prop['editor'] != undefined) this.setEditor(prop['editor']);
            if (prop['type'] != undefined) this.setType(prop['type']);
            this.add(new SView({
                'layout': {
                    'type': 'flow',
                    'direction': 'horizontal'
                }
            }));
            this.label = new SLabel({
                'text': prop['label'],
                'halign': 'center',
                'class': [ 'label', 'autoscale' ],
            });
            this.componentAt(0).add(this.label);
            this.sortButton = new SView({
                'layout': {
                    'type': 'flow',
                    'direction': 'vertical'
                },
                'font': {
                    'size': '0.5em'
                },
                'class': [ 'sort' ],
                'halign': 'right'
            });
            this.sortButton.add(new SLabel({ 'text': '&#x25B2;', 'class': [ 'asc' ] }));
            this.sortButton.add(new SLabel({ 'text': '&#x25BC;', 'class': [ 'desc' ] }));
            this.componentAt(0).add(this.sortButton);
            if (prop['sort'] != undefined) this.setSortable(prop['sort']);
            if (prop['search'] != undefined) this.setSearchable(prop['search']);
        }
    },
    setType: { value: function(type) { 
        this.type = type; 
        if (this.renderer == undefined) {
            if(this.type == 'input') this.setRenderer(STextCellRenderer);
            else if(this.type == 'bool') this.setRenderer(SCheckBoxCellRenderer);
            else if(this.type == 'list') this.setRenderer(SSelectCellRenderer);
            else this.setRenderer(SGeneralCellRenderer);
        }
        if (this.editor == undefined) {
            if(this.type == 'input') this.setEditor(STextCellEditor);
            else if(this.type == 'bool') this.setEditor(SCheckBoxCellEditor);
            else if(this.type == 'list') this.setEditor(SSelectCellEditor);
            else this.setRenderer(SGeneralCellRenderer);
        }
    }},
    setSortable: { value: function(sort) { 
        this.sortable = sort;
        
    }},
    setSearchable: { value: function(search) { this.searchable = search; }},
    setRenderer: { value: function(render) { this.renderer = render; }},
    setEditor: { value: function(edit) { this.editor = edit; }}
});
STableColumn.prototype.constructor = STableColumn;

function STableRow(table, prop={}) {
    this.table = table;
    SUIComponent.call(this, 'tr', prop);
};
STableRow.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            if (prop['values'] != undefined) this.setValues(prop['values']);
            if (prop['data'] != undefined) this.setData(prop['data']);
        }
    },
    cellAt: { value: function(idx) { return this.componentAt(idx); }},
    addCell: { value: function(cell) { this.add(cell); }},
    setValues: { value: function(values) {
        for (let c = 0; c < this.table.columnCount(); c++) {
            if (c < values.length) {
                if (this.table.columns[c].isVisible()) {
                    this.addCell(new STableCell(this.table, this.table.columns[c], {
                        'value': values[c]
                    }));
                }
            }
            else { addCell(new STableCell(this.table, this.table.columns[c])); }
        }
    }},
    setData: { value: function(data) {
        this.table.columns.forEach(col => {
            addCell(new STableCell(this.table, col)); 
        });
        Object.keys(data).forEach(key => {
            if (this.table.columnIndex[key] != undefined) {
                this.cellAt(this.table.columnIndex[key]).setValue(data[key]);
            }
        });
    }}
});
STableRow.prototype.constructor = STableRow;

function STableView(prop = {}) {
    prop = mergeProperty(prop, TableProp);
    SView.call(this, prop);
}
STableView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.selectedColumns = [];
            this.selectedRows = [];
            this.table = new SUIComponent('table');
            this.thead = new SUIComponent('thead');
            this.thead.add(new STableRow(this));
            this.tbody = new SUIComponent('tbody');
            //this.tfoot = new SUIContainer('tbody');

            this.columns = [];
            this.columnIndex = {};
            this.rows = [];

            this.rpp = 20;

            this.table.add(this.thead);
            this.table.add(this.tbody);
            this.add(this.table);
            
            if (prop['data'] != undefined) this.setData(prop['data']);
            if (prop['columns'] != undefined) this.setColumns(prop['columns']);
            if (prop['rows'] != undefined) this.setRows(prop['rows']);
        }
    },
    columnCount: { value: function() { return this.columns.length; }},
    columnAt: { value: function(idx) { return this.columns[idx]; }},
    rowCount: { value: function() { return this.rows.length; }},
    rowAt: { value: function(idx) { return this.rows[idx]; }},
    pageCount: { value: function() { return this.multiPage?Math.ceil(this.rows.length/this.itemPerPage):1; }},
    clearRows: { value: function() {
        this.tbody.clear();
        this.rows = [];
    }},
    clearAll: { value: function() {
        this.clearRows();
        this.thead.componentAt(0).clear();
        this.columns = [];
        this.columnIndex = {};
    }},
    addColumn: { value: function(col) {
        if (col.index < 0) col.index = this.columnCount();
        if (col.node.name == '') col.setName('col_'+col.index);
        this.columns.push(col);
        this.columnIndex[col.node.name] = col.index;
        this.thead.componentAt(0).node.appendChild(col.node);
    }},
    setColumns: { value: function(cols) {
        cols.forEach(col => {
            this.addColumn(new STableColumn(this, col));
        });
    }},
    addRow: { value: function(row) {
        this.rows.push(row);
        this.tbody.node.appendChild(row.node);
    }},
    setRows: { value: function(rows) {
        rows.forEach(row => { this.addRow(new STableRow(this, {
            'values': row
        })); });
    }},
    lastRow: { value: function() { return this.rows[this.rowCount()-1]; }},
    setData: {
        value: function(data) {
            data.forEach(row => {
                this.addRow();
                Object.keys(row).forEach(val => {
                    
                });
            });
        }
    },
    update: { 
        value: function() {
            this.clearAll();
            this.columns.forEach(element => {
                this.thead.firstChild.appendChild(new STableCell({
                    'header': true,
                    'type': element['type'],
                    'value': element['name'],
                    'width': 100/this.columns.length+'%'
                }));
            });

            this.rows.forEach(element => {
                var row = document.createElement('tr');
                for (var c = 0; c < element.length; c++) {
                    row.appendChild(new STableCell({
                        'type': this.columns[c]['type'],
                        'value': element[c]
                    }));
                }
                row.addEventListener('click', event => {
                    if (row.classList.contains('selected')) {
                        row.classList.remove('selected');
                        this.selectedRows = [];
                    }
                    else {
                        this.selectedRows = [];
                        this.tbody.childNodes.forEach(released => {
                            released.classList.remove('selected');
                        });
                        row.classList.add('selected');
                        this.selectedRows.push(row);
                    }
                });
                this.tbody.appendChild(row);
            });
        }
    }
});
STableView.prototype.constructor = STableView;


function STreeNode(prop = {}) {
    prop = mergeProperty(prop, TreeNodeProp);
    SView.call(this, prop);
};
STreeNode.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.openstate = {
                'view': prop['openview'],
                'label': prop['openlabel']
            }
            if (this.openstate['view'] == undefined) this.openstate['view'] = new SLabel({'text': '&#x25BC;'});
            this.closestate = {
                'view': prop['closeview'],
                'label': prop['closelabel']
            }
            if (this.closestate['view'] == undefined) this.closestate['view'] = new SLabel({'text': '&#x25B6;'});
            if (this.closestate['label'] == undefined) this.closestate['label'] = this.openstate['label'];
            this.leaf = prop['leaf'];
            this.open = prop['open'];
            this.header = new SView({
                'layout': {
                    'type': 'flow',
                    'direction': 'horizontal'
                }
            });
            this.toggle = new SView({
                'cursor': 'pointer',
                'action': [{
                    'event': 'click',
                    'action': event=>{
                        event.trigger.parent.parent.changeState();
                    }
                }],
                'class': ['stnode-toggle']
            });
            this.title = new SLabel({'class': ['stnode-label']});
            this.header.add(this.toggle);
            if (this.leaf) this.toggle.setVisible(false);
            this.header.add(this.title);
            this.content = new SView();
            this.children = new SListView({
                'direction': 'vertical',
                'class': ['stree-children']
            });
            this.content.add(this.children);
            this.add(this.header);
            this.add(this.content);
            this.setState(this.open);
        }
    },
    addNode: {
        value: function(node) {
            if (this.leaf) {
                this.leaf = false;

            }
            this.children.add(node);
        }
    },
    setState: { value: function(state) {
        this.open = state;
        if (this.open) {
            this.toggle.clear();
            this.toggle.add(this.openstate['view']);
            this.title.setText(this.openstate['label']);
            this.content.setVisible(true);
        }
        else {
            this.toggle.clear();
            this.toggle.add(this.closestate['view']);
            this.title.setText(this.closestate['label']);
            this.content.setVisible(false);
        }
    }},
    changeState: { value: function() { this.setState(!this.open); }}
});
STreeNode.prototype.constructor = STreeNode;

function STreeView(prop = {}) {
    prop = mergeProperty(prop, TreeViewProp);
    SView.call(this, prop);
};
STreeView.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.showRoot = prop['showRoot'];
            this.root = new STreeNode();
        }
    },
    update: { value: function() {
        this.clear();
        if(this.showRoot) this.add(this.root);
        else this.add(this.root.children);
    }},
    setRoot: { value: function(node) { 
        this.root = node; 
        this.update();
    }}
});
STreeView.prototype.constructor = STreeView;

function SMenuItem(prop = {}) {
    prop = mergeProperty(prop, MenuItemProp);
    SView.call(this, prop);
};
SMenuItem.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.label = new SLabel();
            this.sclabel = new SLabel({});
            this.statelabel = new SLabel({});
            this.add(this.statelabel);
            this.add(this.label);
            this.add(this.sclabel);
            this.setText(prop['text']);
            if (prop['state'] != undefined) this.setState(prop['state']);
            if (prop['shortcut'] != undefined) this.setShortCut(prop['shortcut']);
        }
    },
    setText: { value: function(text) { this.label.setText(text); }},
    setState: { value: function(state) {  
        if (state) this.statelabel.setText('&#10003;');
        else this.statelabel.setText('');
    }},
    setShortCut: { value: function(key) {
        
    }}
});
SMenuItem.prototype.constructor = SMenuItem;

function SMenu(prop = {}) {
    prop = mergeProperty(prop, MenuProp);
    SView.call(this, prop);
}
SMenu.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.state = false;
            this.pop = prop['pop'];
            this.list = new  SView({
                'element': document.body,
                'z': 1,
                'position': 'absolute',
                'visible': false,
                'class': ['smenulist']
            });
            this.list.add(new SListView({
                'layout': {
                    'type': 'flow',
                    'direction': 'vertical'
                }
            }));
            this.label = new SLabel({
                'text': prop['text'],
                'class': ['smn-label']
            });
            this.modify = undefined;
            if (prop['pop'] == 'horizontal') {
                this.modify = new SLabel({
                    'text':'&#x25B6;',
                    'width': '1em'
                });
            }
            if (prop['view'] != undefined) this.setView(prop['view']);
            else {
                this.add(this.label);
                if (this.modify != undefined) this.add(this.modify);
            }
            this.node.addEventListener('click', event => {
                if (this.state) this.hideList();
                else this.showList();
            });
        }
    },
    setView: { value: function(view) { 
        this.clear();
        this.add(view);
    }},
    setText: { value: function(text) { this.label.setText(text); }},
    addItem: { value: function(item) { this.list.componentAt(0).add(item); }},
    showList: { value: function() {
        this.state = true;
        if (this.pop == 'vertical') {
            this.list.setX(this.X()+'px');
            this.list.setY(this.Y()+this.height()+'px');
        }
        else {
            this.list.setX(this.X()+this.width()+'px');
            this.list.setY(this.Y()+'px');
        }
        this.list.setVisible(true);
    }},
    hideList: { value: function() {
        this.state = false;
        this.list.setVisible(false);
    }}
});
SMenu.prototype.constructor = SMenu;

function SMenuBar(prop= {}) {
    prop = mergeProperty(prop, MenuBarProp);
    if (prop['location'] == 'top' || prop['location'] == 'down') {
        prop['layout'] = {
            'type': 'flow',
            'direction': 'horizontal'
        };
    }
    else {
        prop['layout'] = {
            'type': 'flow',
            'direction': 'vertical'
        };
    }
    SView.call(this, prop);
};
SMenuBar.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.location = undefined;
            if (0 < prop['menus'].length) this.setMenus(prop['menus']);
            this.setLocation(prop['location']);
        }
    },
    addMenu: { value: function(menu) { this.add(menu); }},
    setMenus: {
        value: function(menus) {
            menus.forEach(menu => { this.addMenu(new SMenu(menu)); });
        }
    },
    menuAt: { value: function(idx) { return this.menus[idx]; }},
    setLocation: { value: function(loc) {
        if (loc == 'top') this.setY(0);
        else if (loc == 'down') this.setY(document.height-this.height());
        else if (loc == 'left') this.setX(0);
        else if (loc == 'right') this.setX(document.width-this.width());
    }}
});
SMenuBar.prototype.constructor = SMenuBar;

function SToolBarItem(prop = {}) {
    prop = mergeProperty(prop, ToolBarItemPtop);
    SView.call(this, prop);
};
SToolBarItem.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.image = new SImageView({
                'class': ['stbitem-image']
            });
            if (prop['image'] != undefined) this.setImage(prop['image']);
            this.label = new SLabel({
                'text': prop['label'],
                'class': ['stbitem-label']
            });
            if (prop['mode'] == 'item') {
            }
            else if (prop['mode'] == 'menu') {

            }
            else if (prop['mode'] == 'toggle') {
                
            }
            if (prop['arrange'] == 'top' || prop['arrange'] == 'down') {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'vertical'
                })
            }
            else {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'horizontal'
                })
            }
            if (prop['arrange'] == 'top' || prop['arrange'] == 'left') {
                this.add(this.image);
                this.add(this.label);
            }
            else {
                this.add(this.label);
                this.add(this.image);
            }
            this.showImage(prop['showImage']);
            this.showLabel(prop['showLabel']);
        }
    },
    setImage: { value: function(img) { this.image.setSource(img); }},
    setLabel: { value: function(text) { this.label.setText(text); }},

    showImage: { value: function(show) { this.image.setVisible(show); }},
    showLabel: { value: function(show) { this.label.setVisible(show); }},

});
SToolBarItem.prototype.constructor = SToolBarItem;

function SToolBar(prop = {}) {
    prop = mergeProperty(prop, ToolBarProp);
    prop['layout'] = {
        'type': 'flow',
        'direction': prop['direction']
    }
    SView.call(this, prop);
};
SToolBar.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            if (prop['items'] != undefined && 0 < prop['items'].length) this.setItems(prop['items']);
        }
    },
    addSpace: { value: function(spc) {
        
    }},
    addItem: { value: function(item) { this.add(item); }},
    setItems: {
        value: function(items) {
            items.forEach(item => {
                this.addItem(new SToolBarItem(item));
            });
        }
    }
});
SToolBar.prototype.constructor = SToolBar;

function SLabel(prop={}) {
    prop = mergeProperty(prop, LabelProp);
    SUIComponent.call(this, 'span', prop);
};
SLabel.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            if (prop['text'] != undefined) this.setText(prop['text']);
        }
    },
    setText: {
        value: function(txt) { this.node.innerHTML = txt; }
    }
});
SLabel.prototype.constructor = SLabel;

function STextField(prop = {}) {
    prop = mergeProperty(prop, TextProp);
    SUIComponent.call(this, 'input', prop);
};
STextField.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.addClass('stextfield');
            this.node.type = 'text';
            this.setValue(prop['value']);
            if (prop['placeholder'] != undefined) this.setPlaceholder(prop['placeholder']);
            this.setSelectable(prop['select']);
            this.setEditable(prop['edit']);
            this.setRequired(prop['require']);
        }
    },
    setValue: { value: function(txt) { this.node.value = txt; } },
    setPlaceholder: { value: function(txt) { this.node.placeholder = txt; } },
    setSelectable: { value: function(sel) { this.node.disabled = !sel; } },
    setEditable: { value: function(edit) { this.node.readOnly = !edit; } },
    setRequired: { value: function(req) { this.node.required = req; } }
});
STextField.prototype.constructor = STextField;

function STextArea(prop = {}) {
    prop = mergeProperty(prop, TextProp);
    SUIComponent.call(this, 'textarea', prop);
};
STextArea.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.addClass('stextarea');
            this.setValue(prop['value']);
            if (prop['placeholder'] != undefined) this.setPlaceholder(prop['placeholder']);
            this.setSelectable(prop['select']);
            this.setEditable(prop['edit']);
            this.setRequired(prop['require']);
        }
    },
    setValue: { value: function(val) { this.node.innerText = val; } },
    setSelectable: { value: function(sel) { this.node.disabled = !sel; } },
    setEditable: { value: function(edit) { this.node.readOnly = !edit; } },
    setRequired: { value: function(req) { this.node.required = req; } }
});
STextArea.prototype.constructor = STextArea;

function SDatePicker(prop = {}) {
    prop = mergeProperty(prop, DatePickProp);
    SUIComponent.call(this, 'input', prop);
};
SDatePicker.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.node.type = 'date';
            if (prop['format'] != undefined) this.setFormat(prop['format']);
            if (prop['value'] != undefined) this.setValue(prop['value']);
        }
    },
    setFormat: { value: function(form) { this.node.format = form; }},
    setValue: { value: function(val) { this.node.value = val; }}
});
SDatePicker.prototype.constructor = SDatePicker;

function STextEditor(prop) {
    prop = mergeProperty(prop, TextEditorProp);
    SUIComponent.call(this, 'pre', prop);
};
STextEditor.prototype = Object.create(SUIContainer.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.node.contentEditable = true;
            if (prop['content'] != undefined) this.setContent(prop['content']);
        }
    },
    setContent: { value: function(content) { this.node.innerHTML = content; }}
});
STextEditor.prototype.constructor = STextEditor;

function SButton(prop = {}) {
    prop = mergeProperty(prop, ButtonProp);
    SUIComponent.call(this, 'button', prop);
}
SButton.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.node.type = 'button';
            this.setValue(prop['value']);
            this.setAvailable(prop['available']);
        }
    },
    setValue: { value: function(val) { this.node.innerText = val; } },
    setAvailable: { value: function(available) { this.node.disabled = !available; } }
});
SButton.prototype.constructor = SButton;

function SCheckBox(prop = {}) {
    prop = mergeProperty(prop, CheckBoxProp);
    SUIComponent.call(this, 'label', prop);
}
SCheckBox.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [{}]);
            this.addClass('scheckbox');
            this.label = new SLabel(prop['label']);
            this.input = new SUIComponent('input', prop);
            this.input.node.type = 'checkbox';
            if (prop['arrange'] == 'top' || prop['arrange'] == 'bottom') {
                this.addClass('flow-layout');
                this.addClass('vertical');
            }
            if (prop['arrange'] == 'top' || prop['arrange'] == 'left') {
                this.add(this.label); this.add(this.input);
            }
            else {
                this.add(this.input); this.add(this.label);
            }
            this.setState(prop['state']);
            this.setAvailable(prop['available']);
            if (prop['action'] != undefined) { 
                prop['action'].forEach(act => { this.addAction(act); });
            }
        }
    },
    setState: { value: function(state) { this.input.node.checked = state; }},
    setAvailable: { value: function(available) { this.input.node.disabled = !available; } },
    addAction: { value: function(act) { 
        if (act['event'] == 'change') this.input.node.onchange = act['action'];
    }} 
});
SCheckBox.prototype.constructor = SCheckBox;

function SRadioButton(prop = {}) {
    prop = mergeProperty(prop, RadioButtonProp);
    SUIComponent.call(this, 'label', prop);
}
SRadioButton.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [{}]);
            this.addClass('sradio');
            this.label = new SLabel(prop['label']);
            this.input = new SUIComponent('input', prop);
            this.input.node.type = 'radio';
            if (prop['arrange'] == 'top' || prop['arrange'] == 'bottom') {
                this.addClass('flow-layout');
                this.addClass('vertical');
            }
            if (prop['arrange'] == 'top' || prop['arrange'] == 'left') {
                this.add(this.label); this.add(this.input);
            }
            else {
                this.add(this.input); this.add(this.label);
            }
            this.setState(prop['state']);
            this.setAvailable(prop['available']);
            if (prop['action'] != undefined) { 
                prop['action'].forEach(act => { this.addAction(act); });
            }
        }
    },
    setState: { value: function(state) { this.input.node.checked = state; }},
    setAvailable: { value: function(available) { this.input.node.disabled = !available; } },
    addAction: { value: function(act) { 
        if (act['event'] == 'change') this.input.node.onchange = act['action'];
    }} 
});
SRadioButton.prototype.constructor = SRadioButton;

function SToggleButton(prop = {}) {
    prop = mergeProperty(prop, ToggleButtonProp);
    SView.call(this, prop);
}
SToggleButton.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.state = prop['state'];
            this.current = prop['current'];
            this.uis = [];
            for (let i = 0; i < this.state; i++) {
                this.uis.push({
                    //'view': prop['views'][i],
                    'label': prop['labels'][i]
                });
            }
            this.view = new SView({
                'class': ['stgl-view']
            });
            this.label = new SLabel({
                'class': ['stgl-label']
            });
            if (prop['arrange'] == 'down' || prop['arrange'] == 'top') {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'vertical'
                });
                this.setHorizontalAlign('center');
            }
            else {
                this.setLayout({
                    'type': 'flow',
                    'direction': 'horizontal'
                });
                this.setVerticalAlign('center');
            }
            if (prop['arrange'] == 'down' || prop['arrange'] == 'right') {
                this.add(this.view);
                this.add(this.label);
            }
            else {
                this.add(this.label);
                this.add(this.view);
            }
            this.setState(this.current);
            this.node.addEventListener('click', event => {
                this.setState(this.current+1);
            });
            this.setAvailable(prop['available']);
        }
    },
    setState: { value: function(state) { 
        if (state == this.state) state = 0;
        this.current = state;
        this.view.clear();
        //this.view.add(this.uis[this.current]['view']);
        this.label.setText(this.uis[this.current]['label']);
    }},
    setAvailable: { value: function(available) { this.node.disabled = !available; }}
});
SToggleButton.prototype.constructor = SToggleButton;

function SSelectItem(prop = {}) {
    prop = mergeProperty(prop, SelectItemProp);
    SUIComponent.call(this, 'option', prop);
};
SSelectItem.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.setLabel(prop['label']);
            this.setValue(prop['value']);
            this.select(prop['selected']);
        }
    },
    setLabel: { value: function(label) { this.node.innerHTML = label; }},
    setValue: { value: function(val) { this.node.value = val; }},
    select: { value: function(sel) { this.node.value.selected = sel; }},
    isSelected: { value: function() { return this.node.value.selected; }}
});
SSelectItem.prototype.constructor = SSelectItem;
function SSelectItemGroup(prop = {}) {
    prop = mergeProperty(prop, SelectItemGroupProp);
    SUIComponent.call(this, 'optgroup', prop);
};
SSelectItemGroup.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.setLabel(prop['label']);
        }
    },
    setLabel: { value: function(label) { this.node.label = label; }}
});
SSelectItemGroup.prototype.constructor = SSelectItemGroup;
function SSelector(prop = {}) {
    prop = mergeProperty(prop, SelectProp);
    SUIComponent.call(this, 'select', prop);
};
SSelector.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.setMultiSelectable(prop['multi']);
            this.setOptions(prop['items']);
            this.selectAt(prop['selected']);
        }
    },
    setMultiSelectable: { value: function(multi) { this.node.multiple = multi; }},
    setOptions: { value: function(items) {
        if (0 < items.length) {  items.forEach(item => { this.addOption(item); }); }
    }},
    selectAt: { value: function(idx) { this.componentAt(idx).select(true); }},
    addOption: { value: function(option) { this.add(new SSelectItem(option)); }},
    addAction: { value: function(act) { 
        if (act['event'] == 'change') this.node.onchange = act['action'];
    }} 
});
SSelector.prototype.constructor = SSelector;

function SSlider(prop = {}) {
    prop = mergeProperty(prop, SliderProp);
    SUIComponent.call(this, 'div', prop);
};
SSlider.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ {} ]);
            this.addClass('sslider');
            this.input = new SUIComponent('input');
            this.input.node.type = 'range';
            this.indicator = new STextField(prop['indicator']);
            if (prop['arrange'] == 'top' || prop['arrange'] == 'bottom') {
                this.addClass('flow-layout');
                this.addClass('vertical');
            }
            if (prop['arrange'] == 'top' || prop['arrange'] == 'left') {
                this.add(this.input); this.add(this.indicator);
            }
            else {
                this.add(this.indicator); this.add(this.input);
            }
            this.setMin(prop['min']);
            this.setMax(prop['max']);
            this.setValue(prop['value']);
        }
    },
    setMin: { value: function(min) { this.input.node.min = min; }},
    setMax: { value: function(max) { this.input.node.max = max; }},
    setValue: { value: function(val) { 
        this.input.node.value = val; 
        this.indicator.setValue(val);
        this.input.node.caption = val;
    }}
});
SSlider.prototype.constructor = SSlider;

function SColorPicker(prop = {}) {
    SUIComponent.call(this, 'input', prop);
};
SColorPicker.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.node.type = 'color';
            this.addClass('scolorpicker');
        }
    }
});
SColorPicker.prototype.constructor = SColorPicker;

function SFileLoader(prop) {
    SUIComponent.call(this, 'input', prop);
};
SFileLoader.prototype = Object.create(SUIComponent.prototype, {
    initNode: {
        value: function(prop) {
            SUIComponent.prototype.initNode.apply(this, [ prop ]);
            this.node.type = 'file';
            this.addClass('sfileloader');
        }
    }
});
SFileLoader.prototype.constructor = SFileLoader;

function SFrame(prop = {}) {
    prop = mergeProperty(prop, FrameProp);
    SView.call(this, prop);
};
SFrame.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.header = new SView();
            this.controler = new SView();
            this.title = new SView();
            this.toolbar = new SToolBar();
            this.closeBtn = new SView({ 'class': [ 'sf-close' ] });
            this.minBtn = new SView({ 'class': [ 'sf-min' ] });
            this.maxBtn = new SView({ 'class': [ 'sf-max' ] });
            this.content = new SView();


        }
    }
});
SFrame.prototype.constructor = SFrame;

function SPanel(prop = {}) {
    prop = mergeProperty(prop, PanelProp);
    SView.call(this, prop);
};
SPanel.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
        }
    }
});
SPanel.prototype.constructor = SPanel;

function SDialog(prop = {}) {
    prop = mergeProperty(prop, DialogProp);
    SView.call(this, prop);
};
SDialog.prototype = Object.create(SView.prototype, {
    initNode: {
        value: function(prop) {
            SView.prototype.initNode.apply(this, [ prop ]);
            this.locaton = prop['location'];
            this.back = new SView(prop['screen']);
            this.back.node.addEventListener('click', event => {
                this.hide();
            }); 
        }
    },
    setLocation: {
        value: function(loc) { 
            this.locaton = loc;
            this.update();
        }
    },
    adjustPositon: {
        value: function() {
            
        }
    },
    show: { value: function() {
        document.body.insertAdjacentElement('afterbegin', this.back.node);
        
        this.back.setVisible(true);
        this.setVisible(true);
    }},
    hide: { value: function() {
        document.body.removeChild(document.body.firstChild);
        this.back.setVisible(false);
        this.setVisible(false);
    }},
    update: { value: function() {

    }}
});
SDialog.prototype.constructor = SDialog;
