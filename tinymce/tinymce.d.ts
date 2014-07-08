declare module tinymce {
    export interface AddOnManager { } // Todo: No docs ...

    export interface Theme {
        renderUI(obj: Object): Object; // Todo: Param + return-type may be specified more detailled
    }

    export interface Plugin {
        // Todo: Docs say this is a pseudo-class ..
    }

    export interface Event {
        type: string;
        isDefaultPrevented(): boolean;
        isImmediatePropagationStopped(): boolean;
        isPropagationStopped(): boolean;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation():  void;
    }

    export interface ContentEvent extends Event {
        content: string;
        element: DOMElement;
        format: string;
        get: boolean;
        load: boolean;
        save: boolean;
        set: boolean;
    }

    export interface CommandEvent extends Event {
        command: string;
        ui: boolean;
        value: any; // Todo: Correct? Docs say "Object"
    }

    export interface ProgressStateEvent extends Event {
        state: boolean;
        time: number;
    }

    export interface FocusEvent extends Event {
        blurredEditor: Editor;
        focusedEditor: Editor;
    }

    export interface ResizeEvent extends Event {
        height: Number;
        target: DOMElement;
        width: Number;
    }

    export interface Editor {
        $: dom.DomQuery;
        baseURI: util.URI;
        contentCSS: string[];
        contentStyles: string[];
        documentBaseURI: util.URI;
        dom: dom.DOMUtils;
        formatter: Formatter;
        id: string;
        initialized: boolean;
        isNotDirty: boolean;
        parser: html.DomParser;
        plugins: Object;
        schema: html.Schema;
        selection: dom.Selection;
        serializer: dom.Serializer;
        settings: Object;
        theme: Theme;
        undoManager: UndoManager;
        windowManager: WindowManager;

        // Todo: Events

        constructor(id: string, settings: Object, editorManager: EditorManager);
        addButton(name: string, settings: Object): void; // Todo: Specify settings structure
        addCommand(name: string, callback: () => {}, scope?: Object): void; // Todo: Callback type
        addMenuItem(name: string, settings: Object): void; // Todo: Specify settings structre
        addQueryStateHandler(name: string, callback: () => {}, scope?: Object): void; // Todo: Callback type
        addQueryValueHandler(name: string, callback: () => {}, scope?: Object): void; // Todo: Callback type
        addShortcut(pattern: string, desc: string, cmdFunc: string, sc?: Object): void;
        addShortcut(pattern: string, desc: string, cmdFunc: () => {}, sc?: Object): void; // Todo: Callback parameters?
        addVisual(elm?: Element): void;
        convertURL(url: string, name: string, elm: string): string;
        convertURL(url: string, name: string, elm: HTMLElement): string;
        destroy(automatic?: boolean): void;
        execCallback(name: string): any;
        execCommand(cmd: string, ui: boolean, value?: any, a?: Object): void;
        fire(); // Todo: No docs ...
        focus(skip_focus: boolean): void;
        getBody(): Element;
        getContainer(): Element;
        getContent(args?: Object): string; // Todo: Specify args structure
        getContentAreaContainer(): Element;
        getDoc(): Document;
        getElement(): Element;
        getLang(name: string, defaultVal?: string): void; // Todo: Return type must be wrong
        getParam(name: string, defaultVal?: string, type?: string): string;
        getWin(): Window;
        hasEventListeners(); // Todo: no docs ...
        hide(): void;
        init(): void;
        insertContent(content: string, args?: Object): void;
        isDirty(): boolean;
        isHidden(): boolean;
        load(args?: any): string; // Todo: Any correct or Object?
        nodeChanged(args?: any): void; // Todo: Any correct or Object?
        off(name: string, callback: () => {}): Object; // Todo: Callback param correct?
        on(name: string, callback: () => {}, first?: boolean): Object;
        once(name: string, callback: () => {}): Object; // Todo: Callback param correct?
        queryCommandState(cmd: string): boolean;
        queryCommandValue(cmd: string): any; // Todo: Return type correct?
        remove(): void;
        render(): void;
        save(args: any): string; // Todo: Any correct?
        setContent(content: string, args?: any): string;
        setProgressState(state: boolean, time?: number): boolean;
        show(): void;
        translate(text: string): string;
    }

    export interface EditorCommands {
        addCommands(command_list: Object, type?: string): void;
        addCommands(command_list: string, type?: string): void;
        execCommand(command: string, ui?: boolean, value?: Object): boolean;
        queryCommandState(command: string): any; // Todo: Returns Boolean/Number
        queryCommandValue(command: string): any; // Todo: Returns Object/False
    }

    export interface EditorManager { } // Todo: Static stuff

    export interface Env { } // Todo: Static stuff

    export interface FocusManager {
        constructor(editorManager: EditorManager);
        isEditorUIElement(elm: Element): boolean;
    }

    export interface Formatter {
        constructor(ed: Editor);
        apply(name: string, vars?: Object, node?: Node): void;
        canApply(name: string): boolean;
        formatChanged(formats: string, callback: (state: any, args: Object) => {}, similar: boolean): void; // Todo: Correct?
        get(name: string): any;
        getCssText(name: string): string;
        getCssText(format: Object): string;
        match(name: string, vars?: Object, node?: Node): boolean;
        matchAll(names: string[], vars?: Object): Object[];
        matchNode(node: Node, name: string, vars?: Object, similar?: boolean): Object;
        register(name: string, format: Object): void; // Todo: Correct?
        register(name: string, format: Object[]): void; // Todo: Correct?
        register(format: Object): void;
        remove(name: string, vars?: Object, node?: Node): void; // Todo: Correct?
        remove(name: string, vars?: Object, node?: Range): void; // Todo: Correct?
        toggle(name: string, vars?: Object, node?: Node): void;
    }

    export interface UndoManager {
        add(level?: Object, event?: Event); // Todo: Should be DOMEvent according to docs.
        beforeChange(): void;
        clear(): void;
        hasRedo(): boolean;
        hasUndo(): boolean;
        redo(): Object;
        transact(callback: () => {}): void; // Todo: Params for callback?
        undo(): Object;
    }

    export interface WindowManager {
        alert(message: string, callback?: () => void, scope?: Object);
        close(): void;
        confirm(messageText: string, callback: (s: boolean) => void, scope?: Object): void;
        getParams(): Object;
        getWindows(): void; // Todo: Return-type
        open(args: Object): void; // Todo: Option type?
    }

    export module dom {
        export interface BookmarkManager {
            constructor(selection: Selection);
            getBookmark(type?: number, normalized?: boolean): Object; // Todo: Specify bookmark object?
            isBookmarkNode(); // Todo: No docs ...
            moveToBookmark(bookmark: Object): boolean; // Todo: Specify bookmark object?
        }

        export interface ControlSelection {} // Todo: No docs ...

        export interface DomQuery {
            context: any; // Todo: No docs ...
            length: any; // Todo: No docs ...
            selector: any; // Todo: No docs ...

            // Todo: Static stuff

            add(items: Node[]): DomQuery;
            add(items: DomQuery): DomQuery;
            addClass(className: string): DomQuery;
            after(content: string): DomQuery;
            after(content: Element): DomQuery;
            after(content: Node[]): DomQuery;
            after(content: DomQuery): DomQuery;
            append(content: string): DomQuery;
            append(content: Element): DomQuery;
            append(content: Node[]): DomQuery;
            append(content: DomQuery): DomQuery;
            appendTo(val: string): DomQuery;
            appendTo(val: Element): DomQuery;
            appendTo(val: Node[]): DomQuery;
            appendTo(val: DomQuery): DomQuery;
            attr(name: string): string;
            attr(name: Object): string;
            attr(name: string, value: string): DomQuery;
            attr(name: Object, value: string): DomQuery;

            // Todo: more jQuery-like stuff ...
        }

        export interface DOMUtils {}

        export interface EventUtils {
            bind(target: Object, names: string, callback: () => {}, scope: Object): () => {}; // Todo: Specify callback signature
            clean(target: Object): EventUtils;
            fire(target: Object, name: string, args?: any): EventUtils;
            unbind(target: Object, names?: string, callback?: () => {}): EventUtils;
        }

        export interface ScriptLoader {
            add(url: string, callback?: () => {}, scope?: Object): void;
            isDone(url: string): boolean;
            load(url: string, callback?: () => {}, scope?: Object): void;
            loadQueue(callback?: () => {}, scope?: Object): void;
            loadScripts(scripts: any[], callback?: () => {}, scope?: Object): void; // Todo: First paramter type?
            markDone(u: string): void;
        }

        export interface Selection {}

        export interface Serializer {
            constructor(settings: Object, editor: Editor);
            addAttributeFilter(callback: () => {}): void;
            addNodeFilter(callback: () => {}): void;
            addRules(rules: string): void;
            serialize(node: DOMNode, args: any): void;
            setRules(rules: string): void;
        }

        export interface TreeWalker {
            current(): Node;
            next(): Node;
            prev(): Node;
        }

        export interface TridentSelection {} // Todo: No docs ...
    }

    export module html {
        export interface DomParser {
            constructor(settings: Object, schema: Schema);
            addAttributeFilter(callback: () => {}): void;
            addNodeFilter(callback: () => {}): void;
            filterNode(Node: Node): Node;
            parse(html: string, args?: any): Node;
        }

        export interface Entities {}
        export interface Node {}
        export interface SaxParser {}
        export interface Schema {}
        export interface Serializer {}
        export interface Styles {}
        export interface Writer {}
    }

    export module ui {
        export interface AbsoluteLayout {}
        export interface Button {}
        export interface ButtonGroup {}
        export interface Checkbox {}
        export interface Collection {}
        export interface ColorBox {}
        export interface ColorButton {}
        export interface ColorPicker {}
        export interface ComboBox {}
        export interface Container {}
        export interface Control {}
        export interface DragHelper {}
        export interface ElementPath {}
        export interface Factory {}
        export interface FieldSet {}
        export interface FilePicker {}
        export interface FitLayout {}
        export interface FlexLayout {}
        export interface FloatPanel {}
        export interface FlowLayout {}
        export interface Form {}
        export interface FormatControls {}
        export interface FormItem {}
        export interface GridLayout {}
        export interface Iframe {}
        export interface KeyboardNavigation {}
        export interface Label {}
        export interface Layout {}
        export interface ListBox {}
        export interface Menu {}
        export interface MenuBar {}
        export interface MenuButton {}
        export interface MenuItem {}
        export interface MessageBox {}
        export interface Panel {}
        export interface PanelButton {}
        export interface Path {}
        export interface Radio {}
        export interface ResizeHandle {}
        export interface Selector {}
        export interface Spacer {}
        export interface SplitButton {}
        export interface StackLayout {}
        export interface TabPanel {}
        export interface TextBox {}
        export interface Throbber {}
        export interface Toolbar {}
        export interface ToolTip {}
        export interface Widget {}
        export interface Window {}
        export interface Movable {}
        export interface Resizable {}
        export interface Scrollable {}
    }
}