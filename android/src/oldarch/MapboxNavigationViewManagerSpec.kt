package com.mapboxnavigation

import android.view.View
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import org.intellij.lang.annotations.Language

abstract class MapboxNavigationViewManagerSpec<T : View> : SimpleViewManager<T>() {
  abstract fun setStartOrigin(view: T?, value: ReadableArray?)
  abstract fun setDestination(view: T?, value: ReadableArray?)
  abstract fun setWaypoints(view: T?, value: ReadableArray?)
  abstract fun setDirectionUnit(view: T?, value: String?)
  abstract fun setLocal(view: T?, language: String?)
  abstract fun setMute(view: T?, value: Boolean)
  abstract fun setShowCancelButton(view: T?, value: Boolean)
  abstract fun setVehicleHeight(view: T?, value: Double)
  abstract fun setVehicleWeight(view: T?, value: Double)
  abstract fun setVehicleWidth(view: T?, value: Double)
  abstract fun setVehicleLength(view: T?, value: Double)
}
