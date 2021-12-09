// Compiled by ClojureScript 1.10.773 {}
goog.provide('calculator.core');
goog.require('cljs.core');
goog.require('react');
goog.require('react_dom');
goog.require('reagent.dom');
goog.require('calculator.calculator');
calculator.core.global$module$react = goog.global["React"];
calculator.core.global$module$react_dom = goog.global["ReactDOM"];
calculator.core.app = (function calculator$core$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.calculator.calculator_container], null);
});
calculator.core.render_app = (function calculator$core$render_app(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.core.app], null),document.getElementById("app"));
});
calculator.core.render_app.call(null);

//# sourceMappingURL=core.js.map
