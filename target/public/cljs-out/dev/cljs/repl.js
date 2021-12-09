// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18255){
var map__18256 = p__18255;
var map__18256__$1 = (((((!((map__18256 == null))))?(((((map__18256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18256):map__18256);
var m = map__18256__$1;
var n = cljs.core.get.call(null,map__18256__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18258_18290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18259_18291 = null;
var count__18260_18292 = (0);
var i__18261_18293 = (0);
while(true){
if((i__18261_18293 < count__18260_18292)){
var f_18294 = cljs.core._nth.call(null,chunk__18259_18291,i__18261_18293);
cljs.core.println.call(null,"  ",f_18294);


var G__18295 = seq__18258_18290;
var G__18296 = chunk__18259_18291;
var G__18297 = count__18260_18292;
var G__18298 = (i__18261_18293 + (1));
seq__18258_18290 = G__18295;
chunk__18259_18291 = G__18296;
count__18260_18292 = G__18297;
i__18261_18293 = G__18298;
continue;
} else {
var temp__5735__auto___18299 = cljs.core.seq.call(null,seq__18258_18290);
if(temp__5735__auto___18299){
var seq__18258_18300__$1 = temp__5735__auto___18299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18258_18300__$1)){
var c__4556__auto___18301 = cljs.core.chunk_first.call(null,seq__18258_18300__$1);
var G__18302 = cljs.core.chunk_rest.call(null,seq__18258_18300__$1);
var G__18303 = c__4556__auto___18301;
var G__18304 = cljs.core.count.call(null,c__4556__auto___18301);
var G__18305 = (0);
seq__18258_18290 = G__18302;
chunk__18259_18291 = G__18303;
count__18260_18292 = G__18304;
i__18261_18293 = G__18305;
continue;
} else {
var f_18306 = cljs.core.first.call(null,seq__18258_18300__$1);
cljs.core.println.call(null,"  ",f_18306);


var G__18307 = cljs.core.next.call(null,seq__18258_18300__$1);
var G__18308 = null;
var G__18309 = (0);
var G__18310 = (0);
seq__18258_18290 = G__18307;
chunk__18259_18291 = G__18308;
count__18260_18292 = G__18309;
i__18261_18293 = G__18310;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18311 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18311);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18311)))?cljs.core.second.call(null,arglists_18311):arglists_18311));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18262_18312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18263_18313 = null;
var count__18264_18314 = (0);
var i__18265_18315 = (0);
while(true){
if((i__18265_18315 < count__18264_18314)){
var vec__18276_18316 = cljs.core._nth.call(null,chunk__18263_18313,i__18265_18315);
var name_18317 = cljs.core.nth.call(null,vec__18276_18316,(0),null);
var map__18279_18318 = cljs.core.nth.call(null,vec__18276_18316,(1),null);
var map__18279_18319__$1 = (((((!((map__18279_18318 == null))))?(((((map__18279_18318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18279_18318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18279_18318):map__18279_18318);
var doc_18320 = cljs.core.get.call(null,map__18279_18319__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18321 = cljs.core.get.call(null,map__18279_18319__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18317);

cljs.core.println.call(null," ",arglists_18321);

if(cljs.core.truth_(doc_18320)){
cljs.core.println.call(null," ",doc_18320);
} else {
}


var G__18322 = seq__18262_18312;
var G__18323 = chunk__18263_18313;
var G__18324 = count__18264_18314;
var G__18325 = (i__18265_18315 + (1));
seq__18262_18312 = G__18322;
chunk__18263_18313 = G__18323;
count__18264_18314 = G__18324;
i__18265_18315 = G__18325;
continue;
} else {
var temp__5735__auto___18326 = cljs.core.seq.call(null,seq__18262_18312);
if(temp__5735__auto___18326){
var seq__18262_18327__$1 = temp__5735__auto___18326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18262_18327__$1)){
var c__4556__auto___18328 = cljs.core.chunk_first.call(null,seq__18262_18327__$1);
var G__18329 = cljs.core.chunk_rest.call(null,seq__18262_18327__$1);
var G__18330 = c__4556__auto___18328;
var G__18331 = cljs.core.count.call(null,c__4556__auto___18328);
var G__18332 = (0);
seq__18262_18312 = G__18329;
chunk__18263_18313 = G__18330;
count__18264_18314 = G__18331;
i__18265_18315 = G__18332;
continue;
} else {
var vec__18281_18333 = cljs.core.first.call(null,seq__18262_18327__$1);
var name_18334 = cljs.core.nth.call(null,vec__18281_18333,(0),null);
var map__18284_18335 = cljs.core.nth.call(null,vec__18281_18333,(1),null);
var map__18284_18336__$1 = (((((!((map__18284_18335 == null))))?(((((map__18284_18335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18284_18335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18284_18335):map__18284_18335);
var doc_18337 = cljs.core.get.call(null,map__18284_18336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18338 = cljs.core.get.call(null,map__18284_18336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18334);

cljs.core.println.call(null," ",arglists_18338);

if(cljs.core.truth_(doc_18337)){
cljs.core.println.call(null," ",doc_18337);
} else {
}


var G__18339 = cljs.core.next.call(null,seq__18262_18327__$1);
var G__18340 = null;
var G__18341 = (0);
var G__18342 = (0);
seq__18262_18312 = G__18339;
chunk__18263_18313 = G__18340;
count__18264_18314 = G__18341;
i__18265_18315 = G__18342;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__18286 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18287 = null;
var count__18288 = (0);
var i__18289 = (0);
while(true){
if((i__18289 < count__18288)){
var role = cljs.core._nth.call(null,chunk__18287,i__18289);
var temp__5735__auto___18343__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18343__$1)){
var spec_18344 = temp__5735__auto___18343__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18344));
} else {
}


var G__18345 = seq__18286;
var G__18346 = chunk__18287;
var G__18347 = count__18288;
var G__18348 = (i__18289 + (1));
seq__18286 = G__18345;
chunk__18287 = G__18346;
count__18288 = G__18347;
i__18289 = G__18348;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18286);
if(temp__5735__auto____$1){
var seq__18286__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18286__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18286__$1);
var G__18349 = cljs.core.chunk_rest.call(null,seq__18286__$1);
var G__18350 = c__4556__auto__;
var G__18351 = cljs.core.count.call(null,c__4556__auto__);
var G__18352 = (0);
seq__18286 = G__18349;
chunk__18287 = G__18350;
count__18288 = G__18351;
i__18289 = G__18352;
continue;
} else {
var role = cljs.core.first.call(null,seq__18286__$1);
var temp__5735__auto___18353__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18353__$2)){
var spec_18354 = temp__5735__auto___18353__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18354));
} else {
}


var G__18355 = cljs.core.next.call(null,seq__18286__$1);
var G__18356 = null;
var G__18357 = (0);
var G__18358 = (0);
seq__18286 = G__18355;
chunk__18287 = G__18356;
count__18288 = G__18357;
i__18289 = G__18358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18359 = cljs.core.conj.call(null,via,t);
var G__18360 = cljs.core.ex_cause.call(null,t);
via = G__18359;
t = G__18360;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18363 = datafied_throwable;
var map__18363__$1 = (((((!((map__18363 == null))))?(((((map__18363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18363):map__18363);
var via = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18364 = cljs.core.last.call(null,via);
var map__18364__$1 = (((((!((map__18364 == null))))?(((((map__18364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18364):map__18364);
var type = cljs.core.get.call(null,map__18364__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18364__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18364__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18365 = data;
var map__18365__$1 = (((((!((map__18365 == null))))?(((((map__18365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18365):map__18365);
var problems = cljs.core.get.call(null,map__18365__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18365__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18365__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18366 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18366__$1 = (((((!((map__18366 == null))))?(((((map__18366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18366):map__18366);
var top_data = map__18366__$1;
var source = cljs.core.get.call(null,map__18366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18371 = phase;
var G__18371__$1 = (((G__18371 instanceof cljs.core.Keyword))?G__18371.fqn:null);
switch (G__18371__$1) {
case "read-source":
var map__18372 = data;
var map__18372__$1 = (((((!((map__18372 == null))))?(((((map__18372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18372):map__18372);
var line = cljs.core.get.call(null,map__18372__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18372__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18374 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18374__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18374,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18374);
var G__18374__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18374__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18374__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18374__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18375 = top_data;
var G__18375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18375);
var G__18375__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18375__$1);
var G__18375__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18375__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18375__$2);
var G__18375__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18375__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18375__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18375__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18375__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18376 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18376,(0),null);
var method = cljs.core.nth.call(null,vec__18376,(1),null);
var file = cljs.core.nth.call(null,vec__18376,(2),null);
var line = cljs.core.nth.call(null,vec__18376,(3),null);
var G__18379 = top_data;
var G__18379__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18379,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18379);
var G__18379__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18379__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18379__$1);
var G__18379__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__18379__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18379__$2);
var G__18379__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18379__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18379__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18379__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18379__$4;
}

break;
case "execution":
var vec__18380 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18380,(0),null);
var method = cljs.core.nth.call(null,vec__18380,(1),null);
var file = cljs.core.nth.call(null,vec__18380,(2),null);
var line = cljs.core.nth.call(null,vec__18380,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18362_SHARP_){
var or__4126__auto__ = (p1__18362_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18362_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__18383 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18383__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18383,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18383);
var G__18383__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18383__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18383__$1);
var G__18383__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18383__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18383__$2);
var G__18383__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18383__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18383__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18383__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18383__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18371__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18387){
var map__18388 = p__18387;
var map__18388__$1 = (((((!((map__18388 == null))))?(((((map__18388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18388):map__18388);
var triage_data = map__18388__$1;
var phase = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18388__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18390 = phase;
var G__18390__$1 = (((G__18390 instanceof cljs.core.Keyword))?G__18390.fqn:null);
switch (G__18390__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18391_18400 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18392_18401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18393_18402 = true;
var _STAR_print_fn_STAR__temp_val__18394_18403 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18393_18402);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18394_18403);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18385_SHARP_){
return cljs.core.dissoc.call(null,p1__18385_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18392_18401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18391_18400);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18395_18404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18396_18405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18397_18406 = true;
var _STAR_print_fn_STAR__temp_val__18398_18407 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18397_18406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18398_18407);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18386_SHARP_){
return cljs.core.dissoc.call(null,p1__18386_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18396_18405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18395_18404);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18390__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
