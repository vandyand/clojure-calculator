(ns calculator.core
  (:require [react :as react]
            [react-dom]
            [reagent.dom :as dom]
            [calculator.calculator]))

(defn app [] [calculator.calculator/calculator-container])

(defn render-app [] (dom/render [app] (js/document.getElementById "app")))

(render-app)
