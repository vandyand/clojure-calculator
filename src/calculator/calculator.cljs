(ns calculator.calculator
  (:require [clojure.string :as string]
            [reagent.core :as reagent]        ))

(def staging-operator "")
(def staging-number "")
(def current-number "")
(def display "0")
(def state 0)
(defn is-number? [arg] (string/includes? "1234567890." arg))
(defn is-operator? [arg] (string/includes? "+-x/^" arg))
(defn is-plus-minus? [arg] (= "+/-" arg))
(defn is-percent? [arg] (= "%" arg))
(defn is-special-operator? [arg] (or (is-plus-minus? arg) (is-percent? arg)))
(defn is-equals? [arg] (= "=" arg))
(defn is-clear? [arg] (= "C" arg))
(defn is-double-period? [arg] (and (= arg ".") (string/includes? staging-number ".")))

(def button-rows '(("C" "%" "^" "/") ("7" "8" "9" "x") ("4" "5" "6" "-") ("1" "2" "3" "+") ("+/-" "0" "." "=")))

(defn log-stuff [key] (js/console.log "key:" key "state:" state "display:" display "staging-operator:" staging-operator 
                                     "staging-number:" staging-number "current-number:" current-number))

(defn calculate 
  [staging-operator staging-number current-number]
  (cond
    (= staging-operator "+") (js/String (+ (js/Number current-number) (js/Number staging-number)))
    (= staging-operator "-") (js/String (- (js/Number current-number) (js/Number staging-number)))
    (= staging-operator "x") (js/String (* (js/Number current-number) (js/Number staging-number)))
    (= staging-operator "/") (js/String (/ (js/Number current-number) (js/Number staging-number)))
    (= staging-operator "^") (js/String (js/Math.pow (js/Number current-number) (js/Number staging-number)))))

(defn transition-equations
  [key]
  (let [temp-state state]
    (cond
      (is-clear? key) (set! state 0)
      (and (= state 0) (is-number? key)) (set! state 1)
      (and (= state 1) (is-operator? key)) (set! state 2)
      (and (= state 1) (is-special-operator? key)) (set! state 5)
      (and (= state 2) (is-number? key)) (set! state 3)
      (and (= state 3) (is-operator? key)) (set! state 4)
      (and (= state 3) (is-equals? key)) (set! state 5)
      (and (= state 4) (is-number? key)) (set! state 3)
      (and (= state 5) (is-equals? key)) (set! state 5)
      (and (= state 5) (is-number? key)) (set! state 1)
      (and (= state 5) (is-operator? key)) (set! state 2))
    (not= temp-state state)))

(defn state-equations
  [key transitioned?]
  (cond
    (= state 0) (set! display "0")
    (and (= state 1) (is-number? key)) (do (set! current-number
                                              (cond
                                                transitioned? key
                                                (is-double-period? key) current-number
                                                :else (str current-number key)))
                                        (set! display current-number))
    (and (= state 2) (is-operator? key)) (set! staging-operator key)
    (and (= state 3) (is-number? key)) (do (set! staging-number
                                              (cond
                                                transitioned? key
                                                (is-double-period? key) staging-number
                                                :else (str staging-number key)))
                                        (set! display staging-number))
    (and (= state 4) (is-operator? key) transitioned?) (do (set! current-number (calculate staging-operator staging-number current-number))
                                                        (set! display current-number)
                                                        (set! staging-operator key))
    (and (= state 5) (or (is-equals? key) (is-special-operator? key))) (do
                                                                        (if (is-plus-minus? key)
                                                                           (do (set! staging-number "-1")
                                                                           (set! staging-operator "x")))
                                                                        (if (is-percent? key)
                                                                          (do (set! staging-number "100")
                                                                           (set! staging-operator "/")))
                                                                        (set! current-number (calculate staging-operator staging-number current-number))
                                                                        (set! display current-number))))

(def force-updater (reagent/atom 0))

(defn handle-click [key] (state-equations key (transition-equations key)) (log-stuff key) (swap! force-updater inc))

(defn button [body] [:div {:class "calculator-button" :on-click (fn [e] (handle-click e.target.innerText))} body])

(defn row [buttons-text] [:div {:class "calculator-row"} (for [button-text buttons-text] (button button-text))])

(defn display-bar [display] @force-updater [:div {:class "calculator-display-bar"} display])

(defn calculator [] [:div {:class "calculator-base"} (cons (display-bar display) (for [button-row button-rows] (row button-row)))])

(defn calculator-container [] [:div {:class "calculator-wrapper"} (calculator)])
