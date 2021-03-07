import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  _dataChange = new BehaviorSubject<TreeData[]>(
    [{
      Id: 1,
      Name: 'Parent 1',
      Description: 'Father 1',
      Children: [
        {
          Id: 3,
          Name: 'Child 1',
          Description: 'Children 1',
          Children: []
        },
        {
          Id: 4,
          Name: 'Child 2',
          Description: 'Children 2',
          Children: [
            {
              Id: 5,
              Name: 'GrandChild 1',
              Description: 'GrandChildren 1',
              Children: []
            }
          ]
        }
      ]
    },
    {
      Id: 2,
      Name: 'Parent 2',
      Description: 'Father 2',
      Children: [
        {
          Id: 6,
          Name: 'Child 1',
          Description: 'Children 1',
          Children: []
        }
      ]
    }
  ]
  );


}
