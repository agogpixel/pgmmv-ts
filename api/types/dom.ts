/* eslint-disable @typescript-eslint/no-explicit-any */
export type Document = object;

export type DOMHighResTimeStamp = number;

/** Provides information about files and allows JavaScript in a web page to access their content. */
export interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
}

export type FormDataEntryValue = File | string;

/** Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data". */
export interface FormData {
  append(name: string, value: string | Blob, fileName?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(name: string, value: string | Blob, fileName?: string): void;
  forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

export type BufferSource = ArrayBufferView | ArrayBuffer;

export interface EventListenerOptions {
  capture?: boolean;
}

export interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}

export type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

export interface EventListenerObject {
  handleEvent(object: Event): void;
}

export interface EventListener {
  (evt: Event): void;
}

/** EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them. */
export interface EventTarget {
  /**
   * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
   *
   * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
   *
   * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
   *
   * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
   *
   * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
   *
   * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
   *
   * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
   */
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ): void;
  /** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
  dispatchEvent(event: Event): boolean;
  /** Removes the event listener in target's event listener list with the same type, callback, and options. */
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void;
}

/** An event which takes place in the DOM. */
interface Event {
  /** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
  readonly bubbles: boolean;
  cancelBubble: boolean;
  /** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
  readonly cancelable: boolean;
  /** Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise. */
  readonly composed: boolean;
  /** Returns the object whose event listener's callback is currently being invoked. */
  readonly currentTarget: EventTarget | null;
  /** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
  readonly defaultPrevented: boolean;
  /** Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE. */
  readonly eventPhase: number;
  /** Returns true if event was dispatched by the user agent, and false otherwise. */
  readonly isTrusted: boolean;
  /** @deprecated */
  returnValue: boolean;
  /** @deprecated */
  readonly srcElement: EventTarget | null;
  /** Returns the object to which event is dispatched (its target). */
  readonly target: EventTarget | null;
  /** Returns the event's timestamp as the number of milliseconds measured relative to the time origin. */
  readonly timeStamp: DOMHighResTimeStamp;
  /** Returns the type of event, e.g. "click", "hashchange", or "submit". */
  readonly type: string;
  /** Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget. */
  composedPath(): EventTarget[];
  /** @deprecated */
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  /** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
  preventDefault(): void;
  /** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
  stopImmediatePropagation(): void;
  /** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
  stopPropagation(): void;
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
}

/** Events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>). */
export interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
  readonly lengthComputable: boolean;
  readonly loaded: number;
  readonly target: T | null;
  readonly total: number;
}

export interface XMLHttpRequestEventTargetEventMap {
  abort: ProgressEvent<XMLHttpRequestEventTarget>;
  error: ProgressEvent<XMLHttpRequestEventTarget>;
  load: ProgressEvent<XMLHttpRequestEventTarget>;
  loadend: ProgressEvent<XMLHttpRequestEventTarget>;
  loadstart: ProgressEvent<XMLHttpRequestEventTarget>;
  progress: ProgressEvent<XMLHttpRequestEventTarget>;
  timeout: ProgressEvent<XMLHttpRequestEventTarget>;
}

export interface XMLHttpRequestEventTarget extends EventTarget {
  onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
  addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
    type: K,
    listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
    type: K,
    listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

export type XMLHttpRequestResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';

export interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
  addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
    type: K,
    listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
    type: K,
    listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

export type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;

export interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
  readystatechange: Event;
}

/** Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
export interface XMLHttpRequest extends XMLHttpRequestEventTarget {
  onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
  /** Returns client's state. */
  readonly readyState: number;
  /** Returns the response body. */
  readonly response: any;
  /**
   * Returns response as text.
   *
   * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
   */
  readonly responseText: string;
  /**
   * Returns the response type.
   *
   * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
   *
   * When set: setting to "document" is ignored if current global object is not a Window object.
   *
   * When set: throws an "InvalidStateError" DOMException if state is loading or done.
   *
   * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
   */
  responseType: XMLHttpRequestResponseType;
  readonly responseURL: string;
  /**
   * Returns the response as document.
   *
   * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
   */
  readonly responseXML: Document | null;
  readonly status: number;
  readonly statusText: string;
  /**
   * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and this's synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
   *
   * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
   */
  timeout: number;
  /** Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server. */
  readonly upload: XMLHttpRequestUpload;
  /**
   * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.
   *
   * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
   */
  withCredentials: boolean;
  /** Cancels any network activity. */
  abort(): void;
  getAllResponseHeaders(): string;
  getResponseHeader(name: string): string | null;
  /**
   * Sets the request method, request URL, and synchronous flag.
   *
   * Throws a "SyntaxError" DOMException if either method is not a valid method or url cannot be parsed.
   *
   * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
   *
   * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
   */
  open(method: string, url: string | URL): void;
  open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
  /**
   * Acts as if the `Content-Type` header value for a response is mime. (It does not change the header.)
   *
   * Throws an "InvalidStateError" DOMException if state is loading or done.
   */
  overrideMimeType(mime: string): void;
  /**
   * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
   *
   * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
   */
  send(body?: Document | XMLHttpRequestBodyInit | null): void;
  /**
   * Combines a header in author request headers.
   *
   * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
   *
   * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
   */
  setRequestHeader(name: string, value: string): void;
  readonly DONE: number;
  readonly HEADERS_RECEIVED: number;
  readonly LOADING: number;
  readonly OPENED: number;
  readonly UNSENT: number;
  addEventListener<K extends keyof XMLHttpRequestEventMap>(
    type: K,
    listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof XMLHttpRequestEventMap>(
    type: K,
    listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
