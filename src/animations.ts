import { trigger, transition,state,animate, style } from '@angular/animations';

export let fade = trigger('fade',[
    state('off', style({opacity:0})),

    transition('off=>on, :leave',[animate(2000)])
])