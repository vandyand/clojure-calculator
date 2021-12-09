(ns calculator.calculator)

(def button-rows '(("C" "%" "^" "/") ("7" "8" "9" "x") ("4" "5" "6" "-") ("1" "2" "3" "+") ("+/-" "0" "." "=")))

(defn button [body] [:div {:class "calculator-button"} body])

(defn row [buttons-text] [:div {:class "calculator-row"} (for [button-text buttons-text] (button button-text))])

(defn display-bar [] [:div {:class "calculator-display-bar"}])

(defn calculator [] [:div {:class "calculator-base"} (cons (display-bar) (for [button-row button-rows] (row button-row)))])

(defn calculator-container [] [:div {:class "calculator-wrapper"} (calculator)])
