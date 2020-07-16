import { Component } from './Component';


export class Tooltip extends Component {
    constructor(closeNotifierFunction, text, hostElementId) {
      super(hostElementId);
      this.closeNotifier = closeNotifierFunction;
      this.text = text;
      this.create();

      this.closeTooltip = () => {
        this.detach();
        this.closeNotifier();
      };
    }


    create() {
      const tooltipTemplate = document.getElementById('tooltip');
      const tooltipBody = document.importNode(tooltipTemplate.content, true);
      const tooltipElement = document.createElement('div');

      tooltipBody.querySelector('p').textContent = this.text;
      tooltipElement.className = 'card';
      tooltipElement.append(tooltipBody);
  
      const hostElPosLeft = this.hostElement.offsetLeft;
      const hostElPosTop = this.hostElement.offsetTop;
      const hostElHeight = this.hostElement.clientHeight;
      const parentElementScrolling = this.hostElement.parentElement.scrollTop;
  
      const x = hostElPosLeft + 20;
      const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;
  
      tooltipElement.style.position = 'absolute';
      tooltipElement.style.left = x + 'px'; // 500px
      tooltipElement.style.top = y + 'px';
  
      tooltipElement.addEventListener('click', this.closeTooltip);
      this.element = tooltipElement;
    }
  }