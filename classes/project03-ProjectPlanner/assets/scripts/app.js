class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsHandler) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsHandler;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn();
    }

    connectMoreInfoBtn() {}

    connectSwitchBtn() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }
}

class ProjectCollection {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-project li`);
        for(const items of projectItems) {
            this.projects.push(new ProjectItem(items.id, this.switchHandler.bind(this)));
        }
    }

    setSwitchHandler(switchHandler) {
        this.switchHandler = switchHandler;
    }

    addProject() {}

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