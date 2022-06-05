<template>
  <div>
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit1
    </button>

    <!-- Event Modifiers#
    It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. -->
    <!-- the click event's propagation will be stopped -->
    <a @click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a @click.stop.prevent="doThat"></a>

    <!-- just the modifier -->
    <form @submit.prevent></form>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div @click.self="doThat">...</div>
    <!-- 
        .stop
.prevent
.self
.capture
.once
.passive
        Same as JavaScripton options Optional
An object that specifies characteristics about the event listener. The available options are:

capture
A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. If not specified, defaults to false.

once
A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false.

passive
A boolean value that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. If not specified, defaults to false – except that in browsers other than Safari and Internet Explorer, defaults to true for the wheel, mousewheel, touchstart and touchmove events. See Improving scrolling performance with passive listeners to learn more.

signal
An AbortSignal. The listener will be removed when the given AbortSignal object's abort() method is called. If not specified, no AbortSignal is associated with the listener.
 -->
  </div>
</template>

methods: {
  warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
