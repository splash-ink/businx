import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('Table Widget', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  const columns = ['A', 'B', 'C', 'D'];
  const tableConfig = {
    collection: '',
    columns: columns,
    dataset: [],
    title: 'Testing'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should abbreviate the name in two', () => {
    const abbrName = component.abbreviateName('Joe Eames');

    expect(abbrName).toEqual('JE');
  });

  it('should have the corrects columns', () => {

    component.config = tableConfig;

    expect(component.config.columns).toEqual(columns);
  });

  it('should have item search input', () => {
    expect(fixture.nativeElement.querySelector('input')).toBeTruthy();    
  });

  it('should render the apropriate card title', () => {
    component.config = tableConfig;

    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h6');

    expect(el.textContent).toContain(tableConfig.title);
  });

  it('should notify when the table is empty', () => {
    component.config = tableConfig;

    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('#emptyTbl');

    expect(el.textContent).toContain(`Sem ${tableConfig.title.toLowerCase()} a mostrar, tabela vazia.`);
  });

  it('should fill the table with right items', () => {
    component.config = tableConfig;

    component.config.dataset = [
      {
        a: 'A is a field value',
        b: 'B is a field value',
        c: 'C is a field value',
        d: 'D is a field value'
      }
    ]

    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('td');

    expect(el.textContent).toContain(component.config.dataset[0]['a']);
  });

});
