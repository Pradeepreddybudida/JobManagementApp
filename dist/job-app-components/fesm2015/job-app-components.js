import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class JobAppComponentsService {
    constructor() { }
}
JobAppComponentsService.ɵfac = function JobAppComponentsService_Factory(t) { return new (t || JobAppComponentsService)(); };
JobAppComponentsService.ɵprov = ɵɵdefineInjectable({ token: JobAppComponentsService, factory: JobAppComponentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JobAppComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class JobAppComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
JobAppComponentsComponent.ɵfac = function JobAppComponentsComponent_Factory(t) { return new (t || JobAppComponentsComponent)(); };
JobAppComponentsComponent.ɵcmp = ɵɵdefineComponent({ type: JobAppComponentsComponent, selectors: [["lib-JobAppComponents"]], decls: 2, vars: 0, template: function JobAppComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " job-app-components works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JobAppComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-JobAppComponents',
                template: `
    <p>
      job-app-components works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class JobAppComponentsModule {
}
JobAppComponentsModule.ɵmod = ɵɵdefineNgModule({ type: JobAppComponentsModule });
JobAppComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function JobAppComponentsModule_Factory(t) { return new (t || JobAppComponentsModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(JobAppComponentsModule, { declarations: [JobAppComponentsComponent], exports: [JobAppComponentsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(JobAppComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [JobAppComponentsComponent],
                imports: [],
                exports: [JobAppComponentsComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of job-app-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { JobAppComponentsComponent, JobAppComponentsModule, JobAppComponentsService };
//# sourceMappingURL=job-app-components.js.map
