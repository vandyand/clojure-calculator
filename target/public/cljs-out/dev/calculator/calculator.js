// Compiled by ClojureScript 1.10.773 {}
goog.provide('calculator.calculator');
goog.require('cljs.core');
calculator.calculator.button_rows = cljs.core.list(cljs.core.list("C","%","^","/"),cljs.core.list("7","8","9","x"),cljs.core.list("4","5","6","-"),cljs.core.list("1","2","3","+"),cljs.core.list("+/-","0",".","="));
calculator.calculator.handle_click = (function calculator$calculator$handle_click(e){
return console.log(e.target.innerText);
});
calculator.calculator.button = (function calculator$calculator$button(body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return calculator.calculator.handle_click.call(null,e);
})], null),body], null);
});
calculator.calculator.row = (function calculator$calculator$row(buttons_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator-row"], null),(function (){var iter__4529__auto__ = (function calculator$calculator$row_$_iter__16100(s__16101){
return (new cljs.core.LazySeq(null,(function (){
var s__16101__$1 = s__16101;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16101__$1);
if(temp__5735__auto__){
var s__16101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16101__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16101__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16103 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16102 = (0);
while(true){
if((i__16102 < size__4528__auto__)){
var button_text = cljs.core._nth.call(null,c__4527__auto__,i__16102);
cljs.core.chunk_append.call(null,b__16103,calculator.calculator.button.call(null,button_text));

var G__16104 = (i__16102 + (1));
i__16102 = G__16104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16103),calculator$calculator$row_$_iter__16100.call(null,cljs.core.chunk_rest.call(null,s__16101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16103),null);
}
} else {
var button_text = cljs.core.first.call(null,s__16101__$2);
return cljs.core.cons.call(null,calculator.calculator.button.call(null,button_text),calculator$calculator$row_$_iter__16100.call(null,cljs.core.rest.call(null,s__16101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,buttons_text);
})()], null);
});
calculator.calculator.display_bar = (function calculator$calculator$display_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator-display-bar"], null)], null);
});
calculator.calculator.calculator = (function calculator$calculator$calculator(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator-base"], null),cljs.core.cons.call(null,calculator.calculator.display_bar.call(null),(function (){var iter__4529__auto__ = (function calculator$calculator$calculator_$_iter__16105(s__16106){
return (new cljs.core.LazySeq(null,(function (){
var s__16106__$1 = s__16106;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16106__$1);
if(temp__5735__auto__){
var s__16106__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16106__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16106__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16108 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16107 = (0);
while(true){
if((i__16107 < size__4528__auto__)){
var button_row = cljs.core._nth.call(null,c__4527__auto__,i__16107);
cljs.core.chunk_append.call(null,b__16108,calculator.calculator.row.call(null,button_row));

var G__16109 = (i__16107 + (1));
i__16107 = G__16109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16108),calculator$calculator$calculator_$_iter__16105.call(null,cljs.core.chunk_rest.call(null,s__16106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16108),null);
}
} else {
var button_row = cljs.core.first.call(null,s__16106__$2);
return cljs.core.cons.call(null,calculator.calculator.row.call(null,button_row),calculator$calculator$calculator_$_iter__16105.call(null,cljs.core.rest.call(null,s__16106__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,calculator.calculator.button_rows);
})())], null);
});
calculator.calculator.calculator_container = (function calculator$calculator$calculator_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"calculator-wrapper"], null),calculator.calculator.calculator.call(null)], null);
});

//# sourceMappingURL=calculator.js.map
