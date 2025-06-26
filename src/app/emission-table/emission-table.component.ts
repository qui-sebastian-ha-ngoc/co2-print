import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

export interface EmissionData {
  land: string;
  unternehmen: string;
  emissionen: number;
}

const DUMMY_DATA: EmissionData[] = [
  { land: 'Deutschland', unternehmen: 'Firma A', emissionen: 120 },
  { land: 'USA', unternehmen: 'Company B', emissionen: 300 },
  { land: 'China', unternehmen: 'Konzern C', emissionen: 450 },
  { land: 'Indien', unternehmen: 'Startup D', emissionen: 90 },
  { land: 'Brasilien', unternehmen: 'Firma E', emissionen: 210 },
  { land: 'Kanada', unternehmen: 'Company F', emissionen: 180 },
  { land: 'Deutschland', unternehmen: 'Firma G', emissionen: 75 },
  { land: 'USA', unternehmen: 'Company H', emissionen: 270 },
  { land: 'China', unternehmen: 'Konzern I', emissionen: 510 },
];

@Component({
  selector: 'app-emission-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
  ],
  templateUrl: './emission-table.component.html',
  styleUrls: ['./emission-table.component.scss'],
})
export class EmissionTableComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  displayedColumns: string[] = ['land', 'unternehmen', 'emissionen'];
  dataSource = new MatTableDataSource(DUMMY_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.cdr.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
