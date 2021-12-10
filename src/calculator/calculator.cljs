(ns calculator.calculator
  (:require [clojure.string :as string]))

(def state {:staging-operator "" :staging-number "" :current-number "" :state 0 :display ""})
(defn is-number [arg] (string/includes? "1234567890." arg))
(defn is-operator [arg] (string/includes? "+-x/^" arg))
(defn is-special-operator [arg] (or (= "+/-" arg) (= "%" arg)))
(defn is-equals [arg] (= "=" arg))
(defn is-clear [arg] (= "C" arg))
;; (defn get-key-type
;;   [key]
;;   (cond
;;     (is-number key) "number"
;;     (is-operator key) "operator"
;;     (is-special-operator key) "special-operator"
;;     (is-equals key) "equals"
;;     (is-clear key) "clear"
;;     :else "none"))

(def button-rows '(("C" "%" "^" "/") ("7" "8" "9" "x") ("4" "5" "6" "-") ("1" "2" "3" "+") ("+/-" "0" "." "=")))

(defn transition-equations
  [key]
  (cond
    (is-clear key) 0
    (and (= state 0) (is-number key)) 1
    (and (= state 1) (is-operator key)) 2
    (and (= state 1) (is-special-operator key)) 5
    (and (= state 2) (is-number key)) 3
    (and (= state 3) (is-operator key)) 4
    (and (= state 3) (is-equals key)) 5
    (and (= state 4) (is-number key)) 3
    (and (= state 5) (is-equals key)) 5
    (and (= state 5) (is-number key)) 1
    (and (= state 5) (is-operator key)) 2))

(defn state-equations [key transitioned] (js/console.log key transitioned))

(defn key-pressed [key] (state-equations key (transition-equations key)))

(defn button [body] [:div {:class "calculator-button" :on-click (fn [e] (key-pressed e.target.innerText))} body])

(defn row [buttons-text] [:div {:class "calculator-row"} (for [button-text buttons-text] (button button-text))])

(defn display-bar [] [:div {:class "calculator-display-bar"}])

(defn calculator [] [:div {:class "calculator-base"} (cons (display-bar) (for [button-row button-rows] (row button-row)))])

(defn calculator-container [] [:div {:class "calculator-wrapper"} (calculator)])
