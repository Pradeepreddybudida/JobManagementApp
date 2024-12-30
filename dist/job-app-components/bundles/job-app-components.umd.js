(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('job-app-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['job-app-components'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var JobAppComponentsService = /** @class */ (function () {
        function JobAppComponentsService() {
        }
        JobAppComponentsService.ɵfac = function JobAppComponentsService_Factory(t) { return new (t || JobAppComponentsService)(); };
        JobAppComponentsService.ɵprov = core.ɵɵdefineInjectable({ token: JobAppComponentsService, factory: JobAppComponentsService.ɵfac, providedIn: 'root' });
        return JobAppComponentsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(JobAppComponentsService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var JobAppComponentsComponent = /** @class */ (function () {
        function JobAppComponentsComponent() {
        }
        JobAppComponentsComponent.prototype.ngOnInit = function () {
        };
        JobAppComponentsComponent.ɵfac = function JobAppComponentsComponent_Factory(t) { return new (t || JobAppComponentsComponent)(); };
        JobAppComponentsComponent.ɵcmp = core.ɵɵdefineComponent({ type: JobAppComponentsComponent, selectors: [["lib-JobAppComponents"]], decls: 2, vars: 0, template: function JobAppComponentsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " job-app-components works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return JobAppComponentsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(JobAppComponentsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-JobAppComponents',
                    template: "\n    <p>\n      job-app-components works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var JobAppComponentsModule = /** @class */ (function () {
        function JobAppComponentsModule() {
        }
        JobAppComponentsModule.ɵmod = core.ɵɵdefineNgModule({ type: JobAppComponentsModule });
        JobAppComponentsModule.ɵinj = core.ɵɵdefineInjector({ factory: function JobAppComponentsModule_Factory(t) { return new (t || JobAppComponentsModule)(); }, imports: [[]] });
        return JobAppComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(JobAppComponentsModule, { declarations: [JobAppComponentsComponent], exports: [JobAppComponentsComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(JobAppComponentsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [JobAppComponentsComponent],
                    imports: [],
                    exports: [JobAppComponentsComponent]
                }]
        }], null, null); })();

    exports.JobAppComponentsComponent = JobAppComponentsComponent;
    exports.JobAppComponentsModule = JobAppComponentsModule;
    exports.JobAppComponentsService = JobAppComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=job-app-components.umd.js.map
