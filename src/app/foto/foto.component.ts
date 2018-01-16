import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto',
    template: `<img src="{{ Url }}" [alt] = "titulo">`
})

export class FotoComponent {
   @Input() Url
   @Input() titulo
}