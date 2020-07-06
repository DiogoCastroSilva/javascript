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

class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsHandler, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsHandler;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn(type);
    }

    connectMoreInfoBtn() {}

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