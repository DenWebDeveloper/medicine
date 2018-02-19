!function(a){a.fn.footerReveal=function(b){var c=a(this),d=c.prev(),e=a(window),f=a.extend({shadow:!0,shadowOpacity:.8,zIndex:-100},b);a.extend(!0,{},f,b);return c.outerHeight()<=e.outerHeight()&&c.offset().top>=e.outerHeight()&&(c.css({"z-index":f.zIndex,position:"fixed",bottom:0}),f.shadow&&d.css({"-moz-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")","-webkit-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")","box-shadow":"0 20px 30px -20px rgba(0,0,0,"+f.shadowOpacity+")"}),e.on("load resize footerRevealResize",function(){c.css({width:d.outerWidth()}),d.css({"margin-bottom":c.outerHeight()})})),this}}(jQuery);

(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*! 
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
;(function ($, undefined)
{
$.fn.extend({
    _aria: function (name, value)
    {
        return this.attr("aria-" + name, value);
    },

    _removeAria: function (name)
    {
        return this.removeAttr("aria-" + name);
    },

    _enableAria: function (enable)
    {
        return (enable == null || enable) ? 
            this.removeClass("disabled")._aria("disabled", "false") : 
            this.addClass("disabled")._aria("disabled", "true");
    },

    _showAria: function (show)
    {
        return (show == null || show) ? 
            this.show()._aria("hidden", "false") : 
            this.hide()._aria("hidden", "true");
    },

    _selectAria: function (select)
    {
        return (select == null || select) ? 
            this.addClass("current")._aria("selected", "true") : 
            this.removeClass("current")._aria("selected", "false");
    },

    _id: function (id)
    {
        return (id) ? this.attr("id", id) : this.attr("id");
    }
});

if (!String.prototype.format)
{
    String.prototype.format = function()
    {
        var args = (arguments.length === 1 && $.isArray(arguments[0])) ? arguments[0] : arguments;
        var formattedString = this;
        for (var i = 0; i < args.length; i++)
        {
            var pattern = new RegExp("\\{" + i + "\\}", "gm");
            formattedString = formattedString.replace(pattern, args[i]);
        }
        return formattedString;
    };
}

/**
 * A global unique id count.
 *
 * @static
 * @private
 * @property _uniqueId
 * @type Integer
 **/
var _uniqueId = 0;

/**
 * The plugin prefix for cookies.
 *
 * @final
 * @private
 * @property _cookiePrefix
 * @type String
 **/
var _cookiePrefix = "jQu3ry_5teps_St@te_";

/**
 * Suffix for the unique tab id.
 *
 * @final
 * @private
 * @property _tabSuffix
 * @type String
 * @since 0.9.7
 **/
var _tabSuffix = "-t-";

/**
 * Suffix for the unique tabpanel id.
 *
 * @final
 * @private
 * @property _tabpanelSuffix
 * @type String
 * @since 0.9.7
 **/
var _tabpanelSuffix = "-p-";

/**
 * Suffix for the unique title id.
 *
 * @final
 * @private
 * @property _titleSuffix
 * @type String
 * @since 0.9.7
 **/
var _titleSuffix = "-h-";

/**
 * An error message for an "index out of range" error.
 *
 * @final
 * @private
 * @property _indexOutOfRangeErrorMessage
 * @type String
 **/
var _indexOutOfRangeErrorMessage = "Index out of range.";

/**
 * An error message for an "missing corresponding element" error.
 *
 * @final
 * @private
 * @property _missingCorrespondingElementErrorMessage
 * @type String
 **/
var _missingCorrespondingElementErrorMessage = "One or more corresponding step {0} are missing.";

/**
 * Adds a step to the cache.
 *
 * @static
 * @private
 * @method addStepToCache
 * @param wizard {Object} A jQuery wizard object
 * @param step {Object} The step object to add
 **/
function addStepToCache(wizard, step)
{
    getSteps(wizard).push(step);
}

function analyzeData(wizard, options, state)
{
    var stepTitles = wizard.children(options.headerTag),
        stepContents = wizard.children(options.bodyTag);

    // Validate content
    if (stepTitles.length > stepContents.length)
    {
        throwError(_missingCorrespondingElementErrorMessage, "contents");
    }
    else if (stepTitles.length < stepContents.length)
    {
        throwError(_missingCorrespondingElementErrorMessage, "titles");
    }
        
    var startIndex = options.startIndex;

    state.stepCount = stepTitles.length;

    // Tries to load the saved state (step position)
    if (options.saveState && $.cookie)
    {
        var savedState = $.cookie(_cookiePrefix + getUniqueId(wizard));
        // Sets the saved position to the start index if not undefined or out of range 
        var savedIndex = parseInt(savedState, 0);
        if (!isNaN(savedIndex) && savedIndex < state.stepCount)
        {
            startIndex = savedIndex;
        }
    }

    state.currentIndex = startIndex;

    stepTitles.each(function (index)
    {
        var item = $(this), // item == header
            content = stepContents.eq(index),
            modeData = content.data("mode"),
            mode = (modeData == null) ? contentMode.html : getValidEnumValue(contentMode,
                (/^\s*$/.test(modeData) || isNaN(modeData)) ? modeData : parseInt(modeData, 0)),
            contentUrl = (mode === contentMode.html || content.data("url") === undefined) ?
                "" : content.data("url"),
            contentLoaded = (mode !== contentMode.html && content.data("loaded") === "1"),
            step = $.extend({}, stepModel, {
                title: item.html(),
                content: (mode === contentMode.html) ? content.html() : "",
                contentUrl: contentUrl,
                contentMode: mode,
                contentLoaded: contentLoaded
            });

        addStepToCache(wizard, step);
    });
}

/**
 * Triggers the onCanceled event.
 *
 * @static
 * @private
 * @method cancel
 * @param wizard {Object} The jQuery wizard object
 **/
function cancel(wizard)
{
    wizard.triggerHandler("canceled");
}

function decreaseCurrentIndexBy(state, decreaseBy)
{
    return state.currentIndex - decreaseBy;
}

/**
 * Removes the control functionality completely and transforms the current state to the initial HTML structure.
 *
 * @static
 * @private
 * @method destroy
 * @param wizard {Object} A jQuery wizard object
 **/
function destroy(wizard, options)
{
    var eventNamespace = getEventNamespace(wizard);

    // Remove virtual data objects from the wizard
    wizard.unbind(eventNamespace).removeData("uid").removeData("options")
        .removeData("state").removeData("steps").removeData("eventNamespace")
        .find(".actions a").unbind(eventNamespace);

    // Remove attributes and CSS classes from the wizard
    wizard.removeClass(options.clearFixCssClass + " vertical");

    var contents = wizard.find(".content > *");

    // Remove virtual data objects from panels and their titles
    contents.removeData("loaded").removeData("mode").removeData("url");

    // Remove attributes, CSS classes and reset inline styles on all panels and their titles
    contents.removeAttr("id").removeAttr("role").removeAttr("tabindex")
        .removeAttr("class").removeAttr("style")._removeAria("labelledby")
        ._removeAria("hidden");

    // Empty panels if the mode is set to 'async' or 'iframe'
    wizard.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();

    var wizardSubstitute = $("<{0} class=\"{1}\"></{0}>".format(wizard.get(0).tagName, wizard.attr("class")));

    var wizardId = wizard._id();
    if (wizardId != null && wizardId !== "")
    {
        wizardSubstitute._id(wizardId);
    }

    wizardSubstitute.html(wizard.find(".content").html());
    wizard.after(wizardSubstitute);
    wizard.remove();

    return wizardSubstitute;
}

/**
 * Triggers the onFinishing and onFinished event.
 *
 * @static
 * @private
 * @method finishStep
 * @param wizard {Object} The jQuery wizard object
 * @param state {Object} The state container of the current wizard
 **/
function finishStep(wizard, state)
{
    var currentStep = wizard.find(".steps li").eq(state.currentIndex);

    if (wizard.triggerHandler("finishing", [state.currentIndex]))
    {
        currentStep.addClass("done").removeClass("error");
        wizard.triggerHandler("finished", [state.currentIndex]);
    }
    else
    {
        currentStep.addClass("error");
    }
}

/**
 * Gets or creates if not exist an unique event namespace for the given wizard instance.
 *
 * @static
 * @private
 * @method getEventNamespace
 * @param wizard {Object} A jQuery wizard object
 * @return {String} Returns the unique event namespace for the given wizard
 */
function getEventNamespace(wizard)
{
    var eventNamespace = wizard.data("eventNamespace");

    if (eventNamespace == null)
    {
        eventNamespace = "." + getUniqueId(wizard);
        wizard.data("eventNamespace", eventNamespace);
    }

    return eventNamespace;
}

function getStepAnchor(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _tabSuffix + index);
}

function getStepPanel(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _tabpanelSuffix + index);
}

function getStepTitle(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _titleSuffix + index);
}

function getOptions(wizard)
{
    return wizard.data("options");
}

function getState(wizard)
{
    return wizard.data("state");
}

function getSteps(wizard)
{
    return wizard.data("steps");
}

/**
 * Gets a specific step object by index.
 *
 * @static
 * @private
 * @method getStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @return {Object} A specific step object
 **/
function getStep(wizard, index)
{
    var steps = getSteps(wizard);

    if (index < 0 || index >= steps.length)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    return steps[index];
}

/**
 * Gets or creates if not exist an unique id from the given wizard instance.
 *
 * @static
 * @private
 * @method getUniqueId
 * @param wizard {Object} A jQuery wizard object
 * @return {String} Returns the unique id for the given wizard
 */
function getUniqueId(wizard)
{
    var uniqueId = wizard.data("uid");

    if (uniqueId == null)
    {
        uniqueId = wizard._id();
        if (uniqueId == null)
        {
            uniqueId = "steps-uid-".concat(_uniqueId);
            wizard._id(uniqueId);
        }

        _uniqueId++;
        wizard.data("uid", uniqueId);
    }

    return uniqueId;
}

/**
 * Gets a valid enum value by checking a specific enum key or value.
 * 
 * @static
 * @private
 * @method getValidEnumValue
 * @param enumType {Object} Type of enum
 * @param keyOrValue {Object} Key as `String` or value as `Integer` to check for
 */
function getValidEnumValue(enumType, keyOrValue)
{
    validateArgument("enumType", enumType);
    validateArgument("keyOrValue", keyOrValue);

    // Is key
    if (typeof keyOrValue === "string")
    {
        var value = enumType[keyOrValue];
        if (value === undefined)
        {
            throwError("The enum key '{0}' does not exist.", keyOrValue);
        }

        return value;
    }
    // Is value
    else if (typeof keyOrValue === "number")
    {
        for (var key in enumType)
        {
            if (enumType[key] === keyOrValue)
            {
                return keyOrValue;
            }
        }

        throwError("Invalid enum value '{0}'.", keyOrValue);
    }
    // Type is not supported
    else
    {
        throwError("Invalid key or value type.");
    }
}

/**
 * Routes to the next step.
 *
 * @static
 * @private
 * @method goToNextStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @return {Boolean} Indicates whether the action executed
 **/
function goToNextStep(wizard, options, state)
{
    return paginationClick(wizard, options, state, increaseCurrentIndexBy(state, 1));
}

/**
 * Routes to the previous step.
 *
 * @static
 * @private
 * @method goToPreviousStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @return {Boolean} Indicates whether the action executed
 **/
function goToPreviousStep(wizard, options, state)
{
    return paginationClick(wizard, options, state, decreaseCurrentIndexBy(state, 1));
}

/**
 * Routes to a specific step by a given index.
 *
 * @static
 * @private
 * @method goToStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to route to
 * @return {Boolean} Indicates whether the action succeeded or failed
 **/
function goToStep(wizard, options, state, index)
{
    if (index < 0 || index >= state.stepCount)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    if (options.forceMoveForward && index < state.currentIndex)
    {
        return;
    }

    var oldIndex = state.currentIndex;
    if (wizard.triggerHandler("stepChanging", [state.currentIndex, index]))
    {
        // Save new state
        state.currentIndex = index;
        saveCurrentStateToCookie(wizard, options, state);

        // Change visualisation
        refreshStepNavigation(wizard, options, state, oldIndex);
        refreshPagination(wizard, options, state);
        loadAsyncContent(wizard, options, state);
        startTransitionEffect(wizard, options, state, index, oldIndex, function()
        {
            wizard.triggerHandler("stepChanged", [index, oldIndex]);
        });
    }
    else
    {
        wizard.find(".steps li").eq(oldIndex).addClass("error");
    }

    return true;
}

function increaseCurrentIndexBy(state, increaseBy)
{
    return state.currentIndex + increaseBy;
}

/**
 * Initializes the component.
 *
 * @static
 * @private
 * @method initialize
 * @param options {Object} The component settings
 **/
function initialize(options)
{
    /*jshint -W040 */
    var opts = $.extend(true, {}, defaults, options);

    return this.each(function ()
    {
        var wizard = $(this);
        var state = {
            currentIndex: opts.startIndex,
            currentStep: null,
            stepCount: 0,
            transitionElement: null
        };

        // Create data container
        wizard.data("options", opts);
        wizard.data("state", state);
        wizard.data("steps", []);

        analyzeData(wizard, opts, state);
        render(wizard, opts, state);
        registerEvents(wizard, opts);

        // Trigger focus
        if (opts.autoFocus && _uniqueId === 0)
        {
            getStepAnchor(wizard, opts.startIndex).focus();
        }

        wizard.triggerHandler("init", [opts.startIndex]);
    });
}

/**
 * Inserts a new step to a specific position.
 *
 * @static
 * @private
 * @method insertStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 * @example
 *     $("#wizard").steps().insert(0, {
 *         title: "Title",
 *         content: "", // optional
 *         contentMode: "async", // optional
 *         contentUrl: "/Content/Step/1" // optional
 *     });
 * @chainable
 **/
function insertStep(wizard, options, state, index, step)
{
    if (index < 0 || index > state.stepCount)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    // TODO: Validate step object

    // Change data
    step = $.extend({}, stepModel, step);
    insertStepToCache(wizard, index, step);
    if (state.currentIndex !== state.stepCount && state.currentIndex >= index)
    {
        state.currentIndex++;
        saveCurrentStateToCookie(wizard, options, state);
    }
    state.stepCount++;

    var contentContainer = wizard.find(".content"),
        header = $("<{0}>{1}</{0}>".format(options.headerTag, step.title)),
        body = $("<{0}></{0}>".format(options.bodyTag));

    if (step.contentMode == null || step.contentMode === contentMode.html)
    {
        body.html(step.content);
    }

    if (index === 0)
    {
        contentContainer.prepend(body).prepend(header);
    }
    else
    {
        getStepPanel(wizard, (index - 1)).after(body).after(header);
    }

    renderBody(wizard, state, body, index);
    renderTitle(wizard, options, state, header, index);
    refreshSteps(wizard, options, state, index);
    if (index === state.currentIndex)
    {
        refreshStepNavigation(wizard, options, state);
    }
    refreshPagination(wizard, options, state);

    return wizard;
}

/**
 * Inserts a step object to the cache at a specific position.
 *
 * @static
 * @private
 * @method insertStepToCache
 * @param wizard {Object} A jQuery wizard object
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 **/
function insertStepToCache(wizard, index, step)
{
    getSteps(wizard).splice(index, 0, step);
}

/**
 * Handles the keyup DOM event for pagination.
 *
 * @static
 * @private
 * @event keyup
 * @param event {Object} An event object
 */
function keyUpHandler(event)
{
    var wizard = $(this),
        options = getOptions(wizard),
        state = getState(wizard);

    if (options.suppressPaginationOnFocus && wizard.find(":focus").is(":input"))
    {
        event.preventDefault();
        return false;
    }

    var keyCodes = { left: 37, right: 39 };
    if (event.keyCode === keyCodes.left)
    {
        event.preventDefault();
        goToPreviousStep(wizard, options, state);
    }
    else if (event.keyCode === keyCodes.right)
    {
        event.preventDefault();
        goToNextStep(wizard, options, state);
    }
}

/**
 * Loads and includes async content.
 *
 * @static
 * @private
 * @method loadAsyncContent
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function loadAsyncContent(wizard, options, state)
{
    if (state.stepCount > 0)
    {
        var currentIndex = state.currentIndex,
            currentStep = getStep(wizard, currentIndex);

        if (!options.enableContentCache || !currentStep.contentLoaded)
        {
            switch (getValidEnumValue(contentMode, currentStep.contentMode))
            {
                case contentMode.iframe:
                    wizard.find(".content > .body").eq(state.currentIndex).empty()
                        .html("<iframe src=\"" + currentStep.contentUrl + "\" frameborder=\"0\" scrolling=\"no\" />")
                        .data("loaded", "1");
                    break;

                case contentMode.async:
                    var currentStepContent = getStepPanel(wizard, currentIndex)._aria("busy", "true")
                        .empty().append(renderTemplate(options.loadingTemplate, { text: options.labels.loading }));

                    $.ajax({ url: currentStep.contentUrl, cache: false }).done(function (data)
                    {
                        currentStepContent.empty().html(data)._aria("busy", "false").data("loaded", "1");
                        wizard.triggerHandler("contentLoaded", [currentIndex]);
                    });
                    break;
            }
        }
    }
}

/**
 * Fires the action next or previous click event.
 *
 * @static
 * @private
 * @method paginationClick
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to route to
 * @return {Boolean} Indicates whether the event fired successfully or not
 **/
function paginationClick(wizard, options, state, index)
{
    var oldIndex = state.currentIndex;

    if (index >= 0 && index < state.stepCount && !(options.forceMoveForward && index < state.currentIndex))
    {
        var anchor = getStepAnchor(wizard, index),
            parent = anchor.parent(),
            isDisabled = parent.hasClass("disabled");

        // Enable the step to make the anchor clickable!
        parent._enableAria();
        anchor.click();

        // An error occured
        if (oldIndex === state.currentIndex && isDisabled)
        {
            // Disable the step again if current index has not changed; prevents click action.
            parent._enableAria(false);
            return false;
        }

        return true;
    }

    return false;
}

/**
 * Fires when a pagination click happens.
 *
 * @static
 * @private
 * @event click
 * @param event {Object} An event object
 */
function paginationClickHandler(event)
{
    event.preventDefault();

    var anchor = $(this),
        wizard = anchor.parent().parent().parent().parent(),
        options = getOptions(wizard),
        state = getState(wizard),
        href = anchor.attr("href");

    switch (href.substring(href.lastIndexOf("#") + 1))
    {
        case "cancel":
            cancel(wizard);
            break;

        case "finish":
            finishStep(wizard, state);
            break;

        case "next":
            goToNextStep(wizard, options, state);
            break;

        case "previous":
            goToPreviousStep(wizard, options, state);
            break;
    }
}

/**
 * Refreshs the visualization state for the entire pagination.
 *
 * @static
 * @private
 * @method refreshPagination
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function refreshPagination(wizard, options, state)
{
    if (options.enablePagination)
    {
        var finish = wizard.find(".actions a[href$='#finish']").parent(),
            next = wizard.find(".actions a[href$='#next']").parent();

        if (!options.forceMoveForward)
        {
            var previous = wizard.find(".actions a[href$='#previous']").parent();
            previous._enableAria(state.currentIndex > 0);
        }

        if (options.enableFinishButton && options.showFinishButtonAlways)
        {
            finish._enableAria(state.stepCount > 0);
            next._enableAria(state.stepCount > 1 && state.stepCount > (state.currentIndex + 1));
        }
        else
        {
            finish._showAria(options.enableFinishButton && state.stepCount === (state.currentIndex + 1));
            next._showAria(state.stepCount === 0 || state.stepCount > (state.currentIndex + 1)).
                _enableAria(state.stepCount > (state.currentIndex + 1) || !options.enableFinishButton);
        }
    }
}

/**
 * Refreshs the visualization state for the step navigation (tabs).
 *
 * @static
 * @private
 * @method refreshStepNavigation
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param [oldIndex] {Integer} The index of the prior step
 */
function refreshStepNavigation(wizard, options, state, oldIndex)
{
    var currentOrNewStepAnchor = getStepAnchor(wizard, state.currentIndex),
        currentInfo = $("<span class=\"current-info audible\">" + options.labels.current + " </span>"),
        stepTitles = wizard.find(".content > .title");

    if (oldIndex != null)
    {
        var oldStepAnchor = getStepAnchor(wizard, oldIndex);
        oldStepAnchor.parent().addClass("done").removeClass("error")._selectAria(false);
        stepTitles.eq(oldIndex).removeClass("current").next(".body").removeClass("current");
        currentInfo = oldStepAnchor.find(".current-info");
        currentOrNewStepAnchor.focus();
    }

    currentOrNewStepAnchor.prepend(currentInfo).parent()._selectAria().removeClass("done")._enableAria();
    stepTitles.eq(state.currentIndex).addClass("current").next(".body").addClass("current");
}

/**
 * Refreshes step buttons and their related titles beyond a certain position.
 *
 * @static
 * @private
 * @method refreshSteps
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The start point for refreshing ids
 */
function refreshSteps(wizard, options, state, index)
{
    var uniqueId = getUniqueId(wizard);

    for (var i = index; i < state.stepCount; i++)
    {
        var uniqueStepId = uniqueId + _tabSuffix + i,
            uniqueBodyId = uniqueId + _tabpanelSuffix + i,
            uniqueHeaderId = uniqueId + _titleSuffix + i,
            title = wizard.find(".title").eq(i)._id(uniqueHeaderId);

        wizard.find(".steps a").eq(i)._id(uniqueStepId)
            ._aria("controls", uniqueBodyId).attr("href", "#" + uniqueHeaderId)
            .html(renderTemplate(options.titleTemplate, { index: i + 1, title: title.html() }));
        wizard.find(".body").eq(i)._id(uniqueBodyId)
            ._aria("labelledby", uniqueHeaderId);
    }
}

function registerEvents(wizard, options)
{
    var eventNamespace = getEventNamespace(wizard);

    wizard.bind("canceled" + eventNamespace, options.onCanceled);
    wizard.bind("contentLoaded" + eventNamespace, options.onContentLoaded);
    wizard.bind("finishing" + eventNamespace, options.onFinishing);
    wizard.bind("finished" + eventNamespace, options.onFinished);
    wizard.bind("init" + eventNamespace, options.onInit);
    wizard.bind("stepChanging" + eventNamespace, options.onStepChanging);
    wizard.bind("stepChanged" + eventNamespace, options.onStepChanged);

    if (options.enableKeyNavigation)
    {
        wizard.bind("keyup" + eventNamespace, keyUpHandler);
    }

    wizard.find(".actions a").bind("click" + eventNamespace, paginationClickHandler);
}

/**
 * Removes a specific step by an given index.
 *
 * @static
 * @private
 * @method removeStep
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) of the step to remove
 * @return Indecates whether the item is removed.
 **/
function removeStep(wizard, options, state, index)
{
    // Index out of range and try deleting current item will return false.
    if (index < 0 || index >= state.stepCount || state.currentIndex === index)
    {
        return false;
    }

    // Change data
    removeStepFromCache(wizard, index);
    if (state.currentIndex > index)
    {
        state.currentIndex--;
        saveCurrentStateToCookie(wizard, options, state);
    }
    state.stepCount--;

    getStepTitle(wizard, index).remove();
    getStepPanel(wizard, index).remove();
    getStepAnchor(wizard, index).parent().remove();

    // Set the "first" class to the new first step button 
    if (index === 0)
    {
        wizard.find(".steps li").first().addClass("first");
    }

    // Set the "last" class to the new last step button 
    if (index === state.stepCount)
    {
        wizard.find(".steps li").eq(index).addClass("last");
    }

    refreshSteps(wizard, options, state, index);
    refreshPagination(wizard, options, state);

    return true;
}

function removeStepFromCache(wizard, index)
{
    getSteps(wizard).splice(index, 1);
}

/**
 * Transforms the base html structure to a more sensible html structure.
 *
 * @static
 * @private
 * @method render
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 **/
function render(wizard, options, state)
{
    // Create a content wrapper and copy HTML from the intial wizard structure
    var wrapperTemplate = "<{0} class=\"{1}\">{2}</{0}>",
        orientation = getValidEnumValue(stepsOrientation, options.stepsOrientation),
        verticalCssClass = (orientation === stepsOrientation.vertical) ? " vertical" : "",
        contentWrapper = $(wrapperTemplate.format(options.contentContainerTag, "content " + options.clearFixCssClass, wizard.html())),
        stepsWrapper = $(wrapperTemplate.format(options.stepsContainerTag, "steps " + options.clearFixCssClass, "<ul role=\"tablist\"></ul>")),
        stepTitles = contentWrapper.children(options.headerTag),
        stepContents = contentWrapper.children(options.bodyTag);

    // Transform the wizard wrapper and remove the inner HTML
    wizard.attr("role", "application").empty().append(stepsWrapper).append(contentWrapper)
        .addClass(options.cssClass + " " + options.clearFixCssClass + verticalCssClass);

    // Add WIA-ARIA support
    stepContents.each(function (index)
    {
        renderBody(wizard, state, $(this), index);
    });

    stepTitles.each(function (index)
    {
        renderTitle(wizard, options, state, $(this), index);
    });

    refreshStepNavigation(wizard, options, state);
    renderPagination(wizard, options, state);
}

/**
 * Transforms the body to a proper tabpanel.
 *
 * @static
 * @private
 * @method renderBody
 * @param wizard {Object} A jQuery wizard object
 * @param body {Object} A jQuery body object
 * @param index {Integer} The position of the body
 */
function renderBody(wizard, state, body, index)
{
    var uniqueId = getUniqueId(wizard),
        uniqueBodyId = uniqueId + _tabpanelSuffix + index,
        uniqueHeaderId = uniqueId + _titleSuffix + index;

    body._id(uniqueBodyId).attr("role", "tabpanel")._aria("labelledby", uniqueHeaderId)
        .addClass("body")._showAria(state.currentIndex === index);
}

/**
 * Renders a pagination if enabled.
 *
 * @static
 * @private
 * @method renderPagination
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function renderPagination(wizard, options, state)
{
    if (options.enablePagination)
    {
        var pagination = "<{0} class=\"actions {1}\"><ul role=\"menu\" aria-label=\"{2}\">{3}</ul></{0}>",
            buttonTemplate = "<li><a href=\"#{0}\" role=\"menuitem\">{1}</a></li>",
            buttons = "";

        if (!options.forceMoveForward)
        {
            buttons += buttonTemplate.format("previous", options.labels.previous);
        }

        buttons += buttonTemplate.format("next", options.labels.next);

        if (options.enableFinishButton)
        {
            buttons += buttonTemplate.format("finish", options.labels.finish);
        }

        if (options.enableCancelButton)
        {
            buttons += buttonTemplate.format("cancel", options.labels.cancel);
        }

        wizard.append(pagination.format(options.actionContainerTag, options.clearFixCssClass,
            options.labels.pagination, buttons));

        refreshPagination(wizard, options, state);
        loadAsyncContent(wizard, options, state);
    }
}

/**
 * Renders a template and replaces all placeholder.
 *
 * @static
 * @private
 * @method renderTemplate
 * @param template {String} A template
 * @param substitutes {Object} A list of substitute
 * @return {String} The rendered template
 */
function renderTemplate(template, substitutes)
{
    var matches = template.match(/#([a-z]*)#/gi);

    for (var i = 0; i < matches.length; i++)
    {
        var match = matches[i], 
            key = match.substring(1, match.length - 1);

        if (substitutes[key] === undefined)
        {
            throwError("The key '{0}' does not exist in the substitute collection!", key);
        }

        template = template.replace(match, substitutes[key]);
    }

    return template;
}

/**
 * Transforms the title to a step item button.
 *
 * @static
 * @private
 * @method renderTitle
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param header {Object} A jQuery header object
 * @param index {Integer} The position of the header
 */
function renderTitle(wizard, options, state, header, index)
{
    var uniqueId = getUniqueId(wizard),
        uniqueStepId = uniqueId + _tabSuffix + index,
        uniqueBodyId = uniqueId + _tabpanelSuffix + index,
        uniqueHeaderId = uniqueId + _titleSuffix + index,
        stepCollection = wizard.find(".steps > ul"),
        title = renderTemplate(options.titleTemplate, {
            index: index + 1,
            title: header.html()
        }),
        stepItem = $("<li role=\"tab\"><a id=\"" + uniqueStepId + "\" href=\"#" + uniqueHeaderId + 
            "\" aria-controls=\"" + uniqueBodyId + "\">" + title + "</a></li>");
        
    stepItem._enableAria(options.enableAllSteps || state.currentIndex > index);

    if (state.currentIndex > index)
    {
        stepItem.addClass("done");
    }

    header._id(uniqueHeaderId).attr("tabindex", "-1").addClass("title");

    if (index === 0)
    {
        stepCollection.prepend(stepItem);
    }
    else
    {
        stepCollection.find("li").eq(index - 1).after(stepItem);
    }

    // Set the "first" class to the new first step button
    if (index === 0)
    {
        stepCollection.find("li").removeClass("first").eq(index).addClass("first");
    }

    // Set the "last" class to the new last step button
    if (index === (state.stepCount - 1))
    {
        stepCollection.find("li").removeClass("last").eq(index).addClass("last");
    }

    // Register click event
    stepItem.children("a").bind("click" + getEventNamespace(wizard), stepClickHandler);
}

/**
 * Saves the current state to a cookie.
 *
 * @static
 * @private
 * @method saveCurrentStateToCookie
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function saveCurrentStateToCookie(wizard, options, state)
{
    if (options.saveState && $.cookie)
    {
        $.cookie(_cookiePrefix + getUniqueId(wizard), state.currentIndex);
    }
}

function startTransitionEffect(wizard, options, state, index, oldIndex, doneCallback)
{
    var stepContents = wizard.find(".content > .body"),
        effect = getValidEnumValue(transitionEffect, options.transitionEffect),
        effectSpeed = options.transitionEffectSpeed,
        newStep = stepContents.eq(index),
        currentStep = stepContents.eq(oldIndex);

    switch (effect)
    {
        case transitionEffect.fade:
        case transitionEffect.slide:
            var hide = (effect === transitionEffect.fade) ? "fadeOut" : "slideUp",
                show = (effect === transitionEffect.fade) ? "fadeIn" : "slideDown";

            state.transitionElement = newStep;
            currentStep[hide](effectSpeed, function ()
            {
                var wizard = $(this)._showAria(false).parent().parent(),
                    state = getState(wizard);

                if (state.transitionElement)
                {
                    state.transitionElement[show](effectSpeed, function ()
                    {
                        $(this)._showAria();
                    }).promise().done(doneCallback);
                    state.transitionElement = null;
                }
            });
            break;

        case transitionEffect.slideLeft:
            var outerWidth = currentStep.outerWidth(true),
                posFadeOut = (index > oldIndex) ? -(outerWidth) : outerWidth,
                posFadeIn = (index > oldIndex) ? outerWidth : -(outerWidth);

            $.when(currentStep.animate({ left: posFadeOut }, effectSpeed, 
                    function () { $(this)._showAria(false); }),
                newStep.css("left", posFadeIn + "px")._showAria()
                    .animate({ left: 0 }, effectSpeed)).done(doneCallback);
            break;

        default:
            $.when(currentStep._showAria(false), newStep._showAria())
                .done(doneCallback);
            break;
    }
}

/**
 * Fires when a step click happens.
 *
 * @static
 * @private
 * @event click
 * @param event {Object} An event object
 */
function stepClickHandler(event)
{
    event.preventDefault();

    var anchor = $(this),
        wizard = anchor.parent().parent().parent().parent(),
        options = getOptions(wizard),
        state = getState(wizard),
        oldIndex = state.currentIndex;

    if (anchor.parent().is(":not(.disabled):not(.current)"))
    {
        var href = anchor.attr("href"),
            position = parseInt(href.substring(href.lastIndexOf("-") + 1), 0);

        goToStep(wizard, options, state, position);
    }

    // If nothing has changed
    if (oldIndex === state.currentIndex)
    {
        getStepAnchor(wizard, oldIndex).focus();
        return false;
    }
}

function throwError(message)
{
    if (arguments.length > 1)
    {
        message = message.format(Array.prototype.slice.call(arguments, 1));
    }

    throw new Error(message);
}

/**
 * Checks an argument for null or undefined and throws an error if one check applies.
 *
 * @static
 * @private
 * @method validateArgument
 * @param argumentName {String} The name of the given argument
 * @param argumentValue {Object} The argument itself
 */
function validateArgument(argumentName, argumentValue)
{
    if (argumentValue == null)
    {
        throwError("The argument '{0}' is null or undefined.", argumentName);
    }
}

/**
 * Represents a jQuery wizard plugin.
 *
 * @class steps
 * @constructor
 * @param [method={}] The name of the method as `String` or an JSON object for initialization
 * @param [params=]* {Array} Additional arguments for a method call
 * @chainable
 **/
$.fn.steps = function (method)
{
    if ($.fn.steps[method])
    {
        return $.fn.steps[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else if (typeof method === "object" || !method)
    {
        return initialize.apply(this, arguments);
    }
    else
    {
        $.error("Method " + method + " does not exist on jQuery.steps");
    }
};

/**
 * Adds a new step.
 *
 * @method add
 * @param step {Object} The step object to add
 * @chainable
 **/
$.fn.steps.add = function (step)
{
    var state = getState(this);
    return insertStep(this, getOptions(this), state, state.stepCount, step);
};

/**
 * Removes the control functionality completely and transforms the current state to the initial HTML structure.
 *
 * @method destroy
 * @chainable
 **/
$.fn.steps.destroy = function ()
{
    return destroy(this, getOptions(this));
};

/**
 * Triggers the onFinishing and onFinished event.
 *
 * @method finish
 **/
$.fn.steps.finish = function ()
{
    finishStep(this, getState(this));
};

/**
 * Gets the current step index.
 *
 * @method getCurrentIndex
 * @return {Integer} The actual step index (zero-based)
 * @for steps
 **/
$.fn.steps.getCurrentIndex = function ()
{
    return getState(this).currentIndex;
};

/**
 * Gets the current step object.
 *
 * @method getCurrentStep
 * @return {Object} The actual step object
 **/
$.fn.steps.getCurrentStep = function ()
{
    return getStep(this, getState(this).currentIndex);
};

/**
 * Gets a specific step object by index.
 *
 * @method getStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @return {Object} A specific step object
 **/
$.fn.steps.getStep = function (index)
{
    return getStep(this, index);
};

/**
 * Inserts a new step to a specific position.
 *
 * @method insert
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 * @example
 *     $("#wizard").steps().insert(0, {
 *         title: "Title",
 *         content: "", // optional
 *         contentMode: "async", // optional
 *         contentUrl: "/Content/Step/1" // optional
 *     });
 * @chainable
 **/
$.fn.steps.insert = function (index, step)
{
    return insertStep(this, getOptions(this), getState(this), index, step);
};

/**
 * Routes to the next step.
 *
 * @method next
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.next = function ()
{
    return goToNextStep(this, getOptions(this), getState(this));
};

/**
 * Routes to the previous step.
 *
 * @method previous
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.previous = function ()
{
    return goToPreviousStep(this, getOptions(this), getState(this));
};

/**
 * Removes a specific step by an given index.
 *
 * @method remove
 * @param index {Integer} The position (zero-based) of the step to remove
 * @return Indecates whether the item is removed.
 **/
$.fn.steps.remove = function (index)
{
    return removeStep(this, getOptions(this), getState(this), index);
};

/**
 * Sets a specific step object by index.
 *
 * @method setStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @param step {Object} The step object to change
 **/
$.fn.steps.setStep = function (index, step)
{
    throw new Error("Not yet implemented!");
};

/**
 * Skips an certain amount of steps.
 *
 * @method skip
 * @param count {Integer} The amount of steps that should be skipped
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.skip = function (count)
{
    throw new Error("Not yet implemented!");
};

/**
 * An enum represents the different content types of a step and their loading mechanisms.
 *
 * @class contentMode
 * @for steps
 **/
var contentMode = $.fn.steps.contentMode = {
    /**
     * HTML embedded content
     *
     * @readOnly
     * @property html
     * @type Integer
     * @for contentMode
     **/
    html: 0,

    /**
     * IFrame embedded content
     *
     * @readOnly
     * @property iframe
     * @type Integer
     * @for contentMode
     **/
    iframe: 1,

    /**
     * Async embedded content
     *
     * @readOnly
     * @property async
     * @type Integer
     * @for contentMode
     **/
    async: 2
};

/**
 * An enum represents the orientation of the steps navigation.
 *
 * @class stepsOrientation
 * @for steps
 **/
var stepsOrientation = $.fn.steps.stepsOrientation = {
    /**
     * Horizontal orientation
     *
     * @readOnly
     * @property horizontal
     * @type Integer
     * @for stepsOrientation
     **/
    horizontal: 0,

    /**
     * Vertical orientation
     *
     * @readOnly
     * @property vertical
     * @type Integer
     * @for stepsOrientation
     **/
    vertical: 1
};

/**
 * An enum that represents the various transition animations.
 *
 * @class transitionEffect
 * @for steps
 **/
var transitionEffect = $.fn.steps.transitionEffect = {
    /**
     * No transition animation
     *
     * @readOnly
     * @property none
     * @type Integer
     * @for transitionEffect
     **/
    none: 0,

    /**
     * Fade in transition
     *
     * @readOnly
     * @property fade
     * @type Integer
     * @for transitionEffect
     **/
    fade: 1,

    /**
     * Slide up transition
     *
     * @readOnly
     * @property slide
     * @type Integer
     * @for transitionEffect
     **/
    slide: 2,

    /**
     * Slide left transition
     *
     * @readOnly
     * @property slideLeft
     * @type Integer
     * @for transitionEffect
     **/
    slideLeft: 3
};

var stepModel = $.fn.steps.stepModel = {
    title: "",
    content: "",
    contentUrl: "",
    contentMode: contentMode.html,
    contentLoaded: false
};

/**
 * An object that represents the default settings.
 * There are two possibities to override the sub-properties.
 * Either by doing it generally (global) or on initialization.
 *
 * @static
 * @class defaults
 * @for steps
 * @example
 *   // Global approach
 *   $.steps.defaults.headerTag = "h3";
 * @example
 *   // Initialization approach
 *   $("#wizard").steps({ headerTag: "h3" });
 **/
var defaults = $.fn.steps.defaults = {
    /**
     * The header tag is used to find the step button text within the declared wizard area.
     *
     * @property headerTag
     * @type String
     * @default "h1"
     * @for defaults
     **/
    headerTag: "h1",

    /**
     * The body tag is used to find the step content within the declared wizard area.
     *
     * @property bodyTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    bodyTag: "div",

    /**
     * The content container tag which will be used to wrap all step contents.
     *
     * @property contentContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    contentContainerTag: "div",

    /**
     * The action container tag which will be used to wrap the pagination navigation.
     *
     * @property actionContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    actionContainerTag: "div",

    /**
     * The steps container tag which will be used to wrap the steps navigation.
     *
     * @property stepsContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    stepsContainerTag: "div",

    /**
     * The css class which will be added to the outer component wrapper.
     *
     * @property cssClass
     * @type String
     * @default "wizard"
     * @for defaults
     * @example
     *     <div class="wizard">
     *         ...
     *     </div>
     **/
    cssClass: "wizard",

    /**
     * The css class which will be used for floating scenarios.
     *
     * @property clearFixCssClass
     * @type String
     * @default "clearfix"
     * @for defaults
     **/
    clearFixCssClass: "clearfix",

    /**
     * Determines whether the steps are vertically or horizontally oriented.
     *
     * @property stepsOrientation
     * @type stepsOrientation
     * @default horizontal
     * @for defaults
     * @since 1.0.0
     **/
    stepsOrientation: stepsOrientation.horizontal,

    /*
     * Tempplates
     */

    /**
     * The title template which will be used to create a step button.
     *
     * @property titleTemplate
     * @type String
     * @default "<span class=\"number\">#index#.</span> #title#"
     * @for defaults
     **/
    titleTemplate: "<span class=\"number\">#index#.</span> #title#",

    /**
     * The loading template which will be used to create the loading animation.
     *
     * @property loadingTemplate
     * @type String
     * @default "<span class=\"spinner\"></span> #text#"
     * @for defaults
     **/
    loadingTemplate: "<span class=\"spinner\"></span> #text#",

    /*
     * Behaviour
     */

    /**
     * Sets the focus to the first wizard instance in order to enable the key navigation from the begining if `true`. 
     *
     * @property autoFocus
     * @type Boolean
     * @default false
     * @for defaults
     * @since 0.9.4
     **/
    autoFocus: false,

    /**
     * Enables all steps from the begining if `true` (all steps are clickable).
     *
     * @property enableAllSteps
     * @type Boolean
     * @default false
     * @for defaults
     **/
    enableAllSteps: false,

    /**
     * Enables keyboard navigation if `true` (arrow left and arrow right).
     *
     * @property enableKeyNavigation
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableKeyNavigation: true,

    /**
     * Enables pagination if `true`.
     *
     * @property enablePagination
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enablePagination: true,

    /**
     * Suppresses pagination if a form field is focused.
     *
     * @property suppressPaginationOnFocus
     * @type Boolean
     * @default true
     * @for defaults
     **/
    suppressPaginationOnFocus: true,

    /**
     * Enables cache for async loaded or iframe embedded content.
     *
     * @property enableContentCache
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableContentCache: true,

    /**
     * Shows the cancel button if enabled.
     *
     * @property enableCancelButton
     * @type Boolean
     * @default false
     * @for defaults
     **/
    enableCancelButton: false,

    /**
     * Shows the finish button if enabled.
     *
     * @property enableFinishButton
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableFinishButton: true,

    /**
     * Not yet implemented.
     *
     * @property preloadContent
     * @type Boolean
     * @default false
     * @for defaults
     **/
    preloadContent: false,

    /**
     * Shows the finish button always (on each step; right beside the next button) if `true`. 
     * Otherwise the next button will be replaced by the finish button if the last step becomes active.
     *
     * @property showFinishButtonAlways
     * @type Boolean
     * @default false
     * @for defaults
     **/
    showFinishButtonAlways: false,

    /**
     * Prevents jumping to a previous step.
     *
     * @property forceMoveForward
     * @type Boolean
     * @default false
     * @for defaults
     **/
    forceMoveForward: false,

    /**
     * Saves the current state (step position) to a cookie.
     * By coming next time the last active step becomes activated.
     *
     * @property saveState
     * @type Boolean
     * @default false
     * @for defaults
     **/
    saveState: false,

    /**
     * The position to start on (zero-based).
     *
     * @property startIndex
     * @type Integer
     * @default 0
     * @for defaults
     **/
    startIndex: 0,

    /*
     * Animation Effect Configuration
     */

    /**
     * The animation effect which will be used for step transitions.
     *
     * @property transitionEffect
     * @type transitionEffect
     * @default none
     * @for defaults
     **/
    transitionEffect: transitionEffect.none,

    /**
     * Animation speed for step transitions (in milliseconds).
     *
     * @property transitionEffectSpeed
     * @type Integer
     * @default 200
     * @for defaults
     **/
    transitionEffectSpeed: 200,

    /*
     * Events
     */

    /**
     * Fires before the step changes and can be used to prevent step changing by returning `false`. 
     * Very useful for form validation. 
     *
     * @property onStepChanging
     * @type Event
     * @default function (event, currentIndex, newIndex) { return true; }
     * @for defaults
     **/
    onStepChanging: function (event, currentIndex, newIndex) { return true; },

    /**
     * Fires after the step has change. 
     *
     * @property onStepChanged
     * @type Event
     * @default function (event, currentIndex, priorIndex) { }
     * @for defaults
     **/
    onStepChanged: function (event, currentIndex, priorIndex) { },

    /**
     * Fires after cancelation. 
     *
     * @property onCanceled
     * @type Event
     * @default function (event) { }
     * @for defaults
     **/
    onCanceled: function (event) { },

    /**
     * Fires before finishing and can be used to prevent completion by returning `false`. 
     * Very useful for form validation. 
     *
     * @property onFinishing
     * @type Event
     * @default function (event, currentIndex) { return true; }
     * @for defaults
     **/
    onFinishing: function (event, currentIndex) { return true; },

    /**
     * Fires after completion. 
     *
     * @property onFinished
     * @type Event
     * @default function (event, currentIndex) { }
     * @for defaults
     **/
    onFinished: function (event, currentIndex) { },

    /**
     * Fires after async content is loaded. 
     *
     * @property onContentLoaded
     * @type Event
     * @default function (event, index) { }
     * @for defaults
     **/
    onContentLoaded: function (event, currentIndex) { },

    /**
     * Fires when the wizard is initialized. 
     *
     * @property onInit
     * @type Event
     * @default function (event) { }
     * @for defaults
     **/
    onInit: function (event, currentIndex) { },

    /**
     * Contains all labels. 
     *
     * @property labels
     * @type Object
     * @for defaults
     **/
    labels: {
        /**
         * Label for the cancel button.
         *
         * @property cancel
         * @type String
         * @default "Cancel"
         * @for defaults
         **/
        cancel: "Cancel",

        /**
         * This label is important for accessability reasons.
         * Indicates which step is activated.
         *
         * @property current
         * @type String
         * @default "current step:"
         * @for defaults
         **/
        current: "current step:",

        /**
         * This label is important for accessability reasons and describes the kind of navigation.
         *
         * @property pagination
         * @type String
         * @default "Pagination"
         * @for defaults
         * @since 0.9.7
         **/
        pagination: "Pagination",

        /**
         * Label for the finish button.
         *
         * @property finish
         * @type String
         * @default "Finish"
         * @for defaults
         **/
        finish: "Finish",

        /**
         * Label for the next button.
         *
         * @property next
         * @type String
         * @default "Next"
         * @for defaults
         **/
        next: "Next",

        /**
         * Label for the previous button.
         *
         * @property previous
         * @type String
         * @default "Previous"
         * @for defaults
         **/
        previous: "Previous",

        /**
         * Label for the loading animation.
         *
         * @property loading
         * @type String
         * @default "Loading ..."
         * @for defaults
         **/
        loading: "Loading ..."
    }
};
})(jQuery);
$("#example-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
});
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//         $('header').addClass('header-scroll');
//     }
//     else{
//         $('header').removeClass('header-scroll');
//     }
// });

// $(function(){
//     $('.vertical-nav-btn').click(function(){
//         $(this).toggleClass('active');
//
//         $('.vertical-nav').toggleClass('active');
//
//         $('.vertical-nav-overlay').toggleClass('active');
//
//         return false;
//     })
//
//     $(document).mouseup(function (e){
//         var container = $('.vertical-nav-btn');
//
//         if (!container.is(e.target) && container.has(e.target).length === 0){
//             container.removeClass('active');
//             $('.vertical-nav-overlay').removeClass('active');
//             $('.vertical-nav').removeClass('active');
//         }
//     });
// });

$(function () {
    $('footer').footerReveal();
});

$(function () {
    $('.nav-overlay__close').on('click', function () {
        $('.nav-overlay').css('height', '0%');
    });

    $('.nav-overlay__open').on('click', function () {
        $('.nav-overlay').css('height', '100%');
    });
});

$(function () {
    new WOW().init();

    $('#modal-login').on('show.bs.modal', function (e) {
        $('#modal-login').addClass('wow zoomInDown');
    });
    $('#modal-login').on('hidden.bs.modal', function (e) {
        $('#modal-login').removeClass('wow zoomInDown');
    });
    $('#js-button-registration1').click(function () {
        $('#modal-login').modal('show');
    });
    $('#js-button-registration2').click(function () {
        $('#modal-login').modal('show');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjFmb290ZXItcmV2ZWFsLm1pbi5qcyIsIjJ3b3cuanMiLCIzanF1ZXJ5LnN0ZXBzLmpzIiwiNHN0ZXBzLWZvcm0uanMiLCJib290c3RyYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDei9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSl7YS5mbi5mb290ZXJSZXZlYWw9ZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKSxkPWMucHJldigpLGU9YSh3aW5kb3cpLGY9YS5leHRlbmQoe3NoYWRvdzohMCxzaGFkb3dPcGFjaXR5Oi44LHpJbmRleDotMTAwfSxiKTthLmV4dGVuZCghMCx7fSxmLGIpO3JldHVybiBjLm91dGVySGVpZ2h0KCk8PWUub3V0ZXJIZWlnaHQoKSYmYy5vZmZzZXQoKS50b3A+PWUub3V0ZXJIZWlnaHQoKSYmKGMuY3NzKHtcInotaW5kZXhcIjpmLnpJbmRleCxwb3NpdGlvbjpcImZpeGVkXCIsYm90dG9tOjB9KSxmLnNoYWRvdyYmZC5jc3Moe1wiLW1vei1ib3gtc2hhZG93XCI6XCIwIDIwcHggMzBweCAtMjBweCByZ2JhKDAsMCwwLFwiK2Yuc2hhZG93T3BhY2l0eStcIilcIixcIi13ZWJraXQtYm94LXNoYWRvd1wiOlwiMCAyMHB4IDMwcHggLTIwcHggcmdiYSgwLDAsMCxcIitmLnNoYWRvd09wYWNpdHkrXCIpXCIsXCJib3gtc2hhZG93XCI6XCIwIDIwcHggMzBweCAtMjBweCByZ2JhKDAsMCwwLFwiK2Yuc2hhZG93T3BhY2l0eStcIilcIn0pLGUub24oXCJsb2FkIHJlc2l6ZSBmb290ZXJSZXZlYWxSZXNpemVcIixmdW5jdGlvbigpe2MuY3NzKHt3aWR0aDpkLm91dGVyV2lkdGgoKX0pLGQuY3NzKHtcIm1hcmdpbi1ib3R0b21cIjpjLm91dGVySGVpZ2h0KCl9KX0pKSx0aGlzfX0oalF1ZXJ5KTtcbiIsIihmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZj1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19LGc9W10uaW5kZXhPZnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKGIgaW4gdGhpcyYmdGhpc1tiXT09PWEpcmV0dXJuIGI7cmV0dXJuLTF9O2I9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fXJldHVybiBhLnByb3RvdHlwZS5leHRlbmQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2ZvcihjIGluIGIpZD1iW2NdLG51bGw9PWFbY10mJihhW2NdPWQpO3JldHVybiBhfSxhLnByb3RvdHlwZS5pc01vYmlsZT1mdW5jdGlvbihhKXtyZXR1cm4vQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYSl9LGEucHJvdG90eXBlLmNyZWF0ZUV2ZW50PWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlO3JldHVybiBudWxsPT1iJiYoYj0hMSksbnVsbD09YyYmKGM9ITEpLG51bGw9PWQmJihkPW51bGwpLG51bGwhPWRvY3VtZW50LmNyZWF0ZUV2ZW50PyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksZS5pbml0Q3VzdG9tRXZlbnQoYSxiLGMsZCkpOm51bGwhPWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0PyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksZS5ldmVudFR5cGU9YSk6ZS5ldmVudE5hbWU9YSxlfSxhLnByb3RvdHlwZS5lbWl0RXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9YS5kaXNwYXRjaEV2ZW50P2EuZGlzcGF0Y2hFdmVudChiKTpiIGluKG51bGwhPWEpP2FbYl0oKTpcIm9uXCIrYiBpbihudWxsIT1hKT9hW1wib25cIitiXSgpOnZvaWQgMH0sYS5wcm90b3R5cGUuYWRkRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsIT1hLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSk6bnVsbCE9YS5hdHRhY2hFdmVudD9hLmF0dGFjaEV2ZW50KFwib25cIitiLGMpOmFbYl09Y30sYS5wcm90b3R5cGUucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsIT1hLnJlbW92ZUV2ZW50TGlzdGVuZXI/YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSk6bnVsbCE9YS5kZXRhY2hFdmVudD9hLmRldGFjaEV2ZW50KFwib25cIitiLGMpOmRlbGV0ZSBhW2JdfSxhLnByb3RvdHlwZS5pbm5lckhlaWdodD1mdW5jdGlvbigpe3JldHVyblwiaW5uZXJIZWlnaHRcImluIHdpbmRvdz93aW5kb3cuaW5uZXJIZWlnaHQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodH0sYX0oKSxjPXRoaXMuV2Vha01hcHx8dGhpcy5Nb3pXZWFrTWFwfHwoYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt0aGlzLmtleXM9W10sdGhpcy52YWx1ZXM9W119cmV0dXJuIGEucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO2ZvcihmPXRoaXMua2V5cyxiPWQ9MCxlPWYubGVuZ3RoO2U+ZDtiPSsrZClpZihjPWZbYl0sYz09PWEpcmV0dXJuIHRoaXMudmFsdWVzW2JdfSxhLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihnPXRoaXMua2V5cyxjPWU9MCxmPWcubGVuZ3RoO2Y+ZTtjPSsrZSlpZihkPWdbY10sZD09PWEpcmV0dXJuIHZvaWQodGhpcy52YWx1ZXNbY109Yik7cmV0dXJuIHRoaXMua2V5cy5wdXNoKGEpLHRoaXMudmFsdWVzLnB1c2goYil9LGF9KCkpLGE9dGhpcy5NdXRhdGlvbk9ic2VydmVyfHx0aGlzLldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJ8fHRoaXMuTW96TXV0YXRpb25PYnNlcnZlcnx8KGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJm51bGwhPT1jb25zb2xlJiZjb25zb2xlLndhcm4oXCJNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGUmJmNvbnNvbGUud2FybihcIldPVy5qcyBjYW5ub3QgZGV0ZWN0IGRvbSBtdXRhdGlvbnMsIHBsZWFzZSBjYWxsIC5zeW5jKCkgYWZ0ZXIgbG9hZGluZyBuZXcgY29udGVudC5cIil9cmV0dXJuIGEubm90U3VwcG9ydGVkPSEwLGEucHJvdG90eXBlLm9ic2VydmU9ZnVuY3Rpb24oKXt9LGF9KCkpLGQ9dGhpcy5nZXRDb21wdXRlZFN0eWxlfHxmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWU9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuXCJmbG9hdFwiPT09YiYmKGI9XCJzdHlsZUZsb2F0XCIpLGUudGVzdChiKSYmYi5yZXBsYWNlKGUsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSksKG51bGwhPShjPWEuY3VycmVudFN0eWxlKT9jW2JdOnZvaWQgMCl8fG51bGx9LHRoaXN9LGU9LyhcXC0oW2Etel0pezF9KS9nLHRoaXMuV09XPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtudWxsPT1hJiYoYT17fSksdGhpcy5zY3JvbGxDYWxsYmFjaz1mKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssdGhpcyksdGhpcy5zY3JvbGxIYW5kbGVyPWYodGhpcy5zY3JvbGxIYW5kbGVyLHRoaXMpLHRoaXMucmVzZXRBbmltYXRpb249Zih0aGlzLnJlc2V0QW5pbWF0aW9uLHRoaXMpLHRoaXMuc3RhcnQ9Zih0aGlzLnN0YXJ0LHRoaXMpLHRoaXMuc2Nyb2xsZWQ9ITAsdGhpcy5jb25maWc9dGhpcy51dGlsKCkuZXh0ZW5kKGEsdGhpcy5kZWZhdWx0cyksbnVsbCE9YS5zY3JvbGxDb250YWluZXImJih0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhLnNjcm9sbENvbnRhaW5lcikpLHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlPW5ldyBjLHRoaXMud293RXZlbnQ9dGhpcy51dGlsKCkuY3JlYXRlRXZlbnQodGhpcy5jb25maWcuYm94Q2xhc3MpfXJldHVybiBlLnByb3RvdHlwZS5kZWZhdWx0cz17Ym94Q2xhc3M6XCJ3b3dcIixhbmltYXRlQ2xhc3M6XCJhbmltYXRlZFwiLG9mZnNldDowLG1vYmlsZTohMCxsaXZlOiEwLGNhbGxiYWNrOm51bGwsc2Nyb2xsQ29udGFpbmVyOm51bGx9LGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5lbGVtZW50PXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJpbnRlcmFjdGl2ZVwiPT09KGE9ZG9jdW1lbnQucmVhZHlTdGF0ZSl8fFwiY29tcGxldGVcIj09PWE/dGhpcy5zdGFydCgpOnRoaXMudXRpbCgpLmFkZEV2ZW50KGRvY3VtZW50LFwiRE9NQ29udGVudExvYWRlZFwiLHRoaXMuc3RhcnQpLHRoaXMuZmluaXNoZWQ9W119LGUucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGIsYyxkLGU7aWYodGhpcy5zdG9wcGVkPSExLHRoaXMuYm94ZXM9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZTtmb3IoZD10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmNvbmZpZy5ib3hDbGFzcyksZT1bXSxhPTAsYz1kLmxlbmd0aDtjPmE7YSsrKWI9ZFthXSxlLnB1c2goYik7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5hbGw9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYT0wLGM9ZC5sZW5ndGg7Yz5hO2ErKyliPWRbYV0sZS5wdXNoKGIpO3JldHVybiBlfS5jYWxsKHRoaXMpLHRoaXMuYm94ZXMubGVuZ3RoKWlmKHRoaXMuZGlzYWJsZWQoKSl0aGlzLnJlc2V0U3R5bGUoKTtlbHNlIGZvcihlPXRoaXMuYm94ZXMsYz0wLGQ9ZS5sZW5ndGg7ZD5jO2MrKyliPWVbY10sdGhpcy5hcHBseVN0eWxlKGIsITApO3JldHVybiB0aGlzLmRpc2FibGVkKCl8fCh0aGlzLnV0aWwoKS5hZGRFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXJ8fHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkuYWRkRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSx0aGlzLmludGVydmFsPXNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssNTApKSx0aGlzLmNvbmZpZy5saXZlP25ldyBhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYyxkLGUsZixnO2ZvcihnPVtdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspZj1iW2NdLGcucHVzaChmdW5jdGlvbigpe3ZhciBhLGIsYyxkO2ZvcihjPWYuYWRkZWROb2Rlc3x8W10sZD1bXSxhPTAsYj1jLmxlbmd0aDtiPmE7YSsrKWU9Y1thXSxkLnB1c2godGhpcy5kb1N5bmMoZSkpO3JldHVybiBkfS5jYWxsKGEpKTtyZXR1cm4gZ319KHRoaXMpKS5vYnNlcnZlKGRvY3VtZW50LmJvZHkse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk6dm9pZCAwfSxlLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcHBlZD0hMCx0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXJ8fHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkucmVtb3ZlRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSxudWxsIT10aGlzLmludGVydmFsP2NsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk6dm9pZCAwfSxlLnByb3RvdHlwZS5zeW5jPWZ1bmN0aW9uKGIpe3JldHVybiBhLm5vdFN1cHBvcnRlZD90aGlzLmRvU3luYyh0aGlzLmVsZW1lbnQpOnZvaWQgMH0sZS5wcm90b3R5cGUuZG9TeW5jPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7aWYobnVsbD09YSYmKGE9dGhpcy5lbGVtZW50KSwxPT09YS5ub2RlVHlwZSl7Zm9yKGE9YS5wYXJlbnROb2RlfHxhLGU9YS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxmPVtdLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspYj1lW2NdLGcuY2FsbCh0aGlzLmFsbCxiKTwwPyh0aGlzLmJveGVzLnB1c2goYiksdGhpcy5hbGwucHVzaChiKSx0aGlzLnN0b3BwZWR8fHRoaXMuZGlzYWJsZWQoKT90aGlzLnJlc2V0U3R5bGUoKTp0aGlzLmFwcGx5U3R5bGUoYiwhMCksZi5wdXNoKHRoaXMuc2Nyb2xsZWQ9ITApKTpmLnB1c2godm9pZCAwKTtyZXR1cm4gZn19LGUucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZStcIiBcIit0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsbnVsbCE9dGhpcy5jb25maWcuY2FsbGJhY2smJnRoaXMuY29uZmlnLmNhbGxiYWNrKGEpLHRoaXMudXRpbCgpLmVtaXRFdmVudChhLHRoaXMud293RXZlbnQpLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJhbmltYXRpb25lbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwib2FuaW1hdGlvbmVuZFwiLHRoaXMucmVzZXRBbmltYXRpb24pLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJ3ZWJraXRBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwiTVNBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSxhfSxlLnByb3RvdHlwZS5hcHBseVN0eWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO3JldHVybiBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZHVyYXRpb25cIiksYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWRlbGF5XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1pdGVyYXRpb25cIiksdGhpcy5hbmltYXRlKGZ1bmN0aW9uKGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmLmN1c3RvbVN0eWxlKGEsYixkLGMsZSl9fSh0aGlzKSl9LGUucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gd2luZG93P2Z1bmN0aW9uKGEpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEpfTpmdW5jdGlvbihhKXtyZXR1cm4gYSgpfX0oKSxlLnByb3RvdHlwZS5yZXNldFN0eWxlPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sZS5wdXNoKGEuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIik7cmV0dXJuIGV9LGUucHJvdG90eXBlLnJlc2V0QW5pbWF0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBhLnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYW5pbWF0aW9uZW5kXCIpPj0wPyhiPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsYi5jbGFzc05hbWU9Yi5jbGFzc05hbWUucmVwbGFjZSh0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsXCJcIikudHJpbSgpKTp2b2lkIDB9LGUucHJvdG90eXBlLmN1c3RvbVN0eWxlPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGImJnRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLGEuc3R5bGUudmlzaWJpbGl0eT1iP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIsYyYmdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uRHVyYXRpb246Y30pLGQmJnRoaXMudmVuZG9yU2V0KGEuc3R5bGUse2FuaW1hdGlvbkRlbGF5OmR9KSxlJiZ0aGlzLnZlbmRvclNldChhLnN0eWxlLHthbmltYXRpb25JdGVyYXRpb25Db3VudDplfSksdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uTmFtZTpiP1wibm9uZVwiOnRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKX0pLGF9LGUucHJvdG90eXBlLnZlbmRvcnM9W1wibW96XCIsXCJ3ZWJraXRcIl0sZS5wcm90b3R5cGUudmVuZG9yU2V0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY7ZD1bXTtmb3IoYyBpbiBiKWU9YltjXSxhW1wiXCIrY109ZSxkLnB1c2goZnVuY3Rpb24oKXt2YXIgYixkLGcsaDtmb3IoZz10aGlzLnZlbmRvcnMsaD1bXSxiPTAsZD1nLmxlbmd0aDtkPmI7YisrKWY9Z1tiXSxoLnB1c2goYVtcIlwiK2YrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cigxKV09ZSk7cmV0dXJuIGh9LmNhbGwodGhpcykpO3JldHVybiBkfSxlLnByb3RvdHlwZS52ZW5kb3JDU1M9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGk7Zm9yKGg9ZChhKSxnPWguZ2V0UHJvcGVydHlDU1NWYWx1ZShiKSxmPXRoaXMudmVuZG9ycyxjPTAsZT1mLmxlbmd0aDtlPmM7YysrKWk9ZltjXSxnPWd8fGguZ2V0UHJvcGVydHlDU1NWYWx1ZShcIi1cIitpK1wiLVwiK2IpO3JldHVybiBnfSxlLnByb3RvdHlwZS5hbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3ZhciBiO3RyeXtiPXRoaXMudmVuZG9yQ1NTKGEsXCJhbmltYXRpb24tbmFtZVwiKS5jc3NUZXh0fWNhdGNoKGMpe2I9ZChhKS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLW5hbWVcIil9cmV0dXJuXCJub25lXCI9PT1iP1wiXCI6Yn0sZS5wcm90b3R5cGUuY2FjaGVBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5zZXQoYSx0aGlzLmFuaW1hdGlvbk5hbWUoYSkpfSxlLnByb3RvdHlwZS5jYWNoZWRBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYSl9LGUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY3JvbGxlZD0hMH0sZS5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4hdGhpcy5zY3JvbGxlZHx8KHRoaXMuc2Nyb2xsZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSxhJiYodGhpcy5pc1Zpc2libGUoYSk/dGhpcy5zaG93KGEpOmUucHVzaChhKSk7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGh8fHRoaXMuY29uZmlnLmxpdmUpP3ZvaWQgMDp0aGlzLnN0b3AoKX0sZS5wcm90b3R5cGUub2Zmc2V0VG9wPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYjt2b2lkIDA9PT1hLm9mZnNldFRvcDspYT1hLnBhcmVudE5vZGU7Zm9yKGI9YS5vZmZzZXRUb3A7YT1hLm9mZnNldFBhcmVudDspYis9YS5vZmZzZXRUb3A7cmV0dXJuIGJ9LGUucHJvdG90eXBlLmlzVmlzaWJsZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO3JldHVybiBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctb2Zmc2V0XCIpfHx0aGlzLmNvbmZpZy5vZmZzZXQsZj10aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXImJnRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3B8fHdpbmRvdy5wYWdlWU9mZnNldCxlPWYrTWF0aC5taW4odGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCx0aGlzLnV0aWwoKS5pbm5lckhlaWdodCgpKS1jLGQ9dGhpcy5vZmZzZXRUb3AoYSksYj1kK2EuY2xpZW50SGVpZ2h0LGU+PWQmJmI+PWZ9LGUucHJvdG90eXBlLnV0aWw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9dGhpcy5fdXRpbD90aGlzLl91dGlsOnRoaXMuX3V0aWw9bmV3IGJ9LGUucHJvdG90eXBlLmRpc2FibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuY29uZmlnLm1vYmlsZSYmdGhpcy51dGlsKCkuaXNNb2JpbGUobmF2aWdhdG9yLnVzZXJBZ2VudCl9LGV9KCl9KS5jYWxsKHRoaXMpO1xyXG4iLCIvKiEgXHJcbiAqIGpRdWVyeSBTdGVwcyB2MS4xLjAgLSAwOS8wNC8yMDE0XHJcbiAqIENvcHlyaWdodCAoYykgMjAxNCBSYWZhZWwgU3RhaWIgKGh0dHA6Ly93d3cuanF1ZXJ5LXN0ZXBzLmNvbSlcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAqL1xyXG47KGZ1bmN0aW9uICgkLCB1bmRlZmluZWQpXHJcbntcclxuJC5mbi5leHRlbmQoe1xyXG4gICAgX2FyaWE6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKFwiYXJpYS1cIiArIG5hbWUsIHZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbW92ZUFyaWE6IGZ1bmN0aW9uIChuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUF0dHIoXCJhcmlhLVwiICsgbmFtZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9lbmFibGVBcmlhOiBmdW5jdGlvbiAoZW5hYmxlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoZW5hYmxlID09IG51bGwgfHwgZW5hYmxlKSA/IFxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIikuX2FyaWEoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpIDogXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKS5fYXJpYShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3Nob3dBcmlhOiBmdW5jdGlvbiAoc2hvdylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHNob3cgPT0gbnVsbCB8fCBzaG93KSA/IFxyXG4gICAgICAgICAgICB0aGlzLnNob3coKS5fYXJpYShcImhpZGRlblwiLCBcImZhbHNlXCIpIDogXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpLl9hcmlhKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3NlbGVjdEFyaWE6IGZ1bmN0aW9uIChzZWxlY3QpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChzZWxlY3QgPT0gbnVsbCB8fCBzZWxlY3QpID8gXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJjdXJyZW50XCIpLl9hcmlhKFwic2VsZWN0ZWRcIiwgXCJ0cnVlXCIpIDogXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjdXJyZW50XCIpLl9hcmlhKFwic2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgX2lkOiBmdW5jdGlvbiAoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChpZCkgPyB0aGlzLmF0dHIoXCJpZFwiLCBpZCkgOiB0aGlzLmF0dHIoXCJpZFwiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KVxyXG57XHJcbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYXJncyA9IChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICQuaXNBcnJheShhcmd1bWVudHNbMF0pKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJcXFxce1wiICsgaSArIFwiXFxcXH1cIiwgXCJnbVwiKTtcclxuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gZm9ybWF0dGVkU3RyaW5nLnJlcGxhY2UocGF0dGVybiwgYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmc7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQSBnbG9iYWwgdW5pcXVlIGlkIGNvdW50LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwcm9wZXJ0eSBfdW5pcXVlSWRcclxuICogQHR5cGUgSW50ZWdlclxyXG4gKiovXHJcbnZhciBfdW5pcXVlSWQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwbHVnaW4gcHJlZml4IGZvciBjb29raWVzLlxyXG4gKlxyXG4gKiBAZmluYWxcclxuICogQHByaXZhdGVcclxuICogQHByb3BlcnR5IF9jb29raWVQcmVmaXhcclxuICogQHR5cGUgU3RyaW5nXHJcbiAqKi9cclxudmFyIF9jb29raWVQcmVmaXggPSBcImpRdTNyeV81dGVwc19TdEB0ZV9cIjtcclxuXHJcbi8qKlxyXG4gKiBTdWZmaXggZm9yIHRoZSB1bmlxdWUgdGFiIGlkLlxyXG4gKlxyXG4gKiBAZmluYWxcclxuICogQHByaXZhdGVcclxuICogQHByb3BlcnR5IF90YWJTdWZmaXhcclxuICogQHR5cGUgU3RyaW5nXHJcbiAqIEBzaW5jZSAwLjkuN1xyXG4gKiovXHJcbnZhciBfdGFiU3VmZml4ID0gXCItdC1cIjtcclxuXHJcbi8qKlxyXG4gKiBTdWZmaXggZm9yIHRoZSB1bmlxdWUgdGFicGFuZWwgaWQuXHJcbiAqXHJcbiAqIEBmaW5hbFxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcHJvcGVydHkgX3RhYnBhbmVsU3VmZml4XHJcbiAqIEB0eXBlIFN0cmluZ1xyXG4gKiBAc2luY2UgMC45LjdcclxuICoqL1xyXG52YXIgX3RhYnBhbmVsU3VmZml4ID0gXCItcC1cIjtcclxuXHJcbi8qKlxyXG4gKiBTdWZmaXggZm9yIHRoZSB1bmlxdWUgdGl0bGUgaWQuXHJcbiAqXHJcbiAqIEBmaW5hbFxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcHJvcGVydHkgX3RpdGxlU3VmZml4XHJcbiAqIEB0eXBlIFN0cmluZ1xyXG4gKiBAc2luY2UgMC45LjdcclxuICoqL1xyXG52YXIgX3RpdGxlU3VmZml4ID0gXCItaC1cIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciBtZXNzYWdlIGZvciBhbiBcImluZGV4IG91dCBvZiByYW5nZVwiIGVycm9yLlxyXG4gKlxyXG4gKiBAZmluYWxcclxuICogQHByaXZhdGVcclxuICogQHByb3BlcnR5IF9pbmRleE91dE9mUmFuZ2VFcnJvck1lc3NhZ2VcclxuICogQHR5cGUgU3RyaW5nXHJcbiAqKi9cclxudmFyIF9pbmRleE91dE9mUmFuZ2VFcnJvck1lc3NhZ2UgPSBcIkluZGV4IG91dCBvZiByYW5nZS5cIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciBtZXNzYWdlIGZvciBhbiBcIm1pc3NpbmcgY29ycmVzcG9uZGluZyBlbGVtZW50XCIgZXJyb3IuXHJcbiAqXHJcbiAqIEBmaW5hbFxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcHJvcGVydHkgX21pc3NpbmdDb3JyZXNwb25kaW5nRWxlbWVudEVycm9yTWVzc2FnZVxyXG4gKiBAdHlwZSBTdHJpbmdcclxuICoqL1xyXG52YXIgX21pc3NpbmdDb3JyZXNwb25kaW5nRWxlbWVudEVycm9yTWVzc2FnZSA9IFwiT25lIG9yIG1vcmUgY29ycmVzcG9uZGluZyBzdGVwIHswfSBhcmUgbWlzc2luZy5cIjtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgc3RlcCB0byB0aGUgY2FjaGUuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBhZGRTdGVwVG9DYWNoZVxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IEEgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIHN0ZXAge09iamVjdH0gVGhlIHN0ZXAgb2JqZWN0IHRvIGFkZFxyXG4gKiovXHJcbmZ1bmN0aW9uIGFkZFN0ZXBUb0NhY2hlKHdpemFyZCwgc3RlcClcclxue1xyXG4gICAgZ2V0U3RlcHMod2l6YXJkKS5wdXNoKHN0ZXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplRGF0YSh3aXphcmQsIG9wdGlvbnMsIHN0YXRlKVxyXG57XHJcbiAgICB2YXIgc3RlcFRpdGxlcyA9IHdpemFyZC5jaGlsZHJlbihvcHRpb25zLmhlYWRlclRhZyksXHJcbiAgICAgICAgc3RlcENvbnRlbnRzID0gd2l6YXJkLmNoaWxkcmVuKG9wdGlvbnMuYm9keVRhZyk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgY29udGVudFxyXG4gICAgaWYgKHN0ZXBUaXRsZXMubGVuZ3RoID4gc3RlcENvbnRlbnRzLmxlbmd0aClcclxuICAgIHtcclxuICAgICAgICB0aHJvd0Vycm9yKF9taXNzaW5nQ29ycmVzcG9uZGluZ0VsZW1lbnRFcnJvck1lc3NhZ2UsIFwiY29udGVudHNcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGVwVGl0bGVzLmxlbmd0aCA8IHN0ZXBDb250ZW50cy5sZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3dFcnJvcihfbWlzc2luZ0NvcnJlc3BvbmRpbmdFbGVtZW50RXJyb3JNZXNzYWdlLCBcInRpdGxlc1wiKTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHZhciBzdGFydEluZGV4ID0gb3B0aW9ucy5zdGFydEluZGV4O1xyXG5cclxuICAgIHN0YXRlLnN0ZXBDb3VudCA9IHN0ZXBUaXRsZXMubGVuZ3RoO1xyXG5cclxuICAgIC8vIFRyaWVzIHRvIGxvYWQgdGhlIHNhdmVkIHN0YXRlIChzdGVwIHBvc2l0aW9uKVxyXG4gICAgaWYgKG9wdGlvbnMuc2F2ZVN0YXRlICYmICQuY29va2llKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzYXZlZFN0YXRlID0gJC5jb29raWUoX2Nvb2tpZVByZWZpeCArIGdldFVuaXF1ZUlkKHdpemFyZCkpO1xyXG4gICAgICAgIC8vIFNldHMgdGhlIHNhdmVkIHBvc2l0aW9uIHRvIHRoZSBzdGFydCBpbmRleCBpZiBub3QgdW5kZWZpbmVkIG9yIG91dCBvZiByYW5nZSBcclxuICAgICAgICB2YXIgc2F2ZWRJbmRleCA9IHBhcnNlSW50KHNhdmVkU3RhdGUsIDApO1xyXG4gICAgICAgIGlmICghaXNOYU4oc2F2ZWRJbmRleCkgJiYgc2F2ZWRJbmRleCA8IHN0YXRlLnN0ZXBDb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBzYXZlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZS5jdXJyZW50SW5kZXggPSBzdGFydEluZGV4O1xyXG5cclxuICAgIHN0ZXBUaXRsZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLCAvLyBpdGVtID09IGhlYWRlclxyXG4gICAgICAgICAgICBjb250ZW50ID0gc3RlcENvbnRlbnRzLmVxKGluZGV4KSxcclxuICAgICAgICAgICAgbW9kZURhdGEgPSBjb250ZW50LmRhdGEoXCJtb2RlXCIpLFxyXG4gICAgICAgICAgICBtb2RlID0gKG1vZGVEYXRhID09IG51bGwpID8gY29udGVudE1vZGUuaHRtbCA6IGdldFZhbGlkRW51bVZhbHVlKGNvbnRlbnRNb2RlLFxyXG4gICAgICAgICAgICAgICAgKC9eXFxzKiQvLnRlc3QobW9kZURhdGEpIHx8IGlzTmFOKG1vZGVEYXRhKSkgPyBtb2RlRGF0YSA6IHBhcnNlSW50KG1vZGVEYXRhLCAwKSksXHJcbiAgICAgICAgICAgIGNvbnRlbnRVcmwgPSAobW9kZSA9PT0gY29udGVudE1vZGUuaHRtbCB8fCBjb250ZW50LmRhdGEoXCJ1cmxcIikgPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgXCJcIiA6IGNvbnRlbnQuZGF0YShcInVybFwiKSxcclxuICAgICAgICAgICAgY29udGVudExvYWRlZCA9IChtb2RlICE9PSBjb250ZW50TW9kZS5odG1sICYmIGNvbnRlbnQuZGF0YShcImxvYWRlZFwiKSA9PT0gXCIxXCIpLFxyXG4gICAgICAgICAgICBzdGVwID0gJC5leHRlbmQoe30sIHN0ZXBNb2RlbCwge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogKG1vZGUgPT09IGNvbnRlbnRNb2RlLmh0bWwpID8gY29udGVudC5odG1sKCkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFVybDogY29udGVudFVybCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRNb2RlOiBtb2RlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudExvYWRlZDogY29udGVudExvYWRlZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkU3RlcFRvQ2FjaGUod2l6YXJkLCBzdGVwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlcnMgdGhlIG9uQ2FuY2VsZWQgZXZlbnQuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBjYW5jZWxcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBUaGUgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICoqL1xyXG5mdW5jdGlvbiBjYW5jZWwod2l6YXJkKVxyXG57XHJcbiAgICB3aXphcmQudHJpZ2dlckhhbmRsZXIoXCJjYW5jZWxlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjcmVhc2VDdXJyZW50SW5kZXhCeShzdGF0ZSwgZGVjcmVhc2VCeSlcclxue1xyXG4gICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRJbmRleCAtIGRlY3JlYXNlQnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250cm9sIGZ1bmN0aW9uYWxpdHkgY29tcGxldGVseSBhbmQgdHJhbnNmb3JtcyB0aGUgY3VycmVudCBzdGF0ZSB0byB0aGUgaW5pdGlhbCBIVE1MIHN0cnVjdHVyZS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIGRlc3Ryb3lcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqKi9cclxuZnVuY3Rpb24gZGVzdHJveSh3aXphcmQsIG9wdGlvbnMpXHJcbntcclxuICAgIHZhciBldmVudE5hbWVzcGFjZSA9IGdldEV2ZW50TmFtZXNwYWNlKHdpemFyZCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHZpcnR1YWwgZGF0YSBvYmplY3RzIGZyb20gdGhlIHdpemFyZFxyXG4gICAgd2l6YXJkLnVuYmluZChldmVudE5hbWVzcGFjZSkucmVtb3ZlRGF0YShcInVpZFwiKS5yZW1vdmVEYXRhKFwib3B0aW9uc1wiKVxyXG4gICAgICAgIC5yZW1vdmVEYXRhKFwic3RhdGVcIikucmVtb3ZlRGF0YShcInN0ZXBzXCIpLnJlbW92ZURhdGEoXCJldmVudE5hbWVzcGFjZVwiKVxyXG4gICAgICAgIC5maW5kKFwiLmFjdGlvbnMgYVwiKS51bmJpbmQoZXZlbnROYW1lc3BhY2UpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBhdHRyaWJ1dGVzIGFuZCBDU1MgY2xhc3NlcyBmcm9tIHRoZSB3aXphcmRcclxuICAgIHdpemFyZC5yZW1vdmVDbGFzcyhvcHRpb25zLmNsZWFyRml4Q3NzQ2xhc3MgKyBcIiB2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICB2YXIgY29udGVudHMgPSB3aXphcmQuZmluZChcIi5jb250ZW50ID4gKlwiKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdmlydHVhbCBkYXRhIG9iamVjdHMgZnJvbSBwYW5lbHMgYW5kIHRoZWlyIHRpdGxlc1xyXG4gICAgY29udGVudHMucmVtb3ZlRGF0YShcImxvYWRlZFwiKS5yZW1vdmVEYXRhKFwibW9kZVwiKS5yZW1vdmVEYXRhKFwidXJsXCIpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBhdHRyaWJ1dGVzLCBDU1MgY2xhc3NlcyBhbmQgcmVzZXQgaW5saW5lIHN0eWxlcyBvbiBhbGwgcGFuZWxzIGFuZCB0aGVpciB0aXRsZXNcclxuICAgIGNvbnRlbnRzLnJlbW92ZUF0dHIoXCJpZFwiKS5yZW1vdmVBdHRyKFwicm9sZVwiKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIilcclxuICAgICAgICAucmVtb3ZlQXR0cihcImNsYXNzXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5fcmVtb3ZlQXJpYShcImxhYmVsbGVkYnlcIilcclxuICAgICAgICAuX3JlbW92ZUFyaWEoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgLy8gRW1wdHkgcGFuZWxzIGlmIHRoZSBtb2RlIGlzIHNldCB0byAnYXN5bmMnIG9yICdpZnJhbWUnXHJcbiAgICB3aXphcmQuZmluZChcIi5jb250ZW50ID4gW2RhdGEtbW9kZT0nYXN5bmMnXSwuY29udGVudCA+IFtkYXRhLW1vZGU9J2lmcmFtZSddXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgdmFyIHdpemFyZFN1YnN0aXR1dGUgPSAkKFwiPHswfSBjbGFzcz1cXFwiezF9XFxcIj48L3swfT5cIi5mb3JtYXQod2l6YXJkLmdldCgwKS50YWdOYW1lLCB3aXphcmQuYXR0cihcImNsYXNzXCIpKSk7XHJcblxyXG4gICAgdmFyIHdpemFyZElkID0gd2l6YXJkLl9pZCgpO1xyXG4gICAgaWYgKHdpemFyZElkICE9IG51bGwgJiYgd2l6YXJkSWQgIT09IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgd2l6YXJkU3Vic3RpdHV0ZS5faWQod2l6YXJkSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpemFyZFN1YnN0aXR1dGUuaHRtbCh3aXphcmQuZmluZChcIi5jb250ZW50XCIpLmh0bWwoKSk7XHJcbiAgICB3aXphcmQuYWZ0ZXIod2l6YXJkU3Vic3RpdHV0ZSk7XHJcbiAgICB3aXphcmQucmVtb3ZlKCk7XHJcblxyXG4gICAgcmV0dXJuIHdpemFyZFN1YnN0aXR1dGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VycyB0aGUgb25GaW5pc2hpbmcgYW5kIG9uRmluaXNoZWQgZXZlbnQuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBmaW5pc2hTdGVwXHJcbiAqIEBwYXJhbSB3aXphcmQge09iamVjdH0gVGhlIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiovXHJcbmZ1bmN0aW9uIGZpbmlzaFN0ZXAod2l6YXJkLCBzdGF0ZSlcclxue1xyXG4gICAgdmFyIGN1cnJlbnRTdGVwID0gd2l6YXJkLmZpbmQoXCIuc3RlcHMgbGlcIikuZXEoc3RhdGUuY3VycmVudEluZGV4KTtcclxuXHJcbiAgICBpZiAod2l6YXJkLnRyaWdnZXJIYW5kbGVyKFwiZmluaXNoaW5nXCIsIFtzdGF0ZS5jdXJyZW50SW5kZXhdKSlcclxuICAgIHtcclxuICAgICAgICBjdXJyZW50U3RlcC5hZGRDbGFzcyhcImRvbmVcIikucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICB3aXphcmQudHJpZ2dlckhhbmRsZXIoXCJmaW5pc2hlZFwiLCBbc3RhdGUuY3VycmVudEluZGV4XSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY3VycmVudFN0ZXAuYWRkQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgb3IgY3JlYXRlcyBpZiBub3QgZXhpc3QgYW4gdW5pcXVlIGV2ZW50IG5hbWVzcGFjZSBmb3IgdGhlIGdpdmVuIHdpemFyZCBpbnN0YW5jZS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIGdldEV2ZW50TmFtZXNwYWNlXHJcbiAqIEBwYXJhbSB3aXphcmQge09iamVjdH0gQSBqUXVlcnkgd2l6YXJkIG9iamVjdFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdGhlIHVuaXF1ZSBldmVudCBuYW1lc3BhY2UgZm9yIHRoZSBnaXZlbiB3aXphcmRcclxuICovXHJcbmZ1bmN0aW9uIGdldEV2ZW50TmFtZXNwYWNlKHdpemFyZClcclxue1xyXG4gICAgdmFyIGV2ZW50TmFtZXNwYWNlID0gd2l6YXJkLmRhdGEoXCJldmVudE5hbWVzcGFjZVwiKTtcclxuXHJcbiAgICBpZiAoZXZlbnROYW1lc3BhY2UgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBldmVudE5hbWVzcGFjZSA9IFwiLlwiICsgZ2V0VW5pcXVlSWQod2l6YXJkKTtcclxuICAgICAgICB3aXphcmQuZGF0YShcImV2ZW50TmFtZXNwYWNlXCIsIGV2ZW50TmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXZlbnROYW1lc3BhY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBBbmNob3Iod2l6YXJkLCBpbmRleClcclxue1xyXG4gICAgdmFyIHVuaXF1ZUlkID0gZ2V0VW5pcXVlSWQod2l6YXJkKTtcclxuXHJcbiAgICByZXR1cm4gd2l6YXJkLmZpbmQoXCIjXCIgKyB1bmlxdWVJZCArIF90YWJTdWZmaXggKyBpbmRleCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBQYW5lbCh3aXphcmQsIGluZGV4KVxyXG57XHJcbiAgICB2YXIgdW5pcXVlSWQgPSBnZXRVbmlxdWVJZCh3aXphcmQpO1xyXG5cclxuICAgIHJldHVybiB3aXphcmQuZmluZChcIiNcIiArIHVuaXF1ZUlkICsgX3RhYnBhbmVsU3VmZml4ICsgaW5kZXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwVGl0bGUod2l6YXJkLCBpbmRleClcclxue1xyXG4gICAgdmFyIHVuaXF1ZUlkID0gZ2V0VW5pcXVlSWQod2l6YXJkKTtcclxuXHJcbiAgICByZXR1cm4gd2l6YXJkLmZpbmQoXCIjXCIgKyB1bmlxdWVJZCArIF90aXRsZVN1ZmZpeCArIGluZGV4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyh3aXphcmQpXHJcbntcclxuICAgIHJldHVybiB3aXphcmQuZGF0YShcIm9wdGlvbnNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlKHdpemFyZClcclxue1xyXG4gICAgcmV0dXJuIHdpemFyZC5kYXRhKFwic3RhdGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKHdpemFyZClcclxue1xyXG4gICAgcmV0dXJuIHdpemFyZC5kYXRhKFwic3RlcHNcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIGEgc3BlY2lmaWMgc3RlcCBvYmplY3QgYnkgaW5kZXguXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBnZXRTdGVwXHJcbiAqIEBwYXJhbSBpbmRleCB7SW50ZWdlcn0gQW4gaW50ZWdlciB0aGF0IGJlbG9uZ3MgdG8gdGhlIHBvc2l0aW9uIG9mIGEgc3RlcFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgc3BlY2lmaWMgc3RlcCBvYmplY3RcclxuICoqL1xyXG5mdW5jdGlvbiBnZXRTdGVwKHdpemFyZCwgaW5kZXgpXHJcbntcclxuICAgIHZhciBzdGVwcyA9IGdldFN0ZXBzKHdpemFyZCk7XHJcblxyXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBzdGVwcy5sZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3dFcnJvcihfaW5kZXhPdXRPZlJhbmdlRXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RlcHNbaW5kZXhdO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBvciBjcmVhdGVzIGlmIG5vdCBleGlzdCBhbiB1bmlxdWUgaWQgZnJvbSB0aGUgZ2l2ZW4gd2l6YXJkIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgZ2V0VW5pcXVlSWRcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB0aGUgdW5pcXVlIGlkIGZvciB0aGUgZ2l2ZW4gd2l6YXJkXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVbmlxdWVJZCh3aXphcmQpXHJcbntcclxuICAgIHZhciB1bmlxdWVJZCA9IHdpemFyZC5kYXRhKFwidWlkXCIpO1xyXG5cclxuICAgIGlmICh1bmlxdWVJZCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHVuaXF1ZUlkID0gd2l6YXJkLl9pZCgpO1xyXG4gICAgICAgIGlmICh1bmlxdWVJZCA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdW5pcXVlSWQgPSBcInN0ZXBzLXVpZC1cIi5jb25jYXQoX3VuaXF1ZUlkKTtcclxuICAgICAgICAgICAgd2l6YXJkLl9pZCh1bmlxdWVJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfdW5pcXVlSWQrKztcclxuICAgICAgICB3aXphcmQuZGF0YShcInVpZFwiLCB1bmlxdWVJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuaXF1ZUlkO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBhIHZhbGlkIGVudW0gdmFsdWUgYnkgY2hlY2tpbmcgYSBzcGVjaWZpYyBlbnVtIGtleSBvciB2YWx1ZS5cclxuICogXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBnZXRWYWxpZEVudW1WYWx1ZVxyXG4gKiBAcGFyYW0gZW51bVR5cGUge09iamVjdH0gVHlwZSBvZiBlbnVtXHJcbiAqIEBwYXJhbSBrZXlPclZhbHVlIHtPYmplY3R9IEtleSBhcyBgU3RyaW5nYCBvciB2YWx1ZSBhcyBgSW50ZWdlcmAgdG8gY2hlY2sgZm9yXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRWYWxpZEVudW1WYWx1ZShlbnVtVHlwZSwga2V5T3JWYWx1ZSlcclxue1xyXG4gICAgdmFsaWRhdGVBcmd1bWVudChcImVudW1UeXBlXCIsIGVudW1UeXBlKTtcclxuICAgIHZhbGlkYXRlQXJndW1lbnQoXCJrZXlPclZhbHVlXCIsIGtleU9yVmFsdWUpO1xyXG5cclxuICAgIC8vIElzIGtleVxyXG4gICAgaWYgKHR5cGVvZiBrZXlPclZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVudW1UeXBlW2tleU9yVmFsdWVdO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIlRoZSBlbnVtIGtleSAnezB9JyBkb2VzIG5vdCBleGlzdC5cIiwga2V5T3JWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBJcyB2YWx1ZVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGtleU9yVmFsdWUgPT09IFwibnVtYmVyXCIpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGVudW1UeXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGVudW1UeXBlW2tleV0gPT09IGtleU9yVmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlPclZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvd0Vycm9yKFwiSW52YWxpZCBlbnVtIHZhbHVlICd7MH0nLlwiLCBrZXlPclZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIFR5cGUgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRocm93RXJyb3IoXCJJbnZhbGlkIGtleSBvciB2YWx1ZSB0eXBlLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJvdXRlcyB0byB0aGUgbmV4dCBzdGVwLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgZ29Ub05leHRTdGVwXHJcbiAqIEBwYXJhbSB3aXphcmQge09iamVjdH0gVGhlIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFjdGlvbiBleGVjdXRlZFxyXG4gKiovXHJcbmZ1bmN0aW9uIGdvVG9OZXh0U3RlcCh3aXphcmQsIG9wdGlvbnMsIHN0YXRlKVxyXG57XHJcbiAgICByZXR1cm4gcGFnaW5hdGlvbkNsaWNrKHdpemFyZCwgb3B0aW9ucywgc3RhdGUsIGluY3JlYXNlQ3VycmVudEluZGV4Qnkoc3RhdGUsIDEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJvdXRlcyB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIGdvVG9QcmV2aW91c1N0ZXBcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBUaGUgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYWN0aW9uIGV4ZWN1dGVkXHJcbiAqKi9cclxuZnVuY3Rpb24gZ29Ub1ByZXZpb3VzU3RlcCh3aXphcmQsIG9wdGlvbnMsIHN0YXRlKVxyXG57XHJcbiAgICByZXR1cm4gcGFnaW5hdGlvbkNsaWNrKHdpemFyZCwgb3B0aW9ucywgc3RhdGUsIGRlY3JlYXNlQ3VycmVudEluZGV4Qnkoc3RhdGUsIDEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJvdXRlcyB0byBhIHNwZWNpZmljIHN0ZXAgYnkgYSBnaXZlbiBpbmRleC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIGdvVG9TdGVwXHJcbiAqIEBwYXJhbSB3aXphcmQge09iamVjdH0gVGhlIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBUaGUgcG9zaXRpb24gKHplcm8tYmFzZWQpIHRvIHJvdXRlIHRvXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IEluZGljYXRlcyB3aGV0aGVyIHRoZSBhY3Rpb24gc3VjY2VlZGVkIG9yIGZhaWxlZFxyXG4gKiovXHJcbmZ1bmN0aW9uIGdvVG9TdGVwKHdpemFyZCwgb3B0aW9ucywgc3RhdGUsIGluZGV4KVxyXG57XHJcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHN0YXRlLnN0ZXBDb3VudClcclxuICAgIHtcclxuICAgICAgICB0aHJvd0Vycm9yKF9pbmRleE91dE9mUmFuZ2VFcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmZvcmNlTW92ZUZvcndhcmQgJiYgaW5kZXggPCBzdGF0ZS5jdXJyZW50SW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvbGRJbmRleCA9IHN0YXRlLmN1cnJlbnRJbmRleDtcclxuICAgIGlmICh3aXphcmQudHJpZ2dlckhhbmRsZXIoXCJzdGVwQ2hhbmdpbmdcIiwgW3N0YXRlLmN1cnJlbnRJbmRleCwgaW5kZXhdKSlcclxuICAgIHtcclxuICAgICAgICAvLyBTYXZlIG5ldyBzdGF0ZVxyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHNhdmVDdXJyZW50U3RhdGVUb0Nvb2tpZSh3aXphcmQsIG9wdGlvbnMsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHZpc3VhbGlzYXRpb25cclxuICAgICAgICByZWZyZXNoU3RlcE5hdmlnYXRpb24od2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgb2xkSW5kZXgpO1xyXG4gICAgICAgIHJlZnJlc2hQYWdpbmF0aW9uKHdpemFyZCwgb3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgIGxvYWRBc3luY0NvbnRlbnQod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgc3RhcnRUcmFuc2l0aW9uRWZmZWN0KHdpemFyZCwgb3B0aW9ucywgc3RhdGUsIGluZGV4LCBvbGRJbmRleCwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2l6YXJkLnRyaWdnZXJIYW5kbGVyKFwic3RlcENoYW5nZWRcIiwgW2luZGV4LCBvbGRJbmRleF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHdpemFyZC5maW5kKFwiLnN0ZXBzIGxpXCIpLmVxKG9sZEluZGV4KS5hZGRDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZWFzZUN1cnJlbnRJbmRleEJ5KHN0YXRlLCBpbmNyZWFzZUJ5KVxyXG57XHJcbiAgICByZXR1cm4gc3RhdGUuY3VycmVudEluZGV4ICsgaW5jcmVhc2VCeTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBpbml0aWFsaXplXHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFRoZSBjb21wb25lbnQgc2V0dGluZ3NcclxuICoqL1xyXG5mdW5jdGlvbiBpbml0aWFsaXplKG9wdGlvbnMpXHJcbntcclxuICAgIC8qanNoaW50IC1XMDQwICovXHJcbiAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB3aXphcmQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBvcHRzLnN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBudWxsLFxyXG4gICAgICAgICAgICBzdGVwQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbGVtZW50OiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGRhdGEgY29udGFpbmVyXHJcbiAgICAgICAgd2l6YXJkLmRhdGEoXCJvcHRpb25zXCIsIG9wdHMpO1xyXG4gICAgICAgIHdpemFyZC5kYXRhKFwic3RhdGVcIiwgc3RhdGUpO1xyXG4gICAgICAgIHdpemFyZC5kYXRhKFwic3RlcHNcIiwgW10pO1xyXG5cclxuICAgICAgICBhbmFseXplRGF0YSh3aXphcmQsIG9wdHMsIHN0YXRlKTtcclxuICAgICAgICByZW5kZXIod2l6YXJkLCBvcHRzLCBzdGF0ZSk7XHJcbiAgICAgICAgcmVnaXN0ZXJFdmVudHMod2l6YXJkLCBvcHRzKTtcclxuXHJcbiAgICAgICAgLy8gVHJpZ2dlciBmb2N1c1xyXG4gICAgICAgIGlmIChvcHRzLmF1dG9Gb2N1cyAmJiBfdW5pcXVlSWQgPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRTdGVwQW5jaG9yKHdpemFyZCwgb3B0cy5zdGFydEluZGV4KS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2l6YXJkLnRyaWdnZXJIYW5kbGVyKFwiaW5pdFwiLCBbb3B0cy5zdGFydEluZGV4XSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluc2VydHMgYSBuZXcgc3RlcCB0byBhIHNwZWNpZmljIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgaW5zZXJ0U3RlcFxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IFRoZSBqUXVlcnkgd2l6YXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBTZXR0aW5ncyBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICogQHBhcmFtIHN0YXRlIHtPYmplY3R9IFRoZSBzdGF0ZSBjb250YWluZXIgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBpbmRleCB7SW50ZWdlcn0gVGhlIHBvc2l0aW9uICh6ZXJvLWJhc2VkKSB0byBhZGRcclxuICogQHBhcmFtIHN0ZXAge09iamVjdH0gVGhlIHN0ZXAgb2JqZWN0IHRvIGFkZFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgICAgJChcIiN3aXphcmRcIikuc3RlcHMoKS5pbnNlcnQoMCwge1xyXG4gKiAgICAgICAgIHRpdGxlOiBcIlRpdGxlXCIsXHJcbiAqICAgICAgICAgY29udGVudDogXCJcIiwgLy8gb3B0aW9uYWxcclxuICogICAgICAgICBjb250ZW50TW9kZTogXCJhc3luY1wiLCAvLyBvcHRpb25hbFxyXG4gKiAgICAgICAgIGNvbnRlbnRVcmw6IFwiL0NvbnRlbnQvU3RlcC8xXCIgLy8gb3B0aW9uYWxcclxuICogICAgIH0pO1xyXG4gKiBAY2hhaW5hYmxlXHJcbiAqKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3RlcCh3aXphcmQsIG9wdGlvbnMsIHN0YXRlLCBpbmRleCwgc3RlcClcclxue1xyXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHN0YXRlLnN0ZXBDb3VudClcclxuICAgIHtcclxuICAgICAgICB0aHJvd0Vycm9yKF9pbmRleE91dE9mUmFuZ2VFcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFZhbGlkYXRlIHN0ZXAgb2JqZWN0XHJcblxyXG4gICAgLy8gQ2hhbmdlIGRhdGFcclxuICAgIHN0ZXAgPSAkLmV4dGVuZCh7fSwgc3RlcE1vZGVsLCBzdGVwKTtcclxuICAgIGluc2VydFN0ZXBUb0NhY2hlKHdpemFyZCwgaW5kZXgsIHN0ZXApO1xyXG4gICAgaWYgKHN0YXRlLmN1cnJlbnRJbmRleCAhPT0gc3RhdGUuc3RlcENvdW50ICYmIHN0YXRlLmN1cnJlbnRJbmRleCA+PSBpbmRleClcclxuICAgIHtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICBzYXZlQ3VycmVudFN0YXRlVG9Db29raWUod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0ZS5zdGVwQ291bnQrKztcclxuXHJcbiAgICB2YXIgY29udGVudENvbnRhaW5lciA9IHdpemFyZC5maW5kKFwiLmNvbnRlbnRcIiksXHJcbiAgICAgICAgaGVhZGVyID0gJChcIjx7MH0+ezF9PC97MH0+XCIuZm9ybWF0KG9wdGlvbnMuaGVhZGVyVGFnLCBzdGVwLnRpdGxlKSksXHJcbiAgICAgICAgYm9keSA9ICQoXCI8ezB9PjwvezB9PlwiLmZvcm1hdChvcHRpb25zLmJvZHlUYWcpKTtcclxuXHJcbiAgICBpZiAoc3RlcC5jb250ZW50TW9kZSA9PSBudWxsIHx8IHN0ZXAuY29udGVudE1vZGUgPT09IGNvbnRlbnRNb2RlLmh0bWwpXHJcbiAgICB7XHJcbiAgICAgICAgYm9keS5odG1sKHN0ZXAuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIucHJlcGVuZChib2R5KS5wcmVwZW5kKGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZ2V0U3RlcFBhbmVsKHdpemFyZCwgKGluZGV4IC0gMSkpLmFmdGVyKGJvZHkpLmFmdGVyKGhlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQm9keSh3aXphcmQsIHN0YXRlLCBib2R5LCBpbmRleCk7XHJcbiAgICByZW5kZXJUaXRsZSh3aXphcmQsIG9wdGlvbnMsIHN0YXRlLCBoZWFkZXIsIGluZGV4KTtcclxuICAgIHJlZnJlc2hTdGVwcyh3aXphcmQsIG9wdGlvbnMsIHN0YXRlLCBpbmRleCk7XHJcbiAgICBpZiAoaW5kZXggPT09IHN0YXRlLmN1cnJlbnRJbmRleClcclxuICAgIHtcclxuICAgICAgICByZWZyZXNoU3RlcE5hdmlnYXRpb24od2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoUGFnaW5hdGlvbih3aXphcmQsIG9wdGlvbnMsIHN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4gd2l6YXJkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5zZXJ0cyBhIHN0ZXAgb2JqZWN0IHRvIHRoZSBjYWNoZSBhdCBhIHNwZWNpZmljIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgaW5zZXJ0U3RlcFRvQ2FjaGVcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBpbmRleCB7SW50ZWdlcn0gVGhlIHBvc2l0aW9uICh6ZXJvLWJhc2VkKSB0byBhZGRcclxuICogQHBhcmFtIHN0ZXAge09iamVjdH0gVGhlIHN0ZXAgb2JqZWN0IHRvIGFkZFxyXG4gKiovXHJcbmZ1bmN0aW9uIGluc2VydFN0ZXBUb0NhY2hlKHdpemFyZCwgaW5kZXgsIHN0ZXApXHJcbntcclxuICAgIGdldFN0ZXBzKHdpemFyZCkuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgdGhlIGtleXVwIERPTSBldmVudCBmb3IgcGFnaW5hdGlvbi5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAZXZlbnQga2V5dXBcclxuICogQHBhcmFtIGV2ZW50IHtPYmplY3R9IEFuIGV2ZW50IG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGV2ZW50KVxyXG57XHJcbiAgICB2YXIgd2l6YXJkID0gJCh0aGlzKSxcclxuICAgICAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyh3aXphcmQpLFxyXG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUod2l6YXJkKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdXBwcmVzc1BhZ2luYXRpb25PbkZvY3VzICYmIHdpemFyZC5maW5kKFwiOmZvY3VzXCIpLmlzKFwiOmlucHV0XCIpKVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXlDb2RlcyA9IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSB9O1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGtleUNvZGVzLmxlZnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBnb1RvUHJldmlvdXNTdGVwKHdpemFyZCwgb3B0aW9ucywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0ga2V5Q29kZXMucmlnaHQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBnb1RvTmV4dFN0ZXAod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgaW5jbHVkZXMgYXN5bmMgY29udGVudC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIGxvYWRBc3luY0NvbnRlbnRcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICovXHJcbmZ1bmN0aW9uIGxvYWRBc3luY0NvbnRlbnQod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSlcclxue1xyXG4gICAgaWYgKHN0YXRlLnN0ZXBDb3VudCA+IDApXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHN0YXRlLmN1cnJlbnRJbmRleCxcclxuICAgICAgICAgICAgY3VycmVudFN0ZXAgPSBnZXRTdGVwKHdpemFyZCwgY3VycmVudEluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmVuYWJsZUNvbnRlbnRDYWNoZSB8fCAhY3VycmVudFN0ZXAuY29udGVudExvYWRlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0VmFsaWRFbnVtVmFsdWUoY29udGVudE1vZGUsIGN1cnJlbnRTdGVwLmNvbnRlbnRNb2RlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb250ZW50TW9kZS5pZnJhbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgd2l6YXJkLmZpbmQoXCIuY29udGVudCA+IC5ib2R5XCIpLmVxKHN0YXRlLmN1cnJlbnRJbmRleCkuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChcIjxpZnJhbWUgc3JjPVxcXCJcIiArIGN1cnJlbnRTdGVwLmNvbnRlbnRVcmwgKyBcIlxcXCIgZnJhbWVib3JkZXI9XFxcIjBcXFwiIHNjcm9sbGluZz1cXFwibm9cXFwiIC8+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKFwibG9hZGVkXCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbnRlbnRNb2RlLmFzeW5jOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RlcENvbnRlbnQgPSBnZXRTdGVwUGFuZWwod2l6YXJkLCBjdXJyZW50SW5kZXgpLl9hcmlhKFwiYnVzeVwiLCBcInRydWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVtcHR5KCkuYXBwZW5kKHJlbmRlclRlbXBsYXRlKG9wdGlvbnMubG9hZGluZ1RlbXBsYXRlLCB7IHRleHQ6IG9wdGlvbnMubGFiZWxzLmxvYWRpbmcgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoeyB1cmw6IGN1cnJlbnRTdGVwLmNvbnRlbnRVcmwsIGNhY2hlOiBmYWxzZSB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXBDb250ZW50LmVtcHR5KCkuaHRtbChkYXRhKS5fYXJpYShcImJ1c3lcIiwgXCJmYWxzZVwiKS5kYXRhKFwibG9hZGVkXCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l6YXJkLnRyaWdnZXJIYW5kbGVyKFwiY29udGVudExvYWRlZFwiLCBbY3VycmVudEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaXJlcyB0aGUgYWN0aW9uIG5leHQgb3IgcHJldmlvdXMgY2xpY2sgZXZlbnQuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCBwYWdpbmF0aW9uQ2xpY2tcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBUaGUgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gaW5kZXgge0ludGVnZXJ9IFRoZSBwb3NpdGlvbiAoemVyby1iYXNlZCkgdG8gcm91dGUgdG9cclxuICogQHJldHVybiB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGV2ZW50IGZpcmVkIHN1Y2Nlc3NmdWxseSBvciBub3RcclxuICoqL1xyXG5mdW5jdGlvbiBwYWdpbmF0aW9uQ2xpY2sod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpXHJcbntcclxuICAgIHZhciBvbGRJbmRleCA9IHN0YXRlLmN1cnJlbnRJbmRleDtcclxuXHJcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHN0YXRlLnN0ZXBDb3VudCAmJiAhKG9wdGlvbnMuZm9yY2VNb3ZlRm9yd2FyZCAmJiBpbmRleCA8IHN0YXRlLmN1cnJlbnRJbmRleCkpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFuY2hvciA9IGdldFN0ZXBBbmNob3Iod2l6YXJkLCBpbmRleCksXHJcbiAgICAgICAgICAgIHBhcmVudCA9IGFuY2hvci5wYXJlbnQoKSxcclxuICAgICAgICAgICAgaXNEaXNhYmxlZCA9IHBhcmVudC5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBFbmFibGUgdGhlIHN0ZXAgdG8gbWFrZSB0aGUgYW5jaG9yIGNsaWNrYWJsZSFcclxuICAgICAgICBwYXJlbnQuX2VuYWJsZUFyaWEoKTtcclxuICAgICAgICBhbmNob3IuY2xpY2soKTtcclxuXHJcbiAgICAgICAgLy8gQW4gZXJyb3Igb2NjdXJlZFxyXG4gICAgICAgIGlmIChvbGRJbmRleCA9PT0gc3RhdGUuY3VycmVudEluZGV4ICYmIGlzRGlzYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBzdGVwIGFnYWluIGlmIGN1cnJlbnQgaW5kZXggaGFzIG5vdCBjaGFuZ2VkOyBwcmV2ZW50cyBjbGljayBhY3Rpb24uXHJcbiAgICAgICAgICAgIHBhcmVudC5fZW5hYmxlQXJpYShmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpcmVzIHdoZW4gYSBwYWdpbmF0aW9uIGNsaWNrIGhhcHBlbnMuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQGV2ZW50IGNsaWNrXHJcbiAqIEBwYXJhbSBldmVudCB7T2JqZWN0fSBBbiBldmVudCBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIHBhZ2luYXRpb25DbGlja0hhbmRsZXIoZXZlbnQpXHJcbntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGFuY2hvciA9ICQodGhpcyksXHJcbiAgICAgICAgd2l6YXJkID0gYW5jaG9yLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLFxyXG4gICAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHdpemFyZCksXHJcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSh3aXphcmQpLFxyXG4gICAgICAgIGhyZWYgPSBhbmNob3IuYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgc3dpdGNoIChocmVmLnN1YnN0cmluZyhocmVmLmxhc3RJbmRleE9mKFwiI1wiKSArIDEpKVxyXG4gICAge1xyXG4gICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgY2FuY2VsKHdpemFyZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiZmluaXNoXCI6XHJcbiAgICAgICAgICAgIGZpbmlzaFN0ZXAod2l6YXJkLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwibmV4dFwiOlxyXG4gICAgICAgICAgICBnb1RvTmV4dFN0ZXAod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwicHJldmlvdXNcIjpcclxuICAgICAgICAgICAgZ29Ub1ByZXZpb3VzU3RlcCh3aXphcmQsIG9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWZyZXNocyB0aGUgdmlzdWFsaXphdGlvbiBzdGF0ZSBmb3IgdGhlIGVudGlyZSBwYWdpbmF0aW9uLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgcmVmcmVzaFBhZ2luYXRpb25cclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICovXHJcbmZ1bmN0aW9uIHJlZnJlc2hQYWdpbmF0aW9uKHdpemFyZCwgb3B0aW9ucywgc3RhdGUpXHJcbntcclxuICAgIGlmIChvcHRpb25zLmVuYWJsZVBhZ2luYXRpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGZpbmlzaCA9IHdpemFyZC5maW5kKFwiLmFjdGlvbnMgYVtocmVmJD0nI2ZpbmlzaCddXCIpLnBhcmVudCgpLFxyXG4gICAgICAgICAgICBuZXh0ID0gd2l6YXJkLmZpbmQoXCIuYWN0aW9ucyBhW2hyZWYkPScjbmV4dCddXCIpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuZm9yY2VNb3ZlRm9yd2FyZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IHdpemFyZC5maW5kKFwiLmFjdGlvbnMgYVtocmVmJD0nI3ByZXZpb3VzJ11cIikucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLl9lbmFibGVBcmlhKHN0YXRlLmN1cnJlbnRJbmRleCA+IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRmluaXNoQnV0dG9uICYmIG9wdGlvbnMuc2hvd0ZpbmlzaEJ1dHRvbkFsd2F5cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbmlzaC5fZW5hYmxlQXJpYShzdGF0ZS5zdGVwQ291bnQgPiAwKTtcclxuICAgICAgICAgICAgbmV4dC5fZW5hYmxlQXJpYShzdGF0ZS5zdGVwQ291bnQgPiAxICYmIHN0YXRlLnN0ZXBDb3VudCA+IChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbmlzaC5fc2hvd0FyaWEob3B0aW9ucy5lbmFibGVGaW5pc2hCdXR0b24gJiYgc3RhdGUuc3RlcENvdW50ID09PSAoc3RhdGUuY3VycmVudEluZGV4ICsgMSkpO1xyXG4gICAgICAgICAgICBuZXh0Ll9zaG93QXJpYShzdGF0ZS5zdGVwQ291bnQgPT09IDAgfHwgc3RhdGUuc3RlcENvdW50ID4gKHN0YXRlLmN1cnJlbnRJbmRleCArIDEpKS5cclxuICAgICAgICAgICAgICAgIF9lbmFibGVBcmlhKHN0YXRlLnN0ZXBDb3VudCA+IChzdGF0ZS5jdXJyZW50SW5kZXggKyAxKSB8fCAhb3B0aW9ucy5lbmFibGVGaW5pc2hCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZnJlc2hzIHRoZSB2aXN1YWxpemF0aW9uIHN0YXRlIGZvciB0aGUgc3RlcCBuYXZpZ2F0aW9uICh0YWJzKS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIHJlZnJlc2hTdGVwTmF2aWdhdGlvblxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IEEgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gW29sZEluZGV4XSB7SW50ZWdlcn0gVGhlIGluZGV4IG9mIHRoZSBwcmlvciBzdGVwXHJcbiAqL1xyXG5mdW5jdGlvbiByZWZyZXNoU3RlcE5hdmlnYXRpb24od2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgb2xkSW5kZXgpXHJcbntcclxuICAgIHZhciBjdXJyZW50T3JOZXdTdGVwQW5jaG9yID0gZ2V0U3RlcEFuY2hvcih3aXphcmQsIHN0YXRlLmN1cnJlbnRJbmRleCksXHJcbiAgICAgICAgY3VycmVudEluZm8gPSAkKFwiPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtaW5mbyBhdWRpYmxlXFxcIj5cIiArIG9wdGlvbnMubGFiZWxzLmN1cnJlbnQgKyBcIiA8L3NwYW4+XCIpLFxyXG4gICAgICAgIHN0ZXBUaXRsZXMgPSB3aXphcmQuZmluZChcIi5jb250ZW50ID4gLnRpdGxlXCIpO1xyXG5cclxuICAgIGlmIChvbGRJbmRleCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBvbGRTdGVwQW5jaG9yID0gZ2V0U3RlcEFuY2hvcih3aXphcmQsIG9sZEluZGV4KTtcclxuICAgICAgICBvbGRTdGVwQW5jaG9yLnBhcmVudCgpLmFkZENsYXNzKFwiZG9uZVwiKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpLl9zZWxlY3RBcmlhKGZhbHNlKTtcclxuICAgICAgICBzdGVwVGl0bGVzLmVxKG9sZEluZGV4KS5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIikubmV4dChcIi5ib2R5XCIpLnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICAgICBjdXJyZW50SW5mbyA9IG9sZFN0ZXBBbmNob3IuZmluZChcIi5jdXJyZW50LWluZm9cIik7XHJcbiAgICAgICAgY3VycmVudE9yTmV3U3RlcEFuY2hvci5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRPck5ld1N0ZXBBbmNob3IucHJlcGVuZChjdXJyZW50SW5mbykucGFyZW50KCkuX3NlbGVjdEFyaWEoKS5yZW1vdmVDbGFzcyhcImRvbmVcIikuX2VuYWJsZUFyaWEoKTtcclxuICAgIHN0ZXBUaXRsZXMuZXEoc3RhdGUuY3VycmVudEluZGV4KS5hZGRDbGFzcyhcImN1cnJlbnRcIikubmV4dChcIi5ib2R5XCIpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZnJlc2hlcyBzdGVwIGJ1dHRvbnMgYW5kIHRoZWlyIHJlbGF0ZWQgdGl0bGVzIGJleW9uZCBhIGNlcnRhaW4gcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCByZWZyZXNoU3RlcHNcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBUaGUgc3RhcnQgcG9pbnQgZm9yIHJlZnJlc2hpbmcgaWRzXHJcbiAqL1xyXG5mdW5jdGlvbiByZWZyZXNoU3RlcHMod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpXHJcbntcclxuICAgIHZhciB1bmlxdWVJZCA9IGdldFVuaXF1ZUlkKHdpemFyZCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgc3RhdGUuc3RlcENvdW50OyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVuaXF1ZVN0ZXBJZCA9IHVuaXF1ZUlkICsgX3RhYlN1ZmZpeCArIGksXHJcbiAgICAgICAgICAgIHVuaXF1ZUJvZHlJZCA9IHVuaXF1ZUlkICsgX3RhYnBhbmVsU3VmZml4ICsgaSxcclxuICAgICAgICAgICAgdW5pcXVlSGVhZGVySWQgPSB1bmlxdWVJZCArIF90aXRsZVN1ZmZpeCArIGksXHJcbiAgICAgICAgICAgIHRpdGxlID0gd2l6YXJkLmZpbmQoXCIudGl0bGVcIikuZXEoaSkuX2lkKHVuaXF1ZUhlYWRlcklkKTtcclxuXHJcbiAgICAgICAgd2l6YXJkLmZpbmQoXCIuc3RlcHMgYVwiKS5lcShpKS5faWQodW5pcXVlU3RlcElkKVxyXG4gICAgICAgICAgICAuX2FyaWEoXCJjb250cm9sc1wiLCB1bmlxdWVCb2R5SWQpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgdW5pcXVlSGVhZGVySWQpXHJcbiAgICAgICAgICAgIC5odG1sKHJlbmRlclRlbXBsYXRlKG9wdGlvbnMudGl0bGVUZW1wbGF0ZSwgeyBpbmRleDogaSArIDEsIHRpdGxlOiB0aXRsZS5odG1sKCkgfSkpO1xyXG4gICAgICAgIHdpemFyZC5maW5kKFwiLmJvZHlcIikuZXEoaSkuX2lkKHVuaXF1ZUJvZHlJZClcclxuICAgICAgICAgICAgLl9hcmlhKFwibGFiZWxsZWRieVwiLCB1bmlxdWVIZWFkZXJJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKHdpemFyZCwgb3B0aW9ucylcclxue1xyXG4gICAgdmFyIGV2ZW50TmFtZXNwYWNlID0gZ2V0RXZlbnROYW1lc3BhY2Uod2l6YXJkKTtcclxuXHJcbiAgICB3aXphcmQuYmluZChcImNhbmNlbGVkXCIgKyBldmVudE5hbWVzcGFjZSwgb3B0aW9ucy5vbkNhbmNlbGVkKTtcclxuICAgIHdpemFyZC5iaW5kKFwiY29udGVudExvYWRlZFwiICsgZXZlbnROYW1lc3BhY2UsIG9wdGlvbnMub25Db250ZW50TG9hZGVkKTtcclxuICAgIHdpemFyZC5iaW5kKFwiZmluaXNoaW5nXCIgKyBldmVudE5hbWVzcGFjZSwgb3B0aW9ucy5vbkZpbmlzaGluZyk7XHJcbiAgICB3aXphcmQuYmluZChcImZpbmlzaGVkXCIgKyBldmVudE5hbWVzcGFjZSwgb3B0aW9ucy5vbkZpbmlzaGVkKTtcclxuICAgIHdpemFyZC5iaW5kKFwiaW5pdFwiICsgZXZlbnROYW1lc3BhY2UsIG9wdGlvbnMub25Jbml0KTtcclxuICAgIHdpemFyZC5iaW5kKFwic3RlcENoYW5naW5nXCIgKyBldmVudE5hbWVzcGFjZSwgb3B0aW9ucy5vblN0ZXBDaGFuZ2luZyk7XHJcbiAgICB3aXphcmQuYmluZChcInN0ZXBDaGFuZ2VkXCIgKyBldmVudE5hbWVzcGFjZSwgb3B0aW9ucy5vblN0ZXBDaGFuZ2VkKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVLZXlOYXZpZ2F0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHdpemFyZC5iaW5kKFwia2V5dXBcIiArIGV2ZW50TmFtZXNwYWNlLCBrZXlVcEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpemFyZC5maW5kKFwiLmFjdGlvbnMgYVwiKS5iaW5kKFwiY2xpY2tcIiArIGV2ZW50TmFtZXNwYWNlLCBwYWdpbmF0aW9uQ2xpY2tIYW5kbGVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSBzcGVjaWZpYyBzdGVwIGJ5IGFuIGdpdmVuIGluZGV4LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgcmVtb3ZlU3RlcFxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IEEgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gaW5kZXgge0ludGVnZXJ9IFRoZSBwb3NpdGlvbiAoemVyby1iYXNlZCkgb2YgdGhlIHN0ZXAgdG8gcmVtb3ZlXHJcbiAqIEByZXR1cm4gSW5kZWNhdGVzIHdoZXRoZXIgdGhlIGl0ZW0gaXMgcmVtb3ZlZC5cclxuICoqL1xyXG5mdW5jdGlvbiByZW1vdmVTdGVwKHdpemFyZCwgb3B0aW9ucywgc3RhdGUsIGluZGV4KVxyXG57XHJcbiAgICAvLyBJbmRleCBvdXQgb2YgcmFuZ2UgYW5kIHRyeSBkZWxldGluZyBjdXJyZW50IGl0ZW0gd2lsbCByZXR1cm4gZmFsc2UuXHJcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHN0YXRlLnN0ZXBDb3VudCB8fCBzdGF0ZS5jdXJyZW50SW5kZXggPT09IGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFuZ2UgZGF0YVxyXG4gICAgcmVtb3ZlU3RlcEZyb21DYWNoZSh3aXphcmQsIGluZGV4KTtcclxuICAgIGlmIChzdGF0ZS5jdXJyZW50SW5kZXggPiBpbmRleClcclxuICAgIHtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50SW5kZXgtLTtcclxuICAgICAgICBzYXZlQ3VycmVudFN0YXRlVG9Db29raWUod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0ZS5zdGVwQ291bnQtLTtcclxuXHJcbiAgICBnZXRTdGVwVGl0bGUod2l6YXJkLCBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICBnZXRTdGVwUGFuZWwod2l6YXJkLCBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICBnZXRTdGVwQW5jaG9yKHdpemFyZCwgaW5kZXgpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIFNldCB0aGUgXCJmaXJzdFwiIGNsYXNzIHRvIHRoZSBuZXcgZmlyc3Qgc3RlcCBidXR0b24gXHJcbiAgICBpZiAoaW5kZXggPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgd2l6YXJkLmZpbmQoXCIuc3RlcHMgbGlcIikuZmlyc3QoKS5hZGRDbGFzcyhcImZpcnN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgXCJsYXN0XCIgY2xhc3MgdG8gdGhlIG5ldyBsYXN0IHN0ZXAgYnV0dG9uIFxyXG4gICAgaWYgKGluZGV4ID09PSBzdGF0ZS5zdGVwQ291bnQpXHJcbiAgICB7XHJcbiAgICAgICAgd2l6YXJkLmZpbmQoXCIuc3RlcHMgbGlcIikuZXEoaW5kZXgpLmFkZENsYXNzKFwibGFzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoU3RlcHMod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgcmVmcmVzaFBhZ2luYXRpb24od2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0ZXBGcm9tQ2FjaGUod2l6YXJkLCBpbmRleClcclxue1xyXG4gICAgZ2V0U3RlcHMod2l6YXJkKS5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgYmFzZSBodG1sIHN0cnVjdHVyZSB0byBhIG1vcmUgc2Vuc2libGUgaHRtbCBzdHJ1Y3R1cmUuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCByZW5kZXJcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IFNldHRpbmdzIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gc3RhdGUge09iamVjdH0gVGhlIHN0YXRlIGNvbnRhaW5lciBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICoqL1xyXG5mdW5jdGlvbiByZW5kZXIod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSlcclxue1xyXG4gICAgLy8gQ3JlYXRlIGEgY29udGVudCB3cmFwcGVyIGFuZCBjb3B5IEhUTUwgZnJvbSB0aGUgaW50aWFsIHdpemFyZCBzdHJ1Y3R1cmVcclxuICAgIHZhciB3cmFwcGVyVGVtcGxhdGUgPSBcIjx7MH0gY2xhc3M9XFxcInsxfVxcXCI+ezJ9PC97MH0+XCIsXHJcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRWYWxpZEVudW1WYWx1ZShzdGVwc09yaWVudGF0aW9uLCBvcHRpb25zLnN0ZXBzT3JpZW50YXRpb24pLFxyXG4gICAgICAgIHZlcnRpY2FsQ3NzQ2xhc3MgPSAob3JpZW50YXRpb24gPT09IHN0ZXBzT3JpZW50YXRpb24udmVydGljYWwpID8gXCIgdmVydGljYWxcIiA6IFwiXCIsXHJcbiAgICAgICAgY29udGVudFdyYXBwZXIgPSAkKHdyYXBwZXJUZW1wbGF0ZS5mb3JtYXQob3B0aW9ucy5jb250ZW50Q29udGFpbmVyVGFnLCBcImNvbnRlbnQgXCIgKyBvcHRpb25zLmNsZWFyRml4Q3NzQ2xhc3MsIHdpemFyZC5odG1sKCkpKSxcclxuICAgICAgICBzdGVwc1dyYXBwZXIgPSAkKHdyYXBwZXJUZW1wbGF0ZS5mb3JtYXQob3B0aW9ucy5zdGVwc0NvbnRhaW5lclRhZywgXCJzdGVwcyBcIiArIG9wdGlvbnMuY2xlYXJGaXhDc3NDbGFzcywgXCI8dWwgcm9sZT1cXFwidGFibGlzdFxcXCI+PC91bD5cIikpLFxyXG4gICAgICAgIHN0ZXBUaXRsZXMgPSBjb250ZW50V3JhcHBlci5jaGlsZHJlbihvcHRpb25zLmhlYWRlclRhZyksXHJcbiAgICAgICAgc3RlcENvbnRlbnRzID0gY29udGVudFdyYXBwZXIuY2hpbGRyZW4ob3B0aW9ucy5ib2R5VGFnKTtcclxuXHJcbiAgICAvLyBUcmFuc2Zvcm0gdGhlIHdpemFyZCB3cmFwcGVyIGFuZCByZW1vdmUgdGhlIGlubmVyIEhUTUxcclxuICAgIHdpemFyZC5hdHRyKFwicm9sZVwiLCBcImFwcGxpY2F0aW9uXCIpLmVtcHR5KCkuYXBwZW5kKHN0ZXBzV3JhcHBlcikuYXBwZW5kKGNvbnRlbnRXcmFwcGVyKVxyXG4gICAgICAgIC5hZGRDbGFzcyhvcHRpb25zLmNzc0NsYXNzICsgXCIgXCIgKyBvcHRpb25zLmNsZWFyRml4Q3NzQ2xhc3MgKyB2ZXJ0aWNhbENzc0NsYXNzKTtcclxuXHJcbiAgICAvLyBBZGQgV0lBLUFSSUEgc3VwcG9ydFxyXG4gICAgc3RlcENvbnRlbnRzLmVhY2goZnVuY3Rpb24gKGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIHJlbmRlckJvZHkod2l6YXJkLCBzdGF0ZSwgJCh0aGlzKSwgaW5kZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3RlcFRpdGxlcy5lYWNoKGZ1bmN0aW9uIChpbmRleClcclxuICAgIHtcclxuICAgICAgICByZW5kZXJUaXRsZSh3aXphcmQsIG9wdGlvbnMsIHN0YXRlLCAkKHRoaXMpLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWZyZXNoU3RlcE5hdmlnYXRpb24od2l6YXJkLCBvcHRpb25zLCBzdGF0ZSk7XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uKHdpemFyZCwgb3B0aW9ucywgc3RhdGUpO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgYm9keSB0byBhIHByb3BlciB0YWJwYW5lbC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIHJlbmRlckJvZHlcclxuICogQHBhcmFtIHdpemFyZCB7T2JqZWN0fSBBIGpRdWVyeSB3aXphcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBib2R5IHtPYmplY3R9IEEgalF1ZXJ5IGJvZHkgb2JqZWN0XHJcbiAqIEBwYXJhbSBpbmRleCB7SW50ZWdlcn0gVGhlIHBvc2l0aW9uIG9mIHRoZSBib2R5XHJcbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJCb2R5KHdpemFyZCwgc3RhdGUsIGJvZHksIGluZGV4KVxyXG57XHJcbiAgICB2YXIgdW5pcXVlSWQgPSBnZXRVbmlxdWVJZCh3aXphcmQpLFxyXG4gICAgICAgIHVuaXF1ZUJvZHlJZCA9IHVuaXF1ZUlkICsgX3RhYnBhbmVsU3VmZml4ICsgaW5kZXgsXHJcbiAgICAgICAgdW5pcXVlSGVhZGVySWQgPSB1bmlxdWVJZCArIF90aXRsZVN1ZmZpeCArIGluZGV4O1xyXG5cclxuICAgIGJvZHkuX2lkKHVuaXF1ZUJvZHlJZCkuYXR0cihcInJvbGVcIiwgXCJ0YWJwYW5lbFwiKS5fYXJpYShcImxhYmVsbGVkYnlcIiwgdW5pcXVlSGVhZGVySWQpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYm9keVwiKS5fc2hvd0FyaWEoc3RhdGUuY3VycmVudEluZGV4ID09PSBpbmRleCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIGEgcGFnaW5hdGlvbiBpZiBlbmFibGVkLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2QgcmVuZGVyUGFnaW5hdGlvblxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IEEgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyUGFnaW5hdGlvbih3aXphcmQsIG9wdGlvbnMsIHN0YXRlKVxyXG57XHJcbiAgICBpZiAob3B0aW9ucy5lbmFibGVQYWdpbmF0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBwYWdpbmF0aW9uID0gXCI8ezB9IGNsYXNzPVxcXCJhY3Rpb25zIHsxfVxcXCI+PHVsIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWw9XFxcInsyfVxcXCI+ezN9PC91bD48L3swfT5cIixcclxuICAgICAgICAgICAgYnV0dG9uVGVtcGxhdGUgPSBcIjxsaT48YSBocmVmPVxcXCIjezB9XFxcIiByb2xlPVxcXCJtZW51aXRlbVxcXCI+ezF9PC9hPjwvbGk+XCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbnMgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuZm9yY2VNb3ZlRm9yd2FyZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMgKz0gYnV0dG9uVGVtcGxhdGUuZm9ybWF0KFwicHJldmlvdXNcIiwgb3B0aW9ucy5sYWJlbHMucHJldmlvdXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9ucyArPSBidXR0b25UZW1wbGF0ZS5mb3JtYXQoXCJuZXh0XCIsIG9wdGlvbnMubGFiZWxzLm5leHQpO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVGaW5pc2hCdXR0b24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidXR0b25zICs9IGJ1dHRvblRlbXBsYXRlLmZvcm1hdChcImZpbmlzaFwiLCBvcHRpb25zLmxhYmVscy5maW5pc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlQ2FuY2VsQnV0dG9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnV0dG9ucyArPSBidXR0b25UZW1wbGF0ZS5mb3JtYXQoXCJjYW5jZWxcIiwgb3B0aW9ucy5sYWJlbHMuY2FuY2VsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpemFyZC5hcHBlbmQocGFnaW5hdGlvbi5mb3JtYXQob3B0aW9ucy5hY3Rpb25Db250YWluZXJUYWcsIG9wdGlvbnMuY2xlYXJGaXhDc3NDbGFzcyxcclxuICAgICAgICAgICAgb3B0aW9ucy5sYWJlbHMucGFnaW5hdGlvbiwgYnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZWZyZXNoUGFnaW5hdGlvbih3aXphcmQsIG9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICBsb2FkQXN5bmNDb250ZW50KHdpemFyZCwgb3B0aW9ucywgc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyBhIHRlbXBsYXRlIGFuZCByZXBsYWNlcyBhbGwgcGxhY2Vob2xkZXIuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCByZW5kZXJUZW1wbGF0ZVxyXG4gKiBAcGFyYW0gdGVtcGxhdGUge1N0cmluZ30gQSB0ZW1wbGF0ZVxyXG4gKiBAcGFyYW0gc3Vic3RpdHV0ZXMge09iamVjdH0gQSBsaXN0IG9mIHN1YnN0aXR1dGVcclxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgcmVuZGVyZWQgdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlLCBzdWJzdGl0dXRlcylcclxue1xyXG4gICAgdmFyIG1hdGNoZXMgPSB0ZW1wbGF0ZS5tYXRjaCgvIyhbYS16XSopIy9naSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbaV0sIFxyXG4gICAgICAgICAgICBrZXkgPSBtYXRjaC5zdWJzdHJpbmcoMSwgbWF0Y2gubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJzdGl0dXRlc1trZXldID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiVGhlIGtleSAnezB9JyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgc3Vic3RpdHV0ZSBjb2xsZWN0aW9uIVwiLCBrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG1hdGNoLCBzdWJzdGl0dXRlc1trZXldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB0aXRsZSB0byBhIHN0ZXAgaXRlbSBidXR0b24uXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQHByaXZhdGVcclxuICogQG1ldGhvZCByZW5kZXJUaXRsZVxyXG4gKiBAcGFyYW0gd2l6YXJkIHtPYmplY3R9IEEgalF1ZXJ5IHdpemFyZCBvYmplY3RcclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gU2V0dGluZ3Mgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqIEBwYXJhbSBzdGF0ZSB7T2JqZWN0fSBUaGUgc3RhdGUgY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHdpemFyZFxyXG4gKiBAcGFyYW0gaGVhZGVyIHtPYmplY3R9IEEgalF1ZXJ5IGhlYWRlciBvYmplY3RcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBUaGUgcG9zaXRpb24gb2YgdGhlIGhlYWRlclxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyVGl0bGUod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgaGVhZGVyLCBpbmRleClcclxue1xyXG4gICAgdmFyIHVuaXF1ZUlkID0gZ2V0VW5pcXVlSWQod2l6YXJkKSxcclxuICAgICAgICB1bmlxdWVTdGVwSWQgPSB1bmlxdWVJZCArIF90YWJTdWZmaXggKyBpbmRleCxcclxuICAgICAgICB1bmlxdWVCb2R5SWQgPSB1bmlxdWVJZCArIF90YWJwYW5lbFN1ZmZpeCArIGluZGV4LFxyXG4gICAgICAgIHVuaXF1ZUhlYWRlcklkID0gdW5pcXVlSWQgKyBfdGl0bGVTdWZmaXggKyBpbmRleCxcclxuICAgICAgICBzdGVwQ29sbGVjdGlvbiA9IHdpemFyZC5maW5kKFwiLnN0ZXBzID4gdWxcIiksXHJcbiAgICAgICAgdGl0bGUgPSByZW5kZXJUZW1wbGF0ZShvcHRpb25zLnRpdGxlVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgdGl0bGU6IGhlYWRlci5odG1sKClcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdGVwSXRlbSA9ICQoXCI8bGkgcm9sZT1cXFwidGFiXFxcIj48YSBpZD1cXFwiXCIgKyB1bmlxdWVTdGVwSWQgKyBcIlxcXCIgaHJlZj1cXFwiI1wiICsgdW5pcXVlSGVhZGVySWQgKyBcclxuICAgICAgICAgICAgXCJcXFwiIGFyaWEtY29udHJvbHM9XFxcIlwiICsgdW5pcXVlQm9keUlkICsgXCJcXFwiPlwiICsgdGl0bGUgKyBcIjwvYT48L2xpPlwiKTtcclxuICAgICAgICBcclxuICAgIHN0ZXBJdGVtLl9lbmFibGVBcmlhKG9wdGlvbnMuZW5hYmxlQWxsU3RlcHMgfHwgc3RhdGUuY3VycmVudEluZGV4ID4gaW5kZXgpO1xyXG5cclxuICAgIGlmIChzdGF0ZS5jdXJyZW50SW5kZXggPiBpbmRleClcclxuICAgIHtcclxuICAgICAgICBzdGVwSXRlbS5hZGRDbGFzcyhcImRvbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLl9pZCh1bmlxdWVIZWFkZXJJZCkuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIikuYWRkQ2xhc3MoXCJ0aXRsZVwiKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgc3RlcENvbGxlY3Rpb24ucHJlcGVuZChzdGVwSXRlbSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgc3RlcENvbGxlY3Rpb24uZmluZChcImxpXCIpLmVxKGluZGV4IC0gMSkuYWZ0ZXIoc3RlcEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgXCJmaXJzdFwiIGNsYXNzIHRvIHRoZSBuZXcgZmlyc3Qgc3RlcCBidXR0b25cclxuICAgIGlmIChpbmRleCA9PT0gMClcclxuICAgIHtcclxuICAgICAgICBzdGVwQ29sbGVjdGlvbi5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJmaXJzdFwiKS5lcShpbmRleCkuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdGhlIFwibGFzdFwiIGNsYXNzIHRvIHRoZSBuZXcgbGFzdCBzdGVwIGJ1dHRvblxyXG4gICAgaWYgKGluZGV4ID09PSAoc3RhdGUuc3RlcENvdW50IC0gMSkpXHJcbiAgICB7XHJcbiAgICAgICAgc3RlcENvbGxlY3Rpb24uZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwibGFzdFwiKS5lcShpbmRleCkuYWRkQ2xhc3MoXCJsYXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50XHJcbiAgICBzdGVwSXRlbS5jaGlsZHJlbihcImFcIikuYmluZChcImNsaWNrXCIgKyBnZXRFdmVudE5hbWVzcGFjZSh3aXphcmQpLCBzdGVwQ2xpY2tIYW5kbGVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhdmVzIHRoZSBjdXJyZW50IHN0YXRlIHRvIGEgY29va2llLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBtZXRob2Qgc2F2ZUN1cnJlbnRTdGF0ZVRvQ29va2llXHJcbiAqIEBwYXJhbSB3aXphcmQge09iamVjdH0gQSBqUXVlcnkgd2l6YXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBTZXR0aW5ncyBvZiB0aGUgY3VycmVudCB3aXphcmRcclxuICogQHBhcmFtIHN0YXRlIHtPYmplY3R9IFRoZSBzdGF0ZSBjb250YWluZXIgb2YgdGhlIGN1cnJlbnQgd2l6YXJkXHJcbiAqL1xyXG5mdW5jdGlvbiBzYXZlQ3VycmVudFN0YXRlVG9Db29raWUod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSlcclxue1xyXG4gICAgaWYgKG9wdGlvbnMuc2F2ZVN0YXRlICYmICQuY29va2llKVxyXG4gICAge1xyXG4gICAgICAgICQuY29va2llKF9jb29raWVQcmVmaXggKyBnZXRVbmlxdWVJZCh3aXphcmQpLCBzdGF0ZS5jdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb25FZmZlY3Qod2l6YXJkLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgsIG9sZEluZGV4LCBkb25lQ2FsbGJhY2spXHJcbntcclxuICAgIHZhciBzdGVwQ29udGVudHMgPSB3aXphcmQuZmluZChcIi5jb250ZW50ID4gLmJvZHlcIiksXHJcbiAgICAgICAgZWZmZWN0ID0gZ2V0VmFsaWRFbnVtVmFsdWUodHJhbnNpdGlvbkVmZmVjdCwgb3B0aW9ucy50cmFuc2l0aW9uRWZmZWN0KSxcclxuICAgICAgICBlZmZlY3RTcGVlZCA9IG9wdGlvbnMudHJhbnNpdGlvbkVmZmVjdFNwZWVkLFxyXG4gICAgICAgIG5ld1N0ZXAgPSBzdGVwQ29udGVudHMuZXEoaW5kZXgpLFxyXG4gICAgICAgIGN1cnJlbnRTdGVwID0gc3RlcENvbnRlbnRzLmVxKG9sZEluZGV4KTtcclxuXHJcbiAgICBzd2l0Y2ggKGVmZmVjdClcclxuICAgIHtcclxuICAgICAgICBjYXNlIHRyYW5zaXRpb25FZmZlY3QuZmFkZTpcclxuICAgICAgICBjYXNlIHRyYW5zaXRpb25FZmZlY3Quc2xpZGU6XHJcbiAgICAgICAgICAgIHZhciBoaWRlID0gKGVmZmVjdCA9PT0gdHJhbnNpdGlvbkVmZmVjdC5mYWRlKSA/IFwiZmFkZU91dFwiIDogXCJzbGlkZVVwXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93ID0gKGVmZmVjdCA9PT0gdHJhbnNpdGlvbkVmZmVjdC5mYWRlKSA/IFwiZmFkZUluXCIgOiBcInNsaWRlRG93blwiO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUudHJhbnNpdGlvbkVsZW1lbnQgPSBuZXdTdGVwO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RlcFtoaWRlXShlZmZlY3RTcGVlZCwgZnVuY3Rpb24gKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpemFyZCA9ICQodGhpcykuX3Nob3dBcmlhKGZhbHNlKS5wYXJlbnQoKS5wYXJlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKHdpemFyZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnRyYW5zaXRpb25FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zaXRpb25FbGVtZW50W3Nob3ddKGVmZmVjdFNwZWVkLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5fc2hvd0FyaWEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5wcm9taXNlKCkuZG9uZShkb25lQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zaXRpb25FbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHRyYW5zaXRpb25FZmZlY3Quc2xpZGVMZWZ0OlxyXG4gICAgICAgICAgICB2YXIgb3V0ZXJXaWR0aCA9IGN1cnJlbnRTdGVwLm91dGVyV2lkdGgodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBwb3NGYWRlT3V0ID0gKGluZGV4ID4gb2xkSW5kZXgpID8gLShvdXRlcldpZHRoKSA6IG91dGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBwb3NGYWRlSW4gPSAoaW5kZXggPiBvbGRJbmRleCkgPyBvdXRlcldpZHRoIDogLShvdXRlcldpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICQud2hlbihjdXJyZW50U3RlcC5hbmltYXRlKHsgbGVmdDogcG9zRmFkZU91dCB9LCBlZmZlY3RTcGVlZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyAkKHRoaXMpLl9zaG93QXJpYShmYWxzZSk7IH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3U3RlcC5jc3MoXCJsZWZ0XCIsIHBvc0ZhZGVJbiArIFwicHhcIikuX3Nob3dBcmlhKClcclxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGxlZnQ6IDAgfSwgZWZmZWN0U3BlZWQpKS5kb25lKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAkLndoZW4oY3VycmVudFN0ZXAuX3Nob3dBcmlhKGZhbHNlKSwgbmV3U3RlcC5fc2hvd0FyaWEoKSlcclxuICAgICAgICAgICAgICAgIC5kb25lKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmlyZXMgd2hlbiBhIHN0ZXAgY2xpY2sgaGFwcGVucy5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAZXZlbnQgY2xpY2tcclxuICogQHBhcmFtIGV2ZW50IHtPYmplY3R9IEFuIGV2ZW50IG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gc3RlcENsaWNrSGFuZGxlcihldmVudClcclxue1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgYW5jaG9yID0gJCh0aGlzKSxcclxuICAgICAgICB3aXphcmQgPSBhbmNob3IucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCksXHJcbiAgICAgICAgb3B0aW9ucyA9IGdldE9wdGlvbnMod2l6YXJkKSxcclxuICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKHdpemFyZCksXHJcbiAgICAgICAgb2xkSW5kZXggPSBzdGF0ZS5jdXJyZW50SW5kZXg7XHJcblxyXG4gICAgaWYgKGFuY2hvci5wYXJlbnQoKS5pcyhcIjpub3QoLmRpc2FibGVkKTpub3QoLmN1cnJlbnQpXCIpKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBocmVmID0gYW5jaG9yLmF0dHIoXCJocmVmXCIpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHBhcnNlSW50KGhyZWYuc3Vic3RyaW5nKGhyZWYubGFzdEluZGV4T2YoXCItXCIpICsgMSksIDApO1xyXG5cclxuICAgICAgICBnb1RvU3RlcCh3aXphcmQsIG9wdGlvbnMsIHN0YXRlLCBwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm90aGluZyBoYXMgY2hhbmdlZFxyXG4gICAgaWYgKG9sZEluZGV4ID09PSBzdGF0ZS5jdXJyZW50SW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2V0U3RlcEFuY2hvcih3aXphcmQsIG9sZEluZGV4KS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKVxyXG57XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcbiAgICB7XHJcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UuZm9ybWF0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBhbiBhcmd1bWVudCBmb3IgbnVsbCBvciB1bmRlZmluZWQgYW5kIHRocm93cyBhbiBlcnJvciBpZiBvbmUgY2hlY2sgYXBwbGllcy5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbWV0aG9kIHZhbGlkYXRlQXJndW1lbnRcclxuICogQHBhcmFtIGFyZ3VtZW50TmFtZSB7U3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZ2l2ZW4gYXJndW1lbnRcclxuICogQHBhcmFtIGFyZ3VtZW50VmFsdWUge09iamVjdH0gVGhlIGFyZ3VtZW50IGl0c2VsZlxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVBcmd1bWVudChhcmd1bWVudE5hbWUsIGFyZ3VtZW50VmFsdWUpXHJcbntcclxuICAgIGlmIChhcmd1bWVudFZhbHVlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3dFcnJvcihcIlRoZSBhcmd1bWVudCAnezB9JyBpcyBudWxsIG9yIHVuZGVmaW5lZC5cIiwgYXJndW1lbnROYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBqUXVlcnkgd2l6YXJkIHBsdWdpbi5cclxuICpcclxuICogQGNsYXNzIHN0ZXBzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0gW21ldGhvZD17fV0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCBhcyBgU3RyaW5nYCBvciBhbiBKU09OIG9iamVjdCBmb3IgaW5pdGlhbGl6YXRpb25cclxuICogQHBhcmFtIFtwYXJhbXM9XSoge0FycmF5fSBBZGRpdGlvbmFsIGFyZ3VtZW50cyBmb3IgYSBtZXRob2QgY2FsbFxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqKi9cclxuJC5mbi5zdGVwcyA9IGZ1bmN0aW9uIChtZXRob2QpXHJcbntcclxuICAgIGlmICgkLmZuLnN0ZXBzW21ldGhvZF0pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICQuZm4uc3RlcHNbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtZXRob2QgPT09IFwib2JqZWN0XCIgfHwgIW1ldGhvZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgICQuZXJyb3IoXCJNZXRob2QgXCIgKyBtZXRob2QgKyBcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc3RlcHNcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhIG5ldyBzdGVwLlxyXG4gKlxyXG4gKiBAbWV0aG9kIGFkZFxyXG4gKiBAcGFyYW0gc3RlcCB7T2JqZWN0fSBUaGUgc3RlcCBvYmplY3QgdG8gYWRkXHJcbiAqIEBjaGFpbmFibGVcclxuICoqL1xyXG4kLmZuLnN0ZXBzLmFkZCA9IGZ1bmN0aW9uIChzdGVwKVxyXG57XHJcbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSh0aGlzKTtcclxuICAgIHJldHVybiBpbnNlcnRTdGVwKHRoaXMsIGdldE9wdGlvbnModGhpcyksIHN0YXRlLCBzdGF0ZS5zdGVwQ291bnQsIHN0ZXApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRyb2wgZnVuY3Rpb25hbGl0eSBjb21wbGV0ZWx5IGFuZCB0cmFuc2Zvcm1zIHRoZSBjdXJyZW50IHN0YXRlIHRvIHRoZSBpbml0aWFsIEhUTUwgc3RydWN0dXJlLlxyXG4gKlxyXG4gKiBAbWV0aG9kIGRlc3Ryb3lcclxuICogQGNoYWluYWJsZVxyXG4gKiovXHJcbiQuZm4uc3RlcHMuZGVzdHJveSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHJldHVybiBkZXN0cm95KHRoaXMsIGdldE9wdGlvbnModGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXJzIHRoZSBvbkZpbmlzaGluZyBhbmQgb25GaW5pc2hlZCBldmVudC5cclxuICpcclxuICogQG1ldGhvZCBmaW5pc2hcclxuICoqL1xyXG4kLmZuLnN0ZXBzLmZpbmlzaCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZpbmlzaFN0ZXAodGhpcywgZ2V0U3RhdGUodGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGN1cnJlbnQgc3RlcCBpbmRleC5cclxuICpcclxuICogQG1ldGhvZCBnZXRDdXJyZW50SW5kZXhcclxuICogQHJldHVybiB7SW50ZWdlcn0gVGhlIGFjdHVhbCBzdGVwIGluZGV4ICh6ZXJvLWJhc2VkKVxyXG4gKiBAZm9yIHN0ZXBzXHJcbiAqKi9cclxuJC5mbi5zdGVwcy5nZXRDdXJyZW50SW5kZXggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICByZXR1cm4gZ2V0U3RhdGUodGhpcykuY3VycmVudEluZGV4O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGN1cnJlbnQgc3RlcCBvYmplY3QuXHJcbiAqXHJcbiAqIEBtZXRob2QgZ2V0Q3VycmVudFN0ZXBcclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgYWN0dWFsIHN0ZXAgb2JqZWN0XHJcbiAqKi9cclxuJC5mbi5zdGVwcy5nZXRDdXJyZW50U3RlcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHJldHVybiBnZXRTdGVwKHRoaXMsIGdldFN0YXRlKHRoaXMpLmN1cnJlbnRJbmRleCk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0cyBhIHNwZWNpZmljIHN0ZXAgb2JqZWN0IGJ5IGluZGV4LlxyXG4gKlxyXG4gKiBAbWV0aG9kIGdldFN0ZXBcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBBbiBpbnRlZ2VyIHRoYXQgYmVsb25ncyB0byB0aGUgcG9zaXRpb24gb2YgYSBzdGVwXHJcbiAqIEByZXR1cm4ge09iamVjdH0gQSBzcGVjaWZpYyBzdGVwIG9iamVjdFxyXG4gKiovXHJcbiQuZm4uc3RlcHMuZ2V0U3RlcCA9IGZ1bmN0aW9uIChpbmRleClcclxue1xyXG4gICAgcmV0dXJuIGdldFN0ZXAodGhpcywgaW5kZXgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluc2VydHMgYSBuZXcgc3RlcCB0byBhIHNwZWNpZmljIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAbWV0aG9kIGluc2VydFxyXG4gKiBAcGFyYW0gaW5kZXgge0ludGVnZXJ9IFRoZSBwb3NpdGlvbiAoemVyby1iYXNlZCkgdG8gYWRkXHJcbiAqIEBwYXJhbSBzdGVwIHtPYmplY3R9IFRoZSBzdGVwIG9iamVjdCB0byBhZGRcclxuICogQGV4YW1wbGVcclxuICogICAgICQoXCIjd2l6YXJkXCIpLnN0ZXBzKCkuaW5zZXJ0KDAsIHtcclxuICogICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxyXG4gKiAgICAgICAgIGNvbnRlbnQ6IFwiXCIsIC8vIG9wdGlvbmFsXHJcbiAqICAgICAgICAgY29udGVudE1vZGU6IFwiYXN5bmNcIiwgLy8gb3B0aW9uYWxcclxuICogICAgICAgICBjb250ZW50VXJsOiBcIi9Db250ZW50L1N0ZXAvMVwiIC8vIG9wdGlvbmFsXHJcbiAqICAgICB9KTtcclxuICogQGNoYWluYWJsZVxyXG4gKiovXHJcbiQuZm4uc3RlcHMuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCBzdGVwKVxyXG57XHJcbiAgICByZXR1cm4gaW5zZXJ0U3RlcCh0aGlzLCBnZXRPcHRpb25zKHRoaXMpLCBnZXRTdGF0ZSh0aGlzKSwgaW5kZXgsIHN0ZXApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJvdXRlcyB0byB0aGUgbmV4dCBzdGVwLlxyXG4gKlxyXG4gKiBAbWV0aG9kIG5leHRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFjdGlvbiBleGVjdXRlZFxyXG4gKiovXHJcbiQuZm4uc3RlcHMubmV4dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHJldHVybiBnb1RvTmV4dFN0ZXAodGhpcywgZ2V0T3B0aW9ucyh0aGlzKSwgZ2V0U3RhdGUodGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJvdXRlcyB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICpcclxuICogQG1ldGhvZCBwcmV2aW91c1xyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYWN0aW9uIGV4ZWN1dGVkXHJcbiAqKi9cclxuJC5mbi5zdGVwcy5wcmV2aW91cyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIHJldHVybiBnb1RvUHJldmlvdXNTdGVwKHRoaXMsIGdldE9wdGlvbnModGhpcyksIGdldFN0YXRlKHRoaXMpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGEgc3BlY2lmaWMgc3RlcCBieSBhbiBnaXZlbiBpbmRleC5cclxuICpcclxuICogQG1ldGhvZCByZW1vdmVcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBUaGUgcG9zaXRpb24gKHplcm8tYmFzZWQpIG9mIHRoZSBzdGVwIHRvIHJlbW92ZVxyXG4gKiBAcmV0dXJuIEluZGVjYXRlcyB3aGV0aGVyIHRoZSBpdGVtIGlzIHJlbW92ZWQuXHJcbiAqKi9cclxuJC5mbi5zdGVwcy5yZW1vdmUgPSBmdW5jdGlvbiAoaW5kZXgpXHJcbntcclxuICAgIHJldHVybiByZW1vdmVTdGVwKHRoaXMsIGdldE9wdGlvbnModGhpcyksIGdldFN0YXRlKHRoaXMpLCBpbmRleCk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyBhIHNwZWNpZmljIHN0ZXAgb2JqZWN0IGJ5IGluZGV4LlxyXG4gKlxyXG4gKiBAbWV0aG9kIHNldFN0ZXBcclxuICogQHBhcmFtIGluZGV4IHtJbnRlZ2VyfSBBbiBpbnRlZ2VyIHRoYXQgYmVsb25ncyB0byB0aGUgcG9zaXRpb24gb2YgYSBzdGVwXHJcbiAqIEBwYXJhbSBzdGVwIHtPYmplY3R9IFRoZSBzdGVwIG9iamVjdCB0byBjaGFuZ2VcclxuICoqL1xyXG4kLmZuLnN0ZXBzLnNldFN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgsIHN0ZXApXHJcbntcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCB5ZXQgaW1wbGVtZW50ZWQhXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNraXBzIGFuIGNlcnRhaW4gYW1vdW50IG9mIHN0ZXBzLlxyXG4gKlxyXG4gKiBAbWV0aG9kIHNraXBcclxuICogQHBhcmFtIGNvdW50IHtJbnRlZ2VyfSBUaGUgYW1vdW50IG9mIHN0ZXBzIHRoYXQgc2hvdWxkIGJlIHNraXBwZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFjdGlvbiBleGVjdXRlZFxyXG4gKiovXHJcbiQuZm4uc3RlcHMuc2tpcCA9IGZ1bmN0aW9uIChjb3VudClcclxue1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZCFcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZW51bSByZXByZXNlbnRzIHRoZSBkaWZmZXJlbnQgY29udGVudCB0eXBlcyBvZiBhIHN0ZXAgYW5kIHRoZWlyIGxvYWRpbmcgbWVjaGFuaXNtcy5cclxuICpcclxuICogQGNsYXNzIGNvbnRlbnRNb2RlXHJcbiAqIEBmb3Igc3RlcHNcclxuICoqL1xyXG52YXIgY29udGVudE1vZGUgPSAkLmZuLnN0ZXBzLmNvbnRlbnRNb2RlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIVE1MIGVtYmVkZGVkIGNvbnRlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEBwcm9wZXJ0eSBodG1sXHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZm9yIGNvbnRlbnRNb2RlXHJcbiAgICAgKiovXHJcbiAgICBodG1sOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSUZyYW1lIGVtYmVkZGVkIGNvbnRlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEBwcm9wZXJ0eSBpZnJhbWVcclxuICAgICAqIEB0eXBlIEludGVnZXJcclxuICAgICAqIEBmb3IgY29udGVudE1vZGVcclxuICAgICAqKi9cclxuICAgIGlmcmFtZTogMSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzeW5jIGVtYmVkZGVkIGNvbnRlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEBwcm9wZXJ0eSBhc3luY1xyXG4gICAgICogQHR5cGUgSW50ZWdlclxyXG4gICAgICogQGZvciBjb250ZW50TW9kZVxyXG4gICAgICoqL1xyXG4gICAgYXN5bmM6IDJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBlbnVtIHJlcHJlc2VudHMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBzdGVwcyBuYXZpZ2F0aW9uLlxyXG4gKlxyXG4gKiBAY2xhc3Mgc3RlcHNPcmllbnRhdGlvblxyXG4gKiBAZm9yIHN0ZXBzXHJcbiAqKi9cclxudmFyIHN0ZXBzT3JpZW50YXRpb24gPSAkLmZuLnN0ZXBzLnN0ZXBzT3JpZW50YXRpb24gPSB7XHJcbiAgICAvKipcclxuICAgICAqIEhvcml6b250YWwgb3JpZW50YXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZm9yIHN0ZXBzT3JpZW50YXRpb25cclxuICAgICAqKi9cclxuICAgIGhvcml6b250YWw6IDAsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0aWNhbCBvcmllbnRhdGlvblxyXG4gICAgICpcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHByb3BlcnR5IHZlcnRpY2FsXHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZm9yIHN0ZXBzT3JpZW50YXRpb25cclxuICAgICAqKi9cclxuICAgIHZlcnRpY2FsOiAxXHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZW51bSB0aGF0IHJlcHJlc2VudHMgdGhlIHZhcmlvdXMgdHJhbnNpdGlvbiBhbmltYXRpb25zLlxyXG4gKlxyXG4gKiBAY2xhc3MgdHJhbnNpdGlvbkVmZmVjdFxyXG4gKiBAZm9yIHN0ZXBzXHJcbiAqKi9cclxudmFyIHRyYW5zaXRpb25FZmZlY3QgPSAkLmZuLnN0ZXBzLnRyYW5zaXRpb25FZmZlY3QgPSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIHRyYW5zaXRpb24gYW5pbWF0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAcHJvcGVydHkgbm9uZVxyXG4gICAgICogQHR5cGUgSW50ZWdlclxyXG4gICAgICogQGZvciB0cmFuc2l0aW9uRWZmZWN0XHJcbiAgICAgKiovXHJcbiAgICBub25lOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFkZSBpbiB0cmFuc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAcHJvcGVydHkgZmFkZVxyXG4gICAgICogQHR5cGUgSW50ZWdlclxyXG4gICAgICogQGZvciB0cmFuc2l0aW9uRWZmZWN0XHJcbiAgICAgKiovXHJcbiAgICBmYWRlOiAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2xpZGUgdXAgdHJhbnNpdGlvblxyXG4gICAgICpcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHByb3BlcnR5IHNsaWRlXHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZm9yIHRyYW5zaXRpb25FZmZlY3RcclxuICAgICAqKi9cclxuICAgIHNsaWRlOiAyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2xpZGUgbGVmdCB0cmFuc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAcHJvcGVydHkgc2xpZGVMZWZ0XHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZm9yIHRyYW5zaXRpb25FZmZlY3RcclxuICAgICAqKi9cclxuICAgIHNsaWRlTGVmdDogM1xyXG59O1xyXG5cclxudmFyIHN0ZXBNb2RlbCA9ICQuZm4uc3RlcHMuc3RlcE1vZGVsID0ge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgY29udGVudFVybDogXCJcIixcclxuICAgIGNvbnRlbnRNb2RlOiBjb250ZW50TW9kZS5odG1sLFxyXG4gICAgY29udGVudExvYWRlZDogZmFsc2VcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkZWZhdWx0IHNldHRpbmdzLlxyXG4gKiBUaGVyZSBhcmUgdHdvIHBvc3NpYml0aWVzIHRvIG92ZXJyaWRlIHRoZSBzdWItcHJvcGVydGllcy5cclxuICogRWl0aGVyIGJ5IGRvaW5nIGl0IGdlbmVyYWxseSAoZ2xvYmFsKSBvciBvbiBpbml0aWFsaXphdGlvbi5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAY2xhc3MgZGVmYXVsdHNcclxuICogQGZvciBzdGVwc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiAgIC8vIEdsb2JhbCBhcHByb2FjaFxyXG4gKiAgICQuc3RlcHMuZGVmYXVsdHMuaGVhZGVyVGFnID0gXCJoM1wiO1xyXG4gKiBAZXhhbXBsZVxyXG4gKiAgIC8vIEluaXRpYWxpemF0aW9uIGFwcHJvYWNoXHJcbiAqICAgJChcIiN3aXphcmRcIikuc3RlcHMoeyBoZWFkZXJUYWc6IFwiaDNcIiB9KTtcclxuICoqL1xyXG52YXIgZGVmYXVsdHMgPSAkLmZuLnN0ZXBzLmRlZmF1bHRzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGVhZGVyIHRhZyBpcyB1c2VkIHRvIGZpbmQgdGhlIHN0ZXAgYnV0dG9uIHRleHQgd2l0aGluIHRoZSBkZWNsYXJlZCB3aXphcmQgYXJlYS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgaGVhZGVyVGFnXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqIEBkZWZhdWx0IFwiaDFcIlxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgaGVhZGVyVGFnOiBcImgxXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYm9keSB0YWcgaXMgdXNlZCB0byBmaW5kIHRoZSBzdGVwIGNvbnRlbnQgd2l0aGluIHRoZSBkZWNsYXJlZCB3aXphcmQgYXJlYS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgYm9keVRhZ1xyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKiBAZGVmYXVsdCBcImRpdlwiXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBib2R5VGFnOiBcImRpdlwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbnRlbnQgY29udGFpbmVyIHRhZyB3aGljaCB3aWxsIGJlIHVzZWQgdG8gd3JhcCBhbGwgc3RlcCBjb250ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgY29udGVudENvbnRhaW5lclRhZ1xyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKiBAZGVmYXVsdCBcImRpdlwiXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBjb250ZW50Q29udGFpbmVyVGFnOiBcImRpdlwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFjdGlvbiBjb250YWluZXIgdGFnIHdoaWNoIHdpbGwgYmUgdXNlZCB0byB3cmFwIHRoZSBwYWdpbmF0aW9uIG5hdmlnYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGFjdGlvbkNvbnRhaW5lclRhZ1xyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKiBAZGVmYXVsdCBcImRpdlwiXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBhY3Rpb25Db250YWluZXJUYWc6IFwiZGl2XCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RlcHMgY29udGFpbmVyIHRhZyB3aGljaCB3aWxsIGJlIHVzZWQgdG8gd3JhcCB0aGUgc3RlcHMgbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgc3RlcHNDb250YWluZXJUYWdcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICogQGRlZmF1bHQgXCJkaXZcIlxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgc3RlcHNDb250YWluZXJUYWc6IFwiZGl2XCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3NzIGNsYXNzIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIG91dGVyIGNvbXBvbmVudCB3cmFwcGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBjc3NDbGFzc1xyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKiBAZGVmYXVsdCBcIndpemFyZFwiXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogICAgIDxkaXYgY2xhc3M9XCJ3aXphcmRcIj5cclxuICAgICAqICAgICAgICAgLi4uXHJcbiAgICAgKiAgICAgPC9kaXY+XHJcbiAgICAgKiovXHJcbiAgICBjc3NDbGFzczogXCJ3aXphcmRcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjc3MgY2xhc3Mgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBmbG9hdGluZyBzY2VuYXJpb3MuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGNsZWFyRml4Q3NzQ2xhc3NcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICogQGRlZmF1bHQgXCJjbGVhcmZpeFwiXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBjbGVhckZpeENzc0NsYXNzOiBcImNsZWFyZml4XCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHN0ZXBzIGFyZSB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseSBvcmllbnRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgc3RlcHNPcmllbnRhdGlvblxyXG4gICAgICogQHR5cGUgc3RlcHNPcmllbnRhdGlvblxyXG4gICAgICogQGRlZmF1bHQgaG9yaXpvbnRhbFxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICogQHNpbmNlIDEuMC4wXHJcbiAgICAgKiovXHJcbiAgICBzdGVwc09yaWVudGF0aW9uOiBzdGVwc09yaWVudGF0aW9uLmhvcml6b250YWwsXHJcblxyXG4gICAgLypcclxuICAgICAqIFRlbXBwbGF0ZXNcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpdGxlIHRlbXBsYXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYSBzdGVwIGJ1dHRvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgdGl0bGVUZW1wbGF0ZVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKiBAZGVmYXVsdCBcIjxzcGFuIGNsYXNzPVxcXCJudW1iZXJcXFwiPiNpbmRleCMuPC9zcGFuPiAjdGl0bGUjXCJcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIHRpdGxlVGVtcGxhdGU6IFwiPHNwYW4gY2xhc3M9XFxcIm51bWJlclxcXCI+I2luZGV4Iy48L3NwYW4+ICN0aXRsZSNcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsb2FkaW5nIHRlbXBsYXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgdGhlIGxvYWRpbmcgYW5pbWF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBsb2FkaW5nVGVtcGxhdGVcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICogQGRlZmF1bHQgXCI8c3BhbiBjbGFzcz1cXFwic3Bpbm5lclxcXCI+PC9zcGFuPiAjdGV4dCNcIlxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgbG9hZGluZ1RlbXBsYXRlOiBcIjxzcGFuIGNsYXNzPVxcXCJzcGlubmVyXFxcIj48L3NwYW4+ICN0ZXh0I1wiLFxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBCZWhhdmlvdXJcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IHdpemFyZCBpbnN0YW5jZSBpbiBvcmRlciB0byBlbmFibGUgdGhlIGtleSBuYXZpZ2F0aW9uIGZyb20gdGhlIGJlZ2luaW5nIGlmIGB0cnVlYC4gXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGF1dG9Gb2N1c1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqIEBzaW5jZSAwLjkuNFxyXG4gICAgICoqL1xyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgYWxsIHN0ZXBzIGZyb20gdGhlIGJlZ2luaW5nIGlmIGB0cnVlYCAoYWxsIHN0ZXBzIGFyZSBjbGlja2FibGUpLlxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVBbGxTdGVwc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIGVuYWJsZUFsbFN0ZXBzOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMga2V5Ym9hcmQgbmF2aWdhdGlvbiBpZiBgdHJ1ZWAgKGFycm93IGxlZnQgYW5kIGFycm93IHJpZ2h0KS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgZW5hYmxlS2V5TmF2aWdhdGlvblxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgZW5hYmxlS2V5TmF2aWdhdGlvbjogdHJ1ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgcGFnaW5hdGlvbiBpZiBgdHJ1ZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGVuYWJsZVBhZ2luYXRpb25cclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIGVuYWJsZVBhZ2luYXRpb246IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwcmVzc2VzIHBhZ2luYXRpb24gaWYgYSBmb3JtIGZpZWxkIGlzIGZvY3VzZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IHN1cHByZXNzUGFnaW5hdGlvbk9uRm9jdXNcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIHN1cHByZXNzUGFnaW5hdGlvbk9uRm9jdXM6IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGNhY2hlIGZvciBhc3luYyBsb2FkZWQgb3IgaWZyYW1lIGVtYmVkZGVkIGNvbnRlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGVuYWJsZUNvbnRlbnRDYWNoZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgZW5hYmxlQ29udGVudENhY2hlOiB0cnVlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvd3MgdGhlIGNhbmNlbCBidXR0b24gaWYgZW5hYmxlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgZW5hYmxlQ2FuY2VsQnV0dG9uXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgZW5hYmxlQ2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIHRoZSBmaW5pc2ggYnV0dG9uIGlmIGVuYWJsZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGVuYWJsZUZpbmlzaEJ1dHRvblxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgZW5hYmxlRmluaXNoQnV0dG9uOiB0cnVlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90IHlldCBpbXBsZW1lbnRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgcHJlbG9hZENvbnRlbnRcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBwcmVsb2FkQ29udGVudDogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93cyB0aGUgZmluaXNoIGJ1dHRvbiBhbHdheXMgKG9uIGVhY2ggc3RlcDsgcmlnaHQgYmVzaWRlIHRoZSBuZXh0IGJ1dHRvbikgaWYgYHRydWVgLiBcclxuICAgICAqIE90aGVyd2lzZSB0aGUgbmV4dCBidXR0b24gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZmluaXNoIGJ1dHRvbiBpZiB0aGUgbGFzdCBzdGVwIGJlY29tZXMgYWN0aXZlLlxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBzaG93RmluaXNoQnV0dG9uQWx3YXlzXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgc2hvd0ZpbmlzaEJ1dHRvbkFsd2F5czogZmFsc2UsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyBqdW1waW5nIHRvIGEgcHJldmlvdXMgc3RlcC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgZm9yY2VNb3ZlRm9yd2FyZFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIGZvcmNlTW92ZUZvcndhcmQ6IGZhbHNlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgKHN0ZXAgcG9zaXRpb24pIHRvIGEgY29va2llLlxyXG4gICAgICogQnkgY29taW5nIG5leHQgdGltZSB0aGUgbGFzdCBhY3RpdmUgc3RlcCBiZWNvbWVzIGFjdGl2YXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgc2F2ZVN0YXRlXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgc2F2ZVN0YXRlOiBmYWxzZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwb3NpdGlvbiB0byBzdGFydCBvbiAoemVyby1iYXNlZCkuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IHN0YXJ0SW5kZXhcclxuICAgICAqIEB0eXBlIEludGVnZXJcclxuICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIHN0YXJ0SW5kZXg6IDAsXHJcblxyXG4gICAgLypcclxuICAgICAqIEFuaW1hdGlvbiBFZmZlY3QgQ29uZmlndXJhdGlvblxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYW5pbWF0aW9uIGVmZmVjdCB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIHN0ZXAgdHJhbnNpdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IHRyYW5zaXRpb25FZmZlY3RcclxuICAgICAqIEB0eXBlIHRyYW5zaXRpb25FZmZlY3RcclxuICAgICAqIEBkZWZhdWx0IG5vbmVcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIHRyYW5zaXRpb25FZmZlY3Q6IHRyYW5zaXRpb25FZmZlY3Qubm9uZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGlvbiBzcGVlZCBmb3Igc3RlcCB0cmFuc2l0aW9ucyAoaW4gbWlsbGlzZWNvbmRzKS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgdHJhbnNpdGlvbkVmZmVjdFNwZWVkXHJcbiAgICAgKiBAdHlwZSBJbnRlZ2VyXHJcbiAgICAgKiBAZGVmYXVsdCAyMDBcclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIHRyYW5zaXRpb25FZmZlY3RTcGVlZDogMjAwLFxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBFdmVudHNcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyZXMgYmVmb3JlIHRoZSBzdGVwIGNoYW5nZXMgYW5kIGNhbiBiZSB1c2VkIHRvIHByZXZlbnQgc3RlcCBjaGFuZ2luZyBieSByZXR1cm5pbmcgYGZhbHNlYC4gXHJcbiAgICAgKiBWZXJ5IHVzZWZ1bCBmb3IgZm9ybSB2YWxpZGF0aW9uLiBcclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgb25TdGVwQ2hhbmdpbmdcclxuICAgICAqIEB0eXBlIEV2ZW50XHJcbiAgICAgKiBAZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIG9uU3RlcENoYW5naW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHsgcmV0dXJuIHRydWU7IH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyBhZnRlciB0aGUgc3RlcCBoYXMgY2hhbmdlLiBcclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgb25TdGVwQ2hhbmdlZFxyXG4gICAgICogQHR5cGUgRXZlbnRcclxuICAgICAqIEBkZWZhdWx0IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4LCBwcmlvckluZGV4KSB7IH1cclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIG9uU3RlcENoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4LCBwcmlvckluZGV4KSB7IH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyBhZnRlciBjYW5jZWxhdGlvbi4gXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IG9uQ2FuY2VsZWRcclxuICAgICAqIEB0eXBlIEV2ZW50XHJcbiAgICAgKiBAZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQpIHsgfVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgb25DYW5jZWxlZDogZnVuY3Rpb24gKGV2ZW50KSB7IH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyBiZWZvcmUgZmluaXNoaW5nIGFuZCBjYW4gYmUgdXNlZCB0byBwcmV2ZW50IGNvbXBsZXRpb24gYnkgcmV0dXJuaW5nIGBmYWxzZWAuIFxyXG4gICAgICogVmVyeSB1c2VmdWwgZm9yIGZvcm0gdmFsaWRhdGlvbi4gXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IG9uRmluaXNoaW5nXHJcbiAgICAgKiBAdHlwZSBFdmVudFxyXG4gICAgICogQGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50SW5kZXgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAqKi9cclxuICAgIG9uRmluaXNoaW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCkgeyByZXR1cm4gdHJ1ZTsgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIGFmdGVyIGNvbXBsZXRpb24uIFxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBvbkZpbmlzaGVkXHJcbiAgICAgKiBAdHlwZSBFdmVudFxyXG4gICAgICogQGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50SW5kZXgpIHsgfVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50SW5kZXgpIHsgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIGFmdGVyIGFzeW5jIGNvbnRlbnQgaXMgbG9hZGVkLiBcclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkgb25Db250ZW50TG9hZGVkXHJcbiAgICAgKiBAdHlwZSBFdmVudFxyXG4gICAgICogQGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkgeyB9XHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBvbkNvbnRlbnRMb2FkZWQ6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4KSB7IH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSB3aXphcmQgaXMgaW5pdGlhbGl6ZWQuIFxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSBvbkluaXRcclxuICAgICAqIEB0eXBlIEV2ZW50XHJcbiAgICAgKiBAZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQpIHsgfVxyXG4gICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICoqL1xyXG4gICAgb25Jbml0OiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCkgeyB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgYWxsIGxhYmVscy4gXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IGxhYmVsc1xyXG4gICAgICogQHR5cGUgT2JqZWN0XHJcbiAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgKiovXHJcbiAgICBsYWJlbHM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMYWJlbCBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJvcGVydHkgY2FuY2VsXHJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJDYW5jZWxcIlxyXG4gICAgICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgY2FuY2VsOiBcIkNhbmNlbFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGxhYmVsIGlzIGltcG9ydGFudCBmb3IgYWNjZXNzYWJpbGl0eSByZWFzb25zLlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGljaCBzdGVwIGlzIGFjdGl2YXRlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSBjdXJyZW50XHJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJjdXJyZW50IHN0ZXA6XCJcclxuICAgICAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgICAgICoqL1xyXG4gICAgICAgIGN1cnJlbnQ6IFwiY3VycmVudCBzdGVwOlwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGxhYmVsIGlzIGltcG9ydGFudCBmb3IgYWNjZXNzYWJpbGl0eSByZWFzb25zIGFuZCBkZXNjcmliZXMgdGhlIGtpbmQgb2YgbmF2aWdhdGlvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSBwYWdpbmF0aW9uXHJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJQYWdpbmF0aW9uXCJcclxuICAgICAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgICAgICogQHNpbmNlIDAuOS43XHJcbiAgICAgICAgICoqL1xyXG4gICAgICAgIHBhZ2luYXRpb246IFwiUGFnaW5hdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMYWJlbCBmb3IgdGhlIGZpbmlzaCBidXR0b24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJvcGVydHkgZmluaXNoXHJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJGaW5pc2hcIlxyXG4gICAgICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgZmluaXNoOiBcIkZpbmlzaFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMYWJlbCBmb3IgdGhlIG5leHQgYnV0dG9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByb3BlcnR5IG5leHRcclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAgICAgKiBAZGVmYXVsdCBcIk5leHRcIlxyXG4gICAgICAgICAqIEBmb3IgZGVmYXVsdHNcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgbmV4dDogXCJOZXh0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExhYmVsIGZvciB0aGUgcHJldmlvdXMgYnV0dG9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByb3BlcnR5IHByZXZpb3VzXHJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJQcmV2aW91c1wiXHJcbiAgICAgICAgICogQGZvciBkZWZhdWx0c1xyXG4gICAgICAgICAqKi9cclxuICAgICAgICBwcmV2aW91czogXCJQcmV2aW91c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMYWJlbCBmb3IgdGhlIGxvYWRpbmcgYW5pbWF0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByb3BlcnR5IGxvYWRpbmdcclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAgICAgKiBAZGVmYXVsdCBcIkxvYWRpbmcgLi4uXCJcclxuICAgICAgICAgKiBAZm9yIGRlZmF1bHRzXHJcbiAgICAgICAgICoqL1xyXG4gICAgICAgIGxvYWRpbmc6IFwiTG9hZGluZyAuLi5cIlxyXG4gICAgfVxyXG59O1xyXG59KShqUXVlcnkpOyIsIiQoXCIjZXhhbXBsZS1iYXNpY1wiKS5zdGVwcyh7XHJcbiAgICBoZWFkZXJUYWc6IFwiaDNcIixcclxuICAgIGJvZHlUYWc6IFwic2VjdGlvblwiLFxyXG4gICAgdHJhbnNpdGlvbkVmZmVjdDogXCJzbGlkZUxlZnRcIixcclxuICAgIGF1dG9Gb2N1czogdHJ1ZVxyXG59KTsiLCIvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxKXtcclxuLy8gICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbCcpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZXtcclxuLy8gICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyLXNjcm9sbCcpO1xyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbi8vICQoZnVuY3Rpb24oKXtcclxuLy8gICAgICQoJy52ZXJ0aWNhbC1uYXYtYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuLy9cclxuLy8gICAgICAgICAkKCcudmVydGljYWwtbmF2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vL1xyXG4vLyAgICAgICAgICQoJy52ZXJ0aWNhbC1uYXYtb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICB9KVxyXG4vL1xyXG4vLyAgICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcbi8vICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy52ZXJ0aWNhbC1uYXYtYnRuJyk7XHJcbi8vXHJcbi8vICAgICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XHJcbi8vICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgICAgICQoJy52ZXJ0aWNhbC1uYXYtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICAgICAgJCgnLnZlcnRpY2FsLW5hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2Zvb3RlcicpLmZvb3RlclJldmVhbCgpO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdi1vdmVybGF5X19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubmF2LW92ZXJsYXknKS5jc3MoJ2hlaWdodCcsICcwJScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm5hdi1vdmVybGF5X19vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXYtb3ZlcmxheScpLmNzcygnaGVpZ2h0JywgJzEwMCUnKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbiAgICAkKCcjbW9kYWwtbG9naW4nKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCgnI21vZGFsLWxvZ2luJykuYWRkQ2xhc3MoJ3dvdyB6b29tSW5Eb3duJyk7XHJcbiAgICB9KTtcclxuICAgICQoJyNtb2RhbC1sb2dpbicpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoJyNtb2RhbC1sb2dpbicpLnJlbW92ZUNsYXNzKCd3b3cgem9vbUluRG93bicpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcjanMtYnV0dG9uLXJlZ2lzdHJhdGlvbjEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnI2pzLWJ1dHRvbi1yZWdpc3RyYXRpb24yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxufSk7Il19
