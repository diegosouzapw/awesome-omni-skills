---
name: angular-migration-v2
description: "Angular Migration workflow skill. Use this skill when the user needs Master AngularJS to Angular migration, including hybrid apps, component conversion, dependency injection changes, and routing migration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["angular-migration-v2", "angular-migration", "master", "angularjs", "angular", "migration", "including", "hybrid"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Angular Migration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/angular-migration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Angular Migration Master AngularJS to Angular migration, including hybrid apps, component conversion, dependency injection changes, and routing migration.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Migration Strategies, Component Migration, Service Migration, Dependency Injection Changes, Routing Migration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Migrating AngularJS (1.x) applications to Angular (2+)
- Running hybrid AngularJS/Angular applications
- Converting directives to components
- Modernizing dependency injection
- Migrating routing systems
- Updating to latest Angular versions

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Assess the AngularJS codebase, dependencies, and migration risks.
2. Choose a migration strategy (hybrid vs rewrite) and define milestones.
3. Set up ngUpgrade and migrate modules, components, and routing.
4. Validate with tests and plan a safe cutover.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

1. Assess the AngularJS codebase, dependencies, and migration risks.
2. Choose a migration strategy (hybrid vs rewrite) and define milestones.
3. Set up ngUpgrade and migrate modules, components, and routing.
4. Validate with tests and plan a safe cutover.

#### Imported: Hybrid App Setup

```typescript
// main.ts - Bootstrap hybrid app
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule);
    // Bootstrap AngularJS
    upgrade.bootstrap(document.body, ['myAngularJSApp'], { strictDi: true });
  });
```

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // Bootstrapped manually in main.ts
  }
}
```

#### Imported: Safety

- Avoid big-bang cutovers without rollback and staging validation.
- Keep hybrid compatibility testing during incremental migration.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @angular-migration-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @angular-migration-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @angular-migration-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @angular-migration-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start with Services: Migrate services first (easier)
- Incremental Approach: Feature-by-feature migration
- Test Continuously: Test at every step
- Use TypeScript: Migrate to TypeScript early
- Follow Style Guide: Angular style guide from day 1
- Optimize Later: Get it working, then optimize
- Document: Keep migration notes

### Imported Operating Notes

#### Imported: Best Practices

1. **Start with Services**: Migrate services first (easier)
2. **Incremental Approach**: Feature-by-feature migration
3. **Test Continuously**: Test at every step
4. **Use TypeScript**: Migrate to TypeScript early
5. **Follow Style Guide**: Angular style guide from day 1
6. **Optimize Later**: Get it working, then optimize
7. **Document**: Keep migration notes

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/angular-migration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aegisops-ai-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-evaluation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-framework-azure-ai-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Resources

- **references/hybrid-mode.md**: Hybrid app patterns
- **references/component-migration.md**: Component conversion guide
- **references/dependency-injection.md**: DI migration strategies
- **references/routing.md**: Routing migration
- **assets/hybrid-bootstrap.ts**: Hybrid app template
- **assets/migration-timeline.md**: Project planning
- **scripts/analyze-angular-app.sh**: App analysis script

#### Imported: Migration Strategies

### 1. Big Bang (Complete Rewrite)
- Rewrite entire app in Angular
- Parallel development
- Switch over at once
- **Best for:** Small apps, green field projects

### 2. Incremental (Hybrid Approach)
- Run AngularJS and Angular side-by-side
- Migrate feature by feature
- ngUpgrade for interop
- **Best for:** Large apps, continuous delivery

### 3. Vertical Slice
- Migrate one feature completely
- New features in Angular, maintain old in AngularJS
- Gradually replace
- **Best for:** Medium apps, distinct features

#### Imported: Component Migration

### AngularJS Controller → Angular Component
```javascript
// Before: AngularJS controller
angular.module('myApp').controller('UserController', function($scope, UserService) {
  $scope.user = {};

  $scope.loadUser = function(id) {
    UserService.getUser(id).then(function(user) {
      $scope.user = user;
    });
  };

  $scope.saveUser = function() {
    UserService.saveUser($scope.user);
  };
});
```

```typescript
// After: Angular component
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h2>{{ user.name }}</h2>
      <button (click)="saveUser()">Save</button>
    </div>
  `
})
export class UserComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser(1);
  }

  loadUser(id: number) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  saveUser() {
    this.userService.saveUser(this.user);
  }
}
```

### AngularJS Directive → Angular Component
```javascript
// Before: AngularJS directive
angular.module('myApp').directive('userCard', function() {
  return {
    restrict: 'E',
    scope: {
      user: '=',
      onDelete: '&'
    },
    template: `
      <div class="card">
        <h3>{{ user.name }}</h3>
        <button ng-click="onDelete()">Delete</button>
      </div>
    `
  };
});
```

```typescript
// After: Angular component
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <div class="card">
      <h3>{{ user.name }}</h3>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `
})
export class UserCardComponent {
  @Input() user: any;
  @Output() delete = new EventEmitter<void>();
}

// Usage: <app-user-card [user]="user" (delete)="handleDelete()"></app-user-card>
```

#### Imported: Service Migration

```javascript
// Before: AngularJS service
angular.module('myApp').factory('UserService', function($http) {
  return {
    getUser: function(id) {
      return $http.get('/api/users/' + id);
    },
    saveUser: function(user) {
      return $http.post('/api/users', user);
    }
  };
});
```

```typescript
// After: Angular service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
    return this.http.get(`/api/users/${id}`);
  }

  saveUser(user: any): Observable<any> {
    return this.http.post('/api/users', user);
  }
}
```

#### Imported: Dependency Injection Changes

### Downgrading Angular → AngularJS
```typescript
// Angular service
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NewService {
  getData() {
    return 'data from Angular';
  }
}

// Make available to AngularJS
import { downgradeInjectable } from '@angular/upgrade/static';

angular.module('myApp')
  .factory('newService', downgradeInjectable(NewService));

// Use in AngularJS
angular.module('myApp').controller('OldController', function(newService) {
  console.log(newService.getData());
});
```

### Upgrading AngularJS → Angular
```typescript
// AngularJS service
angular.module('myApp').factory('oldService', function() {
  return {
    getData: function() {
      return 'data from AngularJS';
    }
  };
});

// Make available to Angular
import { InjectionToken } from '@angular/core';

export const OLD_SERVICE = new InjectionToken<any>('oldService');

@NgModule({
  providers: [
    {
      provide: OLD_SERVICE,
      useFactory: (i: any) => i.get('oldService'),
      deps: ['$injector']
    }
  ]
})

// Use in Angular
@Component({...})
export class NewComponent {
  constructor(@Inject(OLD_SERVICE) private oldService: any) {
    console.log(this.oldService.getData());
  }
}
```

#### Imported: Routing Migration

```javascript
// Before: AngularJS routing
angular.module('myApp').config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      template: '<user-list></user-list>'
    })
    .when('/users/:id', {
      template: '<user-detail></user-detail>'
    });
});
```

```typescript
// After: Angular routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

#### Imported: Forms Migration

```html
<!-- Before: AngularJS -->
<form name="userForm" ng-submit="saveUser()">
  <input type="text" ng-model="user.name" required>
  <input type="email" ng-model="user.email" required>
  <button ng-disabled="userForm.$invalid">Save</button>
</form>
```

```typescript
// After: Angular (Template-driven)
@Component({
  template: `
    <form #userForm="ngForm" (ngSubmit)="saveUser()">
      <input type="text" [(ngModel)]="user.name" name="name" required>
      <input type="email" [(ngModel)]="user.email" name="email" required>
      <button [disabled]="userForm.invalid">Save</button>
    </form>
  `
})

// Or Reactive Forms (preferred)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="userForm" (ngSubmit)="saveUser()">
      <input formControlName="name">
      <input formControlName="email">
      <button [disabled]="userForm.invalid">Save</button>
    </form>
  `
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  saveUser() {
    console.log(this.userForm.value);
  }
}
```

#### Imported: Migration Timeline

```
Phase 1: Setup (1-2 weeks)
- Install Angular CLI
- Set up hybrid app
- Configure build tools
- Set up testing

Phase 2: Infrastructure (2-4 weeks)
- Migrate services
- Migrate utilities
- Set up routing
- Migrate shared components

Phase 3: Feature Migration (varies)
- Migrate feature by feature
- Test thoroughly
- Deploy incrementally

Phase 4: Cleanup (1-2 weeks)
- Remove AngularJS code
- Remove ngUpgrade
- Optimize bundle
- Final testing
```

#### Imported: Common Pitfalls

- Not setting up hybrid app correctly
- Migrating UI before logic
- Ignoring change detection differences
- Not handling scope properly
- Mixing patterns (AngularJS + Angular)
- Inadequate testing

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
