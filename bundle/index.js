!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("highcharts")):"function"==typeof define&&define.amd?define(["react","highcharts"],r):"object"==typeof exports?exports.index=r(require("react"),require("highcharts")):t.index=r(t.React,t.Highcharts)}(this,function(t,r){return function(t){function r(o){if(e[o])return e[o].exports;var n=e[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){t.exports=e(3)},function(r,e){r.exports=t},function(t,r,e){(function(r){"use strict";var o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},n=e(1),i="undefined"==typeof r?window:r;t.exports=function(r,e){var c="Highcharts"+r,s=n.createClass({displayName:c,propTypes:{config:n.PropTypes.object.isRequired,isPureConfig:n.PropTypes.bool,neverReflow:n.PropTypes.bool,callback:n.PropTypes.func,domProps:n.PropTypes.object},defaultProps:{callback:function(){},domProps:{}},renderChart:function(t){var n=this;if(!t)throw new Error("Config must be specified for the "+c+" component");var s=t.chart;this.chart=new e[r](o({},t,{chart:o({},s,{renderTo:this.refs.chart})}),this.props.callback),this.props.neverReflow||i&&i.requestAnimationFrame&&requestAnimationFrame(function(){n.chart&&n.chart.options&&n.chart.reflow()})},shouldComponentUpdate:function(t){return!!(t.neverReflow||t.isPureConfig&&this.props.config===t.config)||(this.renderChart(t.config),!1)},getChart:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart},componentDidMount:function(){this.renderChart(this.props.config)},componentWillUnmount:function(){this.chart.destroy()},render:function(){return n.createElement("div",o({ref:"chart"},this.props.domProps))}});return s.Highcharts=e,s.withHighcharts=function(e){return t.exports(r,e)},s}}).call(r,function(){return this}())},function(t,r,e){"use strict";t.exports=e(2)("Chart",e(4))},function(t,e){t.exports=r}])});