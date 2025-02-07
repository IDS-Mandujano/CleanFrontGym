import { Component, OnInit } from '@angular/core';
import { GetAllEquipmentUseCase } from '../../../../core/use-cases/Equipment/get-all-equipment';
import { Equipment } from '../../../../core/models/equipment';
import { DeleteEquipmentUseCase } from '../../../../core/use-cases/Equipment/delete-equipment';
import { UpdateEquipmentUseCase } from '../../../../core/use-cases/Equipment/update-equipment';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})

export class EquipmentListComponent implements OnInit {
  equipmentList: Equipment[] = [];
  selectedEquipment: Equipment | null = null;
  isModalOpen: boolean = false;

  constructor(
    private getAllEquipmentUseCase: GetAllEquipmentUseCase,
    private updateEquipmentUseCase: UpdateEquipmentUseCase,
    private deleteEquipmentUseCase: DeleteEquipmentUseCase
  ) {}

  ngOnInit() {
    this.loadEquipment();
  }

  loadEquipment() {
    this.getAllEquipmentUseCase.execute().subscribe({
      next: (equipments) => {
        console.log('Equipos obtenidos:', equipments);
        this.equipmentList = equipments;
      },
      error: (err) => console.error('Error al obtener equipos:', err)
    });
  }

  deleteEquipment(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este equipo?')) {
      this.deleteEquipmentUseCase.execute(id).subscribe({
        next: () => {
          this.loadEquipment();
          console.log('Equipo eliminado');
        },
        error: (err) => console.error('Error al eliminar el equipo:', err)
      });
    }
  }
}