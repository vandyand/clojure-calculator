// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13359){
var map__13360 = p__13359;
var map__13360__$1 = (((((!((map__13360 == null))))?(((((map__13360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13360):map__13360);
var m = map__13360__$1;
var n = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13362_13394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13363_13395 = null;
var count__13364_13396 = (0);
var i__13365_13397 = (0);
while(true){
if((i__13365_13397 < count__13364_13396)){
var f_13398 = cljs.core._nth.call(null,chunk__13363_13395,i__13365_13397);
cljs.core.println.call(null,"  ",f_13398);


var G__13399 = seq__13362_13394;
var G__13400 = chunk__13363_13395;
var G__13401 = count__13364_13396;
var G__13402 = (i__13365_13397 + (1));
seq__13362_13394 = G__13399;
chunk__13363_13395 = G__13400;
count__13364_13396 = G__13401;
i__13365_13397 = G__13402;
continue;
} else {
var temp__5735__auto___13403 = cljs.core.seq.call(null,seq__13362_13394);
if(temp__5735__auto___13403){
var seq__13362_13404__$1 = temp__5735__auto___13403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13362_13404__$1)){
var c__4556__auto___13405 = cljs.core.chunk_first.call(null,seq__13362_13404__$1);
var G__13406 = cljs.core.chunk_rest.call(null,seq__13362_13404__$1);
var G__13407 = c__4556__auto___13405;
var G__13408 = cljs.core.count.call(null,c__4556__auto___13405);
var G__13409 = (0);
seq__13362_13394 = G__13406;
chunk__13363_13395 = G__13407;
count__13364_13396 = G__13408;
i__13365_13397 = G__13409;
continue;
} else {
var f_13410 = cljs.core.first.call(null,seq__13362_13404__$1);
cljs.core.println.call(null,"  ",f_13410);


var G__13411 = cljs.core.next.call(null,seq__13362_13404__$1);
var G__13412 = null;
var G__13413 = (0);
var G__13414 = (0);
seq__13362_13394 = G__13411;
chunk__13363_13395 = G__13412;
count__13364_13396 = G__13413;
i__13365_13397 = G__13414;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13415 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13415);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13415)))?cljs.core.second.call(null,arglists_13415):arglists_13415));
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
var seq__13366_13416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13367_13417 = null;
var count__13368_13418 = (0);
var i__13369_13419 = (0);
while(true){
if((i__13369_13419 < count__13368_13418)){
var vec__13380_13420 = cljs.core._nth.call(null,chunk__13367_13417,i__13369_13419);
var name_13421 = cljs.core.nth.call(null,vec__13380_13420,(0),null);
var map__13383_13422 = cljs.core.nth.call(null,vec__13380_13420,(1),null);
var map__13383_13423__$1 = (((((!((map__13383_13422 == null))))?(((((map__13383_13422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13383_13422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13383_13422):map__13383_13422);
var doc_13424 = cljs.core.get.call(null,map__13383_13423__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13425 = cljs.core.get.call(null,map__13383_13423__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13421);

cljs.core.println.call(null," ",arglists_13425);

if(cljs.core.truth_(doc_13424)){
cljs.core.println.call(null," ",doc_13424);
} else {
}


var G__13426 = seq__13366_13416;
var G__13427 = chunk__13367_13417;
var G__13428 = count__13368_13418;
var G__13429 = (i__13369_13419 + (1));
seq__13366_13416 = G__13426;
chunk__13367_13417 = G__13427;
count__13368_13418 = G__13428;
i__13369_13419 = G__13429;
continue;
} else {
var temp__5735__auto___13430 = cljs.core.seq.call(null,seq__13366_13416);
if(temp__5735__auto___13430){
var seq__13366_13431__$1 = temp__5735__auto___13430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13366_13431__$1)){
var c__4556__auto___13432 = cljs.core.chunk_first.call(null,seq__13366_13431__$1);
var G__13433 = cljs.core.chunk_rest.call(null,seq__13366_13431__$1);
var G__13434 = c__4556__auto___13432;
var G__13435 = cljs.core.count.call(null,c__4556__auto___13432);
var G__13436 = (0);
seq__13366_13416 = G__13433;
chunk__13367_13417 = G__13434;
count__13368_13418 = G__13435;
i__13369_13419 = G__13436;
continue;
} else {
var vec__13385_13437 = cljs.core.first.call(null,seq__13366_13431__$1);
var name_13438 = cljs.core.nth.call(null,vec__13385_13437,(0),null);
var map__13388_13439 = cljs.core.nth.call(null,vec__13385_13437,(1),null);
var map__13388_13440__$1 = (((((!((map__13388_13439 == null))))?(((((map__13388_13439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13388_13439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13388_13439):map__13388_13439);
var doc_13441 = cljs.core.get.call(null,map__13388_13440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13442 = cljs.core.get.call(null,map__13388_13440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13438);

cljs.core.println.call(null," ",arglists_13442);

if(cljs.core.truth_(doc_13441)){
cljs.core.println.call(null," ",doc_13441);
} else {
}


var G__13443 = cljs.core.next.call(null,seq__13366_13431__$1);
var G__13444 = null;
var G__13445 = (0);
var G__13446 = (0);
seq__13366_13416 = G__13443;
chunk__13367_13417 = G__13444;
count__13368_13418 = G__13445;
i__13369_13419 = G__13446;
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

var seq__13390 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13391 = null;
var count__13392 = (0);
var i__13393 = (0);
while(true){
if((i__13393 < count__13392)){
var role = cljs.core._nth.call(null,chunk__13391,i__13393);
var temp__5735__auto___13447__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13447__$1)){
var spec_13448 = temp__5735__auto___13447__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13448));
} else {
}


var G__13449 = seq__13390;
var G__13450 = chunk__13391;
var G__13451 = count__13392;
var G__13452 = (i__13393 + (1));
seq__13390 = G__13449;
chunk__13391 = G__13450;
count__13392 = G__13451;
i__13393 = G__13452;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__13390);
if(temp__5735__auto____$1){
var seq__13390__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13390__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__13390__$1);
var G__13453 = cljs.core.chunk_rest.call(null,seq__13390__$1);
var G__13454 = c__4556__auto__;
var G__13455 = cljs.core.count.call(null,c__4556__auto__);
var G__13456 = (0);
seq__13390 = G__13453;
chunk__13391 = G__13454;
count__13392 = G__13455;
i__13393 = G__13456;
continue;
} else {
var role = cljs.core.first.call(null,seq__13390__$1);
var temp__5735__auto___13457__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13457__$2)){
var spec_13458 = temp__5735__auto___13457__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13458));
} else {
}


var G__13459 = cljs.core.next.call(null,seq__13390__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__13390 = G__13459;
chunk__13391 = G__13460;
count__13392 = G__13461;
i__13393 = G__13462;
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
var G__13463 = cljs.core.conj.call(null,via,t);
var G__13464 = cljs.core.ex_cause.call(null,t);
via = G__13463;
t = G__13464;
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
var map__13467 = datafied_throwable;
var map__13467__$1 = (((((!((map__13467 == null))))?(((((map__13467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13467):map__13467);
var via = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13468 = cljs.core.last.call(null,via);
var map__13468__$1 = (((((!((map__13468 == null))))?(((((map__13468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468):map__13468);
var type = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13469 = data;
var map__13469__$1 = (((((!((map__13469 == null))))?(((((map__13469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13469):map__13469);
var problems = cljs.core.get.call(null,map__13469__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13469__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13469__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13470 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13470__$1 = (((((!((map__13470 == null))))?(((((map__13470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13470):map__13470);
var top_data = map__13470__$1;
var source = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13475 = phase;
var G__13475__$1 = (((G__13475 instanceof cljs.core.Keyword))?G__13475.fqn:null);
switch (G__13475__$1) {
case "read-source":
var map__13476 = data;
var map__13476__$1 = (((((!((map__13476 == null))))?(((((map__13476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13476):map__13476);
var line = cljs.core.get.call(null,map__13476__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13476__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13478 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13478__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13478,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13478);
var G__13478__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13478__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13478__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13478__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13478__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13479 = top_data;
var G__13479__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13479,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13479);
var G__13479__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13479__$1);
var G__13479__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13479__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13479__$2);
var G__13479__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13479__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13479__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13479__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13479__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13480 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13480,(0),null);
var method = cljs.core.nth.call(null,vec__13480,(1),null);
var file = cljs.core.nth.call(null,vec__13480,(2),null);
var line = cljs.core.nth.call(null,vec__13480,(3),null);
var G__13483 = top_data;
var G__13483__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13483);
var G__13483__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13483__$1);
var G__13483__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__13483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13483__$2);
var G__13483__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13483__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13483__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13483__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13483__$4;
}

break;
case "execution":
var vec__13484 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13484,(0),null);
var method = cljs.core.nth.call(null,vec__13484,(1),null);
var file = cljs.core.nth.call(null,vec__13484,(2),null);
var line = cljs.core.nth.call(null,vec__13484,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13466_SHARP_){
var or__4126__auto__ = (p1__13466_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13466_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__13487 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13487__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13487,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13487);
var G__13487__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13487__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13487__$1);
var G__13487__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__13487__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13487__$2);
var G__13487__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13487__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13487__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13487__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13487__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13475__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13491){
var map__13492 = p__13491;
var map__13492__$1 = (((((!((map__13492 == null))))?(((((map__13492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13492):map__13492);
var triage_data = map__13492__$1;
var phase = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__13494 = phase;
var G__13494__$1 = (((G__13494 instanceof cljs.core.Keyword))?G__13494.fqn:null);
switch (G__13494__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13495_13504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13496_13505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13497_13506 = true;
var _STAR_print_fn_STAR__temp_val__13498_13507 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13497_13506);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13498_13507);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13489_SHARP_){
return cljs.core.dissoc.call(null,p1__13489_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13496_13505);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13495_13504);
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
var _STAR_print_newline_STAR__orig_val__13499_13508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13500_13509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13501_13510 = true;
var _STAR_print_fn_STAR__temp_val__13502_13511 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13501_13510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13502_13511);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13490_SHARP_){
return cljs.core.dissoc.call(null,p1__13490_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13500_13509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13499_13508);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13494__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
