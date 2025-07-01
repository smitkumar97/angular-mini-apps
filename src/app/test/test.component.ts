import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  rawData = [
    {
      name: 'Dog',
      checked: false,
      value: [
        {
          name: 'dogBreedA',
          checked: false,
          value: [
            { name: 'DogBreedA_SubBreed1', checked: false },
            { name: 'DogBreedA_SubBreed2', checked: false },
            { name: 'DogBreedA_SubBreed3', checked: false },
          ],
        },
        {
          name: 'dogBreedB',
          checked: false,
          value: [
            { name: 'DogBreedB_SubBreed1', checked: false },
            { name: 'DogBreedB_SubBreed2', checked: false },
            { name: 'DogBreedB_SubBreed3', checked: false },
          ],
        },
        {
          name: 'dogBreedC',
          checked: false,
          value: [
            { name: 'DogBreedC_SubBreed1', checked: false },
            { name: 'DogBreedC_SubBreed2', checked: false },
            { name: 'DogBreedC_SubBreed3', checked: false },
          ],
        },
      ],
    },
    {
      name: 'Cat',
      checked: false,
      value: [
        {
          name: 'CatBreedA',
          checked: false,
          value: [
            { name: 'CatBreedA_SubBreed1', checked: false },
            { name: 'CatBreedA_SubBreed2', checked: false },
            { name: 'CatBreedA_SubBreed3', checked: false },
          ],
        },
        {
          name: 'CatBreedB',
          checked: false,
          value: [
            { name: 'CatBreedB_SubBreed1', checked: false },
            { name: 'CatBreedB_SubBreed2', checked: false },
            { name: 'CatBreedB_SubBreed3', checked: false },
          ],
        },
        {
          name: 'CatBreedC',
          checked: false,
          value: [
            { name: 'CatBreedC_SubBreed1', checked: false },
            { name: 'CatBreedC_SubBreed2', checked: false },
            { name: 'CatBreedC_SubBreed3', checked: false },
          ],
        },
      ],
    },
  ];

  selectInnerCheckboxes(ob: any) {
    console.log(ob);
    ob.checked = !ob.checked;
    if (ob.value && ob.value.length > 0) {
      ob.value.forEach((first: any) => {
        first.checked = ob.checked;
        if (first.value && first.value.length > 0) {
          first.value.forEach((second: any) => {
            second.checked = ob.checked;
          });
        }
      });
    }
  }
}
