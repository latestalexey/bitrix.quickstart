
; /* Start:"a:4:{s:4:"full";s:110:"/bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.detail/.default/script.js?14320380879700";s:6:"source";s:95:"/bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.detail/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Opener = {
	btn: null,
	box: null,
	content: null,
	duration: 400,
	init: function (btn, box, content) {
		this.btn = BX(btn);
		this.box = BX(box);
		this.content = BX(content);
		BX.bind(this.btn, 'click', BX.proxy(function () {
			this.btn.style.display = 'none';
			var _this = this;
			(new BX.easing({
				duration: this.duration,
				start: {minHeight: this.box.offsetHeight},
				finish: {minHeight: this.content.offsetHeight},
				transition: BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step: function (state) {
					_this.box.style.minHeight = state.minHeight + 'px';
				}
			})).animate();
		}, this));
	}
}

var changePrice;
BX.ready(function(){
	//var desc = Object.create(Opener);
	//desc.init(BX('description-open-btn'), BX('description-block'), BX('description-block-inner'));
	//var news = Object.create(Opener);
	//news.init(BX('news-open-btn'), BX('news-block'), BX('news-block-inner'));
	//var technicaldata = Object.create(Opener);
	//technicaldata.init(BX('technicaldata-btn'), BX('technicaldata-block'), BX('technicaldata-block-inner'));
	//
	//
	//var curTab = localStorage.getItem('MPCurTab');
	//var tabs = BX('feedback-tabs');
	//var tabBtns = BX.findChildren(tabs, {class: 'feedback-title'}, true);
	//BX.bindDelegate(tabs, 'click', {class: 'feedback-title'}, function () {
	//	for (var i = 0; i < tabBtns.length; i++)
	//	{
	//		BX.removeClass(tabBtns[i], 'feedback-title-active');
	//		BX(tabBtns[i].id.replace('-btn', '')+'-block').style.display = 'none';
	//	}
	//	BX.addClass(this, 'feedback-title-active');
	//	BX(this.id.replace('-btn', '')+'-block').style.display = 'block';
	//	curTab = this.id;
	//	localStorage.setItem('MPCurTab', curTab);
	//});
	//if (curTab && !window.location.hash)
	//{
	//	BX(curTab).click();
	//}
	//else if (window.location.hash == 'rating')
	//{
	//	BX('rating-btn').click();
	//}

	changePrice = function (value)
	{
		var val = value;
		total_bndl_sum.innerHTML = bndl_price['prd'+val];
		if (total_bndl_sum_old != null)
		{
			total_bndl_sum_old.innerHTML = bndl_price['prd'+val+'old'];
		}
		buy_bndl_btn.dataset.module = bndl_url.replace(/&PRD=[0-9]+/, '')+(val != '0' ? '&PRD='+val : '');
	};

	var buy_bndl_btn = BX('buy_bndl_btn');
	if (buy_bndl_btn != null)
	{
		var bndl_url = buy_bndl_btn.dataset.module;
	}
	var total_bndl_sum = BX('total_bndl_sum');
	var total_bndl_sum_old = BX('total_bndl_sum_old');
	BX.bind(BX('bundles'), 'change', function(){
		console.log('1');
		changePrice(this.value);
	})
});

function Answer(id, name)
{
	BX('discuss-form-btn').click();
	BX('module_COMMENT').value = name+', ';
	BX('id_com').value = id;
}

var enterUrlWindow = {
    form_window: null,
    form_window_id : "enter-site-url",
    login_field_id : "enterURL",

    ShowLoginForm : function(button)
    {
        if (!this.form_window)
        {
            this.form_window = document.getElementById(this.form_window_id);
            if (!this.form_window)
                return false;

            try {document.body.appendChild(this.form_window);}
            catch (e){}
        }

        authFormWindow.CreateOverlay();
        if(authFormWindow.overlay)
            authFormWindow.overlay.onclick = function() {enterUrlWindow.CloseLoginForm()};
        this.form_window.style.display = "block";

        var res = jsUtils.GetWindowSize();
        var buttonPos = BX.pos(button);
        this.form_window.style.left = buttonPos.left + button.offsetWidth * 0.6 - this.form_window.offsetWidth * 0.5 + "px";
        this.form_window.style.top = buttonPos.top + button.offsetHeight * 0.2 - this.form_window.offsetHeight - 12 + "px";

        var loginField = document.getElementById(this.login_field_id);
        if (loginField)
        {
            loginField.focus();
            loginField.select();
        }

        return false;
    },

    CloseLoginForm : function()
    {
        authFormWindow.CloseLoginForm();

        if (this.form_window)
            this.form_window.style.display = "none";
        return false;
    },

    GetWindowScrollSize : function(pDoc)
    {
        var width, height;
        if (!pDoc)
            pDoc = document;

        if ( (pDoc.compatMode && pDoc.compatMode == "CSS1Compat"))
        {
            width = pDoc.documentElement.scrollWidth;
            height = pDoc.documentElement.scrollHeight;
        }
        else
        {
            if (pDoc.body.scrollHeight > pDoc.body.offsetHeight)
                height = pDoc.body.scrollHeight;
            else
                height = pDoc.body.offsetHeight;

            if (pDoc.body.scrollWidth > pDoc.body.offsetWidth ||
                (pDoc.compatMode && pDoc.compatMode == "BackCompat") ||
                (pDoc.documentElement && !pDoc.documentElement.clientWidth)
                )
                width = pDoc.body.scrollWidth;
            else
                width = pDoc.body.offsetWidth;
        }
        return {scrollWidth : width, scrollHeight : height};
    }
}

var enterURL1 = '';
function AddModuleEx()
{
    enterU = document.getElementById('enterURL').value;
    var module = document.getElementById('module').value;
    if(enterU)
    {
        var enterURL1 = enterU + "/bitrix/admin/update_system_partner.php?addmodule=#MODULE#";
        enterURL1 = enterURL1.replace("#MODULE#", module);
        window.open(enterURL1);
        enterUrlWindow.CloseLoginForm();
    }
}

function expand (obj)
{
    BX.findParent(BX.findParent(obj)).style.maxHeight = 'none';
    obj.style.display = 'none';
}

var imagesSlider = function(code) {
    this.slide_move_left = function (e) { // right click
        stopSliding = true;
        BX.PreventDefault(e);
        if (counter == (slides.length-3))
        {
            return false;
        }
        else
        {
            counter = counter + 1;
        }
        if (!sliding && counter < slides.length)
        {
            return this.view_slide(counter);
        }
        else
        {
            counter = counter - 1;
            return false;
        }
    }

    this.slide_move_right = function (e) { // left click
        stopSliding = true;
        BX.PreventDefault(e);
        if (counter == 0)
        {
            return false;
        }
        else
        {
            counter = counter - 1;
        }
        if (!sliding && counter >= 0)
        {
            this.view_slide(counter)
        }
        else
        {
            counter = counter + 1;
            return false;
        }
    }

    this.view_slide = function (slide) {
        var startPos = parseFloat(container.style.left.replace('%', ''), 10);
        var endPos = -1*slide*offset;
        if (sliding)
            return false;
        sliding = true;
        if (startPos <= minPos && startPos >= maxPos)
        {
            nextPos = endPos;
            (new BX.easing({
                duration : 400,
                start:{left: startPos},
                finish:{left: endPos},
                transition : BX.easing.makeEaseOut(BX.easing.transitions.linear),
                step : function(state){
                    container.style.left = state.left+'%';
                },
                complete: function () {
                    sliding = false;
                    container.style.left = -1*counter*offset+'%';
                }
            })).animate();
            return true;
        }
        return false;
    }

    this.pageClick = function (i, e) {
        return function(e){
            BX.PreventDefault(e);
            if (!sliding)
            {
                counter = i;
                this.view_slide(i);
                stopSliding = true;
            }
        };
    }

    var counter = 0; // current slide
    var offset = 33.33333;
    var container = BX('imagesSlider_'+code);
    var slides = BX.findChildren(container, {tagName: 'LI'});
    var minPos = offset;
    var maxPos = -1*(slides.length+1)*offset;
    var stopSliding = false;
    var nextPos = 0;
    var sliding = false;

    BX.bind(BX('imagesSliderLeft_'+code), 'click', BX.delegate(this.slide_move_right, this));
    BX.bind(BX('imagesSliderRight_'+code), 'click', BX.delegate(this.slide_move_left, this));
}

var buyModuleWindow = {
    form_window: null,
    form_title: null,
    module_name: "",
    form_window_id : "buy-module",

    BuyModule : function(button)
    {
        if (!this.form_window)
        {
            this.form_window = document.getElementById(this.form_window_id);
            if (!this.form_window)
                return false;

            try
            {
                document.body.appendChild(this.form_window);
                this.form_title = this.form_window.getElementsByClassName("buying-title")[0];
            }
            catch (e){}
        }

        this.form_window.style.display = "block";

        var buttonPos = BX.pos(button);
        this.form_window.style.left = buttonPos.left + button.offsetWidth * 0.6 - this.form_window.offsetWidth * 0.5 + "px";
        this.form_window.style.top = buttonPos.top + button.offsetHeight * 0.2 - this.form_window.offsetHeight - 12 + "px";
        this.module_name = button.dataset.module;

        BX.ajax({
            method: 'GET',
            url: "/tobasket.php?ID=" + this.module_name,
            dataType: "html",
            data: {},
            onsuccess: function (data)
            {

            },
            onfailure: function (data)
            {

            }
        });
        return false;
    },

    CloseWindow : function()
    {
        if (this.form_window)
        {
            this.form_window.style.display = "none";
        }
        return false;
    },
}

function AddModuleToBasket(button)
{

}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:113:"/bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.list/other_modules/script.js?14315192671504";s:6:"source";s:98:"/bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.list/other_modules/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function ShowMoreModules(button)
{
	var modulesWrapper = BX("other-modules").getElementsByClassName("modules-wrap")[0];
	if (modulesWrapper != null)
	{
		modulesWrapper.style.maxHeight = modulesWrapper.scrollHeight + "px";
		button.style.opacity = 0;
		setTimeout(function(){
			BX.removeClass(BX("other-modules"), "hidden-other");
			button.parentNode.parentNode.removeChild(button.parentNode);
		}, 300)
	}
}

function setRecommend(rcmId, productId)
{
	// save to RCM_PRODUCT_LOG
	var plCookieName = BX.cookie_prefix+'_RCM_PRODUCT_LOG';
	var plCookie = getCookie(plCookieName);
	var itemFound = false;

	var cItems = [],
		cItem;

	if (plCookie)
	{
		cItems = plCookie.split('.');
	}

	var i = cItems.length;

	while (i--)
	{
		cItem = cItems[i].split('-');

		if (cItem[0] == productId)
		{
			// it's already in recommendations, update the date
			cItem = cItems[i].split('-');

			// update rcmId and date
			cItem[1] = rcmId;
			cItem[2] = BX.current_server_time;

			cItems[i] = cItem.join('-');
			itemFound = true;
		}
		else
		{
			if ((BX.current_server_time - cItem[2]) > 3600*24*30)
			{
				cItems.splice(i, 1);
			}
		}
	}

	if (!itemFound)
	{
		// add recommendation
		cItems.push([productId, rcmId, BX.current_server_time].join('-'));
	}

	// serialize
	var plNewCookie = cItems.join('.');

	var cookieDate = new Date(new Date().getTime() + 1000*3600*24*365*10);
	document.cookie=plCookieName+"="+plNewCookie+"; path=/; expires="+cookieDate.toUTCString()+"; domain="+BX.cookie_domain;
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/components/bx/marketplace.bigdata.products/templates/.default/script.js?14315198591250";s:6:"source";s:79:"/bitrix/components/bx/marketplace.bigdata.products/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function bx_rcm_get_from_cloud(injectId, rcmParameters, localAjaxData)
{
	var url = 'https://analytics.bitrix.info/crecoms/v1_0/recoms.php';
	var data = BX.ajax.prepareData(rcmParameters);

	if (data)
	{
		url += (url.indexOf('?') !== -1 ? "&" : "?") + data;
		data = '';
	}

	var onready = function(response) {

		if(response != 'timeout')
		{
			if (!response.items)
			{
				response.items = [];
			}
			else
			{
				BX.ajax({
					url: '/bitrix/components/bx/marketplace.bigdata.products/ajax.php?'+BX.ajax.prepareData({'AJAX_ITEMS': response.items, 'RID': response.id}),
					method: 'POST',
					data: localAjaxData,
					dataType: 'html',
					processData: false,
					start: true,
					onsuccess: function (html) {
						var ob = BX.processHTML(html);

						// inject
						BX(injectId).innerHTML = ob.HTML;
						BX.ajax.processScripts(ob.SCRIPT);
					}
				});
			}
		}
	};

	BX.ajax({
		'method': 'GET',
		'dataType': 'json',
		'url': url,
		'timeout': 3,
		'onsuccess': onready,
		'onfailure': onready
	});
}
/* End */
;; /* /bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.detail/.default/script.js?14320380879700*/
; /* /bitrix/templates/marketplace-1c-v3/components/bx/marketplace.catalog.list/other_modules/script.js?14315192671504*/
; /* /bitrix/components/bx/marketplace.bigdata.products/templates/.default/script.js?14315198591250*/
