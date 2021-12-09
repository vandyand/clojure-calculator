// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13718__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13719__i = 0, G__13719__a = new Array(arguments.length -  0);
while (G__13719__i < G__13719__a.length) {G__13719__a[G__13719__i] = arguments[G__13719__i + 0]; ++G__13719__i;}
  args = new cljs.core.IndexedSeq(G__13719__a,0,null);
} 
return G__13718__delegate.call(this,args);};
G__13718.cljs$lang$maxFixedArity = 0;
G__13718.cljs$lang$applyTo = (function (arglist__13720){
var args = cljs.core.seq(arglist__13720);
return G__13718__delegate(args);
});
G__13718.cljs$core$IFn$_invoke$arity$variadic = G__13718__delegate;
return G__13718;
})()
);

(o.error = (function() { 
var G__13721__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13722__i = 0, G__13722__a = new Array(arguments.length -  0);
while (G__13722__i < G__13722__a.length) {G__13722__a[G__13722__i] = arguments[G__13722__i + 0]; ++G__13722__i;}
  args = new cljs.core.IndexedSeq(G__13722__a,0,null);
} 
return G__13721__delegate.call(this,args);};
G__13721.cljs$lang$maxFixedArity = 0;
G__13721.cljs$lang$applyTo = (function (arglist__13723){
var args = cljs.core.seq(arglist__13723);
return G__13721__delegate(args);
});
G__13721.cljs$core$IFn$_invoke$arity$variadic = G__13721__delegate;
return G__13721;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
