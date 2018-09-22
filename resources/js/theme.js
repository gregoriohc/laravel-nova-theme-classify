function load() {
  // Header
  observe('div.content div.h-header', function () {
    var header = new Eler('div.content div.h-header')
      .addClass('page-header');

    header.children('a')
      .addClass('site-title');

    header.children('input[dusk=global-search]')
      .parent().parent().parent()
      .addClass('global-search');

    header.children('a.dropdown-trigger')
      .addClass('user-name');

    header.children('div.dropdown-menu')
      .addClass('user-menu');
  });

  // Sidebar
  observe('div.w-sidebar', function () {
    var sidebar = new Eler('div.w-sidebar')
      .addClass('page-sidebar');

    sidebar.children('h3')
      .addClass('sidebar-header');

    sidebar.children('ul li')
      .addClass('sidebar-link');
  });

  // Content
  observe('div[data-testid=content]', function () {
    var content = new Eler('div.content div[data-testid=content]')
      .addClass('page-content');

    // Footer
    content.lastChild()
      .addClass('page-footer');

    // Resource index
    var resourceIndex = content.children('div[dusk$=index-component]')
      .addClass('resource-index');

    var indexActionsContainer = resourceIndex.children('div[dusk=filter-selector]')
      .parent()
      .addClass('index-actions-container');

    indexActionsContainer.children('select[dusk=action-select]').parent().addClass('action-select');
    indexActionsContainer.children('div[dusk=delete-menu]').addClass('delete-menu');

    var filtersMenu = indexActionsContainer.children('div.dropdown-menu div')
      .addClass('filters-menu');

    filtersMenu.each('h3', function(el) {
      el.addClass('filter-title');
    });

    filtersMenu.each('div div.p-3', function(el) {
      el.addClass('filter-options');
    });

    // Resource detail
    var resourceDetail = content.children('div[dusk$=detail-component]')
      .addClass('resource-detail');

    resourceDetail.children('a[dusk=edit-resource-button]')
      .parent()
      .addClass('details-actions-container');

    // Resource form
    var resourceForm = new Eler('button[dusk=update-button], button[dusk=create-button]')
      .closest('form')
      .addClass('resource-form');
    if (resourceForm.element && resourceForm.element.children) {
      for (var i = 0; i < resourceForm.element.children.length; i++) {
        if (i === 0) {
          new Eler(resourceForm.element.children[i]).addClass('form-errors')
        } else if (i === form.element.children.length - 1) {
          new Eler(resourceForm.element.children[i]).addClass('form-footer')
        } else {
          new Eler(resourceForm.element.children[i]).addClass('form-group')
        }
      }
    }

    // Resource edit
    new Eler('button[dusk=update-button]')
      .closest(['form', '.card'])
      .parent()
      .addClass('resource-edit');

    // Resource create
    new Eler('button[dusk=create-button]')
      .closest(['form', '.card'])
      .parent()
      .addClass('resource-create');

    // Cards
    var cardPanels = document.querySelectorAll('div.card-panel');
    cardPanels.forEach(function(cardPanel) {
      new Eler(cardPanel)
        .parent()
        .addClass('card-panel-container');
    });
  });
}

function Eler(el) {
  this.element = el;
  if (typeof this.element === 'string' || this.element instanceof String) {
    this.element = document.querySelector(this.element);
  }
  return this;
}

Eler.prototype.addClass = function(className) {
  if (this.element) {
    this.element.classList.add(className);
    //console.log('Class added: ' + className);
  }

  return this;
};

Eler.prototype.parent = function() {
  if (this.element && this.element.parentElement) {
    return new Eler(this.element.parentElement);
  }
  return new Eler(null);
};

Eler.prototype.children = function(selector) {
  if (this.element) {
    return new Eler(this.element.querySelector(selector));
  }
  return new Eler(null);
};

Eler.prototype.lastChild = function() {
  if (this.element && this.element.lastChild) {
    return new Eler(this.element.lastChild);
  }
  return new Eler(null);
};

Eler.prototype.closest = function(selectors) {
  if (typeof selectors === 'string' || selectors instanceof String) {
    selectors = [selectors];
  }

  var newElement = this.element;

  selectors.forEach(function(selector) {
    if (newElement) {
      newElement = newElement.closest(selector);
    }
  });

  return new Eler(newElement);
};

Eler.prototype.each = function(selector, callback) {
  if (this.element) {
    this.element.querySelectorAll(selector).forEach(function(el) {
      callback(new Eler(el));
    })
  }
  return this;
};

function observe(selector, callback) {
  new MutationObserver(callback).observe(document.querySelector(selector), {
    childList: true,
    subtree: true
  });
}

document.addEventListener("DOMContentLoaded", load, false);