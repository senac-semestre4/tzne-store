import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss']
})
export class BannerHomeComponent{
  slideIndex;
  slideWrap;
  slideInterval;
  slidePause;
  slideNoTransition;
  extraSlides;
  constructor() {
    this.slideIndex = 1;
    this.slideWrap = true;
    this.slideInterval = 5000;
    this.slidePause = "hover";
    this.slideNoTransition = false;
    this.extraSlides = false;
  }
  onIndexFieldChange(event) {
    this.slideIndex = event.target.value;
  }
  onIndexChange(newValue) {
    this.slideIndex = newValue;
  }
  onIntervalFieldChange(event) {
    this.slideInterval = event.target.value;
  }
  onWrapCheckboxChange(event) {
    this.slideWrap = event.target.checked;
  }
  onPauseCheckboxChange(event) {
    this.slidePause = event.target.checked ? "hover": "";
  }
  onAnimationCheckboxChange(event) {
    this.slideNoTransition = !event.target.checked;
  }
  onExtraCheckboxChange(event) {
    this.extraSlides = event.target.checked;
  }
  onSlideStart() {
    //console.log("Start sliding");
  }
  onSlideEnd() {
    //console.log("End sliding");
  }
}
