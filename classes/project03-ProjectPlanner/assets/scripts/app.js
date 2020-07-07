class DOMHelper {
    static moveElement(id, destinationSelector) {
        const element = document.getElementById(id);
        const destinationElement = document.querySelector(destinationSelector);
        destinationElement.append(element);
    }

    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.host = document.getElementById(hostElementId);
        } else {
            this.host = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) {
            this.element.remove();
        }
    }

    attach() {
        this.host.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
    }
}

class Tooltip extends Component {
    constructor(closeHandler, text, hostElementId) {
        super(hostElementId);
        this.closeHandler = closeHandler;
        this.text = text;
        this.create();
    }

    close() {
        this.detach();
        this.closeHandler();
    }

    create() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = this.text;

        const hostElementPositionLeft = this.host.offsetLeft;
        const hostElementPositionTop = this.host.offsetTop;
        const hostElementHeight = this.host.clientHeight;
        const parentElementScrolling = this.host.parentElement.scrollTop;

        const x = hostElementPositionLeft + 20;
        const y = hostElementPositionTop + hostElementHeight - parentElementScrolling - 10;

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = x + 'px';
        tooltipElement.style.top = y + 'px';

        tooltipElement.addEventListener('click', this.close.bind(this));
        this.element = tooltipElement;
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectListsHandler, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsHandler;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }
        const projectItemElement = document.getElementById(this.id);
        const tooltipText = projectItemElement.dataset.extraInfo;
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        }, tooltipText, this.id);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoBtn() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
    }

    connectSwitchBtn(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(newUpdateProjectListsHandler, type) {
        this.updateProjectListsHandler = newUpdateProjectListsHandler;
        this.connectSwitchBtn(type);
    }
}

class ProjectCollection {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for(const items of projectItems) {
            this.projects.push(new ProjectItem(items.id, this.switchProject.bind(this), this.type));
        }
    }

    setSwitchHandler(switchHandler) {
        this.switchHandler = switchHandler;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(id) {
        this.switchHandler(this.projects.find(project => project.id === id));
        this.projects = this.projects.filter(project => project.id !== id);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectCollection('active');
        const finishedProjectList = new ProjectCollection('finished');
        activeProjectList.setSwitchHandler(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandler(activeProjectList.addProject.bind(activeProjectList));
    };
}

App.init();